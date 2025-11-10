import React from "react";
// import blogImg from "@/assets/images/blogDetails/awardwinning1.jpg";
import blogImg from "@/assets/images/blogDetails/DanubeWordPress.png";

function Banner() {
  return (
    <div className=" px-[16px] md:px-[80px] pt-[180px] pb-[180px] min-h-[700px flex items-center  lg:min-h-[632px] bg-[#0E0E0E]">
      <div className=" flex flex-col gap-[35px]">
        <h1 className="text-[32px] text-96px text-white">
         How Danube Sports World Found Its Edge with WordPress
        </h1>
        <p className="text-white text-[20px] md:text-[30px] font-[thin] w-4/5">
          When it comes to building websites that perform, design is only half the story. The real difference lies in how well your site works with search engines, and that is where WordPress proves its weight. With flexible architecture, SEO-ready features, and room to grow, it is the platform built not just for looks but for measurable results.
        </p>
        <img src={blogImg} alt="" />
      </div>
    </div>
  );
}

export default Banner;
