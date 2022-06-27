import React from 'react';
import banner2 from '../Assets/Graphicseconds.svg'
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs'
import style from '../../Styles/Onboard.module.css'

const Onboard2 = ({ setFirstOnBoard, setSecondOnBoard, setThirdOnBoard }) => {
    const handleNextPage = () => {
        setSecondOnBoard(false)
        setThirdOnBoard(true)
    }
    const handlePreviosPage = () => {
        setSecondOnBoard(false)
        setFirstOnBoard(true)
    }
    return (
        <div className={`animate__animated animate__fadeInRightBig animate__faster`}>
            <div className="mt-[12.1vh] mb-[10.9vh]">
                <img src={banner2} alt="" className="w-full px-[4vw]" />
            </div>
            <div className="px-[7.7vw]">
                <p className="text-[32px] font-medium leading-[42px] mb-[3.3vh]"><span className={style.Span}>Various</span> Payment Method</p>
                <p className="font-normal opacity-50 text-[15px] leading-[19.53px]">Offer your customers with various payment options including Debit , Credit card, MFS, Wallet, Net Banking</p>
            </div>
            <div className={`flex justify-between items-center px-[7.2vw] pt-[11.2vh] pb-[6vh] ${style.BottomSection}`}>
                <button onClick={handlePreviosPage} className={style.PreviousBtn}><BsArrowLeft className="text-[20px]"></BsArrowLeft></button>
                <button className={style.NextBtn} onClick={handleNextPage}>Next <BsArrowRight className="inline"></BsArrowRight></button>
            </div>
        </div>
    );
};

export default Onboard2;