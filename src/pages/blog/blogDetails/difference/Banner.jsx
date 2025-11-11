import React from "react";
import blogImg from "@/assets/images/blogDetails/dig-m1.jpg";

function Banner() {
  return (
    <div className=" px-[16px] md:px-[80px] pt-[180px] pb-[180px] min-h-[700px flex items-center  lg:min-h-[632px] bg-[#0E0E0E]">
      <div className=" flex flex-col gap-[35px]">
        <h1 className="text-[40px] text-white">
        Amend Dental: From Missed Messages to a Full House
        </h1>
        <p className="text-white text-[20px] md:text-[30px] font-[thin] w-4/5">
         We have all been there. You send a message, wait, and then wait some more. Now imagine that happening when you are trying to book a dental appointment. Patience? Gone. Pain? Still there.
        </p>
        <img src={blogImg} alt="" />
      </div>
    </div>
  );
}

export default Banner;
