import React from "react";
import blogImg from "@/assets/images/blogDetails/awardwinning1.jpg";

function Banner() {
  return (
    <div className=" px-[16px] md:px-[80px] pt-[180px] pb-[180px] min-h-[700px flex items-center  lg:min-h-[632px] bg-[#0E0E0E]">
      <div className=" flex flex-col gap-[35px]">
        <h1 className="text-[32px] text-96px text-white">
          10 Award-Winning Digital Marketing Agencies in Dubai
        </h1>
        <p className="text-white text-[20px] md:text-[30px] font-[thin] w-4/5">
          Dubai has firmly established itself as a hub for advanced digital
          marketing. Agencies here are building results-driven campaigns,
          blending creativity with performance to deliver real impact for
          brands. In this list, we take a closer look at the top digital
          marketing agencies in Dubai that are shaping the future of the
          industry.
        </p>
        <img src={blogImg} alt="" />
      </div>
    </div>
  );
}

export default Banner;
