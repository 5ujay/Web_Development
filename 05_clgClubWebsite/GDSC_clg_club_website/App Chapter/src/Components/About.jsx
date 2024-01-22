import React from 'react'
import About_us_img from "../images/About_us_img.png"

import 'animate.css'; // Import animate.css styles

const About = () => {
    return (
        <div className="about bg-gray-100 min-h-screen flex items-center justify-center">
            <div className="container mx-auto p-8 bg-white shadow-lg rounded-md">
                <h1 className="text-3xl md:text-5xl font-bold mb-4 text-center">About Us</h1>

                <div className="grid grid-cols-1 md:grid-cols-2">
                    {/* Left Column */}
                    <div className="animate__animated animate__fadeInLeft">
                        <img
                            src={About_us_img}
                            alt="About Us Image"
                            className=" rounded-2xl shadow-md hover:shadow-purple-600 transform hover:translate-y-[-8px] transition-transform duration-300"
                        />
                    </div>

                    {/* Right Column */}
                    <div className="animate__animated animate__fadeInRight pt-10">
                        <p className="text-gray-700 leading-relaxed text-xl md:text-3xl font-semibold">
                            Welcome to App Chapter : -
                        </p>
                        <p className="text-gray-700 leading-2 mt-4 text-lg md:text-2xl w-80 sm:w-full">
                            "Empowering students to transform skills into innovative solutions,
                            we seamlessly connect academia and industry, crafting impactful websites and apps.
                            Join us for hands-on experience, innovation, and a tech-forward community,
                            shaping the future together one code at a time. Dive into a realm of creativity and
                            collaboration, where every project becomes a journey of discovery and growth.
                            Explore the endless possibilities with us!"
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About