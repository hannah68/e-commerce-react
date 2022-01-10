import {useState, useEffect} from 'react'
import '../styles/Basket.css'
// import '../styles/style.css'
import { useNavigate } from "react-router-dom";
import {APIEndpoints} from '../config'
import CartItem from '../components/CartItem';
import EmptyBasket from '../components/EmptyBasket';


const Basket = () => {
    const [shoppingCart, setShoppingCart] = useState([]);
    const [deletedItem, setDeletedItem] = useState(null);
    const [total, setTotal] = useState(0);
    let navigate = useNavigate();

    // get data from basket (json server)=====================
    useEffect(() => {
        const getBasketData = async() => {
            const res = await fetch(APIEndpoints.basket);
            const data = await res.json();
            setShoppingCart(data);
        }
        getBasketData()
    }, []);

    // add more items to cart ================================
    const addItem = (item) => {
        setShoppingCart(shoppingCart.map(el => el.id === item.id ? {...el, quantity: Number(el.quantity) + 1} : el))
    }

    // remove items from cart==================================
    const removeItem = (item) => {
        const foundItem = shoppingCart.find(el => el.id === item.id);
        if(foundItem.quantity > 1){
            foundItem.quantity -= 1
            setShoppingCart(shoppingCart.map(el => el.id === item.id ? foundItem : el))
        }
        else if(foundItem.quantity <= 1){
            setShoppingCart(shoppingCart.filter(el => el.id !== item.id));
            setDeletedItem(foundItem);
        } 
    }

    // update total============================================
    useEffect(() => {
        if(shoppingCart.length >=1){
            const priceQty = shoppingCart.map(el => el.price * Number(el.quantity));
            const total = priceQty.reduce((acc,curr) => acc + curr).toFixed(2);
            setTotal(total)
        }
    }, [shoppingCart])


    // delete item from json server============================
    useEffect(() => {
        const deleteItemFromBasket = async () => {
            await fetch(`${APIEndpoints.basket}/${deletedItem.id}`, { method: 'DELETE' });
            navigate("/basket", { replace: true });
        }
        if(deletedItem){
            deleteItemFromBasket();
        }
    }, [deletedItem]);



    console.log('shopping cart', shoppingCart);

    return (
			<div className="shopping-cart">
				<h1>
					Shopping Cart <span>: {shoppingCart.length} items</span>
				</h1>
                {shoppingCart.length < 1 ?  <EmptyBasket/> : 

                    <div className="cart-section">
                    <div className="row header-row">
                        <p className='header'>product</p>
                        <p className='header'>Unit price</p>
                        <p className='header'>Quantity</p>
                        <p className='header'>Total</p>
                    </div>
                    <div className="cart">
                        {shoppingCart.map((item, index) => {
                            return <CartItem  
                                        key={index} 
                                        item={item}
                                        total={total}
                                        removeItem={removeItem}
                                        addItem={addItem}
                                    />
                        })}
                    </div>
                    </div>
                }
                
				
			</div>
		);
}

export default Basket
