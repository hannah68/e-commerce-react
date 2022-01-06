import {useState, useEffect} from 'react'
import FilterProducts from '../components/FilterProducts'
import Product from '../components/Product'
import SearchShop from '../components/SearchShop'
import '../styles/Shop.css'
import {APIEndpoints} from '../config';

const Shop = () => {
    const [products, setProducts] = useState([]);
    

     // create random product for product section=================
    const randomFnForProducts = (num) => {
        let numIndex = []
        while(numIndex.length < 6){
            const randomNum = Math.floor(Math.random() * num) + 1;
            if(numIndex.indexOf(randomNum) === -1) numIndex.push(randomNum);
        }
        return numIndex;
    }

    useEffect(() => {
        const fetchProducts = async () => {
            const res = await fetch(APIEndpoints.shop);
            const data = await res.json();
            const productArrId = randomFnForProducts(42);
           
            const cleanData = data.filter(item => {
                return productArrId.includes(item.id)
            })
            setProducts(cleanData)
        }
        fetchProducts()
    }, [])

    return (
        <div className="shop-section">
            <SearchShop/>

            <section className='container'>
                <div className="filter-container">
                    <FilterProducts/>
                </div>

                <div className="product-container">
                    {products.map((item, index) => {
                        return <Product key={index} item={item}/>
                    })}
                </div>
            </section>
        </div>
    )
}

export default Shop
