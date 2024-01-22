import React from 'react'
import "./HeadItem.css"

import { AiOutlineArrowLeft } from "react-icons/ai"
import { AiOutlineArrowRight } from "react-icons/ai"

const HeadItems = () => {

    const handleOnClickleft = () => {
        var left = document.querySelector(".card-items");
        left.scrollBy(-360, 0)
    }

    const handleOnClickright = () => {
        var right = document.querySelector(".card-items");
        right.scrollBy(360, 0)
    }
    return (
        <div className="body">
            <div className='icon' onClick={handleOnClickleft}><button id='btn'><AiOutlineArrowLeft /></button></div>
            <div className="cover">
                <div className="card-items">
                    <div className="card">
                        <img src="https://images.samsung.com/is/image/samsung/assets/in/offer/online/samsung-fest/offerpage/Featured_Black_80x50.png" alt="" />
                        <p>Top Deals</p>
                    </div>
                    <div className="card">
                        <img src="https://images.samsung.com/is/image/samsung/assets/in/offer/online/samsung-fest/bespoke-living.png" alt="" />
                        <p>Bespoke Living</p>
                    </div>
                    <div className="card">
                        <img src="https://images.samsung.com/is/image/samsung/assets/in/offer/online/samsung-fest/offerpage/Phones_Black_80x50.png" alt="" />
                        <p>Mobiles</p>
                    </div>
                    <div className="card">
                        <img src="https://images.samsung.com/is/image/samsung/assets/in/offer/online/samsung-fest/offerpage/TV_Home_Theater_Black_80x50.png" alt="" />
                        <p>Televisions & Soundbar</p>
                    </div>
                    <div className="card">
                        <img src="https://images.samsung.com/is/image/samsung/assets/in/offer/online/samsung-fest/offerpage/ref-170523.png" alt="" />
                        <p>Refrigerators</p>
                    </div>
                    <div className="card">
                        <img src="https://images.samsung.com/is/image/samsung/assets/in/offer/online/samsung-fest/offerpage/wm-170523.png" alt="" />
                        <p>Waching Machine</p>
                    </div>
                    <div className="card">
                        <img src="https://images.samsung.com/is/image/samsung/assets/in/offer/online/samsung-fest/offerpage/ac-170523.png" alt="" />
                        <p>Air Conditioners</p>
                    </div>
                    <div className="card">
                        <img src="https://images.samsung.com/is/image/samsung/assets/in/offer/online/samsung-fest/offerpage/Tablets_Computing_Black_80x50.png" alt="" />
                        <p>Tablets & wearbels</p>
                    </div>
                    <div className="card">
                        <img src="https://images.samsung.com/is/image/samsung/assets/in/offer/online/samsung-fest/offerpage/Monitor-Memory-Storage-80x50.png" alt="" />
                        <p>Laptops & Moniters</p>
                    </div>
                    <div className="card">
                        <img src="https://images.samsung.com/is/image/samsung/assets/in/offer/online/samsung-fest/offerpage/kitchen-care-170523.png" alt="" />
                        <p>Kitchen Care</p>
                    </div>
                    <div className="card">
                        <img src="https://images.samsung.com/is/image/samsung/assets/in/offer/online/samsung-fest/offerpage/Watch_AudioandAccessories_Black_80x50.png" alt="" />
                        <p>Accessories</p>
                    </div>
                </div>
            </div>
            <div className='icon' onClick={handleOnClickright}><button id='btn'><AiOutlineArrowRight /></button></div>
        </div >
    )
}
export default HeadItems

