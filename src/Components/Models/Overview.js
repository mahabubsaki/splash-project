import React, { useState } from 'react';
import style from '../../Styles/Home.module.css'
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer, } from 'recharts';
import styles from '../../Styles/Home.module.css'
const Overview = () => {
    const days = [
        {
            name: '1 Apr',
            STA: 15000,
            A: 150,
            ST: 124,
        },
        {
            name: '2 Apr',
            STA: 35343,
            A: 190,
            ST: 177,

        },
        {
            name: '3 Apr',
            STA: 28345,
            A: 230,
            ST: 223,
        },
        {
            name: '4 Apr',
            STA: 45324,
            A: 270,
            ST: 250,
        },
        {
            name: '5 Apr',
            STA: 40235,
            A: 295,
            ST: 275,
        },
        {
            name: '6 Apr',
            STA: 42365,
            A: 310,
            ST: 290,
        },
        {
            name: '7 Apr',
            STA: 32354,
            A: 400,
            ST: 390,
        },
    ];
    const weeks = [
        {
            name: '1-7 April',
            STA: 15000,
            A: 150,
            ST: 124,
        },
        {
            name: '8-14 April',
            STA: 35343,
            A: 190,
            ST: 177,

        },
        {
            name: '15-21 April',
            STA: 28345,
            A: 230,
            ST: 223,
        },
        {
            name: '22-28 April',
            STA: 45324,
            A: 270,
            ST: 250,
        },
    ]
    const months = [
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
    const handleChart = (e) => {
        if (e.target.value === 'day') {
            setData(days)
        }
        if (e.target.value === 'week') {
            setData(weeks)
        }
        if (e.target.value === 'month') {
            setData(months)
        }
    }
    return (
        <div className={`${styles.Transactions}`}>
            <div className="pl-[4.2vw] pr-[4.5vw]">
                <div className="flex justify-between items-center mb-[33px] px-[2px]">
                    <p className="text-[16px] font-medium">Transactions Overview</p>
                    <select defaultValue={`day`} className="p-1 rounded-md bg-[#504DE5] bg-opacity-20 text-[#504DE5] text-[13.5px]" onChange={handleChart}>
                        <option value="day">Day</option>
                        <option value="week">Week</option>
                        <option value="month">Month</option>
                    </select>
                </div>
            </div>
            <div className="pl-[5.3vw] pr-[3.4vw] mb-[16px] w-full h-[175px]">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                        data={data}
                    >
                        {/* <CartesianGrid horizontal={false} /> */}
                        <XAxis
                            interval={'preserveStartEnd'}
                            minTickGap={-15}
                            tickLine={false}
                            axisLine={false}
                            dataKey="name" style={{ fontSize: "7px" }} tick={{ fill: '#504DE5' }} />
                        <Tooltip />
                        <Line type="monotone" name='STA' dataKey="STA" strokeWidth={2.5} stroke="#504DE5" dot={{ r: 0 }} activeDot={{ r: 5, }} />
                        <Line type="monotone" name='A' dataKey="A" strokeWidth={0} stroke="#504DE5" dot={{ r: 0 }} activeDot={{ r: 0 }} />
                        <Line type="monotone" name='ST' dataKey="ST" strokeWidth={0} stroke="#504DE5" dot={{ r: 0 }} activeDot={{ r: 0 }} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
            <div className="pl-[5.2vw] pr-[3.4vw] pb-[82px] text-[13.5px]">
                <p className={`pl-[1vw] mb-[7px] ${style.Indicator}`}>STA - Total Successfull Transaction Amount</p>
                <p className={`pl-[1vw] mb-[7px] ${style.Indicator}`}>ST - Total Successfull Transaction</p>
                <p className={`pl-[1vw] mb-[7px] ${style.Indicator}`}>A - Total Attemps</p>
            </div>
        </div>
    );
};

export default Overview;