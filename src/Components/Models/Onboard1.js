import React from 'react';
import banner1 from '../Assets/Graphicoboard.svg'
import bgvector from '../Assets/Vector 4.svg'
import style from '../../Styles/Onboard.module.css'
import arrow from '../Assets/Vector 1.svg'

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
        <div className={`animate__animated animate__fadeInLeftBig animate__faster ${style.Container} h-screen overflow-y-hidden`}>
            <div className="mt-[7.662vh] mb-[10.284vh] h-[33.53vh] w-full">
                <img src={banner1} alt="" className="w-full h-full" />
            </div>
            <div className={"pr-[5.602vw] pl-[7.735vw]"}>
                <div>
                    <p className="text-[8.536vw] leading-[11.204vw] text-[#363640] font-medium mb-[4.1vh]">Accept Your <br /> Payment <span className={style.Span}>Securely</span></p>
                    <p className="font-normal text-black opacity-50 text-[4vw] leading-[5.334vw] pr-[2.13vw]">Offer your customers with various dsdsdd payment options including Debit , Credit  card, MFS, Wallet, Net Banking</p>
                </div>
            </div>
            <div className={`flex justify-between items-center px-[7.7vw] pt-[12.25vh] pb-[6.58vh] ${style.BottomSection}`}>
                <p className={style.SkipBtn} onClick={handleSkipPage}>Skip</p>
                <button className={style.NextBtn} onClick={handleNextPage}><span className='mr-[4.67vw]'>Next</span><img src={arrow} alt="" /></button>
            </div>
        </div>
    );
};

export default Onboard1;