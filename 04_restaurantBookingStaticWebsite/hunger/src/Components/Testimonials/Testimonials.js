import React from 'react'
import { ImQuotesLeft } from 'react-icons/im'
import { ImQuotesRight } from "react-icons/im"
import { Swiper, SwiperSlide } from 'swiper/react';
import { GiStarsStack } from 'react-icons/gi'
import 'swiper/css';
import "./Testimonial.css"
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';


const Testimonials = () => {
    return (
        <div>
            <div className="testimoinal">
                <div className="test-heading">
                    Testimonials
                </div>
                <div className="test-subheading">
                    <h2>What Are They Saying About Us</h2>
                </div>
            </div>

            <Swiper
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="slide1">
                        <div className="message-left">
                            <div className="div">

                            </div>
                            <div className="meassage">
                                <p> <ImQuotesLeft className='quote-icon' /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, dolore!
                                    <br />
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, dolore!
                                    <br />
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, dolore!
                                    <ImQuotesRight className='quote-icon' />
                                </p>
                            </div>
                            <div className="msg-name">
                                <h3>Person Name</h3>
                            </div>
                            <div className="msg-rating">
                                <h3><GiStarsStack /><GiStarsStack /><GiStarsStack /></h3>
                            </div>
                        </div>

                        <div className="message-right">
                            <img src="https://avatars.githubusercontent.com/u/5971558?v=4" alt="" />
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="slide1">
                        <div className="message-left">
                            <div className="div">

                            </div>
                            <div className="meassage">
                                <p> <ImQuotesLeft className='quote-icon' /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, dolore!
                                    <br />
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, dolore!
                                    <br />
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, dolore!
                                    <ImQuotesRight className='quote-icon' />
                                </p>
                            </div>
                            <div className="msg-name">
                                <h3>Person Name</h3>
                            </div>
                            <div className="msg-rating">
                                <h3><GiStarsStack /><GiStarsStack /><GiStarsStack /></h3>
                            </div>
                        </div>

                        <div className="message-right">
                            <img src="https://bootstrapmade.com/demo/templates/Yummy/assets/img/testimonials/testimonials-2.jpg" alt="" />
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="slide1">
                        <div className="message-left">
                            <div className="div">

                            </div>
                            <div className="meassage">
                                <p> <ImQuotesLeft className='quote-icon' /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, dolore!
                                    <br />
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, dolore!
                                    <br />
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, dolore!
                                    <ImQuotesRight className='quote-icon' />
                                </p>
                            </div>
                            <div className="msg-name">
                                <h3>Person Name</h3>
                            </div>
                            <div className="msg-rating">
                                <h3><GiStarsStack /><GiStarsStack /><GiStarsStack /></h3>
                            </div>
                        </div>

                        <div className="message-right">
                            <img src="https://bootstrapmade.com/demo/templates/Yummy/assets/img/testimonials/testimonials-3.jpg" alt="" />
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="slide1">
                        <div className="message-left">
                            <div className="div">

                            </div>
                            <div className="meassage">
                                <p> <ImQuotesLeft className='quote-icon' /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, dolore!
                                    <br />
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, dolore!
                                    <br />
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, dolore!
                                    <ImQuotesRight className='quote-icon' />
                                </p>
                            </div>
                            <div className="msg-name">
                                <h3>Person Name</h3>
                            </div>
                            <div className="msg-rating">
                                <h3><GiStarsStack /><GiStarsStack /><GiStarsStack /></h3>
                            </div>
                        </div>

                        <div className="message-right">
                            <img src="https://bootstrapmade.com/demo/templates/Yummy/assets/img/testimonials/testimonials-4.jpg" alt="" />
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    )
}

export default Testimonials