import React, { useContext, useState } from 'react';
import { IoIosArrowBack } from 'react-icons/io'
import style from '../../Styles/SignIn.module.css'
import banner4 from '../Assets/Graphic1.svg'
import success from '../Assets/Icon Checksuccess.png'
import show from '../Assets/Show - Bold 20px.svg'
import hide from '../Assets/Hide - Bold 20px.svg'
import iconback from '../Assets/Iconback.svg'
import { AppContext } from '../../App';
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
const SignIn = () => {
    const [userNumber, setUserNumber] = useState(false)
    const [showPass, setShowPass] = useState(false)
    const navigate = useNavigate()
    const { setThirdOnBoard, setFirstOnBoard, setSignInLeft, setSignPageLeft, signPageLeft } = useContext(AppContext)
    const handleBack = () => {
        setSignInLeft(true)
        setSignPageLeft(false)
        navigate('/')
        setFirstOnBoard(false)
        setThirdOnBoard(true)
    }
    const checkref = useRef()
    const handlePhoneNumber = (e) => {
        // convert all input into array
        const number = e.target.value.split('')
        // filtering non-number inputs
        const filter = number.filter(n => isNaN(n))
        // checking length 
        if (number.length !== 11) {
            setUserNumber(false)
            return
        }
        // checking non-number
        if (filter.length > 0) {
            setUserNumber(false)
            return
        }
        // checking first two characters
        if (!(number[0] === '0') || !(number[1] === '1')) {
            setUserNumber(false)
            return
        }
        setUserNumber(true)
    }
    const handleLogin = async (e) => {
        e.preventDefault()
    }
    return (
        <div className={`animate__animated ${signPageLeft ? 'animate__fadeInLeftBig' : 'animate__fadeInRightBig'} animate__faster h-screen overflow-y-hidden`}>
            <div className={`py-[3.362vh] relative ${style.SigninTop}`}>
                <img src={iconback} alt="" onClick={handleBack} className='absolute cursor-pointer top-0 bottom-0 my-auto left-[6.4vw]' />
                <p className="w-full text-center font-medium text-[6.4vw] leading-[7.4667vw] text-[#232440]">Sign In</p>
            </div>
            <div className="px-[7.735vw] mt-[0.2957vh] mb-[1.64vh] h-[30.053vh]">
                <img src={banner4} alt="" className="w-full h-full" />
            </div>
            <div className="pb-[11.56vh] ml-[4.536vw] mr-[8.27vw]">
                <form autoComplete='off' onSubmit={handleLogin}>
                    <div className="relative mb-[3.36vh]">
                        <label htmlFor="phone" className="text-[3.7334vw] leading-[5.334vw] text-[#6e6e82]">Phone</label><br />
                        <input type="tel" name='phone' onChange={handlePhoneNumber} placeholder='Phone Number' id="phone" className={`${style.Input} mt-[1vh]`}></input>
                        {userNumber && <img src={success} alt="" className='absolute right-[5.5%] top-[57%]' />}
                    </div>
                    <div className="relative mb-[0.06vh]">
                        <label htmlFor="password" className="text-[3.7334vw] leading-[5.334vw] text-[#6e6e82]">Password</label><br />
                        <input name='password' type={showPass ? 'text' : 'password'} id="password" placeholder="At least 8 characters" className={`${style.Input} mt-[1vh]`}></input>
                        {showPass ? <img src={show} onClick={() => setShowPass(!showPass)} alt="" className='absolute right-[5.5%] top-[57%] cursor-pointer' /> : <img src={hide} onClick={() => setShowPass(!showPass)} alt="" className='absolute right-[5.5%] top-[57%] cursor-pointer' />}
                    </div>
                    <div className="flex justify-between relative items-center mb-[4.38vh]">
                        <p className="absolute top-[1.8667vw] left-[6.8vw] text-[3.46667vw] cursor-pointer leading-[5.334vw] text-[#232440]" onClick={() => {
                            if (checkref.current.checked) {
                                checkref.current.checked = false
                            } else {
                                checkref.current.checked = true
                            }
                        }}>Save password</p>
                        <div className={`${style.Checkbox} leading-5`}>
                            <input type="checkbox" ref={checkref} id="checkbox" name="save" />
                            <label htmlFor="checkbox"><span></span></label>
                        </div>
                        <div>
                            <p className="text-right text-[3.46667vw] leading-[5.334vw] text-[#665AF0] cursor-pointer" onClick={() => navigate('/forget-password')}>Forgot Password?</p>
                        </div>
                    </div>
                    <button className={`${style.Sign} w-full mb-[2.15vh]`} type='submit'>Sign In</button>
                </form>
                <p className="text-center text-[16px] text-[#232440]">Don't have an Account? <span className='text-[#665AF0] cursor-pointer' onClick={() => navigate('/register')}>Sign Up</span></p>
            </div>
        </div>
    );
};

export default SignIn;