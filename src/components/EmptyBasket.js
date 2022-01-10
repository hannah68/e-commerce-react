import { Link } from "react-router-dom"

const EmptyBasket = () => {
    return (
        <div className="empty-container">
            <p className='empty-basket'>You have no items in your shopping basket.</p>
            <Link to='/products'>
                <button className='continue-btn'>Continue Shopping</button>
            </Link>
        </div>
    )
}

export default EmptyBasket
