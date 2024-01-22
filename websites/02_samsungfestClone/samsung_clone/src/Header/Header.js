import React from "react";
import "./Header.css";
import bgVedio from "../assests/samsungIntro.mp4";

import TyperWriter from "typewriter-effect";

const Header = () => {
    return (
        <div className="header-main">
            <div className="text-head">
                <h2><TyperWriter options={{
                    autoStart: true,
                    loop: true,
                    delay: 50,
                    strings: ["Samsung Galaxy S23 Ultra"]
                }} /></h2>
            </div>

            <div className="phone-main">

                <div className="text-body">
                    <h3>Starting ₹ 4875/mo. (No Cost EMI up to 24 months)</h3><br />
                    <p> Incl. ₹ 8000 Instant bank discount<br />
                        Addl. ₹ 2000 off with Welcome voucher on Samsung Shop App<br /><br />
                        OR Bundle with an accessory & get 5% off on both<br /><br />
                        Get addl. 50% Loyalty points<br />
                        Get up to 4 months free YouTube Premium</p><br />
                </div>

                <video className="viedo"
                    autoPlay
                    loop
                    muted
                    style={{
                        width: "100%",
                        height: 225,
                    }}
                >
                    <source src={bgVedio} type="video/mp4" />
                </video>
            </div>
        </div>
    );
};

export default Header;
