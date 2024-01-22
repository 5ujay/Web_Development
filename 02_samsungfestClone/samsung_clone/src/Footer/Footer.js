import React from "react";
import "./Footer.css";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

import { AiOutlineLink } from "react-icons/ai"

const Footer = () => {
    return (
        <div>
            <div className="footer_one">
                <div className="foot_text">
                    Copyright ⓒ 1995-2023 SAMSUNG All Rights reserved.  <br /> <br />

                    Please dispose of
                    e-waste and plastic waste responsibly.<br /> For more information or
                    e-waste pick up, please call 1800 5 7267864 or click here for more
                    details. <br /><br />

                    Registered Office Address: 6th Floor, DLF Centre, Sansad
                    Marg, New Delhi-110001 <br /> Corporate Identification Number (CIN):
                    U31900DL1995PTC071387
                </div>
                <div className="foot_icons">
                    <BsFacebook />
                    <AiFillTwitterCircle />
                    <AiFillLinkedin />
                    <BsInstagram />
                    <AiFillYoutube />
                    <BsWhatsapp />
                </div>
            </div>

            <div className="footer_two">
                <div className="ftext">
                    @develop by SUJAY PAGAM
                </div>

                <div className="connect">
                    <a href="https://www.linkedin.com/in/sujay-pagam-448448260" target="_blank"> <AiOutlineLink /></a>
                </div>
            </div>
        </div>
    );
};

export default Footer;
