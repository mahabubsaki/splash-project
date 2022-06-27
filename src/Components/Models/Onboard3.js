import React, { useContext, useEffect } from 'react';
import banner3 from '../Assets/Group 932.png'
import style from '../../Styles/Onboard.module.css'
import icon1 from '../Assets/Group 8.png'
import { useNavigate } from "react-router-dom";
import icon2 from '../Assets/Group 7233.png'
import { AppContext } from '../../App';

const Onboard3 = () => {
    const navigate = useNavigate()
    const { signInLeft, setSignPageLeft } = useContext(AppContext)
    useEffect(() => {
        setSignPageLeft(false)
    }, [])
    return (
        <div className={`animate__animated ${signInLeft ? 'animate__fadeInLeftBig' : 'animate__fadeInRightBig'} animate__faster`}>
            <div className="mt-[16.3vh] mb-[6.5vh]">
                <img src={banner3} alt="" className="w-full" />
            </div>
            <div className="px-[7.7vw]">
                <p className="text-[32px] font-medium leading-[42px] mb-[3.3vh]">Are You <span className={style.Span}>Ready?</span> Join with us</p>
                <p></p>
                <p className="font-normal opacity-50 text-[15px] leading-[19.53px]">Best and High Security Payment Gateway in Bangladesh with affordable Pricing</p>
            </div>
            <div className={`flex justify-between items-center px-[7.2vw] pt-[11.2vh] pb-[6vh] ${style.BottomSection2}`}>
                <button className={`${style.SignIn} flex items-center`} onClick={() => navigate('/sign-in')}><img src={icon2} alt="icon" className='mr-3' /> Sign In</button>
                <button className={`${style.SignIn} flex items-center`} onClick={() => navigate('/register')}><img src={icon1} alt="icon" className='mr-3' /> Registration</button>
            </div>
        </div>
    );
};

export default Onboard3;