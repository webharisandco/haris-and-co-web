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
    <div className="px-[18px] md:px-[100px]">
      <div
        //  style={{
        //   backgroundImage: `url(${Grid})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        className=" w-full my-[152px] px-[40px] md:px-[51px] py-[104px] rounded-[20px] bg-[#151515] "
      >
        <div className="w-full flex justify-between items-center">
          <p className="text-[30px] md:text-[44px] text-white">
            What We Provide
          </p>
          <img className="h-[18px] md:h-[55px]" src={DownArrow} alt="" />
        </div>
        <div className="w-full  flex flex-col-reverse md:flex-row items-center justify-between  mt-[65px] md:pr-[70px]">
          <div className=" md:w-[65%]   ">
            <div className="flex flex-col gap-[51px]">
              <div className="flex gap-[60px] group">
                <div className="hidden md:block w-[44px] transition-all duration-300 group-hover:w-[50px]">
                  <img
                    className="w-full h-auto"
                    src={CodingIcon}
                    alt="Coding Icon logo"
                  />
                </div>

                <div className=" w-full flex text-center md:text-start flex-col justify-center gap-[15px]">
                  <p className="text-white text-[25px] md:text-[28px] transition-all duration-300 group-hover:text-[36px]">
                    WordPress Development
                  </p>

                  <p className=" text-[16px] md:text-[20px] text-white md:hidden md:group-hover:block md:transition-all duration-300">
                    We build powerful WordPress websites that grow with your
                    business. Our team customizes every feature, plugin, and
                    function to match your unique needs while keeping management
                    simple.
                  </p>
                </div>
              </div>

              <div className="flex gap-[60px] group">
                <div className="hidden md:block w-[44px] transition-all duration-300 group-hover:w-[50px]">
                  <img
                    className="w-full h-auto"
                    src={EcomIcon}
                    alt="Coding Icon logo"
                  />
                </div>

                <div className=" w-full flex text-center md:text-start flex-col justify-center gap-[15px]">
                  <p className="text-white text-[25px] md:text-[28px] transition-all duration-300 group-hover:text-[36px]">
                    Ecommerce Development
                  </p>

                  <p className=" text-[16px] md:text-[20px] text-white md:hidden md:group-hover:block md:transition-all duration-300">
                    We build powerful WordPress websites that grow with your
                    business. Our team customizes every feature, plugin, and
                    function to match your unique needs while keeping management
                    simple.
                  </p>
                </div>
              </div>

              <div className="flex gap-[60px] group">
                <div className="hidden md:block w-[44px] transition-all duration-300 group-hover:w-[50px]">
                  <img
                    className="w-full h-auto"
                    src={DevIcon}
                    alt="Coding Icon logo"
                  />
                </div>

                <div className=" w-full flex text-center md:text-start flex-col justify-center gap-[15px]">
                  <p className="text-white text-[25px] md:text-[28px] transition-all duration-300 group-hover:text-[36px]">
                    Custom Web Development
                  </p>

                  <p className=" text-[16px] md:text-[20px] text-white md:hidden md:group-hover:block md:transition-all duration-300">
                    We build powerful WordPress websites that grow with your
                    business. Our team customizes every feature, plugin, and
                    function to match your unique needs while keeping management
                    simple.
                  </p>
                </div>
              </div>

              <div className="flex gap-[60px] group">
                <div className="hidden md:block w-[44px] transition-all duration-300 group-hover:w-[50px]">
                  <img
                    className="w-full h-auto"
                    src={UiUxIcon}
                    alt="Coding Icon logo"
                  />
                </div>

                <div className=" w-full flex text-center md:text-start flex-col justify-center gap-[15px]">
                  <p className="text-white text-[25px] md:text-[28px] transition-all duration-300 group-hover:text-[36px]">
                    UI/UX Design
                  </p>

                  <p className=" text-[16px] md:text-[20px] text-white md:hidden md:group-hover:block md:transition-all duration-300">
                    We build powerful WordPress websites that grow with your
                    business. Our team customizes every feature, plugin, and
                    function to match your unique needs while keeping management
                    simple.
                  </p>
                </div>
              </div>

              <div className="flex gap-[60px] group">
                <div className="hidden md:block w-[44px] transition-all duration-300 group-hover:w-[50px]">
                  <img
                    className="w-full h-auto"
                    src={ContentWritingIcon}
                    alt="Coding Icon logo"
                  />
                </div>

                <div className=" w-full flex text-center md:text-start flex-col justify-center gap-[15px]">
                  <p className="text-white text-[25px] md:text-[28px] transition-all duration-300 group-hover:text-[36px]">
                    Content Writing
                  </p>

                  <p className=" text-[16px] md:text-[20px] text-white md:hidden md:group-hover:block md:transition-all duration-300">
                    We build powerful WordPress websites that grow with your
                    business. Our team customizes every feature, plugin, and
                    function to match your unique needs while keeping management
                    simple.
                  </p>
                </div>
              </div>

              <div className="flex gap-[60px] group">
                <div className="hidden md:block w-[44px] transition-all duration-300 group-hover:w-[50px]">
                  <img
                    className="w-full h-auto"
                    src={ConversionIcon}
                    alt="Coding Icon logo"
                  />
                </div>

                <div className=" w-full flex text-center md:text-start flex-col justify-center gap-[15px]">
                  <p className="text-white text-[25px] md:text-[28px] transition-all duration-300 group-hover:text-[36px]">
                    Conversion Rate Optimization
                  </p>

                  <p className=" text-[16px] md:text-[20px] text-white md:hidden md:group-hover:block md:transition-all duration-300">
                    We build powerful WordPress websites that grow with your
                    business. Our team customizes every feature, plugin, and
                    function to match your unique needs while keeping management
                    simple.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className=" w-fit md:w-[40%] flex h-full items-center">
            <img src={Banner} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhatWeProvide;
