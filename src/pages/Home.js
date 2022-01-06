import React from 'react'
import FeatureSection from '../components/FeatureSection';
import HeroSection from '../components/HeroSection';
import '../styles/Home.css';

import { useState, useEffect } from "react";
import {APIEndpoints} from '../config';

const Home = () => {
    useEffect(() => {
        const fetchFeaturedItems = async () => {
            const res = await fetch(APIEndpoints.shop);
            const data = await res.json();
            const cleanData = data.filter(item => item.feature === true) ;
            console.log(cleanData);
        }
        fetchFeaturedItems()
    }, [])
    return (
        <div className="home-section">
            <HeroSection/>
            <FeatureSection/>
        </div>
    )
}

export default Home;
