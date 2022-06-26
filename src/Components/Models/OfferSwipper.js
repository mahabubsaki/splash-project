import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import banner from "../Assets/banner image.png"
import "swiper/css/pagination";

const OfferSwipper = () => {
    return (
        <div className="px-[5.3vw] mb-[5vh]">
            <Swiper pagination={true} modules={[Pagination]} className="mySwiper rounded-[15px] h-[14.7vh]">
                <SwiperSlide><img src={banner} alt="" /></SwiperSlide>
                <SwiperSlide><img src={banner} alt="" /></SwiperSlide>
                <SwiperSlide><img src={banner} alt="" /></SwiperSlide>
                <SwiperSlide><img src={banner} alt="" /></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default OfferSwipper;