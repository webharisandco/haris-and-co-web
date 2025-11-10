import React from "react";
import blogImg from "@/assets/images/blogDetails/shopsy.png";

function Banner() {
  return (
    <div className=" px-[16px] md:px-[80px] pt-[180px] pb-[180px] min-h-[700px flex items-center  lg:min-h-[632px] bg-[#0E0E0E]">
      <div className=" flex flex-col gap-[35px]">
        <h1 className="text-[40px] text-white">
          When Shopsy Took Over South India
        </h1>
        <h2 className="text-[28px] text-white -mt-10" >
           Two influencers, two videos, over 10 million views
        </h2>
        <p className="text-white text-[20px] md:text-[30px] font-[thin] w-4/5">
      
        </p>
        <img src={blogImg} alt="" />
      </div>
    </div>
  );
}

export default Banner;
