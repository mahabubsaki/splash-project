import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import banner from "../Assets/banner image.svg"
import "swiper/css/pagination";
import "swiper/css/navigation";
import { GrFormNext, GrFormPrevious } from 'react-icons/gr'

const OfferSwipper = () => {
    const swiperRef = useRef()
    const [index, setIndex] = useState(0);
    return (
        <div className="px-[5.3vw] mb-[25px]">
            <div className="rounded-[15px] mb-[12px]"
                onMouseEnter={() => swiperRef.current.swiper.autoplay.stop()}
                onMouseLeave={() => swiperRef.current.swiper.autoplay.start()}
            >
                <Swiper loop={true} autoplay={{
                    delay: 2500,
                }}
                    ref={swiperRef}
                    onSlideChange={(slide) => setIndex(slide.realIndex)}
                    modules={[Pagination, Autoplay]} className="mySwiper">
                    <SwiperSlide className='px-[1px] rounded-[15px]'><img src={banner} alt="" /></SwiperSlide>
                    <SwiperSlide className='px-[1px] rounded-[15px]'><img src={banner} alt="" /></SwiperSlide>
                    <SwiperSlide className='px-[1px] rounded-[15px]'><img src={banner} alt="" /></SwiperSlide>
                    <SwiperSlide className='px-[1px] rounded-[15px]'><img src={banner} alt="" /></SwiperSlide>
                </Swiper>
            </div>
            <div className="flex justify-center gap-[6px]">
                <div className={`${index === 0 ? 'w-[6vw] bg-opacity-[71%]' : 'w-[3vw] bg-opacity-[27%]'} rounded-[5px] bg-[#010BFF] h-[4px] cursor-pointer`}></div>
                <div className={`${index === 1 ? 'w-[6vw] bg-opacity-[71%]' : 'w-[3vw] bg-opacity-[27%]'} rounded-[5px] bg-[#010BFF] h-[4px] cursor-pointer`}></div>
                <div className={`${index === 2 ? 'w-[6vw] bg-opacity-[71%]' : 'w-[3vw] bg-opacity-[27%]'} rounded-[5px] bg-[#010BFF] h-[4px] cursor-pointer`} ></div>
                <div className={`${index === 3 ? 'w-[6vw] bg-opacity-[71%]' : 'w-[3vw] bg-opacity-[27%]'} rounded-[5px] bg-[#010BFF] h-[4px] cursor-pointer`}></div>
            </div>
        </div>
    );
};

export default OfferSwipper;