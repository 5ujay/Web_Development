import React from 'react'
/* styles.css */
import "../index.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";


const Contactus = () => {
    const handleEmailClick = () => {
        window.location.href = 'mailto:your-email@example.com'; // Replace with your email address
    }
    return (
        <div className='contactus py-20 bg-gray-100 text-center'>
            <div>
                <h1 className='text-3xl md:text-5xl font-semibold px-8 md:px-14 mb-6'>Contact Us</h1>
            </div>
            <div className='flex justify-center items-center space-x-8'>
                <div className='cursor-pointer animate__animated animate__fadeInLeft' onClick={() => window.open('https://www.instagram.com/appchapter_sigce', '_blank')}>
                    <FontAwesomeIcon icon={faInstagram} size='3x' className='text-pink-500 hover:text-pink-700 transition-colors duration-300' />
                </div>
                <div className='cursor-pointer animate__animated animate__fadeInUp' onClick={() => window.open('https://api.whatsapp.com/send?phone=123456789', '_blank')}>
                    <FontAwesomeIcon icon={faWhatsapp} size='3x' className='text-green-500 hover:text-green-700 transition-colors duration-300' />
                </div>
                <div className='cursor-pointer animate__animated animate__fadeInRight' onClick={handleEmailClick}>
                    <div className='text-5xl text-blue-400 transition-colors duration-300'>
                        <MdEmail />
                    </div>
                </div>
                <div className='cursor-pointer animate__animated animate__fadeInUp' onClick={() => window.open('https://api.whatsapp.com/send?phone=123456789', '_blank')}>
                    <div className='text-5xl text-blue-900 transition-colors duration-300'>
                        <FaLinkedin />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contactus