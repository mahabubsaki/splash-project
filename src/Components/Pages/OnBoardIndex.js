import React, { useContext } from 'react';
import { AppContext } from '../../App';
import Onboard1 from '../Models/Onboard1';
import Onboard2 from '../Models/Onboard2';
import Onboard3 from '../Models/Onboard3';
const OnBoardIndex = () => {
    const { firstOnBoard, setFirstOnBoard, secondOnBoard, setSecondOnBoard, thirdOnBoard, setThirdOnBoard } = useContext(AppContext)
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