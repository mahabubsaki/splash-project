import React, { useContext, useRef, useState } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import ReactSlider from 'react-slider'
import style from '../../Styles/SignIn.module.css'
import { MdArrowForwardIos } from 'react-icons/md'
import x from '../Assets/Vector 36vc.svg'
import bank from '../Assets/Icon12121313133.svg'
import success from '../Assets/Icon Checksuccess.png'
import mobile from '../Assets/Icon45454.svg'
import bkash from '../Assets/Bkas Iconbkas.svg'
import nagad from '../Assets/Nogod Iconnajad.svg'
import ok from '../Assets/Bkas Iconok.svg'
import rkt from '../Assets/Nogod Iconrkt.svg'
import { AppContext } from '../../App';
import SwipeButtons from './SwipeButtons';

const Withdraw = () => {
    const [money, setMoney] = useState(5000)
    const { bankOwner, provider, setProvider } = useContext(AppContext)
    const [openPopUp, setOpenPopUp] = useState(false)
    const navigate = useNavigate()
    const handleBack = () => {
        navigate('/home')
    }
    const handleSetInput = (value) => {
        setMoney(value)
        document.getElementById('range').value = value
    }
    const handleSetProvider = (value) => {
        setProvider(value)
        setOpenPopUp(false)
    }
    return (
        <div className="animate__animated animate__fadeInRightBig animate__faster min-h-screen relative overflow-hidden">
            <div className={`absolute duration-200 ${openPopUp ? 'bottom-[0vh]' : 'bottom-[-50vh]'} h-[50vh] w-full rounded-tl-[50px] rounded-tr-[50px] bg-white border border-[#F8B6B6] z-20 px-[25px] pt-[12px]`}>
                <div className="flex justify-center">
                    <span className={`relative text-[18px] mb-[3vh] font-medium ${style.popup}`}>Select Mobile Banking </span>
                </div>
                <div className="flex justify-between">
                    <button className="w-1/2 mb-[3vh] p-[9px] mr-[6.6vw] border border-[#F8B6B6] flex items-center bg-[#FFF6A8] rounded-[5px] relative" onClick={() => handleSetProvider('BKash')}><img src={bkash} alt="" /><span className="ml-[13px]">Bkash</span>
                        {provider === 'BKash' && <img src={success} alt="" className="absolute top-[5px] right-[5px]" />}
                    </button>
                    <button className="w-1/2 mb-[3vh] p-[9px] border border-[#F8B6B6] flex items-center bg-[#EDEDFF] rounded-[5px] relative" onClick={() => handleSetProvider('Nagad')}><img src={nagad} alt="" /><span className="ml-[13px]">Nagad</span>  {provider === 'Nagad' && <img src={success} alt="" className="absolute top-[5px] right-[5px]" />}</button>
                </div>
                <div className="flex justify-between">
                    <button className="w-1/2 mb-[3vh] p-[9px] mr-[6.6vw] border border-[#F8B6B6] flex items-center bg-[#EDEDFF] rounded-[5px] relative"><img src={ok} alt="" /><span className="ml-[13px]" onClick={() => handleSetProvider('OK Wallet')}>OK Wallet</span>{provider === 'OK Wallet' && <img src={success} alt="" className="absolute top-[5px] right-[5px]" />}</button>
                    <button className="w-1/2 mb-[3vh] p-[9px] border border-[#F8B6B6] flex items-center bg-[#FFF6A8] rounded-[5px] relative" onClick={() => handleSetProvider('Rocket')}><img src={rkt} alt="" /><span className="ml-[13px]">Rocket</span>
                        {provider === 'Rocket' && <img src={success} alt="" className="absolute top-[5px] right-[5px]" />}</button>
                </div>
            </div>
            <div className="flex py-[3vh] items-center w-[93.6vw] ml-auto mb-[1.6vh]">
                <IoIosArrowBack className="text-[#665af0] text-[24px] cursor-pointer" onClick={handleBack}></IoIosArrowBack><p className="w-full text-center font-medium text-[24px] leading-[28px] text-[#232440]">Withdraw</p>
            </div>
            <div className={`mx-[4.8vw] flex justify-between bg-[#4F1EE6] px-[5vw] py-[2vh] rounded-md items-center text-white mb-[2.5vh]`}>
                <p className="text-[14px] leading-[28px]">Balance</p>
                <img src={x} alt="" />
                <p className="text-[15px] font-bold">18,493.00 ৳</p>
            </div>
            <div className="mx-[4.8vw]">
                <p className="text-[16px] font-medium leading-[28px] mb-[1.9vh]">Withdraw Method</p>
                <div className="border border-[#F8B6B6] rounded-[10px] px-[2.5vh] py-[1.5vh] flex justify-between items-center bg-[#EDEDFF] mb-[1.8vh]">
                    <div className="flex items-center justify-center">
                        <img src={bank} alt="" />
                        <div className="flex flex-col ml-[4.5vw]">
                            <p className="text-[14px]">Bank Transfer</p>
                            <p className="text-[10px] text-[#287D00]">24 Hour Approx</p>
                        </div>
                    </div>
                    <button className="btn bg-[white] flex items-center p-[8px] rounded-md text-[12px]">
                        <span className="mr-[8px]" onClick={() => navigate('/add-bank')}>{bankOwner ? bankOwner : 'Add Bank'}</span> <MdArrowForwardIos />
                    </button>
                </div>
                <div className="border border-[#FFF6A8] rounded-[10px] px-[2.5vh] py-[1.5vh] flex justify-between items-center bg-[#FFF6A8] mb-[1.8vh]">
                    <div className="flex items-center justify-center">
                        <img src={mobile} alt="" />
                        <div className="flex flex-col ml-[4.5vw]">
                            <p className="text-[14px]">Mobile Banking</p>
                            <p className="text-[10px] text-[#287D00]">Maximum 24 Hour</p>
                        </div>
                    </div>
                    <button className="btn bg-[white] flex items-center px-[14px] py-[8px] rounded-md text-[12px]" onClick={() => setOpenPopUp(!openPopUp)}>
                        <span className="mr-[8px]">{provider ? provider : 'Select'}</span> <MdArrowForwardIos />
                    </button>
                </div>
            </div>
            <div className="mx-[4.8vw] mt-[3vh]">
                <p className="text-[16px] font-medium mb-[2.2vh]">Choose Amount</p>
                <p className="text-center text-[25px] mb-[2.2vh]">{money} BDT</p>
                <input id='range' type="range" defaultValue="5000" step="100" min="0" max="50000" className='duration-1000' onChange={(e) => setMoney(e.target.value)} />
                <div className="flex justify-between text-[#232440
] opacity-50 text-[12px] mb-[4.5vh]">
                    <p>0 ৳</p>
                    <p>50,000 ৳</p>
                </div>
                <div className="flex flex-wrap justify-center">
                    <button className={`p-[10px] m-[8px] rounded-[10px] border ${money === 100 && 'relative translate-y-[-10px] bg-[#FFF6A8] duration-500'}`} onClick={() => handleSetInput(100)}>100 ৳</button>
                    <button className={`p-[10px] m-[8px] rounded-[10px] border ${money === 500 && 'relative translate-y-[-10px] bg-[#FFF6A8] duration-500'}`} onClick={() => handleSetInput(500)}>500 ৳</button>
                    <button className={`p-[10px] m-[8px] rounded-[10px] border ${money === 1000 && 'relative translate-y-[-10px] bg-[#FFF6A8] duration-500'}`} onClick={() => handleSetInput(1000)}>1000 ৳</button>
                    <button className={`p-[10px] m-[8px] rounded-[10px] border ${money === 5000 && 'relative translate-y-[-10px] bg-[#FFF6A8] duration-500'}`} onClick={() => handleSetInput(5000)}>5000 ৳</button>
                    <button className={`p-[10px] m-[8px] rounded-[10px] border ${money === 10000 && 'relative translate-y-[-10px] bg-[#FFF6A8] duration-500'}`} onClick={() => handleSetInput(10000)}>10000 ৳</button>
                </div>
            </div>
            <SwipeButtons />
        </div>
    );
};

export default Withdraw;