import React from 'react'
import "./Herosec.css"

const Herosec = () => {
    return (
        <div className="herosection">
            <div className="hero-content">

                <div className="hero-part1">
                    <div className="hero-head">
                        <h1>Your Study Abroad Expert</h1>
                    </div>
                    <div className="hero-subhead">
                        <p>The largest Personalised Student Counselling Study Abroad Platform in the world. <br />
                            Obsessed with Student Success.</p>
                    </div>
                </div>

                <div className="hero-part2">
                    <div className="hero-btns">
                        <div className="btn1">
                            <button>Get your shortlist for FREE</button>
                        </div>
                        <div className="btn2">
                            <button>Talk to an Expert</button>
                        </div>
                    </div>
                    <div className="hero-btn-para">
                        <p>95% of our students get an admit in less than 4 weeks</p>
                    </div>
                </div>

                <div className="hero-part3">
                    <div className="hero-patners-para">
                        <p>Our students finished University to work at global offices of</p>
                    </div>
                    <div className="hero-patners-logos">
                        <img src="https://leverageedu.com/_next/image/?url=https%3A%2F%2Fleverageeduhome.gumlet.io%2FFrame3430.png&w=640&q=75" alt="" />

                    </div>
                </div>
            </div>

            <div className="hero-img">
                <img src="http://surl.li/lskwl" alt="" />
            </div>
        </div>
    )
}

export default Herosec