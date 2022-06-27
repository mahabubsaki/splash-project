import React, { useEffect, useState } from 'react';
import HomeTop from '../Models/HomeTop';
import OfferSwipper from '../Models/OfferSwipper';
import Overview from '../Models/Overview';
import Services from '../Models/Services';
import Transactions from '../Models/Transactions';

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <div className="animate__animated animate__backInUp min-h-screen">
            <HomeTop />
            <Services />
            <OfferSwipper />
            <Transactions />
            <Overview />
        </div>
    );
};

export default Home;