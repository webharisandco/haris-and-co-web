import React from "react";
import img from "../../assets/images/contact/cntct.jpg";
// import facebookIcon from "@/assets/images/contact/FbIcon.svg";
// import instaIcon from "@/assets/images/contact/InstaIcon.svg";
// import linkedInIcon from "@/assets/images/contact/LinkedinIcon.svg";
// import xIcon from "@/assets/images/contact/XIcon.svg";

function Banner() {
  return (
    <div className="px-[16px]  md:px-[80px] pt-[150px] pb-[30px] md:pb-[50px] md:pt-[160px] bg-[#0E0E0E]">
      <div className="grid lg:grid-cols-2 items-center gap-10 3xl:gap-[80px]">
        <div className=" flex flex-col justify-between h-full gap-[20px] ">
          <div className=""></div>
          <div className="flex flex-col gap-[20px] ">
            <p className="text-[32px] text-64px 3xl:text-[68px] text-white tracking-tight">
              Let’s Connect
            </p>
            <p className="text-white text-[24px] leading-[40px] md:text-48px 3xl:text-[53px] pr-28 pb-24 md:leading-none tracking-tight">
              Want to learn more about how we can help you? Connect with us &
              let us be your partner in growth.
            </p>
          </div>
          

        </div>
        <img src={img} alt="" />
      </div>
    </div>
  );
}

export default Banner;
