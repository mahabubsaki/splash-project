import React, { useState } from 'react';
import style from '../../Styles/Home.module.css'
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer, } from 'recharts';
const Overview = () => {
    const days = [
        {
            name: 'Date',
            STA: 0,
            A: 0,
            ST: 0,
        },
        {
            name: 'Apr 1',
            STA: 15000,
            A: 150,
            ST: 124,
        },
        {
            name: 'Apr 2',
            STA: 35343,
            A: 190,
            ST: 177,

        },
        {
            name: 'Apr 3',
            STA: 28345,
            A: 230,
            ST: 223,
        },
        {
            name: 'Apr 4',
            STA: 45324,
            A: 270,
            ST: 250,
        },
        {
            name: 'Apr 5',
            STA: 40235,
            A: 295,
            ST: 275,
        },
        {
            name: 'Apr 6',
            STA: 42365,
            A: 310,
            ST: 290,
        },
        {
            name: 'Apr 7',
            STA: 32354,
            A: 400,
            ST: 390,
        },
    ];
    const weeks = [
        {
            name: 'Week',
            STA: 0,
            A: 0,
            ST: 0,
        },
        {
            name: '1-7 Apr',
            STA: 15000,
            A: 150,
            ST: 124,
        },
        {
            name: '8-14 Apr',
            STA: 35343,
            A: 190,
            ST: 177,

        },
        {
            name: '15-21 Apr',
            STA: 28345,
            A: 230,
            ST: 223,
        },
        {
            name: '22-28 Apr',
            STA: 45324,
            A: 270,
            ST: 250,
        },
    ]
    const months = [
        {
            name: 'Month',
            STA: 0,
            A: 0,
            ST: 0,
        },
        {
            name: 'Jan 2022',
            STA: 28345,
            A: 230,
            ST: 223,
        },
        {
            name: 'Feb 2022',
            STA: 45324,
            A: 270,
            ST: 250,
        },
        {
            name: 'Mar 2022',
            STA: 40235,
            A: 295,
            ST: 275,
        },
        {
            name: 'Apr 2022',
            STA: 42365,
            A: 310,
            ST: 290,
        },
        {
            name: 'May 2022',
            STA: 32354,
            A: 400,
            ST: 390,
        },
    ]
    const [data, setData] = useState(days)
    const [small, setSmall] = useState(true)
    const handleChart = (e) => {
        if (e.target.value === 'day') {
            setData(days)
            setSmall(true)
        }
        if (e.target.value === 'week') {
            setData(weeks)
            setSmall(false)
        }
        if (e.target.value === 'month') {
            setData(months)
            setSmall(false)
        }
    }
    return (
        <>
            <div className="pl-[4.2vw] pr-[3.4vw]">
                <div className="flex justify-between items-center mb-[4vh] px-[2px]">
                    <p className="text-[16px] font-medium">Transactions Overview</p>
                    <select defaultValue={`day`} className="p-1 rounded-md bg-[#504DE5] bg-opacity-20 text-[#504DE5] text-[13.5px]" onChange={handleChart}>
                        <option value="day">Day</option>
                        <option value="week">Week</option>
                        <option value="month">Month</option>
                    </select>
                </div>
            </div>
            <div className="px-[3.4vw] mb-[2vh] w-full h-[50vh]">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                        data={data}
                    >
                        {/* <CartesianGrid horizontal={false} /> */}
                        <XAxis axisLine={false}
                            tickMargin={0}
                            minTickGap={-15}
                            tickLine={false}
                            dataKey="name" style={{ fontSize: small ? '6px' : '8px' }} tick={{ fill: '#504DE5' }} />
                        <Tooltip />
                        <Line type="monotone" name='STA' dataKey="STA" strokeWidth={2.5} stroke="#504DE5" dot={{ r: 0 }} activeDot={{ r: 5, }} />
                        <Line type="monotone" name='A' dataKey="A" strokeWidth={0} stroke="#504DE5" dot={{ r: 0 }} activeDot={{ r: 0 }} />
                        <Line type="monotone" name='ST' dataKey="ST" strokeWidth={0} stroke="#504DE5" dot={{ r: 0 }} activeDot={{ r: 0 }} />
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