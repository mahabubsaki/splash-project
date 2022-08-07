import React from 'react';

const SingleTransaction = ({ transaction }) => {
    const { money, txId, service, amount, date, time, fee, img } = transaction;
    return (
        <div className="mb-[20px] flex justify-between items-center">
            <div className="flex items-center">
                <img src={img} alt="" className='w-[35px] h-[35px] mr-[2.4vw]' />
                <div>
                    <p className="text-[12px] text-[#232440] mb-[4px]">{txId} <span className="font-bold relative bottom-1 mx-2">.</span> {service}</p>
                    <p className="text-[10px] text-[#232440] opacity-50">{date} <span className="font-bold relative bottom-[3px] mx-1">.</span> {time} </p>
                </div>
            </div>
            <div className="flex flex-col items-end">
                <p className={`text-[12px] mb-[4px] leading-[16px] ${money ? 'text-[#3DAB25]' : 'text-[#232440]'}`}>{money ? '+' : '-'} <span className='ml-[3px]'>৳ {amount}</span></p>
                <p className="text-[10px] text-[#232440] opacity-50">Fee _ ৳ {fee}</p>
            </div>
        </div>
    );
};

export default SingleTransaction;