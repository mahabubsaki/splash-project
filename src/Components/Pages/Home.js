import React, { useState } from 'react';
import HomeTop from '../Models/HomeTop';
import OfferSwipper from '../Models/OfferSwipper';
import Services from '../Models/Services';
import Transactions from '../Models/Transactions';

const Home = () => {
    const [notifications, setNotifications] = useState(true)
    return (
        <div className="animate__animated animate__backInUp min-h-screen">
            <HomeTop />
            <Services />
            <OfferSwipper />
            <Transactions />
        </div>
    );
};

export default Home;