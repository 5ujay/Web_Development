import React from 'react'
import "./Home.css"
import homepage_cartoon from "../images/homepage_cartoon.png"
const Home = () => {
    return (
        <div className='h-screen home'>
            <div className=''>
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-between pt-24 md:pt-32 px-4 md:px-14">
                <div className="sm:mb-8 md:mb-0 md:mr-8">
                    <img className="w-full" src={homepage_cartoon} alt="" />
                </div>
                <div className="text-center">
                    <h1 className='text-3xl md:text-5xl font-bold text-gray-800 mt-8 lg:mt-12 mb-4 lg:mb-8'>
                        Empowering Ideas through <span className="text-indigo-900">Innovation</span>
                    </h1>

                    <p className='text-lg md:text-xl text-white mb-8'>
                        Unleash creativity and transform concepts into reality with our cutting-edge solutions.
                    </p>

                    <h2 className='text-lg md:text-3xl font-semibold text-black bg-gradient-to-r from-blue-500 to-purple-500 py-2 md:py-4 lg:py-6 px-4 md:px-6 lg:px-8 rounded-md shadow-lg'>
                        Discover the Power of Code
                    </h2>

                    <p className='text-base md:text-lg text-white mt-4'>
                        Join us in exploring possibilities and shaping the future with <span className="text-black font-bold"> " App Chapter "</span>.
                    </p>
                </div>

            </div>

        </div>

    )
}

export default Home