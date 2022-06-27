import React from 'react';

const SingleTransaction = ({ transaction }) => {
    const { money, txId, service, amount, date, time, fee, img } = transaction;
    console.log(transaction);
    return (
        <div className="mb-[2.4vh] flex justify-between items-center">
            <div className="flex items-center">
                <img src={img} alt="" className='w-[35px] mr-[2.4vw]' />
                <div>
                    <p className="text-[13.5px] text-[#232440]">{txId} <span className="font-bold relative bottom-1 mx-1">.</span> {service}</p>
                    <p className="text-[12px] text-[#232440] opacity-50">{date} <span className="font-bold relative bottom-1 mx-1">.</span> {time} </p>
                </div>
            </div>
            <div className="flex flex-col items-center">
                <p className={`text-[13.5px] mb-[1vh] leading-[16px] ${money ? 'text-[#3DAB25]' : 'text-[#232440]'}`}>{money ? '+' : '-'} <span className='mx-1'>৳{amount}</span></p>
                <p className="text-[12px] text-[#232440] opacity-50">Fee <span className='mx-[1px]'>_</span> ৳{fee}</p>
            </div>
        </div>
    );
};

export default SingleTransaction;