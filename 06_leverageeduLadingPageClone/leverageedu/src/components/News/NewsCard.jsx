import React from 'react'
import "./News.css"
const NewsCard = (props) => {
    return (
        <div className='newscard'>
            <div className="news-part-one">
                {props.newstext}
            </div>
            <hr />
            <div className="news-part-two">
                <div className="news-logo">
                    <img src={props.image} alt="" />
                </div>
                <div className="news-tag">
                    <a href="">Read More</a>
                </div>
            </div>
        </div>
    )
}

export default NewsCard