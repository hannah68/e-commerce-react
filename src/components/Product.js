import '../styles/Shop.css'
import {FaStar, FaStarHalfAlt, FaRegStar} from 'react-icons/fa'

const Product = (props) => {
    const {item} = props;

    // create random class============================
    const randomStar = () => {
        const starClass = Math.floor(Math.random()*2)+1;
        return starClass === 1 ? <FaStarHalfAlt/> : <FaRegStar/>;
    }

    return (
        <div className="product">
            <img className="product__img" src={item.img} alt={item.title}/>
            <p className="product__name">{item.title}</p>
            <div className="product__stars">
                <div className="stars">
                <span><FaStar/></span>
                    <span><FaStar/></span>
                    <span><FaStar/></span>
                    <span><FaStar/></span>
                    <span>{randomStar()}</span>
                </div>
                <p className="product__price">£{item.price}</p>
            </div>
            <button className="product__btn">Add to bag</button>
        </div>
    )
}

export default Product

