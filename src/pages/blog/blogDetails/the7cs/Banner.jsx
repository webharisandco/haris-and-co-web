import React from "react";
import blogImg from "@/assets/images/blogDetails/The7cs1.jpg";

function Banner() {
  return (
    <div className=" px-[16px] md:px-[80px] pt-[180px] pb-[180px] min-h-[700px flex items-center  lg:min-h-[632px] bg-[#0E0E0E]">
      <div className=" flex flex-col gap-[35px]">
        <h1 className="text-[32px] text-96px text-white">
          The 7 C’s of Digital Marketing: A Blueprint for Success
        </h1>
        <p className="text-white text-[20px] md:text-[30px] font-[thin] w-4/5">
          In the ever-evolving digital landscape, businesses need a structured
          approach to engage audiences effectively. The 7 C’s of Digital
          Marketing provide a strong foundation for building online strategies,
          increasing engagement, and converting leads into loyal customers.
          Here’s a closer look at these key pillars and their role in shaping
          modern digital marketing.
        </p>
        <img src={blogImg} alt="" />
      </div>
    </div>
  );
}

export default Banner;
