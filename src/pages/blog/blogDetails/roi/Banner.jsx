import React from "react";
import blogImg from "@/assets/images/blogDetails/roi1.jpg";

function Banner() {
  return (
    <div className=" px-[16px] md:px-[80px] pt-[180px] pb-[180px] min-h-[700px flex items-center  lg:min-h-[632px] bg-[#0E0E0E]">
      <div className=" flex flex-col gap-[35px]">
        <h1 className="text-[32px] text-96px text-white">
          What is ROI in Digital Marketing? Why It Matters and How to Get the
          Best Results
        </h1>
        <p className="text-white text-[20px] md:text-[30px] font-[thin] w-4/5">
          In digital marketing, every click, impression, and engagement comes
          with a cost. But how do you measure whether your efforts are truly
          paying off? This is where Return on Investment (ROI) becomes crucial.
          Whether you’re running paid ad campaigns, social media promotions, or
          content marketing strategies, understanding ROI helps you determine
          what’s working, what’s not, and where to allocate your budget for
          maximum impact. In this blog, we’ll break down the essentials of ROI
          in digital marketing, why it matters, and how you can optimise it for
          better results.
        </p>
        <img src={blogImg} alt="" />
      </div>
    </div>
  );
}

export default Banner;
