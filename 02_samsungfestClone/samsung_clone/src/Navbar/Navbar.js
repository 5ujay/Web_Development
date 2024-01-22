import React from 'react'
import samsung from "../Images/samsung_logo.png"
import "./Navbar.css"

import { FiSearch } from "react-icons/fi"
import { AiOutlineShoppingCart } from "react-icons/ai"
import { CgProfile } from "react-icons/cg"
import { AiOutlineMenu } from "react-icons/ai"

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='samsung-logo'>
                <img src={samsung} alt="" srcset="" />
            </div>

            {/* <div className="nav-items">
                <ul>
                    <li><button>Shop</button></li>
                    <li><button>Mobile</button></li>
                    <li><button>Tv & Av</button></li>
                    <li><button>Home Appliences</button></li>
                    <li><button>Laptop & Moniters</button></li>
                    <li><button>Displays</button></li>
                    <li><button>Accessories</button></li>
                    <li><button>Smart Things</button></li>
                </ul>
            </div> */}

            {/* <div className="nav-items-two">
                <ul>
                    <li><button>Support</button></li>
                    <li><button>Bussiness</button></li>
                </ul>
            </div> */}

            <div className="nav-icons">
                <div className="search">
                    <FiSearch />
                </div>
                <div className="cart">
                    <AiOutlineShoppingCart />
                </div>
                <div className="user">
                    <CgProfile />
                </div>
                <div className="menu">
                    <AiOutlineMenu />
                </div>
            </div>
        </div>


    )
}

export default Navbar
