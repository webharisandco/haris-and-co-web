import React from "react";
import blogImg from "@/assets/images/blogDetails/movieblog.jpg";



function Banner() {
  return (
    <div className=" px-[16px] md:px-[80px] pt-[180px] pb-[180px] min-h-[700px flex items-center  lg:min-h-[632px] bg-[#0E0E0E]">
      <div className=" flex flex-col gap-[35px]">
        <h1 className="text-[40px] text-white">
        When Movies take over the Feed!
        </h1>
        <p className="text-white text-[20px] md:text-[30px] font-[thin] w-4/5">
         Marketing today is less about pushing products and more about telling stories. Big films, bingeable shows, and viral characters are taking over social media. Suddenly, your scroll becomes a mini-theater. A reel here, a story there, a cinematic reference popping up in the captions. A superhero brushing their teeth, a villain sipping coffee like a regular human, it is all part of the fun.
        </p> 
        <img src={blogImg} alt="" />
      </div>
    </div>
  );
}

export default Banner;


