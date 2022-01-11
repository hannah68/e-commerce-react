import { Link } from "react-router-dom"
import {FaStar, FaStarHalfAlt, FaRegStar} from 'react-icons/fa'
import '../styles/Home.css';

const FeaturedItem = (props) => {
    const {item} = props;

    // create random class============================
    const randomStar = () => {
        const starClass = Math.floor(Math.random()*2)+1;
        return starClass === 1 ? <FaStarHalfAlt/> : <FaRegStar/>;
    }

    return (
        <div className="features-item">
            <img src={item.img} alt={item.category}/>
            <div className="sub-img">
                <p className="sub-img__title">{item.title}</p>
                <div className="sub-img__star">
                    <div className="stars">
                        <span><FaStar/></span>
                        <span><FaStar/></span>
                        <span><FaStar/></span>
                        <span><FaStar/></span>
                        <span>{randomStar()}</span>
                    </div>
                    <p>£{item.price}</p>
                </div>
                <Link to={`/products/${item.id}`} state={{item}}>
                    <button className="sub-img__btn">more details</button>
                </Link>
            </div>
        </div>
    )
}

export default FeaturedItem
