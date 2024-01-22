import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import "./News.css"
import NewsCard from './NewsCard';
const News = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 1024 },
            items: 4
        },
        desktop: {
            breakpoint: { max: 1024, min: 700 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 800, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    const NewsData = [
        {
            id: 1,
            newstext: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi, et...",
            image: "https://le-public.s3.amazonaws.com/inTheNews/logo17.png"
        },
        {
            id: 2,
            newstext: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi, et...",
            image: "https://le-public.s3.amazonaws.com/inTheNews/logo7.png"
        },
        {
            id: 3,
            newstext: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi, et...",
            image: "https://le-public.s3.amazonaws.com/inTheNews/logo9.png"
        },
        {
            id: 4,
            newstext: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi, et...",
            image: "https://le-public.s3.amazonaws.com/inTheNews/logo8.png"
        },
        {
            id: 5,
            newstext: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi, et...",
            image: "https://le-public.s3.amazonaws.com/inTheNews/logo6.png"
        },
        {
            id: 6,
            newstext: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi, et...",
            image: "https://le-public.s3.amazonaws.com/inTheNews/logo5.png"
        },
        {
            id: 7,
            newstext: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi, et...",
            image: "https://le-public.s3.amazonaws.com/inTheNews/logo2.png"
        },
        {
            id: 8,
            newstext: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi, et...",
            image: "https://le-public.s3.amazonaws.com/inTheNews/logo10.png"
        }
    ]


    const News = NewsData.map((elem) => (
        <NewsCard newstext={elem.newstext} image={elem.image} />
    ))




    return (
        <div className='news-section'>
            <div className="news-head">
                In the Press
            </div>
            <div className="news-subhead">
                <div className='n-one'>
                    Featured
                </div>
                <div className='n-two'>
                    Across
                </div>
            </div>
            <div className="blank-news-subhead"></div>

            <Carousel responsive={responsive} >
                {News}
            </Carousel>

            <div className="news-btn">
                <button>View All</button>
            </div>
        </div>
    )
}

export default News