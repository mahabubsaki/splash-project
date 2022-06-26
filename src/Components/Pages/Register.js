import React, { useContext, useState } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../App';
import style from '../../Styles/SignIn.module.css'
import success from '../Assets/Icon Checksuccess.png'
import show from '../Assets/Show - Bold 20px.svg'
import hide from '../Assets/Hide - Bold 20px.svg'
import RegisterSuccssModal from '../Models/RegisterSuccessModal';

const Register = () => {
    const navigate = useNavigate()
    const [registerDone, setRegisterDone] = useState(false)
    const [showPass, setShowPass] = useState(false)
    const [showPass1, setShowPass1] = useState(false)
    const [formInput, setFormInput] = useState({
        userName: '',
        companyName: '',
        userPhone: '',
        companyType: '',
        userMail: '',
        contactPerson: '',
    })
    const validateNumber = (e) => {
        const number = e.target.value.split('')
        const filter = number.filter(n => isNaN(n))
        if (number.length !== 11 || filter.length > 0) {
            setFormInput({
                ...formInput,
                userPhone: '',
            })
            return
        }
        if (!(number[0] === '0') || !(number[1] === '1')) {
            setFormInput({
                ...formInput,
                userPhone: '',
            })
            return
        }
        setFormInput({
            ...formInput,
            userPhone: e.target.value,
        })
    }
    const handleRegister = (e) => {
        e.preventDefault()
        setRegisterDone(true)
    }
    const { setThirdOnBoard, setFirstOnBoard } = useContext(AppContext)
    const handleBack = () => {
        navigate('/')
        setFirstOnBoard(false)
        setThirdOnBoard(true)
    }
    return (
        <>
            {registerDone && <RegisterSuccssModal />}
            <div className="animate__animated animate__backInUp">
                <div className="flex py-[3vh] items-center w-[93.6vw] ml-auto">
                    <IoIosArrowBack className="text-[#665af0] text-[24px] cursor-pointer" onClick={handleBack}></IoIosArrowBack><p className="w-full text-center font-medium text-[24px] leading-[28px] text-[#232440]">Registration</p>
                </div>
                <div className="px-[5.8vw] pb-[3.3vh]">
                    <form autoComplete='off' onSubmit={handleRegister}>
                        <div className="relative mb-[3.4vh]">
                            <label htmlFor="username" className="text-[14px] leading-[20px] text-[#6e6e82] mb-[1.5vh]">Username</label><br />
                            <input required type="text" name='username' onChange={(e) => setFormInput({
                                ...formInput,
                                userName: e.target.value
                            })} placeholder='Muhammad' id="username" className={style.Input}></input>
                            {formInput.userName && <img src={success} alt="" className='absolute right-4 top-11' />}
                        </div>
                        <div className="relative mb-[3.4vh]">
                            <label htmlFor="company" className="text-[14px] leading-[20px] text-[#6e6e82] mb-[1.5vh]">Company Name</label><br />
                            <input required type="text" name='company' onChange={(e) => setFormInput({
                                ...formInput,
                                companyName: e.target.value
                            })} placeholder='ABC Freelanccccc' id="company" className={style.Input}></input>
                            {formInput.companyName && <img src={success} alt="" className='absolute right-4 top-11' />}
                        </div>
                        <div className="mb-[3.4vh]">
                            <label htmlFor="company-type" className="text-[14px] leading-[20px] text-[#6e6e82] mb-[1.5vh]">Company Type</label><br />
                            <select required name="companyType" onChange={(e) => setFormInput({
                                ...formInput,
                                companyType: e.target.value
                            })} id="company-type" className={`${style.Input} ${style.Selection}`} defaultValue=''>
                                <option value="" disabled>
                                    Company Type
                                </option>
                                <option value="a">Type A</option>
                                <option value="b">Type B</option>
                                <option value="c">Type C</option>
                            </select>
                        </div>
                        <div className="relative mb-[3.4vh]">
                            <label htmlFor="email" className="text-[14px] leading-[20px] text-[#6e6e82] mb-[1.5vh]">Email Address</label><br />
                            <input required type="email" name='email' onChange={(e) => setFormInput({
                                ...formInput,
                                userMail: e.target.value,
                            })} placeholder='muhammadsumon.me@gmail.com' id="email" className={style.Input}></input>
                            {formInput.userMail && <img src={success} alt="" className='absolute right-4 top-11' />}
                        </div>
                        <div className="relative mb-[3.4vh]">
                            <label htmlFor="contact-person" className="text-[14px] leading-[20px] text-[#6e6e82] mb-[1.5vh]">Contact Person</label><br />
                            <input required type="text" name='contactPerson' onChange={(e) => setFormInput({
                                ...formInput,
                                contactPerson: e.target.value,
                            })} placeholder='Muhammad Sumon' id="contact-person" className={style.Input}></input>
                            {formInput.contactPerson && <img src={success} alt="" className='absolute right-4 top-11' />}
                        </div>
                        <div className="relative mb-[3.4vh]">
                            <label htmlFor="phone" className="text-[14px] leading-[20px] text-[#6e6e82] mb-[1.5vh]">Phone</label><br />
                            <input required type="tel" name='phone' onChange={validateNumber} placeholder='018383893478' id="phone" className={style.Input}></input>
                            {formInput.userPhone && <img src={success} alt="" className='absolute right-4 top-11' />}
                        </div>
                        <div className="relative mb-[3.4vh]">
                            <label htmlFor="password" className="text-[14px] leading-[20px] text-[#6e6e82] mb-[1.5vh]">Password</label><br />
                            <input required name="password" type={showPass ? 'text' : 'password'} id="password" placeholder="At least 8 characters" className={style.Input}></input>
                            {showPass ? <img src={show} onClick={() => setShowPass(!showPass)} alt="" className='absolute right-4 top-[44px] cursor-pointer' /> : <img src={hide} onClick={() => setShowPass(!showPass)} alt="" className='absolute right-4 top-[44px] cursor-pointer' />}
                        </div>
                        <div className="relative mb-[3.4vh]">
                            <label htmlFor="confirm-password" className="text-[14px] leading-[20px] text-[#6e6e82] mb-[1.5vh]">Confirm Password</label><br />
                            <input required name="confirm" type={showPass1 ? 'text' : 'password'} id="confirm-password" placeholder="At least 8 characters" className={style.Input}></input>
                            {showPass1 ? <img src={show} onClick={() => setShowPass1(!showPass1)} alt="" className='absolute right-4 top-[44px] cursor-pointer' /> : <img src={hide} onClick={() => setShowPass1(!showPass1)} alt="" className='absolute right-4 top-[44px] cursor-pointer' />}
                        </div>
                        <div className="flex pr-[5.3vw] mb-[4.1vh]">
                            <div className={`${style.Checkbox2} leading-5 mr-[2vw]`}>
                                <input type="checkbox" id="checkbox" name='accept' required />
                                <label htmlFor="checkbox"><span></span></label>
                            </div>
                            <p className="text-[13px] leading-5">Be creating your account you have to agree with our <span className='text-[#665AF0] cursor-pointer'>Teams and conditions</span></p>
                        </div>
                        <button className={`${style.SignIn} w-full mb-[2.5vh]`} type='submit'>Register</button>
                    </form>
                    <p className="text-[16px] leading-6 text-center">Already have account ? <span className='text-[#665AF0] cursor-pointer' onClick={() => navigate('/sign-in')}>Login</span></p>
                </div>
            </div>
        </>
    );
};

export default Register;