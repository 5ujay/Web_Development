import React from 'react';
import oppourtunites_img from "../images/oppourtunites_img.png";
import 'animate.css'; // Import animate.css styles

const Opportunities = () => {
    return (
        <div className='opportunities pt-20 bg-gray-100'>
            <div className='text-center'>
                <h1 className='text-3xl md:text-5xl font-semibold px-2 md:px-14'>
                    Opportunities for Students
                </h1>
            </div>
            <div className='pt-5 md:pt-10 flex flex-col-reverse lg:grid lg:grid-cols-2 items-center justify-center  px-8 md:px-14 gap-10'>
                <div className='animate__animated animate__fadeInLeft mb-8 md:mb-0'>
                    <p className='text-gray-700 leading-2 mt-4 text-lg md:text-2xl w-80 sm:w-full'>
                        Joining the App Chapter offers students a unique opportunity to gain real-world experience by working on client projects, enhancing their portfolio with tangible achievements. The experience not only develops entrepreneurial skills, including effective client communication and project management but also fosters problem-solving abilities through tackling diverse challenges. Networking opportunities with professionals in various industries can open doors to future collaborations and job prospects. Additionally, students have the chance to earn income while broadening their understanding of different technologies and business domains, making them versatile professionals with a well-rounded skill set.
                    </p>
                </div>
                <div className='animate__animated animate__fadeInRight'>
                    <img className='rounded-2xl shadow-md hover:shadow-indigo-500 transform hover:translate-y-[-8px] transition-transform duration-300 w-full' src={oppourtunites_img} alt='Opportunities' />
                </div>
            </div>
        </div>
    );
}

export default Opportunities;
