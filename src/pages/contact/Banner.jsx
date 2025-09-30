import React from "react";
import img from "../../assets/images/contact/cntct.jpg";
import facebookIcon from "@/assets/images/contact/FbIcon.svg";
import instaIcon from "@/assets/images/contact/InstaIcon.svg";
import linkedInIcon from "@/assets/images/contact/LinkedinIcon.svg";
import xIcon from "@/assets/images/contact/XIcon.svg";

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
            <p className="text-white text-[24px] leading-[40px]  md:text-48px 3xl:text-[53px]  md:leading-none tracking-tight">
              Want to learn more about how we can help you? Connect with us &
              let us be your partner in growth.
            </p>
          </div>
          <div className="flex justify-between md:justify-start gap-4 sm:gap-5 md:gap-6 pe-8">
            {/* Facebook */}
            <a
              href="https://www.facebook.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
              className="border-[1.5px] border-white rounded-full flex items-center justify-center w-[50px] h-[50px] 3xl:w-[80px] 3xl:h-[80px] hover:bg-white/10 transition"
            >
              <img
                src={facebookIcon}
                alt="Facebook"
                className="w-[25px] h-[25px] 3xl:w-[40px] 3xl:h-[40px]"
              />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="border-[1.5px] border-white rounded-full flex items-center justify-center w-[50px] h-[50px] 3xl:w-[80px] 3xl:h-[80px] hover:bg-white/10 transition"
            >
              <img
                src={linkedInIcon}
                alt="LinkedIn"
                className="w-[25px] h-[25px] 3xl:w-[40px] 3xl:h-[40px]"
              />
            </a>

            {/* X / Twitter */}
            <a
              href="https://twitter.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="border-[1.5px] border-white rounded-full flex items-center justify-center w-[50px] h-[50px] 3xl:w-[80px] 3xl:h-[80px] hover:bg-white/10 transition"
            >
              <img
                src={xIcon}
                alt="Twitter / X"
                className="w-[20px] h-[20px] 3xl:w-[35px] 3xl:h-[35px]"
              />
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="border-[1.5px] border-white rounded-full flex items-center justify-center w-[50px] h-[50px] 3xl:w-[80px] 3xl:h-[80px] hover:bg-white/10 transition"
            >
              <img
                src={instaIcon}
                alt="Instagram"
                className="w-[25px] h-[25px] 3xl:w-[40px] 3xl:h-[40px]"
              />
            </a>
          </div>

        </div>
        <img src={img} alt="" />
      </div>
    </div>
  );
}

export default Banner;
