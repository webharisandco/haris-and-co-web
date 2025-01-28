import * as React from 'react';
import { Link } from 'react-router-dom';
import Logo from '@/assets/images/Haris&Co-blk.svg';
import menuIcon from '@/assets/images/icons/menu.svg';
import { useState } from 'react';
import MobileMenu from './MobileMenu';
import ContactButton from '../ui/HomePage/ContactButton';
import Button from '../ui/common/Button';


export default function NormalHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (!menuOpen) {
      document.body.style.overflow = "hidden"; // Prevent scrolling
      document.body.style.height = "100vh"; // Prevent scrolling
    } else {
      document.body.style.overflow = "auto"; // Enable scrolling
      document.body.style.height = "auto"; // Prevent scrolling
    }
  };
  return (
    <div className="px-[16px] md:px-[80px] py-[35px] w-full bg-[#fff]  flex justify-between items-center">
      <div className=''>
        <img
          src={Logo}
          alt="Haris & Co."
          className="w-fit h-[30px] xl:h-[50px] 2xl:h-[66px]"
        />
      </div>
      <div className='items-center gap-[25px] xl:gap-[49px] hidden lg:flex'>
        <div className="flex justify-between gap-[25px] xl:gap-[40px] text-black text-sm 2xl:text-base  *:font-light *:text-nowrap">
          <Link to="/services" className=" font-[thin]">Home</Link>
          <Link to="/services" className=" font-[thin]">Services</Link>
          <Link to="/works" className=" font-[thin]">Works</Link>
          <Link to="/clients" className=" font-[thin]">Clients</Link>
          <Link to="/awards" className=" font-[thin]">Awards</Link>
          <Link to="/about" className=" font-[thin]">About us</Link>
          <Link to="/blogs" className=" font-[thin]">Blogs</Link>
          <Link to="/careers" className=" font-[thin]">Careers</Link>
        </div>
        <div className="hidden lg:block">
        <Button text='Contact Us' href='/contact' btnClassName={' 2xl:w-[175px]'} />
        </div>
      </div>

      <div className="lg:hidden flex">
        <button onClick={toggleMenu}>
          {/* {menuIcon ? */}
          {/* // <img src={menuIcon} alt="Menu Icon" className="" /> */}
          <button
            className="relative z-50 flex flex-col items-end justify-center w-10 h-10 gap-1 bg-transparent border-none cursor-pointer lg:hidden"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            <span
              className={`block h-[2px] w-6 bg-black rounded-sm transition-transform duration-300 ${menuOpen ? "translate-y-[7px] rotate-45" : ""
                }`}
            ></span>
            <span
              className={`block h-[2px] w-5 bg-black rounded-sm transition-opacity duration-300  ${menuOpen ? "opacity-0" : ""
                }`}
            ></span>
            <span
              className={`block h-[2px]  bg-black rounded-sm transition-transform duration-300 ${menuOpen ? "-translate-y-[5px] -rotate-45 w-6" : "w-4"
                }`}
            ></span>
          </button>
          {/* :
          <img src={menuIcon} alt="Menu Icon" className="" /> */}
          {/* } */}
        </button>
        <MobileMenu isOpen={menuOpen} />
      </div>


    </div>
  );
}