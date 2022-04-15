import '../styles/Shop.css'
import { useContext } from 'react'
import { StoreContext, StoreActions } from '../Store';

const SortProducts = () => {
    const store = useContext(StoreContext);

    // sort By Highest price Handler=============================================
      const sortByHighestHandler = () => {
        const newArr = store.state.shop.randomProducts;
        // const newArr = [...randomProducts];
        console.log(newArr);
        const sortedArr = newArr.sort((a,b) => b.price - a.price);
        // setRandomProducts(sortedArr);
        store.dispatch({
            type : StoreActions.RANDOM_PRODUCTS,
            payload: sortedArr
        })
    }

    // sort By Lowest price Handler==============================================
    const sortByLowestHandler = () => {
        const newArr = store.state.shop.randomProducts;
        const sortedArr = newArr.sort((a,b) => a.price - b.price);
        console.log(sortedArr);
        // setRandomProducts(sortedArr);
        store.dispatch({
            type : StoreActions.RANDOM_PRODUCTS,
            payload: sortedArr
        })
    }
    
    
    return (
        <ul className="sort-container">
            <li className="lowest" onClick={sortByLowestHandler}>Lowest Price</li>
            <li className="highest" onClick={sortByHighestHandler}>Highest Price</li>
        </ul>
    )
}

export default SortProducts
