import React from "react";
import BannerImg from "@/assets/images/career/banner.png";

function Banner() {
  return (
    <div className=" px-[80px] pt-[50px] pb-[50px] flex gap-10">
      <div className=" flex flex-col gap-[20px] w-1/2 justify-center">
        <p className="text-white text-[60px]">Careers</p>
        <p className="text-[40px] text-white  font-[thin]">
          We'd love to learn more about you and what we can design and build together.</p>
      </div>
      <div className="w-1/2">
        <img src={BannerImg} alt="Career Banner Image" />
      </div>
    </div>
  );
}

export default Banner;
