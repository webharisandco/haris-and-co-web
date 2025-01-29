import React from "react";
import img from "../../assets/images/contact/contactBanner.png";
import facebookIcon from "@/assets/images/icons/facebookWhiteIcon.svg";
import instaIcon from "@/assets/images/icons/instaWhiteIcon.svg";
import linkedInIcon from "@/assets/images/icons/linkedInWhiteICon.svg";
import xIcon from "@/assets/images/icons/xWhiteIcon.svg";

function Banner() {
  return (
    <div className="px-[16px] md:px-[80px] pt-[50px] pb-[30px] md:py-[50px] bg-[#0E0E0E]">
      <div className="grid lg:grid-cols-2 items-center gap-10">
        <div className=" flex flex-col justify-between h-full gap-[20px]">
          <div className=""></div>
          <div className="flex flex-col gap-[20px]">
            <p className="text-[32px] md:text-[48px]  2xl:text-[64px] text-white font-[boldtext]">
              Let’s Connect
            </p>
            <p className="text-white/50 text-[24px] md:text-[30px] font-[Helvetica-Light] leading-tight">
              We'd love to learn more about you and
              what we can design and build together.
            </p>
          </div>
          <div className="flex justify-between md:justify-start gap-4 sm:gap-5 md:gap-6 pe-8">
            <div className="border-[1.5px] border-white rounded-full flex items-center justify-center w-[50px] h-[50px]">
              <img src={facebookIcon} alt="facebook Icon" className="max-w-max w-[25px] h-[25px]" />
            </div>
            <div className="border-[1.5px] border-white rounded-full flex items-center justify-center w-[50px] h-[50px]">
              <img src={linkedInIcon} alt="linked in Icon" className="max-w-max w-[25px] h-[25px]" />
            </div>
            <div className="border-[1.5px] border-white rounded-full flex items-center justify-center w-[50px] h-[50px]">
              <img src={xIcon} alt="x icon" className="max-w-max w-[25px] h-[25px]" />
            </div>
            <div className="border-[1.5px] border-white rounded-full flex items-center justify-center w-[50px] h-[50px]">
              <img src={instaIcon} alt="insta icon" className="max-w-max w-[25px] h-[25px]" />
            </div>
          </div>
        </div>
        <img src={img} alt="" />
      </div>
    </div>
  );
}

export default Banner;
