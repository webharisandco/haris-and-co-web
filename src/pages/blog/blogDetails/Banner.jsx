import React from "react";
import blogImg from "@/assets/images/blogDetails/img1.png"

function Banner() {
  return (
    <div className=" px-[16px] md:px-[80px] min-h-[800px] md:min-h-[1000px] lg:min-h-[1200px] xl:min-h-[1400px] flex leading-snug items-end bg-[#0E0E0E]">
      <div className=" flex flex-col gap-[35px]">
        <h1 className="text-[32px] text-96px text-white">
          App design and development guide: key strategies for success
        </h1>
        <p className="text-white text-[20px] md:text-[30px] font-[thin] w-4/5">At Haris&Co., we understand that your brand is more than just a logo or a tagline—it's the essence of your business, the story you tell, and the promise you make to your customers. Our branding services are designed to uncover and articulate your unique identity, ensuring that every touchpoint resonates with your target audience.</p>
        <p className="text-white/55 ">November 07, 2024   .   6  min read </p>
        <img src={blogImg} alt="" />
      </div>
    </div>
  );
}

export default Banner;
