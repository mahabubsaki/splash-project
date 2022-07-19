import React from 'react';
import SwipeButton from 'react-swipezor'
import ReactSwipeButton from 'react-swipe-button'
const SwipeButtons = () => {
    const handleSuccess = () => {
        console.log('s');
    }
    return (

        <div className="w-[300px]">
            <ReactSwipeButton text="SWIPE TO UNLOCK"
                color="#000"></ReactSwipeButton>
        </div>

    );
};

export default SwipeButtons;