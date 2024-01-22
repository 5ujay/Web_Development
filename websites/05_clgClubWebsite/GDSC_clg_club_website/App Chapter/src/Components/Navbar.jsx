import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GiTireIronCross } from 'react-icons/gi';
import app_chapter_logo from '../images/app_chapter_logo.png';
import { Link } from 'react-scroll'

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <div className="shadow-md w-full fixed z-10">
      <div className="flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800 ">
          <Link to="home" smooth={true} offset={50} duration={1000} onClick={closeMenu} className="text-3xl text-indigo-600 mr-1 pt-2">
            <img className='w-36 sm:w-44' src={app_chapter_logo} alt="" />
          </Link>
        </div>

        <div onClick={toggleMenu} className="text-3xl absolute right-8 top-6 cursor-pointer lg:hidden">
          <ion-icon name={open ? 'close' : 'menu'}>{open ? <GiTireIronCross /> : <GiHamburgerMenu />}</ion-icon>
        </div>

        <ul className={` md:pb-0 pb-12 absolute lg:static bg-white md:z-auto z-[-1] left-0 
           w-full lg:w-auto lg:pl-0 pl-9 transition-all duration-500
           ease-in ${open ? 'top-20 ' : 'top-[-490px]'}`}
        >
          <li className="flex  flex-col lg:flex-row gap-8 md:ml-8  text-xl md:my-0 my-7">
            <Link className='cursor-pointer' activeClass="active" to="home" spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}>HOME</Link>
            <Link className='cursor-pointer' activeClass="active" to="vision" spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}>VISION & MISSION</Link>
            <Link className='cursor-pointer' activeClass="active" to="opportunities" spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}>OPPORTUNITIES</Link>
            <Link className='cursor-pointer' activeClass="active" to="about" spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}>ABOUT</Link>
            <Link className='cursor-pointer' activeClass="active" to="contactus" spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}>CONTACT</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;



