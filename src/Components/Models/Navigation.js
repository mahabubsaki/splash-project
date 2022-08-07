import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import home from '../Assets/Group 192.svg'
import pay from '../Assets/Payment Linkp.svg'
import search from '../Assets/Icona.svg'
import user from '../Assets/User.svg'
import curve from '../Assets/Vector 29ve.png'
import styles from '../../Styles/Navigation.module.css'
const Navigation = () => {
    const [currLoc, setCurrentLoc] = useState('home')
    const { pathname } = useLocation()
    return (
        <div className={`${pathname.includes('home') ? 'fixed' : 'hidden'} bottom-0 left-0 right-0 bg-transparent flex justify-center items-end z-20`}>
            <div className={styles.mainbox}>
                <img src={home} alt="" className='w-[6.67vw] h-[7.3vw]' />
                <img src={pay} alt="" className='w-[6.3vw] h-[6.9vw]' />
                <img src={search} alt="" className='w-[6.9vw] h-[6.9vw]' />
                <img src={user} alt="" className='h-[6.9vw] w-[6.3vw]' />
            </div>
        </div>
    );
};

export default Navigation;

// {currLoc === 'home' ? <div className={`relative top-[10px] h-[96px] w-[28.7vw] ${currLoc === 'home' && 'mr-[5vw]'}`}>
//                     <img src={curve} alt="" className='h-[12vw] z-[-10] w-full' />
//                     <div className="h-[12.7vw] w-[12.7vw] top-[-17px] left-[5.6vw] absolute rounded-full flex justify-center items-center bg-[#FFF6A8]">
//                         <img src={home} alt="" className='w-[6.2vw] h-[6.2vw]' />

//                     </div>
//                 </div>
//                     :
//                     <img src={home} alt="" className={`w-[6.2vw] h-[6.2vw] cursor-pointer ${currLoc === 'pay' && 'mr-[13vw]'} ${(currLoc === 'search' || currLoc === 'user') && 'mr-[16vw]'}`} onClick={() => setCurrentLoc('home')} />
//                 }
//                 {currLoc === 'pay' ? <div className={`relative top-[10px] h-[96px] w-[28.7vw] ${currLoc === 'pay' && 'mr-[8vw]'}`}>
//                     <img src={curve} alt="" className='h-[12vw] z-[-10] w-full' />
//                     <div className="h-[12.7vw] w-[12.7vw] top-[-17px] left-[5.6vw] absolute rounded-full flex justify-center items-center bg-[#FFF6A8]">
//                         <img src={pay} alt="" className='w-[6.2vw] h-[6.2vw]' />

//                     </div>
//                 </div>
//                     :
//                     <img src={pay} alt="" className={`w-[6.2vw] h-[6.2vw] cursor-pointer ${(currLoc === 'home' || currLoc === 'user') && 'mr-[16vw]'} ${currLoc === 'search' && 'mr-[14vw]'}`} onClick={() => setCurrentLoc('pay')} />
//                 }
//                 {
//                     currLoc === 'search' ? <div className={`relative top-[10px] h-[96px] w-[28.7vw] ${currLoc === 'search' && 'mr-[7.1vw]'}`}>
//                         <img src={curve} alt="" className='h-[12vw] z-[-10] w-full' />
//                         <div className="h-[12.7vw] w-[12.7vw] top-[-17px] left-[5.6vw] absolute rounded-full flex justify-center items-center bg-[#FFF6A8]">
//                             <img src={search} alt="" className='w-[6.2vw] h-[6.2vw]' />

//                         </div>
//                     </div>
//                         :
//                         <img src={search} alt="" className={`cursor-pointer w-[6.2vw] h-[6.2vw] ${(currLoc === 'home' || currLoc === 'pay') && 'mr-[16vw]'}`} onClick={() => setCurrentLoc('search')} />
//                 }
//                 {currLoc === 'user' ? <div className={`relative top-[10px] h-[96px] w-[28.7vw] ${currLoc === 'user' && 'ml-[5vw]'}`}>
//                     <img src={curve} alt="" className='h-[12vw] z-[-10] w-full' />
//                     <div className="h-[12.7vw] w-[12.7vw] top-[-17px] left-[5.6vw] absolute rounded-full flex justify-center items-center bg-[#FFF6A8]">
//                         <img src={user} alt="" className='w-[6.2vw] h-[6.2vw]' />

//                     </div>
//                 </div>
//                     :
//                     <img src={user} alt="" className={`cursor-pointer w-[6.2vw] h-[6.2vw]`} onClick={() => setCurrentLoc('user')} />}