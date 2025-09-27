import * as React from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "@/assets/images/Haris&Co-blk.svg";
import menuIcon from "@/assets/images/icons/menu.svg";
import { useState } from "react";
import MobileMenu from "./MobileMenu";
import ContactButton from "../ui/HomePage/ContactButton";
import Button from "../ui/common/Button";

export default function NormalHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation()

  console.log(location.pathname)
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
    <div className="px-[16px] fixed z-50 md:px-[80px] py-[35px] w-full bg-[#fff]  flex justify-between items-center">
      <div className="max-w-fit">
        <Link to={'/'}>
          <img
            src={Logo}
            alt="Haris & Co."
            className="max-w-fit h-[30px] xl:h-[45px] xl:w-[275px] 2xl:h-[45px]"
          />
        </Link>
      </div>
      <div className='items-center gap-[25px] xl:gap-[49px] hidden lg:flex'>
        <div className="flex justify-between gap-[25px] xl:gap-[40px] 3xl:gap-[55px]   text-black text-sm 2xl:text-base  *:text-nowrap  ">
          <Link to="/" className={`${location.pathname === "/" ? "font-medium" : " font-[HelveticaNeue] "}  `}>Home</Link>
          <Link to="/services" className={` ${location.pathname === "/services" ? "font-medium" : " font-[HelveticaNeue] "} `}>Services</Link>
          <Link to="/works" className={`${location.pathname === "/works" ? "font-medium" : "font-[HelveticaNeue]"} `}>Works</Link>
          {/* <Link to="/clients" className={`${location.pathname === "/clients" ? "font-medium" : "font-[HelveticaNeue]"} `}>Clients</Link> */}
          <Link to="/awards" className={`${location.pathname === "/awards" ? "font-medium" : "font-[HelveticaNeue]"} `}>Awards</Link>
          <Link to="/about" className={`${location.pathname === "/about" ? "font-medium" : "font-[HelveticaNeue]"} `}>Our Story 
</Link>
          <Link to="/blogs" className={`${location.pathname === "/blogs" ? "font-medium" : "font-[HelveticaNeue]"} `}>Blogs</Link>
          <Link to="/career" className={`${location.pathname === "/career" ? "font-medium" : "font-[HelveticaNeue]"} `}>Careers</Link>
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
              className={`block h-[2px] w-6 bg-black rounded-sm transition-transform duration-300 ${menuOpen ? "translate-y-[7px] rotate-45 bg-white " : ""
                }`}
            ></span>
            <span
              className={`block h-[2px] w-5 bg-black rounded-sm transition-opacity duration-300  ${menuOpen ? "opacity-0" : ""
                }`}
            ></span>
            <span
              className={`block h-[2px]  bg-black rounded-sm transition-transform duration-300 ${menuOpen ? "-translate-y-[5px] -rotate-45 w-6 bg-white" : "w-4"
                }`}
            ></span>
          </button>
          {/* :
          <img src={menuIcon} alt="Menu Icon" className="" /> */}
          {/* } */}
        </button>
        <MobileMenu isOpen={menuOpen} toggleMenu={toggleMenu} />
      </div>
    </div>
  );
}
