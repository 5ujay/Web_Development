import React from 'react'
import "./Offer.css"

const ContentAdd = (props) => {

    const { title, subTitle, btn, image } = props
    return (
        <div className='offer-content'>
            <div className="offer-img">
                <img src={image} alt="" />
            </div>

            <div className="offer-details">
                <div className="offer-title">
                    {title}
                </div>
                <div className="offer-subtitle">
                    {subTitle}
                </div>
                <div className="offer-btn">
                    <button>{btn}</button>
                </div>
            </div>
        </div>
    )
}

export default ContentAdd