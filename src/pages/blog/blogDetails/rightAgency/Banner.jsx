import React from "react";
import blogImg from "@/assets/images/blogDetails/ChoosetheRight1.jpg";

function Banner() {
  return (
    <div className=" px-[16px] md:px-[80px] pt-[180px] pb-[180px] min-h-[700px flex items-center  lg:min-h-[632px] bg-[#0E0E0E]">
      <div className=" flex flex-col gap-[35px]">
        <h1 className="text-[32px] text-96px text-white">
          How to Choose the Right Digital Marketing Agency
        </h1>
        <p className="text-white text-[20px] md:text-[30px] font-[thin] w-4/5">
          The way your brand shows up online can make or break your business.
          From small startups to legacy brands, everyone is fighting for
          attention in a noisy internet ecosystem. That’s where digital
          marketing agencies come in. But with hundreds of agencies popping up
          in every major city, choosing the right one can be confusing and,
          frankly, a bit risky if you don’t know what to look for. Whether
          you're looking to boost your website traffic, get more leads, or
          simply clean up your brand's digital act, this guide will help you
          make an informed choice.
        </p>
        <img src={blogImg} alt="" />
      </div>
    </div>
  );
}

export default Banner;


