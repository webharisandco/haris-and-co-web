import React from "react";
import facebookIcon from "@/assets/images/icons/facebookIcon.svg";
import instaIcon from "@/assets/images/icons/instaIcon.svg";
import linkedInIcon from "@/assets/images/icons/linkedinIcon.svg";
import xIcon from "@/assets/images/icons/xIcon.svg";
import Logo from "@/assets/images/Haris&Co-blk.svg";

const Footer = () => {
  return (
    <div className="px-[16px] md:px-[40px] lg:px-[80px] pt-[44px] bg-white text-nowrap">
      <div className="flex w-full justify-between flex-col lg:flex-row gap-[50px] lg:items-center">
        <div className="max-w-full flex flex-col gap-7">
          <div className="">
            <p className="text-[35px] text-black font-[thin]">Let’s Connect</p>
            <p className="text-[38px] text-black/65 font-medium leading-none xs:text-[45px]">
              bd@harisand.co
            </p>
          </div>
          <div className="flex gap-4 sm:gap-5 md:gap-6">
            <div className="border-[1.5px] border-black rounded-full p-[18.5px] sm:p-[21px] w-[65px] sm:w-[70px] h-[65px] sm:h-[70px]">
              <img src={facebookIcon} alt="facebook Icon" className="max-w-max"/>
            </div>
            <div className="border-[1.5px] border-black rounded-full p-[18.5px] sm:p-[21px] w-[65px] sm:w-[70px] h-[65px] sm:h-[70px]">
              <img src={linkedInIcon} alt="linked in Icon" className="max-w-max"/>
            </div>
            <div className="border-[1.5px] border-black rounded-full p-[18.5px] sm:p-[21px] w-[65px] sm:w-[70px] h-[65px] sm:h-[70px]">
              <img src={xIcon} alt="x icon" className="max-w-max"/>
            </div>
            <div className="border-[1.5px] border-black rounded-full p-[18.5px] sm:p-[21px] w-[65px] sm:w-[70px] h-[65px] sm:h-[70px]">
              <img src={instaIcon} alt="insta icon" className="max-w-max"/>
            </div>
          </div>
        </div>
        <div className=" items-start w-full">
          <div className="flex w-full flex-col items-start lg:items-end">
            <div className="w-full h-full flex  ">
              <img className="h-full w-full" src={Logo} alt="Haris&Co" />
            </div>
            <div className="flex justify-evenly md:justify-between gap-[35px] md:gap-[50px]  lg:gap-x-[60px] lg:gap-y-[30px]  mt-[40px] *:font-[thin] w-full flex-wrap">
              <p className="text-[18px]">Services</p>
              <p className="text-[18px]">Works</p>
              <p className="text-[18px]">Clients</p>
              <p className="text-[18px]">Awards</p>
              <p className="text-[18px]">About us</p>
              <p className="text-[18px]">Blogs</p>
              <p className="text-[18px]">Careers</p>

            </div>
          </div>
        </div>
      </div>
      <div className="mt-[50px] md:mt-[80px] lg:mt-[115px] flex justify-between mb-[40px] text-black/55 text-lg font-medium items-end">
        <div className=" flex gap-4 md:gap-[40px] lg:gap-[60px] flex-col md:flex-row">
          <p>Privacy</p>
          <p>Terms & Conditions</p>
        </div>
        <div className="">
          <p>&copy; 2024.Haris&Co</p>
        </div>

      </div>
    </div>
  );
};

export default Footer;
