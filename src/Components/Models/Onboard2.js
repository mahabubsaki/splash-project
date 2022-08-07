import React from 'react';
import banner2 from '../Assets/Graphicseconds.svg'
import style from '../../Styles/Onboard.module.css'
import arrow from '../Assets/Vector 1.svg'
import bar from '../Assets/Vector 2bar.svg'
import reverse from '../Assets/Vector 1pre.svg'

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
        <div className={`animate__animated animate__fadeInRightBig animate__faster ${style.Container} h-screen overflow-y-hidden`}>
            <div className="mt-[8.738vh] mb-[11.95vh] h-[30.78vh] pl-[4vw] pr-[4.134vw]">
                <img src={banner2} alt="" className="w-full h-full" />
            </div>
            <div className="px-[7.735vw]">
                <p className="text-[8.536vw] leading-[11.204vw] text-[#363640] font-medium mb-[3.63vh]"><span className={style.Span2}>Various</span> Payment Method</p>
                <p className="font-normal opacity-50 text-[4vw] leading-[5.334vw] text-black ">Offer your customers with various payment options including Debit , Credit card, MFS, Wallet, Net Banking</p>
            </div>
            <div className={`flex justify-between items-center px-[7.735vw] pt-[11.96vh] pb-[6.85vh] ${style.BottomSection}`}>
                <button onClick={handlePreviosPage} className={style.PreviousBtn}><img src={reverse} alt='' className='absolute top-[4vw] left-[4.86vw] z-[1]' /><img src={bar} alt="" className='absolute left-[8vw]' /></button>
                <button className={style.NextBtn} onClick={handleNextPage}><span className='mr-[4.6vw]'>Next</span><img src={arrow} alt="" /></button>
            </div>
        </div>
    );
};

export default Onboard2;