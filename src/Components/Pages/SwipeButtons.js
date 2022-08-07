import React, { useRef, useState } from 'react';
import SwipeButton from 'react-swipezor'
import ReactSwipeButton from 'react-swipe-button'
import arrowswipe from '../Assets/arrow-right_minorswupearrow.svg'
import { useEffect } from 'react';
const SwipeButtons = () => {
    const sliderRef = useRef()
    const dummy = useRef()

    const [isDragging, setIsDragging] = useState(false)
    const [percentage, setPercentage] = useState(0)
    const [complete, setComplete] = useState(false)
    useEffect(() => {

        if (percentage > 17 && percentage < 97) {
            if (sliderRef.current && !complete) {
                sliderRef.current.style.width = `${percentage}%`
            }
        }
        else if (percentage >= 97) {
            setComplete(() => true)
            if (dummy.current) {
                dummy.current.style.width = `100%`
            }
        }
        else {
            if (sliderRef.current) {
                sliderRef.current.style.width = `17%`
            }
        }

    }, [percentage, complete])


    return (
        <div onMouseMove={(e) => {
            if (isDragging) {
                setPercentage(Number((e.pageX / 320) * 100))
            }
        }}
            onMouseLeave={() => {
                setIsDragging(false)
                setPercentage(0)
            }}
            onMouseUp={() => {
                setIsDragging(false)
                setPercentage(0)
            }}
            onTouchMove={(e) => {

                if (isDragging) {
                    setPercentage(Number((Number(e.touches[0].pageX.toFixed(2) / 360) * 100).toFixed(2)))
                }
            }}
        >
            <div className="ml-[12.8vw] my-[3.9vh] bg-[#4F1EE6] mr-[13.0667vw] border border-[#4F1EE6] relative p-[1.0667vw] rounded-[13.334vw]">
                <span className="absolute text-center text-[white] top-1/2 -translate-y-1/2 w-full text-[4.2667vw] font-medium leading-[7.4667vw] inline-block">Swipe To Withdraw</span>
                {complete ? <div ref={dummy} className={`py-[5.604vw] relative rounded-[13.334vw] bg-[white] cursor-pointer`}>
                    <img src={arrowswipe} alt="" className="absolute top-1/2 pointer-events-none -translate-y-1/2 left-1/2 -translate-x-1/2" />
                </div> : <div ref={sliderRef}
                    onTouchStart={(e) => {
                        setIsDragging(true)

                    }}
                    onMouseDown={() => setIsDragging(true)}
                    onMouseUp={() => {
                        setPercentage(0)
                        setIsDragging(false)
                    }}
                    onTouchEnd={(e) => {
                        setPercentage(0)
                        setIsDragging(false)
                    }} className={`py-[5.604vw] relative w-[17%] rounded-[13.334vw] bg-[white] cursor-pointer`}>
                    <img src={arrowswipe} alt="" className="absolute top-1/2 pointer-events-none -translate-y-1/2 left-1/2 -translate-x-1/2" />
                </div>}

            </div>
        </div>
    );
};

export default SwipeButtons;