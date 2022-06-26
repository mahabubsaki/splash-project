import React, { useContext, useState } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../App';
import style from '../../Styles/SignIn.module.css'
import success from '../Assets/Icon Checksuccess.png'
import show from '../Assets/Show - Bold 20px.svg'
import hide from '../Assets/Hide - Bold 20px.svg'

const Register = () => {
    const navigate = useNavigate()
    const [formInput, setFormInput] = useState({
        userName: '',
        companyName: '',
        companyType: '',
        userMail: '',
        contactPerson: '',
        userPassword: '',
    })
    const handleRegister = (e) => {

    }
    const { setThirdOnBoard, setFirstOnBoard } = useContext(AppContext)
    const handleBack = () => {
        navigate('/')
        setFirstOnBoard(false)
        setThirdOnBoard(true)
    }
    return (
        <div className="animate__animated animate__backInUp">
            <div className="flex py-[3vh] items-center w-[93.6vw] ml-auto">
                <IoIosArrowBack className="text-[#665af0] text-[24px] cursor-pointer" onClick={handleBack}></IoIosArrowBack><p className="w-full text-center font-medium text-[24px] leading-[28px] text-[#232440]">Registration</p>
            </div>
            <div className="px-[5.8vw] pb-[3.3vh] border">
                <form onSubmit={handleRegister}>
                    <div className="relative mb-[3.4vh]">
                        <label htmlFor="username" className="text-[14px] leading-[20px] text-[#6e6e82] mb-[1.5vh]">Username</label><br />
                        <input type="text" name='username' onChange={(e) => setFormInput({
                            ...formInput,
                            userName: e.target.value
                        })} placeholder='Muhammad' id="username" className={style.Input}></input>
                        {formInput.userName && <img src={success} alt="" className='absolute right-4 top-11' />}
                    </div>
                    <div className="relative mb-[3.4vh]">
                        <label htmlFor="company" className="text-[14px] leading-[20px] text-[#6e6e82] mb-[1.5vh]">Company Name</label><br />
                        <input type="text" name='company' onChange={(e) => setFormInput({
                            ...formInput,
                            companyName: e.target.value
                        })} placeholder='ABC Freelanccccc' id="company" className={style.Input}></input>
                        {formInput.companyName && <img src={success} alt="" className='absolute right-4 top-11' />}
                    </div>
                    <div className="mb-[3.4vh]">
                        <label htmlFor="company-type" className="text-[14px] leading-[20px] text-[#6e6e82] mb-[1.5vh]">Company Type</label><br />
                        <select name="companyType" onChange={(e) => setFormInput({
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
                        <input type="email" name='email' onChange={(e) => setFormInput({
                            ...formInput,
                            userMail: e.target.value,
                        })} placeholder='muhammadsumon.me@gmail.com' id="email" className={style.Input}></input>
                        {formInput.userMail && <img src={success} alt="" className='absolute right-4 top-11' />}
                    </div>
                    <div className="relative mb-[3.4vh]">
                        <label htmlFor="contact-person" className="text-[14px] leading-[20px] text-[#6e6e82] mb-[1.5vh]">Contact Person</label><br />
                        <input type="text" name='contactPerson' onChange={(e) => setFormInput({
                            ...formInput,
                            userMail: e.target.value,
                        })} placeholder='muhammadsumon.me@gmail.com' id="contact-person" className={style.Input}></input>
                        {formInput.userMail && <img src={success} alt="" className='absolute right-4 top-11' />}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;