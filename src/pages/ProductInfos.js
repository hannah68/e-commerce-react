import {useEffect, useState} from 'react'
import {FaChevronRight, FaChevronLeft} from "react-icons/fa"
import ProductInfo from '../components/ProductInfo'
import {useLocation} from "react-router-dom";
import {APIEndpoints} from '../config'

const ProductInfos = () => {
    const [submit, setSubmit] = useState(false);
    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(0);
    const location = useLocation();

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

    return (
        <div className="product-info-section">
            <section className="product-item">
                <div className="productImg-container">
                    <img src={`.${product.img}`} alt={product.title}/>
                    <div className="small-images">
                        <span className="arrow-left"><FaChevronLeft/></span>
                        <img src="../assets/images/sofa2.jpg" alt="sofa"/>
                        <img src="../assets/images/table3.jpg" alt="sofa"/>
                        <img src="../assets/images/sofa1.jpg" alt="sofa"/>
                        <img src="../assets/images/table5.jpg" alt="sofa"/>
                        <span className="arrow-right"><FaChevronRight/></span>
                    </div>
                </div>
                <div className="productInfo-container">
                    <h2 className="productInfo-title">{product.title}</h2>
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
        </div>
    )
}

export default ProductInfos
