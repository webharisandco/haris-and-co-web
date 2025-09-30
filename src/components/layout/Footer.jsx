import React from "react";
import facebookIcon from "@/assets/images/icons/facebookIcon.svg";
import instaIcon from "@/assets/images/icons/instaIcon.svg";
import linkedInIcon from "@/assets/images/icons/linkedinIcon.svg";
import xIcon from "@/assets/images/icons/xIcon.svg";
import Logo from "@/assets/images/Haris&Co-blk.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="px-[16px] md:px-[40px] lg:px-[80px] pt-[44px] bg-white text-nowrap">
      <div className="flex w-full justify-between flex-col lg:flex-row gap-[62px] lg:items-end">
        <div className="max-w-full flex flex-col gap-7">
          <div className="">
            <p className="text-[35px] text-black font-[thin]">Let’s Connect</p>

            <p className="text-[38px] text-black/65 font-medium leading-none xs:text-[45px]">
              bd@harisand.co
            </p>
          </div>

<div className="flex justify-center sm:justify-start gap-6 flex-nowrap">
  {/* Facebook */}
  <a
    href="https://www.facebook.com/harisandconsulting"
    target="_blank"
    rel="noopener noreferrer"
    className="border-[1.5px] border-black rounded-full 
               w-12 h-12 sm:w-[63px] sm:h-[65px] md:w-[70px] md:h-[70px] 
               flex items-center justify-center"
  >
    <img src={facebookIcon} alt="facebook Icon" className="w-5 sm:w-6 md:w-7 h-auto" />
  </a>

  {/* LinkedIn */}
  <a
    href="https://www.linkedin.com/company/harisand-co"
    target="_blank"
    rel="noopener noreferrer"
    className="border-[1.5px] border-black rounded-full 
               w-12 h-12 sm:w-[63px] sm:h-[65px] md:w-[70px] md:h-[70px] 
               flex items-center justify-center"
  >
    <img src={linkedInIcon} alt="LinkedIn Icon" className="w-5 sm:w-6 md:w-7 h-auto" />
  </a>

  {/* X (Twitter) */}
  <a
    href="https://x.com/harisand_co"
    target="_blank"
    rel="noopener noreferrer"
    className="border-[1.5px] border-black rounded-full 
               w-12 h-12 sm:w-[63px] sm:h-[65px] md:w-[70px] md:h-[70px] 
               flex items-center justify-center"
  >
    <img src={xIcon} alt="X Icon" className="w-5 sm:w-6 md:w-7 h-auto" />
  </a>

  {/* Instagram */}
  <a
    href="https://www.instagram.com/harisand.co/?hl=en"
    target="_blank"
    rel="noopener noreferrer"
    className="border-[1.5px] border-black rounded-full 
               w-12 h-12 sm:w-[63px] sm:h-[65px] md:w-[70px] md:h-[70px] 
               flex items-center justify-center"
  >
    <img src={instaIcon} alt="Instagram Icon" className="w-5 sm:w-6 md:w-7 h-auto" />
  </a>
</div>


        </div>
        <div className=" items-start w-full">
          <div className="flex w-full flex-col items-start lg:items-end">
            <div className="w-full h-full flex  ">
              <img className="h-full w-full" src={Logo} alt="Haris&Co" />
            </div>
            <div className="flex justify-evenly md:justify-between gap-[35px] md:gap-[50px]  lg:gap-x-[60px] lg:gap-y-[30px]  mt-[40px] *:font-[thin] w-full flex-wrap">
              <Link to="/services" className="text-[18px] ">
                Services
              </Link>
              <Link to="/works" className="text-[18px] ">
                Works
              </Link>
              <Link to="/clients" className="text-[18px] ">
                Clients
              </Link>
              <Link to="/awards" className="text-[18px] ">
                Awards
              </Link>
              <Link to="/about" className="text-[18px]  text-nowrap">
                Ourstory 

              </Link>
              <Link to="/blogs" className="text-[18px] ">
                Blogs
              </Link>
              <Link to="/career" className="text-[18px] ">
                Careers
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[50px] text-black grid grid-cols-2 sm:grid-cols-4 gap-6 lg:hidden">
        <Link to="digital-marketing-agency-in-kerala">Kerala</Link>
        <Link to="ae/digital-marketing-agency-in-dubai">Dubai</Link>
        <Link to="ae/digital-marketing-agency-in-sharjah"></Link>
        <Link to="ae/digital-marketing-agency-in-abudhabi"></Link>
      </div>

      <div className="mt-[50px] lg:mt-[115px] flex justify-between mb-[40px] text-black/55 text-base md:text-lg font-medium items-end ">
        <div className=" flex gap-4 md:gap-[40px] lg:gap-[60px] flex-col md:flex-row">
         <Link to="/Privacy" className="text-[18px] ">
                Privacy
              </Link> 
              </div>
              <div>
               <Link to="/TermsAndConditions" className="text-[18px] ">
                Terms & Conditions
              </Link> 
              </div>
        
        <div className=" text-black w-1/3 justify-between hidden lg:flex">
          <Link to="digital-marketing-agency-in-kerala">Kerala</Link>
          <Link to="ae/digital-marketing-agency-in-dubai">Dubai</Link>
          <Link to="ae/digital-marketing-agency-in-sharjah"></Link>
          <Link to="ae/digital-marketing-agency-in-abudhabi"> </Link>
        </div>
        <div className="">
          <p>&copy; 2024.Haris&Co</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
