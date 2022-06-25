import React from 'react';
import banner1 from '../Assets/Group 185onboard-1.png'
import { BsArrowRight } from 'react-icons/bs'
import style from '../../Styles/Onboard.module.css'

const Onboard1 = ({ setFirstOnBoard, setSecondOnBoard, setThirdOnBoard }) => {
    const handleNextPage = () => {
        setFirstOnBoard(false)
        setSecondOnBoard(true)
    }
    const handleSkipPage = () => {
        setFirstOnBoard(false)
        setThirdOnBoard(true)
    }
    return (
        <div className={`animate__animated animate__backInLeft`}>
            <div className="mt-[11vh] mb-[9vh]">
                <img src={banner1} alt="" className="w-full" />
            </div>
            <div className={"pr-[5.6vw] pl-[7.5vw]"}>
                <div>
                    <p className="text-[32px] font-medium leading-[42px] mb-[3.3vh]">Accept Your Payment <span className={style.Span}>Securely</span></p>
                    <p className="font-normal opacity-50 text-[15px] leading-[19.53px]">Offer your customers with various dsdsdd payment options including Debit , Credit card, MFS, Wallet, Net Banking</p>
                </div>
            </div>
            <div className={`flex justify-between items-center px-[7.2vw] pt-[11.2vh] pb-[6vh] ${style.BottomSection}`}>
                <button className={style.SkipBtn} onClick={handleSkipPage}>Skip</button>
                <button className={style.NextBtn} onClick={handleNextPage}>Next <BsArrowRight className="inline"></BsArrowRight></button>
            </div>
        </div>
    );
};

export default Onboard1;