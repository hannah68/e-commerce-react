import FeatureSection from '../components/FeatureSection';
import HeroSection from '../components/HeroSection';
import '../styles/Home.css';
import { useState, useEffect } from "react";
import {APIEndpoints} from '../config';

const Home = () => {
    const [featuredItems, setFeaturedItems] = useState([]);

    // use effect for fetching featured item from json====================
    useEffect(() => {
        const fetchFeaturedItems = async () => {
            const res = await fetch(APIEndpoints.shop);
            const data = await res.json();
            const cleanData = data.filter(item => item.feature === true) ;
            setFeaturedItems(cleanData);
        }
        fetchFeaturedItems()
    }, [])


    return (
        <div className="home-section">
            <HeroSection/>
            <FeatureSection featuredItems={featuredItems}/>
        </div>
    )
}

export default Home;
