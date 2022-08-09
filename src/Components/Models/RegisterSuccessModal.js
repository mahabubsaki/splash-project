import React from 'react';
import okicon from '../Assets/ICON CHECKbiok.svg'
import dots from '../Assets/DECORATIONsd.png'
import style from '../../Styles/Forget.module.css'
import { useNavigate } from 'react-router-dom';

const RegisterSuccssModal = () => {
    const navigate = useNavigate()
    return (
        <div className="fixed inset-0 bg-black bg-opacity-10 backdrop-blur-[1.5px] flex justify-center items-center z-20">
            <div className="animate__animated animate__backInDown rounded-lg bg-white w-[90%] h-[178px] relative px-2 pt-[60px] pb-[20px]">
                <img src={okicon} alt="" className='absolute top-[-50px] left-[36.5%]' />
                <img src={dots} alt="" className='absolute top-[-10px] left-[33%]' />

                <div className="text-center">
                    <p className="text-[5.8667vw] leading-[7.4667vw] font-medium mb-2">Password Reset successful</p>
                    <p className="opacity-50 text-[3.7334vw] mb-[7px] px-[6.9334vw] leading-5">Congratulations on your successful Password Reset</p>
                    <span className={`cursor-pointer text-[#1001FF] text-[3.7334vw] leading-5 text-opacity-[79%] ${style.Span}`} onClick={() => navigate('/sign-in')}>Sign In</span>
                </div>
            </div>
        </div>
    );
};

export default RegisterSuccssModal;