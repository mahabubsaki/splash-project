import React, { useState } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import banner7 from '../Assets/g10.png'
import style from '../../Styles/Forget.module.css'
import { useNavigate } from 'react-router-dom';
import hide from '../Assets/Hide - Bold 20px.svg'
import show from '../Assets/Show - Bold 20px.svg'
import ResetSuccssModal from '../Models/ResetSuccssModal';

const ResetPass = () => {
    const [showPass, setShowPass] = useState(false)
    const [showPass1, setShowPass1] = useState(false)
    const [done, setDone] = useState(false)
    const navigate = useNavigate()
    const handleLogin = (e) => {
        e.preventDefault()
        const password = e.target.password.value
        const confirm = e.target.confirm.value
        if (password === confirm) {
            setDone(true)
        }
    }
    return (
        <>
            {done && <ResetSuccssModal />}
            <div className="animate__animated animate__backInUp z-10">
                <div className="flex py-[3vh] items-center w-[93.6vw] ml-auto">
                    <IoIosArrowBack className="text-[#665af0] text-[24px] cursor-pointer" onClick={() => navigate('/forget-password')}></IoIosArrowBack><p className="w-full text-center font-medium text-[24px] leading-[28px] text-[#232440]">Reset Password</p>
                </div>
                <div className="mt-[1vh] px-[18.5vw] mb-[3.9vh]">
                    <img src={banner7} alt="" className="w-full bg-transparent" />
                </div>
                <div className="text-center">
                    <p className="text-[24px] leading-[42px] mb-[1.2vh] font-medium">Create a new password</p>
                    <p className="opacity-50 text-[14px] mb-[3.3vh]">Your new pasword must be different from old password</p>
                </div>
                <form autoComplete='off' onSubmit={handleLogin} className="px-[6.4vw]">
                    <div className="relative mb-[3.3vh]">
                        <label htmlFor="password" className="text-[14px] leading-[20px] text-[#6e6e82] mb-[2vh]">Password</label><br />
                        <input name="password" type={showPass ? 'text' : 'password'} id="password" placeholder="At least 8 characters" className={style.Input}></input>
                        {showPass ? <img src={show} onClick={() => setShowPass(!showPass)} alt="" className='absolute right-4 top-[37px] cursor-pointer' /> : <img src={hide} onClick={() => setShowPass(!showPass)} alt="" className='absolute right-4 top-[37px] cursor-pointer' />}
                    </div>
                    <div className="relative mb-[4.5vh]">
                        <label htmlFor="confirm-password" className="text-[14px] leading-[20px] text-[#6e6e82] mb-[2vh]">Confirm Password</label><br />
                        <input name="confirm" type={showPass1 ? 'text' : 'password'} id="confirm-password" placeholder="At least 8 characters" className={style.Input}></input>
                        {showPass1 ? <img src={show} onClick={() => setShowPass1(!showPass1)} alt="" className='absolute right-4 top-[37px] cursor-pointer' /> : <img src={hide} onClick={() => setShowPass1(!showPass1)} alt="" className='absolute right-4 top-[37px] cursor-pointer' />}
                    </div>
                    <button className={`${style.GetCode} w-full py-[10px]`} type='submit'>Reset Password</button>
                </form>
            </div>
        </>
    );
};

export default ResetPass;