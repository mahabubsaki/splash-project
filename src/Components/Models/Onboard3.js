import React, { useContext, useEffect } from 'react';
import banner3 from '../Assets/Group 932 (1).svg'
import style from '../../Styles/Onboard.module.css'
import icon1 from '../Assets/Group 8registraa.svg'
import { useNavigate } from "react-router-dom";
import icon2 from '../Assets/Group 7sigigng.svg'
import { AppContext } from '../../App';
import coil from '../Assets/Group 10coil.svg'
import gbar from '../Assets/g22bar23.svg'

const Onboard3 = () => {
    const navigate = useNavigate()
    const { signInLeft, setSignPageLeft } = useContext(AppContext)
    useEffect(() => {
        setSignPageLeft(false)
    }, [setSignPageLeft])
    return (
        <div className={`animate__animated h-screen overflow-y-hidden ${signInLeft ? 'animate__fadeInLeftBig' : 'animate__fadeInRightBig'} animate__faster`}>
            <div className="mt-[13.308vh] mb-[7.124vh] h-[32.39vh] relative">
                <img src={banner3} alt="" className="w-full h-full" />
                <img src={coil} alt="" className='absolute top-[-32%]' />
                <img src={gbar} alt="" className='absolute top-[-16%] right-0' />
            </div>
            <div className="pl-[7.737vw] pr-[5.87vw]">
                <p className="text-[8.536vw] leading-[11.204vw] text-[#363640] font-medium mb-[3.63vh] pr-[1.87vw]">Are You <span className={style.Span3}>Ready?</span> Join with us</p>
                <p className="font-normal opacity-50 text-black text-[4vw] leading-[5.334vw]">Best and High Security Payment Gateway in Bangladesh with affordable Pricing</p>
            </div>
            <div className={`flex justify-between items-center px-[7.2vw] pt-[13.577vh] pb-[6.58vh] ${style.BottomSection2}`}>
                <button className={`${style.SignIn} flex items-center`} onClick={() => navigate('/sign-in')}><img src={icon2} alt="icon" className='w-[4.534vw] h-[5.67vw] mr-[3.467vw]' /> <span>Sign In</span></button>
                <button className={`${style.Register} flex items-center`} onClick={() => navigate('/register')}><img src={icon1} alt="icon" className='w-[3.7334vw] h-[4.667vw] mr-[4.5334vw]' /> <span>Registration</span></button>
                {/* <button className={`${style.SignIn} flex items-center`} onClick={() => navigate('/home')}><img src={icon1} alt="icon" className='mr-3' />Home</button> */}
            </div>
        </div>
    );
};

export default Onboard3;