import {FaStar, FaStarHalfAlt, FaRegStar} from 'react-icons/fa'
import {FaPlus, FaMinus} from "react-icons/fa"
import '../styles/Basket.css'


const CartItem = (props) => {
    const {item, total, addItem, removeItem} = props;

    return (
        <div className="row body-row">
            <div className="body-row-info">
                <img src={item.img} alt={item.title}/>
                    <div className="info-cart">
                        <p>{item.title}</p>
                        <div className="cart-stars">
                            <span><FaStar/></span>
                            <span><FaStar/></span>
                            <span><FaStar/></span>
                            <span><FaStar/></span>
                            <span><FaStar/></span>
                        </div>
                        <p className='delivery'>Estimated dispatch within 5 working days</p>
                    </div>
            </div>

            <p>£{item.price}</p>

            <div className="quantity-container">
                <button className="popup-minus" onClick={() => addItem(item)}><FaPlus/></button>
                <input className="quantity" type="text" value={item.quantity}/>
                <button className="popup-plus" onClick={() => removeItem(item)}><FaMinus/></button>
            </div>

            <p>£{total}</p>
        </div>
       
    )
}

export default CartItem
