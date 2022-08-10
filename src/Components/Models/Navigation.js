import React, { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import home from '../Assets/Group 192.svg'
import pay from '../Assets/Payment Linkp.svg'
import search from '../Assets/Icona.svg'
import user from '../Assets/User.svg'
import curve from '../Assets/Vector 29ve.png'
import svg192 from '../Assets/192.svg'
import styles from '../../Styles/Navigation.module.css'
import { AppContext } from '../../App';
const Navigation = () => {
    const { processing } = useContext(AppContext)
    const navigate = useNavigate()
    const { pathname } = useLocation()
    const { currLoc, setCurrentLoc } = useContext(AppContext)
    return (
        <div className={`${(pathname.includes('home') || pathname.includes('dummy') || pathname.includes('withdraw')) ? 'fixed' : 'hidden'} bottom-0 left-0 right-0 bg-transparent flex justify-center items-end z-20`}>
            <div className={styles.mainbox}>
                {(currLoc.includes('home') || currLoc.includes('pay') || currLoc.includes('search') || currLoc.includes('user')) && <div className={`${styles.first} `}>
                    <div className={`${styles.activeicon} ${currLoc === 'home' && 'left-0'} ${currLoc === 'pay' && 'left-[141px]'} ${currLoc === 'search' && 'left-0'} ${currLoc === 'user' && 'left-0'}`} >
                        <div className={`${styles.activeiconcircle} `}>
                            {currLoc === 'home' && <img src={svg192} alt="" className={styles.activeiconmain} />}
                            {currLoc === 'pay' && <img src={pay} alt="" className={styles.activeiconmain} />}
                            {currLoc === 'search' && <img src={search} alt="" className={styles.activeiconmain} />}
                            {currLoc === 'user' && <img src={user} alt="" className={styles.activeiconmain} />}
                        </div>
                        <svg className={`${styles.activesvg}`} xmlns="http://www.w3.org/2000/svg" width="149" height="49" viewBox="0 0 149 49" fill="none">
                            <path d="M68.1206 49C28.1802 49 29.9576 0.102585 11.4851 0.102585H136.798C141.548 -0.128232 149 0.102585 149 0.102585H136.798C101.064 1.83908 108.061 49 68.1206 49Z" fill="#F9F9FF" />
                        </svg>
                    </div>
                </div>}
                <div className={`${styles.second} ${processing ? styles.processOk : styles.processNotOk} ${pathname.includes('withdraw') ? 'h-[61px]' : 'h-[76px]'} bg-opacity-20`}>
                    <div className={`${styles.iconsection}`} onClick={() => {
                        navigate('/home')
                        setCurrentLoc('home')
                    }}>
                        <img src={home} alt="" className={`${currLoc === 'home' && styles.unactiveicon}`} />
                    </div>
                    <div className={styles.iconsection} onClick={() => setCurrentLoc('pay')}>
                        <img src={pay} alt="" className={`${currLoc === 'pay' && styles.unactiveicon}`} />
                    </div>
                    <div className={styles.iconsection} onClick={() => setCurrentLoc('search')}>
                        <img src={search} alt="" className={`w-[26px] h-[26px] ${currLoc === 'search' && styles.unactiveicon}`} />
                    </div>
                    <div className={styles.iconsection} onClick={() => setCurrentLoc('user')}>
                        <img src={user} alt="" className={`w-[24px] h-[26px] ${currLoc === 'user' && styles.unactiveicon}`} />
                    </div>
                </div>
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