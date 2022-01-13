import {FaChevronRight, FaChevronLeft} from "react-icons/fa"
import '../styles/ProductInfos.css'

const CarouselImages = () => {
    const style = { fontSize: "2rem" };
    return (
        <div className="small-images">
            <span className="arrow-left"><FaChevronLeft style={style}/></span>
            <img src="../assets/images/sofa2.jpg" alt="sofa"/>
            <img src="../assets/images/table3.jpg" alt="sofa"/>
            <img src="../assets/images/sofa1.jpg" alt="sofa"/>
            <img src="../assets/images/table5.jpg" alt="sofa"/>
            <span className="arrow-right"><FaChevronRight style={style}/></span>
        </div>
    )
}

export default CarouselImages
