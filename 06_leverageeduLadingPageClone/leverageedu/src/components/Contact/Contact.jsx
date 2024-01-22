import React from 'react'
import "./Contact.css"
import { BsInstagram } from "react-icons/bs"
import { AiFillYoutube } from "react-icons/ai"
import { FaTwitter } from "react-icons/fa"
import { AiFillLinkedin } from "react-icons/ai"
import { AiFillFacebook } from "react-icons/ai"

const Contact = () => {
    return (
        <div div className='contact'>
            <div className="contact-info-section">
                <div className='section-one'>
                    <div className="logo">
                        <img src="https://leverageeduhome.gumlet.io/logo-dark.svg" alt="" />
                    </div>
                    <div className="our-info">
                        End-to-end support for your study <br />
                        abroad journey
                    </div>
                    <div className="social-media">
                        <BsInstagram />
                        <AiFillYoutube />
                        <FaTwitter />
                        <AiFillLinkedin />
                        <AiFillFacebook />
                    </div>
                </div>

                <div className="section-two">
                    <div className="section-two-head">
                        <b>Call Us</b> <br />
                        1800-572-000
                    </div>
                    <div className="section-two-head">
                        <b>General Enquiries</b> <br />
                        hello@leverageedu.com
                    </div>
                    <div className="section-two-head">
                        <b>Press</b> <br />
                        press@leverageedu.com
                    </div>
                </div>
            </div>

            <div className="app-info">
                <div className="app-heading">
                    Download the Study Abroad with
                    Leverage Edu App
                </div>
                <div className="app-iamges">
                    <div className="image-one">
                        <img src="https://leverageedu.com/_next/image/?url=https%3A%2F%2Fimages.leverageedu.com%2Fhomepage%2Fappqr.png&w=128&q=75" alt="" />
                    </div>
                    <div className="image-two">
                        <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQm0e53r4uopVoz9EHS0SRCXJNKeRyPcQVFVPGYXxV4_DUMbyIa" alt="" />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Contact