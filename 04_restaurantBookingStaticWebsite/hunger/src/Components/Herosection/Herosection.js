import React from 'react'
import './Herosection.css'
import { Link } from 'react-scroll'

const Herosection = () => {
    return (
        <div className='hero-sec' id='Herosection'>
            <div className="hero-left">
                <div className="hero-head">
                    <h1>Enjoy Your Healthy <br />
                        Delicious Food</h1>
                </div>
                <div className="hero-para">
                    <p>
                        Sed autem laudantium dolores.
                        Voluptatem itaque ea consequatur eveniet. <br />
                        Eum quas beatae cumque eum quaerat.
                    </p>
                </div>
                <div className="hero-btns">
                    <Link activeClass="active" to="bookatable" spy={true} smooth={true} offset={50} duration={2000} ><button className='btn1'>Book a Table</button></Link>
                </div>
            </div>

            <div className="hero-right">
                <img src="https://bootstrapmade.com/demo/templates/Yummy/assets/img/hero-img.png" alt="" />
            </div>
        </div>
    )
}

export default Herosection