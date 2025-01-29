import React from "react";
import BannerImg1 from "@/assets/images/career/banner1.png";
import BannerImg2 from "@/assets/images/career/banner2.png";
import BannerImg3 from "@/assets/images/career/banner3.png";

function Banner() {
  return (
    <div className="px-[16px] md:px-[80px] min-h-[600px] lg:min-h-[650px] flex gap-10 flex-col lg:flex-row justify-center items-center bg-[#0E0E0E]">
      <div className=" flex flex-col gap-[20px] lg:w-1/2 justify-center">
        <p className="text-white text-[32px] md:text-[45px]">Careers</p>
        <p className="text-[24px] md:text-[32px] text-white  font-[thin] leading-none">
          We'd love to learn more about you and what we can design and build together.</p>
      </div>
      <div className="lg:w-1/2 md:grid grid-rows-3 grid-cols-3 flex flex-col gap-4 md:h-[500px]">
        <img src={BannerImg1} alt="Career Banner Image" className="row-span-3 col-span-1 object-cover h-full w-full" />
        <img src={BannerImg2} alt="Career Banner Image" className="row-span-1 col-span-2 object-cover h-[200px] md:h-full w-full"/>
        <img src={BannerImg3} alt="Career Banner Image" className="row-span-2 col-span-2 object-cover h-full w-full"/> 
      </div>
    </div>
  );
}

export default Banner;
