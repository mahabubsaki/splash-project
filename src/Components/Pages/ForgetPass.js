import React, { useContext, useEffect, useRef, useState } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import banner5 from '../Assets/Graphicf.svg'
import banner6 from '../Assets/Graphicasd.svg'
import iconback from '../Assets/Iconback.svg'
import style from '../../Styles/Forget.module.css'
import { VerificationPin } from 'react-verification-pin';
import { AppContext } from '../../App';
export const x = setInterval(() => {
    const xs = document.querySelector('.sc-gKXOVf')
    const first = document.getElementById('inputVC-0')
    const second = document.getElementById('inputVC-1')
    const third = document.getElementById('inputVC-2')
    const fourth = document.getElementById('inputVC-3')
    if (xs) {
        xs.classList.add('hidden')
    }
    if (first) {
        first.style.setProperty('color', '#363640', 'important')
    }
    if (second) {
        second.style.setProperty('color', '#363640', 'important')
    }
    if (third) {
        third.style.setProperty('color', '#363640', 'important')
    }
    if (fourth) {
        fourth.style.setProperty('color', '#363640', 'important')
    }
}, 1)
const ForgetPass = () => {
    const navigate = useNavigate()
    const [verification, setVerification] = useState(false)
    const { setSignPageLeft, forgetPageLeft, setForgetPageLeft } = useContext(AppContext)

    const handleResetEmail = (e) => {
        const email = e.target.email.value
        setVerification(true)
    }
    const handleNavigate = () => {
        setSignPageLeft(true)
        setForgetPageLeft(false)
        navigate('/sign-in')
    }
    const secondRef = useRef()
    const thirdRef = useRef()
    const fourthRef = useRef()
    const [first, setFirst] = useState('')
    const [second, setSecond] = useState('')
    const [third, setThird] = useState('')
    const [fourth, setFourth] = useState('')
    const handleVerify = (e) => {
        e.preventDefault()
        // alert(first + second + third + fourth)
        navigate('/reset-password')
    }
    return (
        <div className={`animate__animated h-screen overflow-y-hidden animate__faster ${forgetPageLeft ? 'animate__fadeInLeftBig' : 'animate__fadeInRightBig'}`}>
            <div className={`pb-[3.226vh] pt-[3.8979vh] relative ${style.ForgetTop}`}>
                <img src={iconback} alt="" onClick={handleNavigate} className='absolute cursor-pointer z-[1] top-0 bottom-0 my-auto left-[6.4vw]' />
                <p className="w-full text-center font-medium text-[6.4vw] leading-[7.4667vw] text-[#232440] relative left-[2.1vw]">Reset Password</p>
            </div>
            {verification ? <>
                <div className="pl-[7.47vw] pr-[7.736vw] mb-[10.26vh] h-[22.26vh] mt-[3.764vh]">
                    <img src={banner6} alt="" className="w-full h-full bg-transparent" />
                </div>
            </> : <>
                <div className="px-[7.02vw] mb-[6.70vh] h-[29.697vh]">
                    <img src={banner5} alt="" className="w-full h-full bg-transparent" />
                </div>
            </>}
            {verification ? <>
                <div className="text-center">
                    <p className="text-[6.4vw] leading-[11.2vw] font-normal mb-[1.346vh] text-[#363640]">Verify Your Code</p>
                    <p className="opacity-50 pr-[11.76vw] pl-[13.6vw] text-[3.7334vw] leading-[4.8vw] mb-[6.722vh]">Enter The Email Associated with your account.</p>
                    <form onSubmit={handleVerify}>
                        <div className='flex mb-[6.1827vh] pl-[12.5334vw] pr-[12.8vw]'>
                            <input value={first} onChange={(e) => {
                                if ((Number(e.target.value) >= 0) && (e.target.value.length > 0)) {
                                    setFirst(e.target.value)
                                    secondRef.current.focus()
                                }
                                else {
                                    setFirst('')
                                }
                            }} maxLength={1} type="text" name="" className='w-[13.334vw] text-[6.4vw] font-medium leading-[11.2vw] py-[0.5334vw] px-[4.2667vw] border border-[#E5E5E5] focus:outline-none bg-[#F8F8F8] rounded-[10px]' />

                            <input ref={secondRef} value={second} onChange={(e) => {
                                if ((Number(e.target.value) >= 0) && (e.target.value.length > 0)) {
                                    setSecond(e.target.value)
                                    thirdRef.current.focus()
                                }
                                else {
                                    setSecond('')
                                }
                            }} maxLength={1} type="text" name="" className='w-[13.334vw] text-[6.4vw] font-medium leading-[11.2vw] py-[0.5334vw] px-[4.2667vw] border border-[#E5E5E5] mx-[24px] focus:outline-none bg-[#F8F8F8] rounded-[10px]' />

                            <input ref={thirdRef} onChange={(e) => {
                                if ((Number(e.target.value) >= 0) && (e.target.value.length > 0)) {
                                    setThird(e.target.value)
                                    fourthRef.current.focus()
                                } else {
                                    setThird('')
                                }
                            }} maxLength={1} value={third} type="text" name="" className='w-[13.334vw] text-[6.4vw] font-medium leading-[11.2vw] py-[0.5334vw] px-[4.2667vw] border border-[#E5E5E5] mr-[24px] focus:outline-none bg-[#F8F8F8] rounded-[10px]' />

                            <input ref={fourthRef} onChange={(e) => {
                                if ((Number(e.target.value) >= 0) && (e.target.value.length > 0)) {
                                    setFourth(e.target.value)
                                } else {
                                    setFourth('')
                                }
                            }} maxLength={1} value={fourth} type="text" name="" className='w-[13.334vw] text-[6.4vw] font-medium leading-[11.2vw] py-[0.5334vw] px-[4.2667vw] focus:outline-none bg-[#F8F8F8] rounded-[10px] border border-[#E5E5E5]' />

                        </div>
                        <div className="mx-[6.4vw]">
                            <button className={`${style.ResetPassword}`} type='submit' disabled={!((first.length > 0) && (second.length > 0) && (third.length > 0) && (fourth.length > 0))}>Reset Password</button>
                        </div>
                    </form>
                </div>
            </> : <>
                <div className="text-center">
                    <p className="text-[6.4vw] leading-[11.2vw] text-[#363640] font-normal mb-[1.34vh]">Forget Password ?</p>
                    <p className="opacity-50 text-black px-[12.67vw] text-[3.7334vw] leading-[4.8vw] mb-[3.63vh]">Enter The Email Associated with your account.</p>
                </div>
                <form autoComplete='off' onSubmit={handleResetEmail} className="px-[6.4vw]">
                    <input name="email" type="email" placeholder='Enter Your Email' id="phone" className={style.Input} required></input>
                    <button className={`${style.GetCode} w-full mt-[4.034vh]`} type='submit'>Get Code</button>
                </form>
            </>}
        </div>
    );
};

export default ForgetPass;
