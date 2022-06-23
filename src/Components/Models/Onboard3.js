import React from 'react';
import banner3 from '../Assets/Group 932.png'
import style from '../../Styles/Onboard-first.module.css'
import icon1 from '../Assets/Group 8.png'
import { useNavigate } from "react-router-dom";
import icon2 from '../Assets/Group 7233.png'

const Onboard3 = () => {
    const navigate = useNavigate()
    return (
        <div className={`h-screen ${style.Page} animate__animated animate__backInRight`}>
            <div className="h-1/2 py-3">
                <img src={banner3} alt="" className="w-full h-full" />
            </div>
            <div className={`h-1/2 py-4 px-6 ${style.BottomSection2} flex flex-col justify-between`}>
                <div>
                    <p className={`${style.Heading} mb-4`}>Are You <span className={style.Span}>Ready?</span> Join with us</p>
                    <p></p>
                    <p className={style.Description}>Best and High Security Payment Gateway in Bangladesh with affordable Pricing</p>
                </div>
                <div className="flex justify-between items-center">
                    <button className={`${style.SignIn} flex items-center`} onClick={() => navigate('/sign-in')}><img src={icon2} alt="icon" className='mr-3' /> Sign In</button>
                    <button className={`${style.SignIn} flex items-center`}><img src={icon1} alt="icon" className='mr-3' /> Registration</button>
                </div>
            </div>
        </div>
    );
};

export default Onboard3;