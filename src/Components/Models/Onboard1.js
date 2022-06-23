import React from 'react';
import banner1 from '../Assets/Group 185onboard-1.png'
import { BsArrowRight } from 'react-icons/bs'
import style from '../../Styles/Onboard-first.module.css'

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
        <div className={`h-screen ${style.Page} animate__animated animate__backInLeft`}>
            <div className="h-1/2 py-3">
                <img src={banner1} alt="" className="w-full h-full" />
            </div>
            <div className={`h-1/2 py-4 px-6 ${style.BottomSection} flex flex-col justify-between`}>
                <div>
                    <p className={`${style.Heading} mb-4`}>Accept Your Payment <span className={style.Span}>Securely</span></p>
                    <p className={style.Description}>Offer your customers with various dsdsdd payment options including Debit , Credit card, MFS, Wallet, Net Banking</p>
                </div>
                <div className="flex justify-between items-center">
                    <button className={style.SkipBtn} onClick={handleSkipPage}>Skip</button>
                    <button className={style.NextBtn} onClick={handleNextPage}>Next <BsArrowRight className="inline"></BsArrowRight></button>
                </div>
            </div>
        </div>
    );
};

export default Onboard1;