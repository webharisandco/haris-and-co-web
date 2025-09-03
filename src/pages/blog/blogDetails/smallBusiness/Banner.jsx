import React from "react";
import blogImg from "@/assets/images/blogDetails/smlbsnss1.jpg";

function Banner() {
  return (
    <div className=" px-[16px] md:px-[80px] pt-[180px] pb-[180px] min-h-[700px flex items-center  lg:min-h-[632px] bg-[#0E0E0E]">
      <div className=" flex flex-col gap-[35px]">
        <h1 className="text-[32px] text-96px text-white">
          Digital Marketing Tips for Small Businesses
        </h1>
        <p className="text-white text-[20px] md:text-[30px] font-[thin] w-4/5">
          In today’s digital-first world, small businesses must leverage online
          marketing strategies to compete effectively and reach their target
          audiences. With limited budgets and resources, small businesses need
          to focus on cost-effective, high-impact digital marketing tactics.
          This blog will provide actionable digital marketing tips for small
          businesses, backed by statistics and insights to help you grow your
          brand and drive results.
        </p>
        <img src={blogImg} alt="" />
      </div>
    </div>
  );
}

export default Banner;
