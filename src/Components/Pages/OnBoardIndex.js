import React, { useState } from 'react';
import Onboard1 from '../Models/Onboard1';
import Onboard2 from '../Models/Onboard2';
import Onboard3 from '../Models/Onboard3';
const OnBoardIndex = () => {
    const [firstOnBoard, setFirstOnBoard] = useState(true)
    const [secondOnBoard, setSecondOnBoard] = useState(false)
    const [thirdOnBoard, setThirdOnBoard] = useState(false)
    return (
        <>
            {firstOnBoard && <Onboard1
                setFirstOnBoard={setFirstOnBoard}
                setSecondOnBoard={setSecondOnBoard}
                setThirdOnBoard={setThirdOnBoard}
            />}
            {secondOnBoard && <Onboard2
                setFirstOnBoard={setFirstOnBoard}
                setSecondOnBoard={setSecondOnBoard}
                setThirdOnBoard={setThirdOnBoard}
            />}
            {thirdOnBoard && <Onboard3 />}
        </>
    );
};

export default OnBoardIndex;