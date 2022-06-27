import React from 'react';
import style from '../../Styles/Home.module.css'
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
const Overview = () => {
    const data = [
        {
            name: 'Date',
            STA: 0,
            A: 0,
            ST: 0,
        },
        {
            name: 'April 1',
            STA: 15000,
            A: 150,
            ST: 124,
        },
        {
            name: 'April 2',
            STA: 35343,
            A: 190,
            ST: 177,

        },
        {
            name: 'April 3',
            STA: 28345,
            A: 230,
            ST: 223,
        },
        {
            name: 'April 4',
            STA: 45324,
            A: 270,
            ST: 250,
        },
        {
            name: 'April 5',
            STA: 40235,
            A: 295,
            ST: 275,
        },
        // {
        //     name: 'April 6',
        //     STA: 42365,
        //     A: 310,
        //     ST: 290,
        // },
        // {
        //     name: 'April 9',
        //     STA: 32354,
        //     A: 400,
        //     ST: 390,

        // },
    ];
    return (
        <>
            <div className="pl-[4.2vw] pr-[3.4vw]">
                <div className="flex justify-between items-center mb-[4vh] px-[2px]">
                    <p className="text-[16px] font-medium">Transactions Overview</p>
                    <select defaultValue={`day`} className="p-1 rounded-md bg-[#504DE5] bg-opacity-20 text-[#504DE5] text-[13.5px]">
                        <option value="day">Day</option>
                        <option value="week">Week</option>
                        <option value="month">Month</option>
                    </select>
                </div>
            </div>
            <div className="p-0 mb-[2vh] w-full h-[50vh]">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                        data={data}
                    >
                        <CartesianGrid stroke='rgb(80, 77, 229,0.5)' strokeDasharray="3 3" />
                        <XAxis dataKey="name" style={{ fontSize: "8px" }} tick={{ fill: '#504DE5' }} />
                        <Tooltip />
                        <Line type="monotone" name='STA' dataKey="STA" strokeWidth={2.5} stroke="#504DE5" activeDot={{ r: 5 }} />
                        <Line type="monotone" name='A' dataKey="A" strokeWidth={0} stroke="#504DE5" activeDot={{ r: 0 }} />
                        <Line type="monotone" name='ST' dataKey="ST" strokeWidth={0} stroke="#504DE5" activeDot={{ r: 0 }} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
            <div className="pl-[5.2vw] pr-[3.4vw] mb-[2vh] text-[13.5px]">
                <p className={`pl-[1vw] mb-[2vh] ${style.Indicator}`}>STA - Total Successfull Transaction Amount</p>
                <p className={`pl-[1vw] mb-[2vh] ${style.Indicator}`}>ST - Total Successfull Transaction</p>
                <p className={`pl-[1vw] mb-[2vh] ${style.Indicator}`}>A - Total Attemps</p>
            </div>
        </>
    );
};

export default Overview;