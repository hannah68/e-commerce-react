import { Route, Routes } from "react-router";
import {useState} from 'react';

import Home from './pages/Home';
import Shop from './pages/Shop';
import Contact from './pages/Contact';
import ProductInfos from "./pages/ProductInfos";
import About from './pages/About';
import Basket from "./pages/Basket";
import Footer from "./components/Footer";
import Header from "./components/Header";

const App = () => {
  const [shoppingCart, setShoppingCart] = useState([]); 

  return (
    <>
      <Header shoppingCart={shoppingCart}/>
      <main>
        <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/products' element={<Shop/>}/>
              <Route path='/products/:id' element={<ProductInfos 
                shoppingCart={shoppingCart} 
                setShoppingCart={setShoppingCart}
              />}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/contact' element={<Contact/>}/>
              <Route path='/basket' element={<Basket 
                shoppingCart={shoppingCart}
                setShoppingCart={setShoppingCart}
              />}/>
        </Routes>
      </main>
      <Footer/>
    </>
  );
}

export default App;
