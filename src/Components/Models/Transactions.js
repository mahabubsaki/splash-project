import { format } from 'date-fns';
import React from 'react';
import addmoney from '../Assets/Iconinput.svg'
import { useNavigate } from 'react-router-dom';
import withdrawmoney from '../Assets/Iconoutput.svg'
import SingleTransaction from './SingleTransaction';
import styles from '../../Styles/Home.module.css'

const Transactions = () => {
    const transactions = [
        { money: true, txId: 'PFB783934ds3eW', service: 'Nagad', amount: 3343, date: format(new Date(), 'PP'), fee: 14.34, time: new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }), img: addmoney },
        { money: false, txId: 'PFB783934ds3eW', service: 'Withdraw', amount: 3343, date: format(new Date(), 'PP'), fee: 14, time: new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }), img: withdrawmoney },
        { money: true, txId: 'PFB783934ds3eW', service: 'Nagad', amount: 3343, date: format(new Date(), 'PP'), fee: 14.34, time: new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }), img: addmoney },
        { money: false, txId: 'PFB783934ds3eW', service: 'Bill Pay', amount: 3343, date: format(new Date(), 'PP'), fee: 14, time: new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }), img: withdrawmoney },
        { money: true, txId: 'PFB783934ds3eW', service: 'Bkash', amount: 3343, date: format(new Date(), 'PP'), fee: 14.34, time: new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }), img: addmoney },
    ]
    return (
        <div className={`px-[4.2vw] ${styles.Transactions} mb-[5px]`}>
            <div className="flex justify-between items-center mb-[15px]">
                <p className="text-[16px] font-medium">Transactions</p>
                <p className="text-[12px] text-[#5C3DDB]">See All</p>
            </div>
            <div className="pr-[0.5vw] pl-[1vw]">
                {transactions.map((transaction, index) => <SingleTransaction
                    key={index}
                    transaction={transaction}
                ></SingleTransaction>)}
            </div>
        </div>
    );
};

export default Transactions;