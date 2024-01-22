import React from 'react'
import "./LastSection.css"
const LastSection = () => {
    return (
        <div className="last">
            <div className='last-left'>
                <div className="last-head">
                    Padho India
                </div>
                <div className="last-subhead">
                    <div className='l-one'>
                        The Padho India
                    </div>
                    <div className='l-two'>
                        Pledge
                    </div>
                </div>
                <div className="blank-last-subhead"></div>
                <div className="last-sec-info">
                    We will be sponsoring 1-year of education for a child (aged 5-13) with less <br />
                    means and privilege, for every student who uses our service to study in a <br />
                    dream university across the world.
                </div>
                <div className="last-btn">
                    <button>Know More</button>
                </div>
            </div>
            <div className="last-right">
                <img src="https://leverageedu.com/_next/image/?url=https%3A%2F%2Fimages.leverageedu.com%2Fassets%2Fimg%2Fhome%2Fpadho-india-banner-new.png&w=1920&q=75" alt="" />
            </div>
        </div>
    )
}

export default LastSection