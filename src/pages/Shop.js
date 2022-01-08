import {useState, useEffect} from 'react'
import FilterProducts from '../components/FilterProducts'
import Product from '../components/Product'
import SearchShop from '../components/SearchShop'
import '../styles/Shop.css'
import {APIEndpoints} from '../config';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [randomProducts, setRandomProducts] = useState([]);
    const [priceValue, setPriceValue] = useState(1000)
    const [filterData, setFilterData] = useState({
        collection : [],
        category : [],
        color : [],
    })
    

    const handleFilterChange = (e, filterName) => {
        if(filterData[filterName].includes(e.target.name)){
            let previousfilterNameArr = [...filterData[filterName]];
            const updatedfilterNameArr = previousfilterNameArr.filter(el => el !== e.target.name);
            setFilterData({...filterData, [filterName]: updatedfilterNameArr})
        }else{
            setFilterData({...filterData, [filterName]: [...filterData[filterName], e.target.name]})
        }
    }
    


    const submitFilterFormHandler = (e) => {
        e.preventDefault();

        const filteredArr = products.filter(el => {
            if(filterData.collection.includes(el.collection) && 
                filterData.color.includes(el.color) &&
                filterData.category.includes(el.category) &&
                el.price <= priceValue){
                return el
            }
        })

        console.log('filteredArr', filteredArr);
        setRandomProducts(filteredArr)

    }

    const handleFilterPrice = (e) => {
        setPriceValue(e.target.value)
    }


    const clearAllFilterHandler = () => {
        setFilterData({
            collection : [],
            category : [],
            color : [],
        });
        setPriceValue(1000);
        window.location.reload();

    }

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
            setProducts(data);

            const productArrId = randomFnForProducts(42);
            const cleanData = data.filter(item => {
                return productArrId.includes(item.id)
            })
            setRandomProducts(cleanData)
        }
        fetchProducts()
    }, [])

    
    return (
        <div className="shop-section">
            <SearchShop/>

            <section className='container'>
                <div className="filter-container">
                    <FilterProducts 
                        setFilterData={setFilterData} 
                        filterData={filterData} 
                        products={products}
                        handleFilterChange={handleFilterChange}
                        handleFilterPrice={handleFilterPrice}
                        priceValue={priceValue}
                        submitFilterFormHandler={submitFilterFormHandler}
                        clearAllFilterHandler={clearAllFilterHandler}
                    />
                </div>

                <div className="product-container">
                    {randomProducts.map((item, index) => {
                        return <Product key={index} item={item}/>
                    })}
                </div>
            </section>
        </div>
    )
}

export default Shop
