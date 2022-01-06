import '../styles/Shop.css'
import {useState, useEffect} from 'react'
import {FaChevronDown} from "react-icons/fa"
import FilterCollectionMenu from './FilterCollectionMenu'
import FilterColorMenu from './FilterColorMenu'
import FilterCategoryMenu from './FilterCategoryMenu'
import '../styles/Shop.css'

const FilterProducts = (props) => {
    const [collection, setCollection] = useState([]);
    const [collectionMenuOpen, setCollectionMenuOpen] = useState(false);
    const [colorMenuOpen, setColorMenuOpen] = useState(false);
    const [categoryMenuOpen, setCategoryMenuOpen] = useState(false);

    const sortProducts = (sort) => {

    }

    const filterProducts = () => {
        
    }
 
    return (
        <>
            <div className="clear-container">
                <h2>Filtered by</h2>
                <button className="clear-btn">Clear All</button>
            </div>

            <form className="filter__collection">
                {/* collection section */}
                <div className={collectionMenuOpen ? "collection__menu removeBorder": "collection__menu"}>
                    <span>Collection</span>
                    <span onClick={() => setCollectionMenuOpen(!collectionMenuOpen)}><FaChevronDown/></span>
                </div>
                {collectionMenuOpen && <FilterCollectionMenu/>}

                {/* color section */}
                <div className={colorMenuOpen ? "color__menu removeBorder" : "color__menu"}>
                    <span>Color</span>
                    <span onClick={() => setColorMenuOpen(!colorMenuOpen)}><FaChevronDown/></span>
                </div>
                {colorMenuOpen && <FilterColorMenu/>}

                {/* category section */}
                <div className={categoryMenuOpen ? "category__menu removeBorder" : "category__menu"}>
                    <span>Category</span>
                    <span onClick={() => setCategoryMenuOpen(!categoryMenuOpen)}><FaChevronDown/></span>
                </div>
                {categoryMenuOpen && <FilterCategoryMenu/>}

                {/* price section */}
                <div className="price__menu">
                    <span className="price-name">Price Range</span>
                </div>
                <div className="price__list">
                    <div className="range-container">
                        <input type="range" id="min-price" name="min-price" value="0" min="0" max="1000" step="1"/>
                        <input type="range" id="max-price" name="max-price" value="1000" min="0" max="1000" step="1"/>
                    </div>
                    <div className="price-text">
                        <div className="min-text">
                            <span>£</span>
                            <input type="number" value="0" min="0" max="1000" id="min-num"/>
                        </div>
                        <div className="max-text">
                            <span>£</span>
                            <input type="number" value="1000" min="0" max="1000" id="max-num"/>
                        </div>
                    </div>
                </div>
                <button type="submit" className="search-btn">Search</button>
            </form>
        </>
    )
}

export default FilterProducts
