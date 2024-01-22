import React from 'react'
import "./Contact.css"
import { BiCurrentLocation } from 'react-icons/bi'
import { AiOutlineMail } from 'react-icons/ai'
import { FiPhoneCall } from 'react-icons/fi'
import { BiSolidTimeFive } from 'react-icons/bi'

const Contact = () => {
    return (
        <div className="contact" id='Contact'>
            <div className="contact-heading">
                Contact
            </div>
            <div className="contact-subheading">
                <h2>Need help? Contact Us</h2>
            </div>

            <div className="contact-methods">
                {/* adress */}
                <div className="method">
                    <div className="logo">
                        <a href="https://shorturl.at/aceHQ"><BiCurrentLocation /></a>
                    </div>
                    <div className="address">
                        <div className="head">
                            Our Address
                        </div>
                        <div className="subhead">
                            A108 Adam Street, New York, NY 535022
                        </div>
                    </div>
                </div>
                {/* contact */}
                <div className="method">
                    <div className="logo">
                        <FiPhoneCall />
                    </div>
                    <div className="call">
                        <div className="head">
                            Call us
                        </div>
                        <div className="subhead">
                            +1 5589 55488 55
                        </div>
                    </div>
                </div>
                {/* Email */}
                <div className="method">
                    <div className="logo">
                        <AiOutlineMail />
                    </div>
                    <div className="email">
                        <div className="head">
                            Email us
                        </div>
                        <div className="subhead">
                            contact@example.com
                        </div>
                    </div>
                </div>
                {/* open hours */}
                <div className="method">
                    <div className="logo">
                        <BiSolidTimeFive />
                    </div>
                    <div className="time">
                        <div className="head">
                            Opening Hours
                        </div>
                        <div className="subhead">
                            Mon-Sat: 11AM - 23PM; Sunday: Closed
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact