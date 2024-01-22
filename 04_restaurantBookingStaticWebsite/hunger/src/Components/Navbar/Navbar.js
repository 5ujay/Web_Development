import React from 'react'
import './Navbar.css'
import { FaTimes, FaBars } from 'react-icons/fa'
import { useRef } from 'react'
import { Link } from 'react-scroll'

const Navbar = () => {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle('responsive_nav')
    }

    return (
        <header>
            <h1>Hunger <div className="dot"></div></h1>

            <nav ref={navRef}>
                <Link activeClass="active" to="Herosection" spy={true} smooth={true} offset={50} duration={500}>Home</Link>
                <Link activeClass="active" to="About" spy={true} smooth={true} offset={50} duration={500}>About</Link>
                <Link activeClass="active" to="Menu" spy={true} smooth={true} offset={50} duration={500}>Menu</Link>
                <Link activeClass="active" to="Event" spy={true} smooth={true} offset={50} duration={500}>Events</Link>
                <Link activeClass="active" to="Chefs" spy={true} smooth={true} offset={50} duration={500}>Chefs</Link>
                <Link activeClass="active" to="Contact" spy={true} smooth={true} offset={50} duration={500}>Contact</Link>
                <button className='nav-btn nav-close-btn' onClick={showNavbar}>
                    <FaTimes />
                </button>
            </nav>

            <button className='nav-btn' onClick={showNavbar}>
                <FaBars />
            </button>

        </header>
    )
}

export default Navbar

