import { Route, Routes } from "react-router"
import Home from './pages/Home'
import Shop from './pages/Shop'
import Contact from './pages/Contact'
import About from './pages/About'
import Footer from "./components/Footer";
import Header from "./components/Header";


function App() {
  return (
    <>
      <Header/>
      <main>
        <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/products' element={<Shop/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </main>
      <Footer/>
    </>
  );
}

export default App;
