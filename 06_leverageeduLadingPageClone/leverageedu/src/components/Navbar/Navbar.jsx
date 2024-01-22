import React from 'react'
import "./Navbar.css"
import { AiOutlineSearch } from "react-icons/ai"
import { IoIosCall } from "react-icons/io"
import { FcManager } from "react-icons/fc"

const Navbar = () => {
    return (
        <nav>
            <div className="nav-logo">
                <img src="https://leverageeduhome.gumlet.io/logo-dark.svg" alt="" />
                <button className='nav-btn'>We're hiring</button>
            </div>
            <div className="nav-items">
                <ul>
                    <li>About Us</li>
                    <li>Our Experts</li>
                    <li>Products</li>
                    <li>Tests</li>
                    <li>Fly Finance</li>
                    <li>Fly Homes</li>
                    <li>Community</li>
                    <li>Wings</li>
                </ul>
            </div>
            <div className="nav-logos">
                <AiOutlineSearch />
                <IoIosCall />
                <FcManager />
            </div>
        </nav>
    )
}

export default Navbar