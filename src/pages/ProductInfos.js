import {useEffect, useState} from 'react'
import {FaChevronRight, FaChevronLeft, FaRegStar} from "react-icons/fa"
import ProductInfo from '../components/ProductInfo'
import {useLocation} from "react-router-dom";
import {APIEndpoints} from '../config'
import '../styles/ProductInfos.css'
import ReviewForm from '../components/ReviewForm';
import Review from '../components/Review';
import {randomStar, starIcons} from '../HelperFunctions'

const ProductInfos = (props) => {
    const {shoppingCart, setShoppingCart} = props;
    const [submit, setSubmit] = useState(false);
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
        productId: null
    })

    const location = useLocation();

    const style = { fontSize: "2rem" }

    
    // use effect for accessing data from location============
    useEffect(() => {
        if (location.state) {
            const { item } = location.state;
            setProduct(item);
        }
    }, [location]);

    // use effect for posting data to basket=================
    useEffect(() => {
        const postBasketData = async () => {
            await fetch(APIEndpoints.basket, {
                method: 'POST',
                headers: {
                "Content-Type": "application/json"
                },
                body: JSON.stringify(product)
            })
        }
        if(submit){
            postBasketData()
            console.log('submit');
        }
        setSubmit(false);
        setQuantity(0);
    }, [submit, product])


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
            setSubmit(true);
        }else{
            setShoppingCart([...shoppingCart, {...product, quantity : Number(quantity)}])
            setSubmit(true);
        }
    }

    console.log('product', product);

    // quantity handler ====================
    const quantityHandler = (e) => {
        setQuantity(e.target.value);
    }

    // review handler ======================
    const reviewHandler = () => {
        setIsReview(true);
    }

    return (
        <div className="product-info-section">
            <section className="product-item">
                <div className="productImg-container">
                    <img src={`.${product.img}`} alt={product.title}/>
                    <div className="small-images">
                        <span className="arrow-left"><FaChevronLeft style={style}/></span>
                        <img src="../assets/images/sofa2.jpg" alt="sofa"/>
                        <img src="../assets/images/table3.jpg" alt="sofa"/>
                        <img src="../assets/images/sofa1.jpg" alt="sofa"/>
                        <img src="../assets/images/table5.jpg" alt="sofa"/>
                        <span className="arrow-right"><FaChevronRight style={style}/></span>
                    </div>
                </div>
                <div className="productInfo-container">
                    <h2 className="productInfo-title">{product.title}</h2>
                    <div className="stars" onClick={reviewHandler}>
                        {starIcons.map((star, index) => {
                            return <span key={index}>{star}</span>
                        })}
                        <span>{randomStar()}</span>
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

            {isReview && !isSubmitReviewForm && <ReviewForm 
                product={product} 
                setReviewInfo={setReviewInfo}
                reviewInfo={reviewInfo}
                setIsSubmitReviewForm={setIsSubmitReviewForm}
                isSubmitReviewForm={isSubmitReviewForm}
                product={product}
            />}
            {isSubmitReviewForm && <Review 
                reviewInfo={reviewInfo} product={product}/>}
        </div>
    )
}

export default ProductInfos
