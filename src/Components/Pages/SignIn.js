import React, { useState } from 'react';
import { IoIosArrowBack } from 'react-icons/io'
import style from '../../Styles/SignIn.module.css'
import banner4 from '../Assets/Graphic1.png'
import success from '../Assets/Icon Checksuccess.png'
import show from '../Assets/Show - Bold 20px.svg'
import hide from '../Assets/Hide - Bold 20px.svg'
const SignIn = () => {
    const [userNumber, setUserNumber] = useState(false)
    const [showPass, setShowPass] = useState(false)
    const handleLogin = async (e) => {
        e.preventDefault()
    }
    return (
        <div className="h-screen px-7">
            <div className="flex my-2 items-center">
                <IoIosArrowBack className={style.BackLogo}></IoIosArrowBack><p className={`w-full text-center ${style.SignIn}`}>Sign In</p>
            </div>
            <div className="h-1/2 mb-3">
                <img src={banner4} alt="" className="w-full h-full" />
            </div>
            <form onSubmit={handleLogin}>
                <div className="mb-7 relative">
                    <label htmlFor="phone" className={style.Label}>Phone</label><br />
                    <input type="tel" id="phone" className={style.Input}></input>
                    {userNumber && <img src={success} alt="" className='absolute right-4 top-11' />}
                </div>
                <div className="relative mb-2">
                    <label htmlFor="password" className={style.Label}>Password</label><br />
                    <input type={showPass ? 'text' : 'password'} id="password" className={style.Input}></input>
                    {showPass ? <img src={show} onClick={() => setShowPass(!showPass)} alt="" className='absolute right-4 top-11 cursor-pointer' /> : <img src={hide} onClick={() => setShowPass(!showPass)} alt="" className='absolute right-4 top-11 cursor-pointer' />}
                </div>
                <div className="flex justify-between">
                    <div>
                        <input type="checkbox" name="savepass" id="savepass" className={style.Checkbox} />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default SignIn;