import {useState, useEffect, useContext} from 'react'
import '../styles/Basket.css'
import { useNavigate } from "react-router-dom";
import {APIEndpoints} from '../config'
import CartItem from '../components/CartItem';
import EmptyBasket from '../components/EmptyBasket';
import TotalCart from '../components/TotalCart';
import { StoreContext, StoreActions } from '../Store';


const Basket = (props) => {
    const {setShoppingCart, shoppingCart} = props;
    const [deletedItem, setDeletedItem] = useState(null);
    const [total, setTotal] = useState(0);
    const [product, setProduct] = useState({});
    const [isEdited, setIsEdited] = useState(false);
    let navigate = useNavigate();
    const store = useContext(StoreContext);

    const doDispatch = (type, payload) => {
        store.dispatch({
          type: type,
          payload: payload,
        });
      };

    // get data from basket (json server)=====================
    useEffect(() => {
        const getBasketData = async() => {
            const res = await fetch(APIEndpoints.basket);
            const data = await res.json();
            setShoppingCart(data);
        }
        getBasketData()
    }, [setShoppingCart]);

    // add more items to cart ================================
    const addItem = (item) => {
        const me = store.state.shoppingCart.map(el => {
            if(el.id === item.id){
                setProduct({...el, quantity: Number(el.quantity) + 1})
                return {...el, quantity: Number(el.quantity) + 1}
            }else{
                return el
            }
        })
        console.log(me);
        // const updatedArr = shoppingCart.map(el => {
        //     if(el.id === item.id){
        //         setProduct({...el, quantity: Number(el.quantity) + 1})
        //         return {...el, quantity: Number(el.quantity) + 1}
        //     }else{
        //         return el
        //     }
        // })
        doDispatch(StoreActions.UPDATE_SHOPPINGCART, me)
        // setShoppingCart(me);
        // setShoppingCart(updatedArr);
        setIsEdited(true);
    }

    // remove items from cart==================================
    const removeItem = (item) => {
        const foundItem = shoppingCart.find(el => el.id === item.id);
        if(foundItem.quantity > 1){
            const updatedArr = shoppingCart.map(el => {
                if(el.id === item.id){
                    setProduct({...el, quantity: Number(el.quantity) - 1})
                    return {...el, quantity: Number(el.quantity) - 1}
                }else{
                    return el
                }
            })
            setShoppingCart(updatedArr);
            setIsEdited(true);
        }
        else if(foundItem.quantity <= 1){
            setShoppingCart(shoppingCart.filter(el => el.id !== item.id));
            setDeletedItem(foundItem);
        } 
    }

    console.log(shoppingCart)
    // use effect for updating basket quantity======================
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
    }, [deletedItem, navigate]);


    return (
		<div className="shopping-cart">
			<h1>
				Shopping Cart <span>: {shoppingCart.length} items</span>
			</h1>
            {shoppingCart.length < 1 ?  <EmptyBasket/> : 
                <>
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
                                            removeItem={removeItem}
                                            addItem={addItem}
                                        />
                            })}
                        </div>
                    </div>
                    <TotalCart total={total} shoppingCart={shoppingCart}/>
                </>
            }
		</div>
	);
}

export default Basket
