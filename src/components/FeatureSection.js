import '../styles/Home.css';
import { useState, useEffect } from "react";
// import {APIEndpoints} from '../../config';

const FeatureSection = () => {
    const [featuredItems, setFeaturedItems] = useState([]);

    

    return (
        <section className="features-section">
            <h2>Best selling furniture</h2>
            <div className="features-container">
                {/* <div className="features-item">
                    <img src="./assets/images/table6.jpg" alt="table"/>
                    <div className="sub-img">
                        <p className="sub-img__title">chair</p>
                        <div className="sub-img__star">
                            <div className="stars">
                                <span><i class="fas fa-star"></i></span>
                                <span><i class="fas fa-star"></i></span>
                                <span><i class="fas fa-star"></i></span>
                                <span><i class="fas fa-star"></i></span>
                                <span><i class="fas fa-star-half-alt"></i></span>
                            </div>
                            <p>price</p>
                        </div>
                        <button className="sub-img__btn">more details</button>
                    </div>
                </div> */}
            </div>
        </section>
    )
}

export default FeatureSection
