import React, { useContext, useEffect } from 'react';
import { AppContext } from '../../App';
import HomeTop from '../Models/HomeTop';
import Navigation from '../Models/Navigation';
import OfferSwipper from '../Models/OfferSwipper';
import Overview from '../Models/Overview';
import Services from '../Models/Services';
import Transactions from '../Models/Transactions';

const Home = () => {
    const { setCurrentLoc, navOpen } = useContext(AppContext)
    useEffect(() => {
        setCurrentLoc('home')
        window.scrollTo(0, 0);
    }, [])
    return (
        <>
            <div className="animate__animated animate__fadeInRightBig animate__faster bg-[#FFFFFF] rounded-3xl">
                <HomeTop />
                <Services />
                {!navOpen && <OfferSwipper />}
                <Transactions />
                <Overview />
            </div>
        </>
    );
};

export default Home;