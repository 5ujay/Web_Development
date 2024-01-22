import React from 'react'
import "./BodyTwo.css"

const BodyTwo = () => {
    return (
        <div>
            <div className="headingTwo">
                <h1>Discover our top sellers & latest innovation</h1>
            </div>

            <div className="gallery">
                <div className="contentTwo">
                    <img src="https://images.samsung.com/is/image/samsung/assets/in/offer/online/samsung-fest/unpacked-tile-370x160.jpg?$370_160_JPG$" alt="" />
                    <h3 className='p_name'>Galaxy Unpacked</h3>
                    <h5 className='textpara'>Unlock Pre-reserve benefits worth ₹ 5000*</h5>
                    <button className='btnTwo'>Preserve Now</button>
                </div>

                <div className="contentTwo">
                    <img src="https://images.samsung.com/is/image/samsung/assets/in/offer/online/samsung-fest/b2c-S21-FE-New-Variant_370x160-190723.jpg?$370_160_JPG$" alt="" />
                    <h3 className='p_name'>Galaxy S21 FE 5G</h3>
                    <h5 className='textpara'>Starting ₹ 44999* | Fast just got Faster</h5>
                    <button className='btnTwo'>Preserve Now</button>
                </div>

                <div className="contentTwo">
                    <img src="https://images.samsung.com/is/image/samsung/assets/in/offer/online/samsung-fest/b2c-Feature-tile_370x160-040723.jpg?$370_160_JPG$" alt="" />
                    <h3 className='p_name'>Galaxy A54 | A34 5G</h3>
                    <h5 className='textpara'>Rain can be awesome | Water Resistant (IP67)</h5>
                    <button className='btnTwo'>Preserve Now</button>
                </div>

                <div className="contentTwo">
                    <img src="https://images.samsung.com/is/image/samsung/assets/in/offer/online/samsung-fest/unpacked-tile-370x160.jpg?$370_160_JPG$" alt="" />
                    <h3 className='p_name'>Galaxy M34 5G</h3>
                    <h5 className='textpara'>50MP No Shake Cam
                        6000mAh* Battery</h5>
                    <button className='btnTwo'>Preserve Now </button>
                </div>
            </div>
        </div>
    )
}

export default BodyTwo
