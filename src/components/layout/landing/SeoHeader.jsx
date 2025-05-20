import React, { useState } from "react";
import logo from "../../../assets/images/navlogo.png"; // Replace with the actual path to your logo image
import menu from "../../../assets/images/menu-white.svg"; // Replace with the actual path to your menu image
import arroww from "../../../assets/images/DigitalMarketing/arrow.svg";
import { Link } from "react-router-dom";

function SeoHeader() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleCart = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className="max-w-screen-xl mx-auto w-11/12">
      <div className="flex justify-between items-center py-6 font-abrothin">
        <div className="logo-dg">
          <Link to="/">
            <img src={logo} className="logo-dg-nav" alt="Logo" />
          </Link>
        </div>
        <img
          src={menu}
          className="block md:hidden cursor-pointer"
          alt="menu icon"
          onClick={toggleCart}
        />
        <div className="items-dg">
          <ul className="flex space-x-5 mb-0">
            <li>
              <Link to="/" className="text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to="/services" className="text-white">
                Services
              </Link>
            </li>
            <li>
              <Link to="/works" className="text-white">
                Case Studies
              </Link>
            </li>
            <li>
              <Link to="/career" className="text-white">
                Career
              </Link>
            </li>
            <li>
              <Link to="https://harisand.co/blog/" className="text-white">
                <span>Blog</span>
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-white">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div className="group inline-flex items-center transition-all duration-300 ease-in-out">
          <Link
            to="/contact"
            className="bg-purple-700 text-white px-5 py-3 rounded-lg inline-flex items-center"
          >
            GET A PROPOSAL
            <img
              src={arroww}
              alt="Icon"
              className="w-[13px] ml-[10px] transform rotate-[90deg] transition-transform duration-300 ease-in-out group-hover:rotate-[140deg]"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SeoHeader;
