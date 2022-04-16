import { Route, Routes } from "react-router"
import {useState, useMemo, useReducer} from 'react'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Contact from './pages/Contact'
import ProductInfos from "./pages/ProductInfos"
import About from './pages/About'
import Basket from "./pages/Basket"
import Footer from "./components/Footer";
import Header from "./components/Header";
import { StoreContext, initialState, rootReducer } from "./Store"



function App() {
  const [shoppingCart, setShoppingCart] = useState([]); 
  const [state, dispatch] = useReducer(rootReducer, initialState);

  const store = useMemo(()=> {
    return {state: state, dispatch: dispatch}
  },[state, dispatch]);

  return (
    <StoreContext.Provider value={store}>
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
    </StoreContext.Provider>
  );
}

export default App;
