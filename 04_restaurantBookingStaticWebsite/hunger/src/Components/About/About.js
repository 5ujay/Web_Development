import React from 'react'
import './About.css'

const About = () => {
    return (
        <div className="about" id='About'>
            <p className='aboutus'>About us</p>
            <h2 className='aboutusmore'>Learn More About Us</h2>

            <div className="about-content">

                <div className="about-content-left">
                    <img src="https://shorturl.at/nFJ26" alt="" height="500px" />
                </div>

                <div className="about-content-right">
                    <div className="about-info">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br />
                            eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <ul>
                            <li>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                            <li>Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                            <li>Ullamco laboris nisi ut aliquip ex ea commodo consequat. <br />
                                Duis aute irure dolor in reprehenderit in voluptate trideta <br />
                                storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
                        </ul>

                        <div className="about-right-img ">
                            <img src="https://shorturl.at/kMV37" alt="" height={250} width={500} />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default About