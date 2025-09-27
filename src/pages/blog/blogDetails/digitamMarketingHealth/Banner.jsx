import React from "react";
import blogImg from "@/assets/images/blogDetails/health1.jpg";

function Banner() {
  return (
    <div className=" px-[16px] md:px-[80px] pt-[180px] pb-[180px] min-h-[700px flex items-center  lg:min-h-[632px] bg-[#0E0E0E]">
      <div className=" flex flex-col gap-[35px]">
        <h1 className="text-[32px] text-96px text-white">
          From ‘Sustainable’ to ‘Regenerative’: Why Marketing Needs a Glow-Up in 2025
          Sustainable was 2020. In 2025, it’s about going further.
        </h1>
        <p className="text-white text-[20px] md:text-[30px] font-[thin] w-4/5">
          For years, sustainable marketing has been the buzzword. But being “sustainable” is no longer enough. Consumers, investors, and employees are looking for brands that restore, rebuild, and regenerate. If your marketing hasn’t evolved, your campaigns risk looking outdated.
          Think of it like this: sustainable marketing is cleaning your room once a week. Regenerative marketing is organizing, renovating, and leaving the place better than it started.
        </p>
        <img src={blogImg} alt="" />
      </div>
    </div>
  );
}

export default Banner;
