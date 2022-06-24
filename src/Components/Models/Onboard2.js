import React from 'react';
import banner2 from '../Assets/Graphicsecond.png'
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
        <div className={`h-screen ${style.Page} animate__animated animate__backInRight`}>
            <div className="h-[240px] py-3">
                <img src={banner2} alt="" className="w-[90%] mx-auto h-full" />
            </div>
            <div className={`h-[calc(100vh-240px)] py-4 px-6 ${style.BottomSection} flex flex-col justify-between`}>
                <div>
                    <p className={`${style.Heading} mb-4`}><span className={style.Span}>Various </span>Payment Method</p>
                    <p className={style.Description}>Offer your customers with various payment options including Debit , Credit card, MFS, Wallet, Net Banking</p>
                </div>
                <div className="flex justify-between items-center">
                    <button onClick={handlePreviosPage} className={style.PreviousBtn}><BsArrowLeft className={style.Icon}></BsArrowLeft></button>
                    <button className={style.NextBtn} onClick={handleNextPage}>Next <BsArrowRight className="inline"></BsArrowRight></button>
                </div>
            </div>
        </div>
    );
};

export default Onboard2;