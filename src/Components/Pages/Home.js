import React, { useEffect } from 'react';
import HomeTop from '../Models/HomeTop';
import Navigation from '../Models/Navigation';
import OfferSwipper from '../Models/OfferSwipper';
import Overview from '../Models/Overview';
import Services from '../Models/Services';
import Transactions from '../Models/Transactions';

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <>
            <div className="animate__animated animate__fadeInRightBig animate__faster bg-[#e5e5e5] rounded-3xl">
                <HomeTop />
                <Services />
                <OfferSwipper />
                <Transactions />
                <Overview />
            </div>
        </>
    );
};

export default Home;