import { Route, Routes } from "react-router"
import Home from './pages/Home'
import Shop from './pages/Shop'
import Contact from './pages/Contact'
import About from './pages/About'
import Footer from "./components/Footer";
import Header from "./components/Header";
// import Main from "./components/main/Main";

function App() {
  return (
    <>
      <Header/>
      <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/products' element={<Shop/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
