import React from "react";
import blogImg from "@/assets/images/blogDetails/guide1.jpg";

function Banner() {
  return (
    <div className=" px-[16px] md:px-[80px] pt-[180px] pb-[180px] min-h-[700px flex items-center  lg:min-h-[632px] bg-[#0E0E0E]">
      <div className=" flex flex-col gap-[35px]">
        <h1 className="text-[32px] text-96px text-white">
          The Ultimate Guide to Digital Marketing: Strategies, Trends, and
          Insights
        </h1>
        <p className="text-white text-[20px] md:text-[30px] font-[thin] w-4/5">
          Digital marketing in 2025 is a dynamic and rapidly evolving field,
          driven by technological advancements, changing consumer behaviours,
          and emerging platforms. With global digital ad spending projected to
          reach $786.2 billion by 2026, understanding the multifaceted
          components of digital marketing is essential for businesses aiming to
          thrive in the digital age
        </p>
        <img src={blogImg} alt="" />
      </div>
    </div>
  );
}

export default Banner;
