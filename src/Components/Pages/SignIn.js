import React, { useContext, useState } from 'react';
import { IoIosArrowBack } from 'react-icons/io'
import style from '../../Styles/SignIn.module.css'
import banner4 from '../Assets/Graphic1.png'
import success from '../Assets/Icon Checksuccess.png'
import show from '../Assets/Show - Bold 20px.svg'
import hide from '../Assets/Hide - Bold 20px.svg'
import { AppContext } from '../../App';
import { useNavigate } from 'react-router-dom';
const SignIn = () => {
    const [userNumber, setUserNumber] = useState(false)
    const [showPass, setShowPass] = useState(false)
    const navigate = useNavigate()
    const { setThirdOnBoard, setFirstOnBoard } = useContext(AppContext)
    const handleBack = () => {
        navigate('/')
        setFirstOnBoard(false)
        setThirdOnBoard(true)
    }
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
    // .Label {
    //     font-size: 14px;
    //     color: #6e6e82;
    //   }
    return (
        <div className="animate__animated animate__backInUp">
            <div className="flex py-[3vh] items-center w-[93.6vw] ml-auto">
                <IoIosArrowBack className="text-[#665af0] text-[24px] cursor-pointer" onClick={handleBack}></IoIosArrowBack><p className="w-full text-center font-medium text-[24px] leading-[28px] text-[#232440]">Sign In</p>
            </div>
            <div className="px-[7.7vw] mb-[1.4vh]">
                <img src={banner4} alt="" className="w-full" />
            </div>
            <div className="pb-[10.59vh] pl-[4.5vw] pr-[8.2vw]">
                <form onSubmit={handleLogin}>
                    <div className="relative mb-[3.4vh]">
                        <label htmlFor="phone" className="text-[14px] leading-[20px] text-[#6e6e82] mb-[1.5vh]">Phone</label><br />
                        <input type="tel" name='phone' onChange={handlePhoneNumber} placeholder='Phone Number' id="phone" className={style.Input}></input>
                        {userNumber && <img src={success} alt="" className='absolute right-4 top-11' />}
                    </div>
                    <div className="relative mb-[1vh]">
                        <label htmlFor="password" className="text-[14px] leading-[20px] text-[#6e6e82] mb-[1vh] ">Password</label><br />
                        <input name='password' type={showPass ? 'text' : 'password'} id="password" placeholder="At least 8 characters" className={style.Input}></input>
                        {showPass ? <img src={show} onClick={() => setShowPass(!showPass)} alt="" className='absolute right-4 top-11 cursor-pointer' /> : <img src={hide} onClick={() => setShowPass(!showPass)} alt="" className='absolute right-4 top-11 cursor-pointer' />}
                    </div>
                    <div className="flex justify-between items-center mb-[4.9vh]">
                        <div className={`${style.Checkbox} mr-12 leading-5`}>
                            <input type="checkbox" id="checkbox" onChange={(e) => console.log(e.target.checked)} />
                            <label htmlFor="checkbox"><span>Save Password</span></label>
                        </div>
                        <div className="w-1/2 ml-5">
                            <p className="text-right text-[13px] leading-5 text-[#665AF0] cursor-pointer" onClick={() => navigate('/forget-password')}>Forgot Password?</p>
                        </div>
                    </div>
                    <button className={`${style.SignIn} w-full mb-[1.9vh]`} type='submit'>Sign In</button>
                </form>
                <p className="text-center">Don't have an Account? <span className='text-[16px] text-[#665AF0] cursor-pointer' onClick={() => navigate('/register')}>Sign Up</span></p>
            </div>
        </div>
    );
};

export default SignIn;