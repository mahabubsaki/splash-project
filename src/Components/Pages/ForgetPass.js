import React, { useContext, useState } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import banner5 from '../Assets/Graphicf.svg'
import banner6 from '../Assets/Graphicasd.svg'
import style from '../../Styles/Forget.module.css'
import { VerificationPin } from 'react-verification-pin';
import { AppContext } from '../../App';

const ForgetPass = () => {
    const navigate = useNavigate()
    const [verification, setVerification] = useState(false)
    const { setSignPageLeft, forgetPageLeft, setForgetPageLeft } = useContext(AppContext)
    const [code, setCode] = useState("")
    const handleOnFinish = () => {
        navigate('/reset-password')
    }
    const handleResetEmail = (e) => {
        const email = e.target.email.value
        console.log(email);
        setVerification(true)
    }
    const handleNavigate = () => {
        setSignPageLeft(true)
        setForgetPageLeft(false)
        navigate('/sign-in')
    }
    return (
        <div className={`animate__animated animate__faster ${forgetPageLeft ? 'animate__fadeInLeftBig' : 'animate__fadeInRightBig'}`}>
            <div className="flex py-[3vh] items-center w-[93.6vw] ml-auto">
                <IoIosArrowBack className="text-[#665af0] text-[24px] cursor-pointer" onClick={handleNavigate}></IoIosArrowBack><p className="w-full text-center font-medium text-[24px] leading-[28px] text-[#232440]">Reset Password</p>
            </div>
            {verification ? <>
                <div className="px-[3.2vw] mb-[9.2vh] mt-[3.4vh]">
                    <img src={banner6} alt="" className="w-full" />
                </div>
            </> : <>
                <div className="px-[3.2vw] mb-[6vh]">
                    <img src={banner5} alt="" className="w-full" />
                </div>
            </>}
            {verification ? <>
                <div className="text-center">
                    <p className="text-[24px] leading-[42px] font-normal mb-[1.2vh]">Verify Your Code</p>
                    <p className="opacity-50 text-[14px] mb-[3.3vh]">Enter The Code Sent To Your Email</p>
                    <div className='mb-[5.6vh]'>
                        <VerificationPin
                            type="number"
                            autoFocus={true}
                            inputsNumber={4}
                            onChange={() => setCode('')}
                            status="process"
                            onFinish={(code) => setCode(code)}
                        />
                    </div>
                    <div className="mx-[6.4vw]">
                        <button className={`${style.GetCode} w-full py-[10px]`} onClick={handleOnFinish} type='submit' disabled={!code}>Verify Code</button>
                    </div>
                </div>
            </> : <>
                <div className="text-center">
                    <p className="text-[24px] leading-[42px] font-normal mb-[1.2vh]">Forget Password?</p>
                    <p className="opacity-50 text-[14px] mb-[3.3vh]">Enter The Email Associated with your account.</p>
                </div>
                <form autoComplete='off' onSubmit={handleResetEmail} className="px-[6.4vw]">
                    <input name="email" type="email" placeholder='Enter Your Email' id="phone" className={style.Input} required></input>
                    <button className={`${style.GetCode} w-full mt-[3.7vh]`} type='submit'>Get Code</button>
                </form>
            </>}
        </div>
    );
};

export default ForgetPass;