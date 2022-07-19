import React from 'react';
import SwipeButton from 'react-swipezor'
import ReactSwipeButton from 'react-swipe-button'
const SwipeButtons = () => {
    const handleSuccess = () => {
        console.log('s');
    }
    return (
        <>
            <div className="w-2/3 mx-auto mt-[3vh]">
                <ReactSwipeButton text="Swipe To Withdraw"
                    color="#4F1EE6"></ReactSwipeButton>
                <div className="my-[3vh]">
                    <h1 className="text-transparent">t</h1>
                </div>
            </div>
        </>
    );
};

export default SwipeButtons;