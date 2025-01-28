import React from "react";
import BannerImg from "@/assets/images/career/banner.png";

function Banner() {
  return (
    <div className="px-[16px] md:px-[80px] pt-[80px] pb-[50px] flex gap-10 flex-col lg:flex-row bg-[#0E0E0E]">
      <div className=" flex flex-col gap-[20px] lg:w-1/2 justify-center">
        <p className="text-white text-[32px] md:text-[45px]">Careers</p>
        <p className="text-[24px] md:text-[32px] text-white  font-[thin] leading-none">
          We'd love to learn more about you and what we can design and build together.</p>
      </div>
      <div className="lg:w-1/2">
        <img src={BannerImg} alt="Career Banner Image" />
      </div>
    </div>
  );
}

export default Banner;
