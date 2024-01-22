import React from 'react'
import "./NavLine.css"
import { FaRupeeSign } from "react-icons/fa"

const NavLine = () => {
    return (
        <div className="nav-line">
            <p>Get welcome vouchers worth <FaRupeeSign className='rs' />5000 on Samsung shop App.
                <a href="">Register now.</a></p>
        </div>
    )
}

export default NavLine
