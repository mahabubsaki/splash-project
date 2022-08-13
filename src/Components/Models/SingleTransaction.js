import React from 'react';
import { AppContext } from '../../App';

const SingleTransaction = ({ transaction }) => {
    const { navOpen } = React.useContext(AppContext)
    const { money, txId, service, amount, date, time, fee, img } = transaction;
    return (
        <div className={`${navOpen ? 'mb-[10px]' : 'mb-[20px]'} flex justify-between items-center`}>
            <div className="flex items-center">
                <img src={img} alt="" className='w-[35px] h-[35px] mr-[2.4vw]' />
                <div>
                    <p className={`text-[#232440] mb-[4px] ${navOpen ? 'text-[8px]' : 'text-[12px]'}`}>{txId} <span className="font-bold relative bottom-1 mx-2">.</span> {!navOpen && service}</p>
                    <p className="text-[10px] text-[#232440] opacity-50">{date} <span className="font-bold relative bottom-[3px] mx-1">.</span> {!navOpen && time} </p>
                </div>
            </div>
            {!navOpen && <div className="flex flex-col items-end">
                <p className={`text-[12px] mb-[4px] leading-[16px] ${money ? 'text-[#3DAB25]' : 'text-[#232440]'}`}>{money ? '+' : '-'} <span className='ml-[3px]'>৳ {amount}</span></p>
                <p className="text-[10px] text-[#232440] opacity-50">Fee _ ৳ {fee}</p>
            </div>}
        </div>
    );
};

export default SingleTransaction;