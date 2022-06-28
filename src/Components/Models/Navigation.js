import React, { useState } from 'react';
import home from '../Assets/Group 192.svg'
import pay from '../Assets/Payment Linkp.svg'
import search from '../Assets/Icona.svg'
import user from '../Assets/User.svg'

const Navigation = () => {
    const [currLoc, setCurrentLoc] = useState('home')
    return (
        <div className="fixed bottom-0 left-0 right-0 bg-transparent flex justify-center items-end z-20">
            <div className="bg-[white] w-full h-[10vh] shadow-2xl pb-[1vh] px-[6vw]">
                <div className="w-full flex justify-between">
                    <div className={`h-[54px] w-[54px] flex justify-center items-center rounded-full cursor-pointer duration-200 relative ${currLoc === 'home' && '-translate-y-[27px] bg-[#FFF6A8]'}`} onClick={() => setCurrentLoc('home')}>
                        {currLoc === 'home' && <>
                            <div className="absolute h-[80px] w-[80px] rounded-full border-[#e5e5e5]
                             border-t-transparent border-l-transparent rotate-45 z-[-20] border-[15px]">
                            </div>
                        </>}
                        <img src={home} className="z-[30]" alt="" />
                    </div>
                    <div className={`h-[54px] w-[54px] flex justify-center items-center rounded-full cursor-pointer duration-200 relative ${currLoc === 'pay' && '-translate-y-[27px] bg-[#FFF6A8]'}`} onClick={() => setCurrentLoc('pay')}>
                        {currLoc === 'pay' && <>
                            <div className="absolute h-[80px] w-[80px] rounded-full border-[#e5e5e5] border-t-transparent border-l-transparent rotate-45 z-[-20] border-[15px]">
                            </div>
                        </>}
                        <img src={pay} alt="" />
                    </div>
                    <div className={`h-[54px] w-[54px] flex justify-center items-center rounded-full cursor-pointer duration-200 relative ${currLoc === 'search' && '-translate-y-[27px] bg-[#FFF6A8]'}`} onClick={() => setCurrentLoc('search')}>
                        {currLoc === 'search' && <>
                            <div className="absolute h-[80px] w-[80px] rounded-full border-[#e5e5e5] border-t-transparent border-l-transparent rotate-45 z-[-20] border-[15px]">
                            </div>
                        </>}
                        <img src={search} alt="" />
                    </div>
                    <div className={`h-[54px] w-[54px] flex justify-center items-center rounded-full cursor-pointer duration-200 relative ${currLoc === 'user' && '-translate-y-[27px] bg-[#FFF6A8]'}`} onClick={() => setCurrentLoc('user')}>
                        {currLoc === 'user' && <>
                            <div className="absolute h-[80px] w-[80px] rounded-full border-[#e5e5e5] border-t-transparent border-l-transparent rotate-45 z-[-20] border-[15px]">
                            </div>
                        </>}
                        <img src={user} alt="" />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Navigation;