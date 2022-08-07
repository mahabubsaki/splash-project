import React, { useContext, useEffect, useRef, useState } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
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
import RangeSlider from 'react-range-slider-input';
import iconback from '../Assets/Iconback.svg'
import SwipeButtons from './SwipeButtons';
import InputRange from 'react-input-range';

const Withdraw = () => {
    const range = useRef()
    const [money, setMoney] = useState(5000)
    const { bankOwner, provider, setProvider, navOpen, setNavOpen } = useContext(AppContext)
    const [openPopUp, setOpenPopUp] = useState(false)
    const navigate = useNavigate()
    const handleBack = () => {
        navigate('/home')
    }
    useEffect(() => {
        setNavOpen(false)
    }, [])
    const handleSetInput = (value) => {
        setMoney(() => value)
        range.current.value = { min: 0, max: value }
    }
    const handleSetProvider = (value) => {
        setProvider(value)
        setOpenPopUp(false)
    }
    return (
        <div className="animate__animated animate__fadeInRightBig animate__faster relative overflow-hidden">
            <div className={`absolute duration-200 ${openPopUp ? 'bottom-[0vh]' : 'bottom-[-53vh] overflow-y-visible'} h-[53vh] w-full rounded-tl-[50px] rounded-tr-[50px] bg-white border border-[#F8B6B6] z-20 px-[25px] pt-[12px]`}>
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
            <div className={`py-[27px] mb-[13px] relative ${style.Withdraw}`}>
                <img src={iconback} alt="" onClick={handleBack} className='absolute top-0 bottom-0 my-auto left-[6.4vw]' />
                <p className="w-full text-center font-medium text-[24px] leading-[28px] text-[#232440]">Withdraw</p>
            </div>
            <div className={`mx-[4.8vw] flex justify-between bg-[#4F1EE6] px-[5vw] py-[14px] rounded-md items-center text-white mb-[20px]`}>
                <p className="text-[14px] leading-[28px] text-white text-opacity-80">Balance</p>
                <img src={x} alt="" />
                <p className="text-[15px] font-bold">18,493.00 ৳</p>
            </div>

            <div className="mx-[4.8vw]">
                <p className="text-[16px] font-medium leading-[28px] mb-[15px] text-[#232440]">Withdraw Method</p>
                <div className={`${!bankOwner && 'border border-[#F8B6B6]'} rounded-[10px] pl-[3.46vw] pr-[2.67vw] py-[12px] flex justify-between items-center bg-[#EDEDFF] mb-[15px]`}>
                    <div className="flex items-center justify-center">
                        <img src={bank} alt="" />
                        <div className="flex flex-col ml-[4.5vw]">
                            <p className="text-[14px] text-[#232440]">Bank Transfer</p>
                            <p className="text-[10px] text-[#287D00]">24 Hour Approx</p>
                        </div>
                    </div>
                    <button className={`first-letter:btn bg-[white] text-[#232440] flex items-center p-[8px] rounded-md text-[12px]`}>
                        <span className="mr-[8px]" onClick={() => navigate('/add-bank')}>{bankOwner ? bankOwner : 'Add Bank'}</span> <MdArrowForwardIos />
                    </button>
                </div>
                <div className={`${(openPopUp || provider) ? 'border border-[#F8B6B6]' : 'border border-[#FFF6A8]'} rounded-[10px] pl-[3.46vw] pr-[2.67vw] py-[12px] flex justify-between items-center bg-[#FFF6A8] mb-[20px]`}>
                    <div className="flex items-center justify-center">
                        <img src={mobile} alt="" />
                        <div className="flex flex-col ml-[4.5vw]">
                            <p className="text-[14px] text-black">Mobile Banking</p>
                            <p className="text-[10px] text-[#287D00]">Maximum 24 Hour</p>
                        </div>
                    </div>
                    <button className="btn bg-[white] text-[#232440] flex items-center px-[14px] py-[8px] rounded-md text-[12px]" onClick={() => setOpenPopUp(!openPopUp)}>
                        <span className="mr-[8px]">{provider ? provider : 'Select'}</span> <MdArrowForwardIos />
                    </button>
                </div>
            </div>
            <div className="mx-[4.8vw] mt-[3vh] mb-[3.63vh]">
                <p className="text-[16px] font-medium mb-[2.2vh]">Choose Amount</p>
                <p className="text-center text-[25px] mb-[2.2vh]">{money.toString().split('').splice(-3)} {money} BDT</p>
                <div className="w-full border">
                    <RangeSlider id="range-slider"
                        defaultValue={[0, money]}
                        ref={range}
                        max={500000}
                        step={100}
                        thumbsDisabled={[true, false]}
                        rangeSlideDisabled={true}
                        onInput={value => setMoney(value[1])}
                    />
                </div>
                <div className="flex justify-between text-[#232440
] opacity-50 text-[12px] mb-[4.5vh]">
                    <p>0 ৳</p>
                    <p>500,000 ৳</p>
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