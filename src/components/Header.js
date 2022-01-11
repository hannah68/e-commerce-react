import { Link } from "react-router-dom"
import '../styles/Header.css';
import {FaShoppingCart} from 'react-icons/fa'

const Header = (props) => {
    const {shoppingCart} = props;
    const className = shoppingCart.length === 0 ? 'basket-num hide' : 'basket-num';

    return (
        <header>
            <nav className="navbar-container">
                <div className="navbar">
                    <div className="navbar__logo">
                        <Link to='/'>
                            <img src="./assets/images/logo.svg" alt="logo"/>
                        </Link>
                    </div>
                    
                    <ul className="navbar__lists">
                        <li className="navbar__lists--item">
                            <Link to='/'>Home</Link>
                        </li>
                        <li className="navbar__lists--item">
                            <Link to='/about'>About</Link>
                        </li>
                        <li className="navbar__lists--item">
                            <Link to='/products'>Shop</Link>
                        </li>
                        <li className="navbar__lists--item">
                            <Link to='/contact'>Contact</Link>
                        </li>
                    </ul>

                    <div className="navbar__icon">
                        <Link to='/basket'>
                            <div className={className}>
                                {shoppingCart.length}
                            </div>
                            <span><FaShoppingCart/></span>
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;
