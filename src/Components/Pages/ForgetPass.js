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
        alert(code)
        setStatus("wait");

        // simulating a search on your api
        if (code === "1111") {
            setTimeout(() => {
                setStatus("error");
            }, 3000);
        } else {
            setTimeout(() => {
                setStatus("success");
            }, 3000);
        }
    }
    const handleResetEmail = (e) => {
        const email = e.target.email.value
        setVerification(true)
    }
    return (
        <div className="h-screen px-7 animate__animated animate__backInUp">
            <div className="flex my-2 items-center">
                <IoIosArrowBack className={style.BackLogo} onClick={() => navigate('/sign-in')}></IoIosArrowBack><p className={`w-full text-center ${style.ForgetText}`}>Reset Password</p>
            </div>
            <div className="h-[240px] mb-2">
                <img src={verification ? banner6 : banner5} alt="" className="w-[90%] h-full" />
            </div>
            {verification ? <>
                <div className="mt-2 text-center mb-5">
                    <p className="text-[24px] font-normal mb-2">Verify Your Code</p>
                    <p className="opacity-50">Enter The Code Sent To Your Email</p>
                    <VerificationPin
                        type="number"
                        autoFocus={true}
                        inputsNumber={4}
                        status={status}
                        onFinish={handleOnFinish}
                    />
                </div>
            </> : <>
                <div className="mt-2 text-center mb-5">
                    <p className="text-[24px] font-normal mb-2">Forget Password?</p>
                    <p className="opacity-50">Enter The Email Associated with your account.</p>
                </div>
                <form onSubmit={handleResetEmail}>
                    <input name="email" type="email" placeholder='Enter Your Email' id="phone" className={style.Input} required></input>
                    <button className={`${style.GetCode} w-full py-[10px]`} type='submit'>Get Code</button>
                </form>
            </>}
        </div>
    );
};

export default ForgetPass;