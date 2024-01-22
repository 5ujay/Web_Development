import React from 'react'
import "./Footer.css"

const Footer = () => {
    return (
        <div>
            <hr />

            <div className="footer-content">
                <ul>
                    <b>About Leverage</b>
                    <li>About Us</li>
                    <li>Work with Us</li>
                    <li>Our Experts</li>
                    <li>Success Stories</li>
                </ul>

                <ul>
                    <b>Resources</b>
                    <li>LOR</li>
                    <li>SOP</li>
                </ul>

                <ul>
                    <b>Study Abroad</b>
                    <li>Study in UK</li>
                    <li>Study in Australia</li>
                    <li>Study in New Zealand</li>
                    <li>Study in Canada</li>
                    <li>Study in USA</li>
                    <li>Study in Germany</li>
                </ul>

                <ul>
                    <b>Tests</b>
                    <li>IELTS</li>
                    <li> GMAT</li>
                    <li>GRE</li>
                    <li>SAT</li>
                    <li>TOEFL</li>
                    <li>PTE</li>
                </ul>

                <ul>
                    <b>Offerings</b>
                    <li>Leverage One</li>
                    <li>AI University Course <br /> Finder</li>
                    <li>Leverage TV</li>
                    <li>Leverage Live</li>
                    <li>UniConnect</li>
                    <li>Fly Forex</li>
                    <li>Fly Loans</li>
                    <li>Scholarship Hub</li>
                </ul>

                <ul>
                    <b>Other Links</b>
                    <li>Privacy Policy</li>
                    <li>Terms & Conditions</li>
                    <li>Responsible Disclosure <br /> Policy</li>
                    <li>EEO Policy</li>

                </ul>
            </div>

            <hr className='hr' />

            <div className="footer-last-section">
                Copyright Ⓒ 2023, Leverage Edu. All rights reserved.
            </div>
        </div>
    )
}

export default Footer