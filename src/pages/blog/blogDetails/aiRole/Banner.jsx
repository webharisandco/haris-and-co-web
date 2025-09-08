import React from "react";
import blogImg from "@/assets/images/blogDetails/AI-role1.jpg";



function Banner() {
  return (
    <div className=" px-[16px] md:px-[80px] pt-[180px] pb-[180px] min-h-[700px flex items-center  lg:min-h-[632px] bg-[#0E0E0E]">
      <div className=" flex flex-col gap-[35px]">
        <h1 className="text-[32px] text-96px text-white">
          The Role of AI in Digital Marketing
        </h1>
        <p className="text-white text-[20px] md:text-[30px] font-[thin] w-4/5">
          Artificial Intelligence (AI) is revolutionising industries worldwide,
          with digital marketing being no exception. A report by the National
          University reveals that 63% of organisations plan to adopt AI globally
          within the next three years. As consumer behaviours evolve and the
          demand for personalised experiences grows, AI has emerged as a
          powerful tool, enabling marketers to make data-driven decisions,
          optimise campaigns, and enhance customer engagement. Here's an
          in-depth look at how AI is transforming digital marketing.
        </p>
        <img src={blogImg} alt="" />
      </div>
    </div>
  );
}

export default Banner;


