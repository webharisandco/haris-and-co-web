import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '@/assets/images/Haris&Co-logo.svg';
import LandingButton from '../../ui/common/LandingButton';


export default function LandingMobileMenu({ isOpen,toggleMenu }) {
    return (
        <div className={`bg-[#141414] fixed top-0 left-0 z-40 w-full h-screen text-white transform transition-transform duration-300 overflow-hidden p-11 space-y-10  ${isOpen ? "translate-x-0" : "-translate-x-full"
            }`}>
            <div className=''>
                <img
                    src={Logo}
                    alt="Haris & Co."
                    className=" h-[30px] md:h-[50px] lg:h-[66px]"
                />
            </div>
            <div className="flex flex-col justify-between gap-[20px] text-white *:font-light *:md:text-[24px]">
                <Link to="/services" className="text-[18px] font-[thin]" onClick={toggleMenu}>Services</Link>
                <Link to="/works" className="text-[18px] font-[thin]" onClick={toggleMenu}>Works</Link>
                {/* <Link to="/clients" className="text-[18px] font-[thin]" onClick={toggleMenu}>Clients</Link> */}
                <Link to="/awards" className="text-[18px] font-[thin]" onClick={toggleMenu}>Awards</Link>
                <Link to="/about" className="text-[18px] font-[thin]" onClick={toggleMenu}>Our Story</Link>
                <Link to="/blogs" className="text-[18px] font-[thin]" onClick={toggleMenu}>Blogs</Link>
                <Link to="/careers" className="text-[18px] font-[thin]" onClick={toggleMenu}>Careers</Link>
            </div>
            <LandingButton text='Contact Us' href='/contact' />

        </div>
    )
}
