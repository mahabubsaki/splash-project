import React, { useState } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import banner5 from '../Assets/Graphic.png'
import banner6 from '../Assets/asd.png'
import style from '../../Styles/Forget.module.css'
import { VerificationPin } from 'react-verification-pin';

const ForgetPass = () => {
    const navigate = useNavigate()
    const [verification, setVerification] = useState(false)
    const [status, setStatus] = useState("process")
    const handleOnFinish = (code) => {
        setStatus("wait");
        if (code === "1111") {
            setTimeout(() => {
                setStatus("error");
            }, 3000);
        } else {
            setTimeout(() => {
                setStatus("success");
                navigate('/reset-password')
            }, 3000);
        }
    }
    const handleResetEmail = (e) => {
        const email = e.target.email.value
        console.log(email);
        setVerification(true)
    }

    return (
        <div className="animate__animated animate__backInUp">
            <div className="flex py-[3vh] items-center w-[93.6vw] ml-auto">
                <IoIosArrowBack className="text-[#665af0] text-[24px] cursor-pointer" onClick={() => navigate('/sign-in')}></IoIosArrowBack><p className="w-full text-center font-medium text-[24px] leading-[28px] text-[#232440]">Reset Password</p>
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
                    <VerificationPin
                        type="number"
                        autoFocus={true}
                        inputsNumber={4}
                        status={status}
                        onFinish={handleOnFinish}
                    />
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