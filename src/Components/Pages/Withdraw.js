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
import arrowwith from '../Assets/Vector 38arrowwith.svg'
import iconback from '../Assets/Iconback.svg'
import SwipeButtons from './SwipeButtons';
import InputRange from 'react-input-range';
import WithdrawProccessModal from '../Models/WithdrawProccessModal';

const Withdraw = () => {
    const { processing, setProcessing } = useContext(AppContext)
    const range = useRef()
    const [money, setMoney] = useState(5000)
    const [actualMoney, setActualMoney] = useState('5,000')
    const { bankOwner, provider, setProvider, setNavOpen, setCurrentLoc, openPopUp, setOpenPopUp } = useContext(AppContext)
    const navigate = useNavigate()
    const handleBack = () => {
        navigate('/home')
    }
    useEffect(() => {
        setNavOpen(false)
        setCurrentLoc('')
    }, [])
    useEffect(() => {
        if (money >= 1000) {
            const moneys = money.toString().split('')
            moneys.splice(-3, 0, ',')
            setActualMoney(moneys.join(''))
        }
    }, [money])
    const handleSetInput = (value) => {
        setMoney(value)
        range.current.value = { min: 0, max: value }
    }
    const handleSetProvider = (value) => {
        setProvider(value)
        setOpenPopUp(false)
    }
    return (
        <>
            {processing && <WithdrawProccessModal />}
            <div className="animate__animated animate__fadeInRightBig animate__faster relative overflow-hidden">
                <div className={`absolute duration-200 ${openPopUp ? 'bottom-[-3vh]' : 'bottom-[-55.1075vh] overflow-y-visible'} h-[55.1075vh] w-full rounded-tl-[50px] rounded-tr-[50px] bg-white border border-[#F8B6B6] z-20 px-[25px] pt-[12px]`}>
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
                <div className={`py-[3.49463vh] mb-[1.747vh] relative ${style.Withdraw}`}>
                    <img src={iconback} alt="" onClick={handleBack} className='absolute cursor-pointer top-0 bottom-0 my-auto left-[6.4vw]' />
                    <p className="w-full text-center font-medium text-[6.4vw] leading-[7.4667vw] text-[#232440]">Withdraw</p>
                </div>
                <div className={`mx-[4.8vw] flex justify-between bg-[#4F1EE6] pr-[4.8vw] pl-[5.066vw] py-[2.083vh] rounded-[10px] items-center text-white mb-[2.688vh]`}>
                    <p className="text-[3.733vw] leading-[7.466vw] text-white text-opacity-80">Balance</p>
                    <img src={x} alt="" />
                    <p className="text-[4vw] leading-[7.466vw] font-bold">18,493.00 ৳</p>
                </div>

                <div className="ml-[5.6vw] mr-[5.33vw] mb-[2.688vh]">
                    <p className="text-[4.266vw] font-medium leading-[7.4667vw] mb-[2.01vh] text-[#232440]">Withdraw Method</p>
                    <div className={`${!bankOwner && 'border border-[#F8B6B6]'} rounded-[10px] pl-[3.4667vw] pr-[2.667vw] py-[0.942vh] flex justify-between items-center bg-[#EDEDFF] mb-[1.883vh]`}>
                        <div className="flex items-center justify-center">
                            <img src={bank} alt="" />
                            <div className="flex flex-col ml-[4.5vw]">
                                <p className="text-[3.7334vw] text-[#232440]">Bank Transfer</p>
                                <p className="text-[2.667vw] text-[#287D00]">24 Hour Approx</p>
                            </div>
                        </div>
                        <button className={`first-letter:btn bg-[white] text-[#232440] flex items-center px-[3.2vw] rounded-[5px] leading-[7.4667vw] text-[3.2vw]`}>
                            <span className="mr-[10px]" onClick={() => navigate('/add-bank')}>{bankOwner ? bankOwner : 'Add Bank'}</span> <img src={arrowwith} alt="" />
                        </button>
                    </div>
                    <div className={`${(openPopUp || provider) ? 'border border-[#F8B6B6]' : 'border border-[#FFF6A8]'} rounded-[10px] pl-[3.46vw] pr-[2.67vw] py-[0.942vh] flex justify-between items-center bg-[#FFF6A8]`}>
                        <div className="flex items-center justify-center">
                            <img src={mobile} alt="" />
                            <div className="flex flex-col ml-[4.5vw]">
                                <p className="text-[3.7334vw] text-black">Mobile Banking</p>
                                <p className="text-[2.667vw] text-[#287D00]">Maximum 24 Hour</p>
                            </div>
                        </div>
                        <button className="btn bg-[white] text-[#232440] flex items-center px-[4.8vw] rounded-[5px] leading-[7.4667vw] text-[3.2vw]" onClick={() => setOpenPopUp(!openPopUp)}>
                            <span className="mr-[10px]">{provider ? provider : 'Select'}</span> <img src={arrowwith} alt="" />
                        </button>
                    </div>
                </div>
                <div>
                    <p className="text-[4.2667] ml-[6.4vw] leading-[7.4667vw] font-medium mb-[3vh] text-[#232440]">Choose Amount</p>
                    <p className="text-center mb-[3vh] text-[6.667vw] leading-[7.4667vw] text-[#232440]">{money >= 1000 ? actualMoney : money} BDT</p>
                    <div className="w-[88.53%] mx-auto">
                        <RangeSlider id="range-slider"
                            defaultValue={[0, money]}
                            ref={range}
                            max={500000}
                            step={100}
                            thumbsDisabled={[true, false]}
                            rangeSlideDisabled={true}
                            onInput={value => setMoney(value[1])}
                        />

                        <div className="flex justify-between text-[#232440
] opacity-50 mt-[4px] text-[3.2vw] leading-[7.4667vw]">
                            <p className="relative left-[-0.8vw]">0 ৳</p>
                            <p>500,000 ৳</p>
                        </div>
                    </div>
                    {/* 2.41 */}
                    <div className="flex py-[1.25vh] justify-center leading-[7.4667vw] text-[3.2vw]">
                        <button className={`rounded-[5px] px-[4.2667vw] mr-[4vw] duration-500 border border-black border-opacity-50 ${money === 100 ? 'relative translate-y-[-1.344vh] bg-[#FFF6A8] z-[1]' : 'bg-[#FDFDFD]'}`} onClick={() => handleSetInput(100)}><span>100</span><span className="ml-[2px]">৳</span></button>
                        <button className={`rounded-[5px] px-[3.8667vw] duration-500 mr-[5.8667vw] border border-black border-opacity-50 ${money === 500 ? 'relative translate-y-[-1.344vh] bg-[#FFF6A8] z-[1]' : 'bg-[#FDFDFD]'}`} onClick={() => handleSetInput(500)}><span>500</span><span className="ml-[2px]">৳</span></button>
                        <button className={`rounded-[5px] px-[3.2vw] duration-500 mr-[3.2vw] border border-black border-opacity-50 ${money === 1000 ? 'relative translate-y-[-1.344vh] bg-[#FFF6A8] z-[1]' : 'bg-[#FDFDFD]'}`} onClick={() => handleSetInput(1000)}><span>1000</span><span className="ml-[2px]">৳</span></button>
                        <button className={`rounded-[5px] px-[4.1334vw] mr-[3.6vw] duration-500 border border-black border-opacity-50 ${money === 5000 ? 'relative translate-y-[-1.344vh] bg-[#FFF6A8] z-[1]' : 'bg-[#FDFDFD]'}`} onClick={() => handleSetInput(5000)}><span>5000</span><span className="ml-[2px]">৳</span></button>
                        <button className={`rounded-[5px] px-[2.1334vw] duration-500 border border-black border-opacity-50 ${money === 10000 ? 'relative translate-y-[-1.344vh] bg-[#FFF6A8] z-[1]' : 'bg-[#FDFDFD]'}`} onClick={() => handleSetInput(10000)}><span>10000</span><span className="ml-[2px]">৳</span></button>
                    </div>
                </div>
                <SwipeButtons setProcessing={setProcessing} />
            </div>
        </>

    );
};

export default Withdraw;