import {useEffect, useState} from 'react'
import {Link} from 'react-scroll'
import {FaChevronRight, FaRegStar} from "react-icons/fa"
import ProductInfo from '../components/ProductInfo'
import {useLocation} from "react-router-dom";
import {APIEndpoints} from '../config'
import '../styles/ProductInfos.css'
import ReviewForm from '../components/ReviewForm';
import {randomStar, starIcons, randomReviewNum} from '../HelperFunctions'
import DummyReview from '../components/DummyReview';
import CarouselImages from '../components/CarouselImages';

const ProductInfos = (props) => {
    const {shoppingCart, setShoppingCart} = props;
    const [submit, setSubmit] = useState(false);
    const [isEdited, setIsEdited] = useState(false);
    const [isSubmitReviewForm, setIsSubmitReviewForm] = useState(false);
    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(0);
    const [isReview, setIsReview] = useState(false);
    const [reviewInfo, setReviewInfo] = useState({
        reviewerName: '',
        reviewerEmail: '',
        stars: [
            {id:1, name: <FaRegStar/>}, 
            {id:2, name: <FaRegStar/>},
            {id:3, name: <FaRegStar/>} , 
            {id:4, name: <FaRegStar/>},
            {id:5, name: <FaRegStar/>}
        ],
        feedback:'',
        date: '',
    });

    const location = useLocation();
    const btnStyle = {fontSize: '1.5rem', marginLeft: '8px'}

    console.log('shopping cart', shoppingCart);
    // use effect for accessing data from location=======================
    useEffect(() => {
        if (location.state) {
            const { item } = location.state;
            setProduct(item);
        }
    }, [location]);

    // use effect for update quantity of product in basket================
    useEffect(() => {
        const updateBasketData = async () => {
            await fetch(`${APIEndpoints.basket}/${product.id}`, {
                method: 'PATCH',
                headers: {
                "Content-Type": "application/json"
                },
                body: JSON.stringify(product)
            })
        }
        if(isEdited){
            updateBasketData();
        }
        setIsEdited(false);
    }, [isEdited, product])

    // use effect for posting data to basket===============================
    useEffect(() => {
        const postBasketData = async () => {
            await fetch(APIEndpoints.basket, {
                method: 'POST',
                headers: {
                "Content-Type": "application/json"
                },
                body: JSON.stringify({...product, quantity: quantity})
            })
        }
        if(submit){
            postBasketData()
        }
        setSubmit(false);
        setQuantity(0);
    }, [submit, product])

    // add item to basket handler ========================================
    const addToBasketHandler = (product) => {
        const existedItem = shoppingCart.find(el => el.id === product.id);
        if(existedItem){
            const updatedArr = shoppingCart.map(el => {
                if(el.id === product.id){
                    console.log('quantity', {...el, quantity: Number(el.quantity) + Number(quantity)} );
                    setProduct({...el, quantity: Number(el.quantity) + Number(quantity) })
                    return {...el, quantity: Number(el.quantity) + Number(quantity) } 
                }else{
                    return el;
                } 
            })
            setShoppingCart(updatedArr);
            setIsEdited(true);
        }else{
            setSubmit(true);
        }
    }

    // quantity handler ====================
    const quantityHandler = (e) => {
        setQuantity(e.target.value);
    }

    // review handler ======================
    const writeReviewHandler = () => {
        setIsReview(true);
    }

    return (
        <div className="product-info-section">
            <section className="product-item">
                <div className="productImg-container">
                    <img src={`.${product.img}`} alt={product.title}/>
                    <CarouselImages/>
                </div>
                <div className="productInfo-container">
                    <h2 className="productInfo-title">{product.title}</h2>
                    <div className="stars">
                        {starIcons.map((star, index) => {
                            return <span key={index}>{star}</span>
                        })}
                        <span>{randomStar()}</span>
                        {/* react-scroll */}
                        <Link 
                            to="review"
                            spy={true}
                            smooth={true}
                            className='review-number'
                            >
                                {randomReviewNum()}Reviews
                        </Link>
                    </div>
                    <h3 className="productInfo-price">£{product.price}</h3>
                    <ProductInfo/>
                    <div className="productInfo-select">
                        <input 
                            type="number" 
                            name="num" 
                            className="num"
                            value={quantity}
                            onChange={quantityHandler}
                            />
                        <button 
                            className="add-btn" 
                            onClick={() => addToBasketHandler(product)}
                        >Add to basket</button>
                    </div>
                </div>
            </section>

            <DummyReview 
                product={product} 
                isSubmitReviewForm={isSubmitReviewForm}
                reviewInfo={reviewInfo}
            />
            <div className="review-btn-container">
                <button onClick={writeReviewHandler}>Write a review<FaChevronRight style={btnStyle}/></button>
            </div>
            

            {isReview && !isSubmitReviewForm && <ReviewForm 
                product={product} 
                setReviewInfo={setReviewInfo}
                reviewInfo={reviewInfo}
                setIsSubmitReviewForm={setIsSubmitReviewForm}
                isSubmitReviewForm={isSubmitReviewForm}
            />}
            
        </div>
    )
}

export default ProductInfos
