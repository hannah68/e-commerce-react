import {useState} from 'react'
import '../styles/Shop.css'
import {FaAngleDown} from 'react-icons/fa'
import SortProducts from './SortProducts'

const SearchShop = () => {
    const [isSortMenuOpen, setIsSortMenuOpen] = useState(false);

    return (
        <section className="search-container">
            <div className="search">
                <input className="search__input" type="text" placeholder="search by a category..."/>
                <div className="search__sort">
                    <button className="search__sort--btn">
                        <div className="sort-btn-container">
                            <span>Sort By</span>
                            <span 
                                className="dropdown-icon" 
                                onClick={() => setIsSortMenuOpen(!isSortMenuOpen)}
                            >
                                <FaAngleDown/>
                            </span>
                        </div>
                        {isSortMenuOpen && <SortProducts/>}
                    </button>
                </div>
            </div>
        </section>
    )
}

export default SearchShop
