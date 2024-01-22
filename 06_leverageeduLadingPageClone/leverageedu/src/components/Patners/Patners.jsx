import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Patner.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';



const Patners = () => {
    return (
        <div className='patners'>
            <div className="patners-head">
                University Patners
            </div>

            <div className="patners-subhead">
                <div className='p-one'>
                    650+
                </div>
                <div className='p-two'>
                    and growing
                </div>
            </div>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="patner-one-silde">
                        <img src="./images/logo1.png" alt="" />
                        <img src="./images/logo3.png" alt="" />
                        <img src="./images/logo4.png" alt="" />
                        <img src="./images/logo5.png" alt="" />
                        <img src="./images/logo6.png" alt="" />
                        <img src="./images/logo7.png" alt="" />
                        <img src="./images/logo8.png" alt="" />
                        <img src="./images/logo9.png" alt="" />
                        <img src="./images/logo9(1).png" alt="" />
                        <img src="./images/logo5.png" alt="" />
                        <img src="./images/logo6.png" alt="" />
                        <img src="./images/logo7.png" alt="" />
                        <img src="./images/logo8.png" alt="" />
                        <img src="./images/logo9.png" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="patner-one-silde">
                        <img src="./images/logo1.png" alt="" />
                        <img src="./images/logo3.png" alt="" />
                        <img src="./images/logo4.png" alt="" />
                        <img src="./images/logo5.png" alt="" />
                        <img src="./images/logo6.png" alt="" />
                        <img src="./images/logo7.png" alt="" />
                        <img src="./images/logo8.png" alt="" />
                        <img src="./images/logo9.png" alt="" />
                        <img src="./images/logo9(1).png" alt="" />
                        <img src="./images/logo5.png" alt="" />
                        <img src="./images/logo6.png" alt="" />
                        <img src="./images/logo7.png" alt="" />
                        <img src="./images/logo8.png" alt="" />
                        <img src="./images/logo9.png" alt="" />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="patner-one-silde">
                        <img src="./images/logo1.png" alt="" />
                        <img src="./images/logo3.png" alt="" />
                        <img src="./images/logo4.png" alt="" />
                        <img src="./images/logo5.png" alt="" />
                        <img src="./images/logo6.png" alt="" />
                        <img src="./images/logo7.png" alt="" />
                        <img src="./images/logo8.png" alt="" />
                        <img src="./images/logo9.png" alt="" />
                        <img src="./images/logo9(1).png" alt="" />
                        <img src="./images/logo5.png" alt="" />
                        <img src="./images/logo6.png" alt="" />
                        <img src="./images/logo7.png" alt="" />
                        <img src="./images/logo8.png" alt="" />
                        <img src="./images/logo9.png" alt="" />
                    </div>
                </SwiperSlide>
            </Swiper>

            <div className="patners-info">
                Admissions counselling service to these universities is FREE for students. <br />
                As their official partners, we receive a student advisory fee from universities.
            </div>

            <div className="patners-btn">
                <button>View All Universities</button>
            </div>
        </div>
    )
}

export default Patners