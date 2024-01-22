import React from 'react'
import './Events.css'
import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Pagination, Navigation } from 'swiper/modules';


const Events = () => {
    return (
        <div className="events">
            <div className="event-heading" id='Event'>
                Events
            </div>

            <div className="event-sub-heading">
                <h2>Share Your Memory In Our Restaurant</h2>
            </div>

            <div className="swiper1">
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="event1">
                            <div className="event-img">
                                <img src="https://shorturl.at/xMOT8" alt="" />
                            </div>
                            <div className="event-info">
                                <div className="event-name">
                                    <h2>Custom Parties</h2>
                                </div>
                                <div className="event-price">
                                    <h2>$99</h2>
                                </div>
                                <div className="event-description">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Nam rem commodi totam placeat facere pariatur,
                                        cum ratione architecto vel voluptates eos voluptas. </p>
                                </div>
                            </div>

                        </div>
                    </SwiperSlide>

                    <SwiperSlide>

                        <div className="event1">
                            <div className="event-img">
                                <img src="https://shorturl.at/nCH59" alt="" />
                            </div>
                            <div className="event-info">
                                <div className="event-name">
                                    <h2>Private Parties</h2>
                                </div>
                                <div className="event-price">
                                    <h2>$299</h2>
                                </div>
                                <div className="event-description">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Nam rem commodi totam placeat facere pariatur,
                                        cum ratione architecto vel voluptates eos voluptas. </p>
                                </div>
                            </div>

                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="event1">
                            <div className="event-img">
                                <img src="https://shorturl.at/vzC49" alt="" />
                            </div>
                            <div className="event-info">
                                <div className="event-name">
                                    <h2>Birthady Parties</h2>
                                </div>
                                <div className="event-price">
                                    <h2>$199</h2>
                                </div>
                                <div className="event-description">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Nam rem commodi totam placeat facere pariatur,
                                        cum ratione architecto vel voluptates eos voluptas. </p>
                                </div>
                            </div>

                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="event1">
                            <div className="event-img">
                                <img src="https://shorturl.at/adhLZ" alt="" />
                            </div>
                            <div className="event-info">
                                <div className="event-name">
                                    <h2>Samll Parties</h2>
                                </div>
                                <div className="event-price">
                                    <h2>$59</h2>
                                </div>
                                <div className="event-description">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Nam rem commodi totam placeat facere pariatur,
                                        cum ratione architecto vel voluptates eos voluptas. </p>
                                </div>
                            </div>

                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="event1">
                            <div className="event-img">
                                <img src="https://shorturl.at/tX356" alt="" />
                            </div>
                            <div className="event-info">
                                <div className="event-name">
                                    <h2>Candle Dinner</h2>
                                </div>
                                <div className="event-price">
                                    <h2>$219</h2>
                                </div>
                                <div className="event-description">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Nam rem commodi totam placeat facere pariatur,
                                        cum ratione architecto vel voluptates eos voluptas. </p>
                                </div>
                            </div>

                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>




            {/* for the mobile devices putopse */}
            <div className="swiper2">
                <Swiper
                    pagination={{
                        type: 'fraction',
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="event1">
                            <div className="event-img">
                                <img src="https://shorturl.at/xMOT8" alt="" />
                            </div>
                            <div className="event-info">
                                <div className="event-name">
                                    <h2>Custom Parties</h2>
                                </div>
                                <div className="event-price">
                                    <h2>$99</h2>
                                </div>
                                <div className="event-description">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Nam rem commodi totam placeat facere pariatur,
                                        cum ratione  architecto vel voluptates eos voluptas. </p>
                                </div>
                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="event1">
                            <div className="event-img">
                                <img src="https://shorturl.at/nCH59" alt="" />
                            </div>
                            <div className="event-info">
                                <div className="event-name">
                                    <h2>Private Parties</h2>
                                </div>
                                <div className="event-price">
                                    <h2>$299</h2>
                                </div>
                                <div className="event-description">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Nam rem commodi totam placeat facere pariatur,
                                        cum ratione architecto vel voluptates eos voluptas. </p>
                                </div>
                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="event1">
                            <div className="event-img">
                                <img src="https://shorturl.at/vzC49" alt="" />
                            </div>
                            <div className="event-info">
                                <div className="event-name">
                                    <h2>Birthady Parties</h2>
                                </div>
                                <div className="event-price">
                                    <h2>$199</h2>
                                </div>
                                <div className="event-description">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Nam rem commodi totam placeat facere pariatur,
                                        cum ratione architecto vel voluptates eos voluptas. </p>
                                </div>
                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="event1">
                            <div className="event-img">
                                <img src="https://shorturl.at/adhLZ" alt="" />
                            </div>
                            <div className="event-info">
                                <div className="event-name">
                                    <h2>Samll Parties</h2>
                                </div>
                                <div className="event-price">
                                    <h2>$59</h2>
                                </div>
                                <div className="event-description">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Nam rem commodi totam placeat facere pariatur,
                                        cum ratione architecto vel voluptates eos voluptas. </p>
                                </div>
                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="event1">
                            <div className="event-img">
                                <img src="https://shorturl.at/tX356" alt="" />
                            </div>
                            <div className="event-info">
                                <div className="event-name">
                                    <h2>Candle Dinner</h2>
                                </div>
                                <div className="event-price">
                                    <h2>$219</h2>
                                </div>
                                <div className="event-description">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Nam rem commodi totam placeat facere pariatur,
                                        cum ratione architecto vel voluptates eos voluptas. </p>
                                </div>
                            </div>

                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>

    )
}

export default Events