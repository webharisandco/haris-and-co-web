import React from "react";
import DownArrow from "@/assets/images/web/icons/downArrowBlue.svg";
import CodingIcon from "@/assets/images/icons/codingIcon.svg";
import EcomIcon from "@/assets/images/icons/ecomIcon.svg";
import DevIcon from "@/assets/images/icons/devIcon.svg";
import UiUxIcon from "@/assets/images/icons/uiUxIcon.svg";
import ContentWritingIcon from "@/assets/images/icons/contentWritingIcon.svg";
import ConversionIcon from "@/assets/images/icons/conversionIcon.svg";
import Banner from "@/assets/images/web/images/whatWeProvideBanner.png";
// import Grid from "../../../assets/images/web/images/grid.svg"

function WhatWeProvide() {
  return (
    <div  
    //  style={{
    //   backgroundImage: `url(${Grid})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
       className=" w-full mt-[152px] px-[51px] py-[104px] rounded-[20px] bg-[#151515]">
      <div className="w-full flex justify-between items-center">
        <p className="text-[44px] text-white">What We Provide</p>
        <img className=" h-[55px]" src={DownArrow} alt="" />
      </div>
      <div className="w-full flex items-center justify-between  mt-[65px] pr-[70px]">
        <div className="    ">
          <div className="flex gap-[60px]">
            <div className="w-fit">
              <img className="" src={CodingIcon} alt="Coding Icon logo" />
            </div>
            <div className="w-full flex flex-col justify-center gap-[15px]">
              <p className="text-white text-[36px]">WordPress Development</p>
              <p className="text-[20px] text-white">
                We build powerful WordPress websites that grow with your
                business. Our team customizes every feature, plugin, and
                function to match your unique needs while keeping management
                simple.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-[51px] mt-[36px]">
            <div className="flex gap-[60px]">
              <div className="w-fit">
                <img src={EcomIcon} alt="" />
              </div>
              <div>
                <p className="text-[28px] text-white">Ecommerce Development</p>
              </div>
            </div>
            <div className="flex gap-[60px]">
              <div className="w-fit">
                <img src={DevIcon} alt="" />
              </div>
              <div>
                <p className="text-[28px] text-white">Custom Web Development</p>
              </div>
            </div>
            <div className="flex gap-[60px]">
              <div className="w-fit">
                <img src={UiUxIcon} alt="" />
              </div>
              <div>
                <p className="text-[28px] text-white">UI/UX Design</p>
              </div>
            </div>
            <div className="flex gap-[60px]">
              <div className="w-fit">
                <img src={ContentWritingIcon} alt="" />
              </div>
              <div>
                <p className="text-[28px] text-white">Content Writing</p>
              </div>
            </div>
            <div className="flex gap-[60px]">
              <div className="w-fit">
                <img src={ConversionIcon} alt="" />
              </div>
              <div>
                <p className="text-[28px] text-white">Conversion Rate Optimization</p>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-fit flex h-full items-center">
          <img src={Banner} alt="" />
        </div>
      </div>
    </div>
  );
}

export default WhatWeProvide;
