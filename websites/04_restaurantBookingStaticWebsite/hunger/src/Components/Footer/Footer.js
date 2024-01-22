import React from 'react'
import "./Footer.css"

import { FaLocationArrow } from 'react-icons/fa'
import { FaClock } from 'react-icons/fa'
import { BiPhoneCall } from 'react-icons/bi'
import { FaTwitter, FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa'

const Footer = () => {
    return (
        <>
            <div className="footer1">

                <div className="foot">
                    <div className="foot-logo">
                        <FaLocationArrow />
                    </div>

                    <div className="foot-detail">

                        <div className="footname">
                            Address
                        </div>
                        <div className="foot-description">
                            A108 Adam Street <br />
                            New York, NY 535022 - US
                        </div>

                    </div>
                </div>


                <div className="foot">
                    <div className="foot-logo">
                        <BiPhoneCall />
                    </div>

                    <div className="foot-detail">

                        <div className="footname">

                            Reservations
                        </div>
                        <div className="foot-description">
                            Phone: +1 5589 55488 55 <br />
                            Email: info@example.com
                        </div>

                    </div>
                </div>


                <div className="foot">
                    <div className="foot-logo">
                        <FaClock />
                    </div>

                    <div className="foot-detail">

                        <div className="footname">
                            Opening Hours
                        </div>
                        <div className="foot-description">
                            Mon-Sat: 11AM - 23PM  <br />
                            Sunday: Closed
                        </div>

                    </div>
                </div>


                <div className="foot">
                    <div className="foot-detail">

                        <div className="footname">
                            Follow Us
                        </div>
                        <div className="foot-logos-last">
                            <FaFacebook />
                            <FaLinkedin />
                            <FaInstagram />
                            <FaTwitter />
                        </div>

                    </div>
                </div>

            </div>

            <div className="footer_2">
                <div className="text1">
                    © Copyright Hunger. All Rights Reserved
                </div>
                <div className="text2">
                    Designed & develop by Sujay Pagam
                </div>
            </div>

        </>
    )
}

export default Footer
