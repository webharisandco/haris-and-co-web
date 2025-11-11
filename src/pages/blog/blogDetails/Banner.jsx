import React from "react";
import blogImg from "@/assets/images/blogDetails/dig-m1.jpg";

function Banner() {
  return (
    <div className=" px-[16px] md:px-[80px] pt-[180px] pb-[180px] min-h-[700px flex items-center  lg:min-h-[632px] bg-[#0E0E0E]">
      <div className=" flex flex-col gap-[35px]">
        <h1 className="text-[40px] text-white">
          The Impact of Digital Marketing in Healthcare
        </h1>
        <p className="text-white text-[20px] md:text-[30px] font-[thin] w-4/5">
          Today's healthcare journey typically begins with a Google search.
          Approximately 7% of all Google searches are health-related, and there
          are about 70,000 health-related searches per minute, every day.
          According to Google, search drives three times more visitors to
          hospital sites compared to non-search channels, making a robust
          digital presence crucial for healthcare organisations. This shift in
          patient behaviour has transformed how healthcare providers connect
          with their communities and manage patient relationships.
        </p>
        <img src={blogImg} alt="" />
      </div>
    </div>
  );
}

export default Banner;
