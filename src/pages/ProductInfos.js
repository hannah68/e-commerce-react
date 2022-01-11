import {useEffect, useState} from 'react'
import {FaChevronRight, FaChevronLeft} from "react-icons/fa"
import {FaStar, FaStarHalfAlt, FaRegStar} from 'react-icons/fa'
import ProductInfo from '../components/ProductInfo'
import {useLocation} from "react-router-dom";
import {APIEndpoints} from '../config'
import '../styles/ProductInfos.css'
import ReviewForm from '../components/ReviewForm';
import Review from '../components/Review';

const ProductInfos = () => {
    const [submit, setSubmit] = useState(false);
    const [isSubmitReviewForm, setIsSubmitReviewForm] = useState(false);
    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(0);
    const [isReview, setIsReview] = useState(false);
    const [reviewInfo, setReviewInfo] = useState({
        ReviewerName: '',
        stars: [
            {id:1, name: <FaRegStar/>}, 
            {id:2, name: <FaRegStar/>},
            {id:3, name: <FaRegStar/>} , 
            {id:4, name: <FaRegStar/>},
            {id:5, name: <FaRegStar/>}
        ],
        feedback:'',
        date: ''
    })

    const location = useLocation();

    const style = { fontSize: "2rem" }

    // create random class============================
    const randomStar = () => {
        const starClass = Math.floor(Math.random()*2)+1;
        return starClass === 1 ? <FaStarHalfAlt/> : <FaRegStar/>;
    }

    useEffect(() => {
        if (location.state) {
            const { item } = location.state;
            setProduct(item);
        }
    }, [location]);


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
    }, [submit])


     const quantityHandler = (e) => {
        setQuantity(e.target.value);
     }

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
                        <span><FaStar/></span>
                        <span><FaStar/></span>
                        <span><FaStar/></span>
                        <span><FaStar/></span>
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
                            onClick={() => setSubmit(true)}
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
            />}
            {isSubmitReviewForm && <Review/>}
        </div>
    )
}

export default ProductInfos
