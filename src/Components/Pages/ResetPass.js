import React, { useContext, useEffect, useState } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import banner7 from '../Assets/g10.svg'
import style from '../../Styles/Forget.module.css'
import { useNavigate } from 'react-router-dom';
import iconback from '../Assets/Iconback.svg'
import hide from '../Assets/Hide - Bold 20px.svg'
import show from '../Assets/Show - Bold 20px.svg'
import bannerover from '../Assets/Graphic2dsads.svg'
import ResetSuccssModal from '../Models/ResetSuccssModal';
import { AppContext } from '../../App';
const ResetPass = () => {
    const [showPass, setShowPass] = useState(false)
    const [showPass1, setShowPass1] = useState(false)
    const { setForgetPageLeft } = useContext(AppContext)
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
    const handleNavigate = () => {
        setForgetPageLeft(true)
        navigate('/forget-password')
    }
    return (
        <>
            {done && <ResetSuccssModal />}
            <div className="animate__animated h-screen overflow-y-hidden animate__fadeInRightBig animate__faster z-10">
                <div className={`pb-[4.2473vh] pt-[3.8979vh] relative ${style.ForgetTop}`}>
                    <img src={iconback} alt="" onClick={handleNavigate} className='absolute cursor-pointer z-[1] top-0 bottom-0 my-auto left-[6.4vw]' />
                    <p className="w-full text-center font-medium text-[6.4vw] leading-[7.4667vw] text-[#232440] relative left-[2.1vw]">Reset Password</p>
                </div>
                <div className="px-[18.667vw] relative h-[30.8334vh] mb-[4.3vh]">
                    <img src={banner7} alt="" className="w-full h-full bg-transparent" />
                    <div className="absolute w-[84.8%] mx-auto top-[5.334vw] left-[8vw] z-[-1]">
                        <img src={bannerover} alt="" className='h-full w-full' />
                    </div>
                </div>
                <div className="text-center mb-[1.612vh]">
                    <p className="text-[6.4vw] leading-[11.2vw] mb-[1.075vh] font-medium text-[#363640]">Create a new password</p>
                    <p className="opacity-50 text-[3.7334vw] leading-[4.8vw] px-[12.67vw] text-black">Your new pasword must be different from old password</p>
                </div>
                <form autoComplete='off' onSubmit={handleLogin} className="px-[6.4vw] pb-[3.76vh]">
                    <div className="relative mb-[3.189vh]">
                        <label htmlFor="password" className="text-[14px] leading-[20px] text-[#6e6e82]">Password</label><br />
                        <input name="password" type={showPass ? 'text' : 'password'} id="password" placeholder="At least 8 characters" className={`${style.Input} mt-[1vh]`}></input>
                        {showPass ? <img src={show} onClick={() => setShowPass(!showPass)} alt="" className='absolute right-[5.5%] top-[57%] cursor-pointer' /> : <img src={hide} onClick={() => setShowPass(!showPass)} alt="" className='absolute right-[5.5%] top-[57%] cursor-pointer' />}
                    </div>
                    <div className="relative mb-[4.97vh]">
                        <label htmlFor="confirm-password" className="text-[14px] leading-[20px] text-[#6e6e82]">Confirm Password</label><br />
                        <input name="confirm" type={showPass1 ? 'text' : 'password'} id="confirm-password" placeholder="At least 8 characters" className={`${style.Input} mt-[1vh]`}></input>
                        {showPass1 ? <img src={show} onClick={() => setShowPass1(!showPass1)} alt="" className='absolute right-[5.5%] top-[57%] cursor-pointer' /> : <img src={hide} onClick={() => setShowPass1(!showPass1)} alt="" className='absolute right-[5.5%] top-[57%] cursor-pointer' />}
                    </div>
                    <button className={`${style.ResetPassword}`} type='submit'>Reset Password</button>
                </form>
            </div>
        </>
    );
};

export default ResetPass;