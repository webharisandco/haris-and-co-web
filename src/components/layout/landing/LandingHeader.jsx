import React, { useState } from 'react'
import LandingButton from '../../ui/common/LandingButton'
import { Link } from 'react-router-dom'
import Logo from '@/assets/images/Haris&Co.svg';
import LandingMobileMenu from './LandingMobileMenu';

const LandingHeader = () => {
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
        <header className='flex justify-between bg-black px-[18px] py-[40px] md:px-[80px] lg:px-[95px] md:py-[40px] items-center border-b border-b-white/50 ' >
            <img src={Logo} className='h-[30px] md:h-[35px] lg:h-[40px] ' alt='Haris&Co Logo' />
            <div className={"hidden lg:flex justify-between items-center gap-[30px] xl:gap-[40px] text-white/80 *:font-light  "}>
                <Link to="/" className="text-[18px] font-[AbroRegular] text-white">Home</Link>
                <Link to="/services" className="text-[18px] font-[AbroRegular] ">Services</Link>
                <Link to="/casestudies" className="text-[18px] font-[AbroRegular]">Case Studies</Link>
                <Link to="/culture" className="text-[18px] font-[AbroRegular]">Career</Link>
                <Link to="/culture" className="text-[18px] font-[AbroRegular]">Blog</Link>
                <Link to="/contact" className="text-[18px] font-[AbroRegular]">Contact Us</Link>
            </div>
            <LandingButton text={'GET A PROPOSAL'} className={'hidden lg:flex '} />
            <div className="lg:hidden flex ms-auto max-w-fit">
                <button onClick={toggleMenu}>
                    {/* {menuIcon ? */}
                    {/* // <img src={menuIcon} alt="Menu Icon" className="" /> */}
                    <button
                        className="relative z-50 flex flex-col items-end justify-center w-10 h-10 gap-1 md:gap-1.5 bg-transparent border-none cursor-pointer md:w-15 md:h-15"
                        onClick={toggleMenu}
                        aria-label="Toggle Menu"
                    >
                        <span
                            className={`block h-[2px] w-6 md:w-9 bg-white rounded-sm transition-transform duration-300 ${menuOpen ? "translate-y-[7px] rotate-45" : ""
                                }`}
                        ></span>
                        <span
                            className={`block h-[2px] w-5 md:w-[30px] bg-white rounded-sm transition-opacity duration-300  ${menuOpen ? "opacity-0" : ""
                                }`}
                        ></span>
                        <span
                            className={`block h-[2px]  bg-white rounded-sm transition-transform duration-300 ${menuOpen ? "-translate-y-[5px] md:-translate-y-[7.5px] -rotate-45 w-6 md:w-9" : "w-4 md:w-6"
                                }`}
                        ></span>
                    </button>
                    {/* :
                      <img src={menuIcon} alt="Menu Icon" className="" /> */}
                    {/* } */}
                </button>
                <LandingMobileMenu isOpen={menuOpen} toggleMenu={toggleMenu} />
            </div>


        </header>
    )
}

export default LandingHeader