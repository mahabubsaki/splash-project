import React from 'react';
import okicon from '../Assets/ICON CHECKbiok.svg'
import dots from '../Assets/DECORATIONsd.png'
import style from '../../Styles/Forget.module.css'
import { useNavigate } from 'react-router-dom';

const WithdrawSuccessModal = () => {
    const navigate = useNavigate()
    return (
        <div className="fixed inset-0 bg-black bg-opacity-10 backdrop-blur-[1.5px] flex justify-center items-center z-20">
            <div className="animate__animated animate__backInDown rounded-lg bg-white w-[90%] h-[200px] relative px-2 pt-[60px] pb-[20px]">
                <img src={okicon} alt="" className='absolute top-[-50px] left-[36.5%]' />
                <img src={dots} alt="" className='absolute top-[-10px] left-[33%]' />

                <div className="text-center">
                    <p className="text-[22px] font-medium mb-2">Bank Adding successful</p>
                    <p className="opacity-50 text-[14px]mb-2">Congratulations on your successful Bank Adding</p>
                    <span className={`cursor-pointer text-[#1001FF] opacity-[79%] ${style.Span}`} onClick={() => navigate('/withdraw')}>Continue Process</span>
                </div>
            </div>
        </div>
    );
};

export default WithdrawSuccessModal;