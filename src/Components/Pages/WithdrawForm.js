import React, { useContext, useState } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import style from '../../Styles/SignIn.module.css'
import { useNavigate } from 'react-router-dom';
import WithdrawSuccessModal from '../Models/WithdrawSuccessModal';
import { AppContext } from '../../App';
import iconback from '../Assets/Iconback.svg'
const WithdrawForm = () => {
    const [done, setDone] = useState(false)
    const { setBankOwner } = useContext(AppContext)
    const navigate = useNavigate()
    const handleBack = () => {
        navigate('/withdraw')
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setBankOwner(e.target.acname.value)
        setDone(true);
    }
    return (
        <>
            {done && <WithdrawSuccessModal />}
            <div className="animate__animated animate__fadeInRightBig animate__faster">
                <div className={`py-[27px] relative ${style.Withdraw}`}>
                    <img src={iconback} alt="" onClick={handleBack} className='absolute top-0 bottom-0 my-auto left-[6.1vw]' />
                    <p className="w-full text-center font-bold text-[24px] leading-[28px] text-[#232440]">Withdraw</p>
                </div>
                <div className="px-[5.8vw] pb-[35px]">
                    <form autoComplete='off' onSubmit={handleSubmit}>
                        <div className="relative mb-[23px]">
                            <label htmlFor="bname" className="text-[14px] leading-[20px] text-[#6e6e82] mb-[8px]">Bank Name</label><br />
                            <input required placeholder='Sonali Bank' id="bname" type="text" name='bname' className={style.Input} />
                        </div>
                        <div className="relative mb-[22px]">
                            <label htmlFor="acname" className="text-[14px] leading-[20px] text-[#6e6e82] mb-[8px]">Account Holder Name</label><br />
                            <input required placeholder='Sami Rahman' id="acname" type="text" name='acname' className={style.Input} />
                        </div>
                        <div className="relative mb-[25px]">
                            <label htmlFor="acnum" className="text-[14px] leading-[20px] text-[#6e6e82] mb-[8px]">Account Number</label><br />
                            <input required placeholder='02456445612' id="acnum" type="text" name='acnum' className={style.Input} />
                        </div>
                        <div className="relative mb-[25px]">
                            <label htmlFor="branch" className="text-[14px] leading-[20px] text-[#6e6e82] mb-[8px]">Branch</label><br />
                            <input required placeholder='Uttara' id="branch" type="text" name='branch' className={style.Input} />
                        </div>
                        <div className="relative mb-[25px]">
                            <label htmlFor="city" className="text-[14px] leading-[20px] text-[#6e6e82] mb-[8px]">City</label><br />
                            <input required placeholder='Dhaka' id="city" type="text" name='city' className={style.Input} />
                        </div>
                        <div className="relative mb-[57px]">
                            <label htmlFor="country" className="text-[14px] leading-[20px] text-[#6e6e82] mb-[8px]">Country</label><br />
                            <input required placeholder='Bangladesh' id="country" type="text" name='country' className={style.Input} />
                        </div>
                        <button className={`${style.Sign} w-full mb-[1.9vh]`} type='submit'>Add Account</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default WithdrawForm;