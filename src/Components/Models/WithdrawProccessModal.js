import React, { useContext } from 'react';
import okicon from '../Assets/ICON CHECKprocessok.svg'
import dots from '../Assets/DECORATIONsd.png'
import style from '../../Styles/Forget.module.css'
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../App';

const WithdrawProccessModal = () => {
    const navigate = useNavigate()
    const { setProcessing } = useContext(AppContext)
    return (
        <div className="fixed inset-0 bg-black bg-opacity-10 backdrop-blur-[1.5px] flex justify-center items-center z-20">
            <div className="animate__animated animate__backInDown rounded-[8px] bg-white w-[87.2%] relative px-2 pt-[60px] top-[1.1vh] pb-[20px]">
                <img src={okicon} alt="" className='absolute top-[-50px] left-[36.5%]' />
                <img src={dots} alt="" className='absolute top-[-10px] left-[33%]' />

                <div className="text-center">
                    <p className="text-[5.8667vw] leading-[7.4667vw] font-medium mb-2">Withdraw Processing</p>
                    <p className="opacity-50 text-[3.7334vw] mb-[7px] px-[6.9334vw] leading-5">Please wait 24 hour for review your request</p>
                    <span className={`cursor-pointer text-[3.7334vw] leading-5 text-[#1001FF] text-opacity-[79%] ${style.Span2}`} onClick={() => {
                        setProcessing(false)
                        navigate('/home')
                    }}>Home</span>
                </div>
            </div>
        </div>
    );
};

export default WithdrawProccessModal;