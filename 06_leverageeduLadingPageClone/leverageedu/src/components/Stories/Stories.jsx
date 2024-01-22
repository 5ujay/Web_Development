

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './Stories.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

import Card from './Card';

const Stories = () => {


    return (
        <div className='stories'>
            <div className="storie-head">
                Success Stories
            </div>
            <div className="storie-subhead">
                <div className='s-one'>
                    Results
                </div>
                <div className='s-two'>
                    Speak The Loudest
                </div>
            </div>
            <div className='blank-subhead'>

            </div>


            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <Card name="person one" university="university one" />
                </SwiperSlide>

                <SwiperSlide>
                    <Card name="person two" university="university two" />
                </SwiperSlide>

                <SwiperSlide>
                    <Card name="person three" university="university three" />
                </SwiperSlide>

                <SwiperSlide>
                    <Card name="person four" university="university four" />
                </SwiperSlide>

                <SwiperSlide>
                    <Card name="person five" university="university five" />
                </SwiperSlide>

                <SwiperSlide>
                    <Card name="person six" university="university six" />
                </SwiperSlide>
            </Swiper >

            <div className="more-stories-btn">
                <button>View More Success Stories</button>
            </div>
        </div>
    )
}

export default Stories