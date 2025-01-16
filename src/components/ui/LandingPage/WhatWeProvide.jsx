import React, { useEffect, useRef, useState } from "react";
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
  const servicesArray = [
    {
      title: "WordPress Development",
      description:
        "We build powerful WordPress websites that grow with your business. Our team customizes every feature, plugin, and function to match your unique needs while keeping management simple.",
      icon: CodingIcon,
    },
    {
      title: "Ecommerce Development",
      description:
        "We build powerful WordPress websites that grow with your business. Our team customizes every feature, plugin, and function to match your unique needs while keeping management simple.",
      icon: EcomIcon,
    },
    {
      title: "Custom Web Development",
      description:
        "We build powerful WordPress websites that grow with your business. Our team customizes every feature, plugin, and function to match your unique needs while keeping management simple.",
      icon: DevIcon,
    },
    {
      title: "UI/UX Design",
      description:
        "We build powerful WordPress websites that grow with your business. Our team customizes every feature, plugin, and function to match your unique needs while keeping management simple.",
      icon: UiUxIcon,
    },
    {
      title: "Content Writing",
      description:
        "We build powerful WordPress websites that grow with your business. Our team customizes every feature, plugin, and function to match your unique needs while keeping management simple.",
      icon: ContentWritingIcon,
    },
    {
      title: "Conversion Rate Optimization",
      description:
        "We build powerful WordPress websites that grow with your business. Our team customizes every feature, plugin, and function to match your unique needs while keeping management simple.",
      icon: ConversionIcon,
    },
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);

  const handleScroll = () => {
    if (containerRef.current) {
      const { scrollLeft, offsetWidth } = containerRef.current;
      const sectionWidth =
        containerRef.current.scrollWidth / servicesArray.length;
      const currentIndex = Math.round(scrollLeft / sectionWidth);
      setActiveIndex(currentIndex);
    }
  };

  const scrollToSection = (index) => {
    if (containerRef.current) {
      const sectionWidth =
        containerRef.current.scrollWidth / servicesArray.length;
      containerRef.current.scrollTo({
        left: sectionWidth * index,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, [servicesArray.length]);

 
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
          <div className="relative md:w-[65%] w-full md:overflow-visible">
            <div
              ref={containerRef}
              className="flex md:flex-col flex-row md:gap-[51px] gap-[20px] overflow-x-auto no-scrollbar"
              style={{
                WebkitOverflowScrolling: "touch",
              }}
            >
              {servicesArray.map((service, index) => (
                <div
                  key={index}
                  className="flex gap-[60px] group min-w-[300px] md:min-w-0"
                >
                  <div className="hidden md:block w-[44px] transition-all duration-300 md:group-hover:w-[50px]">
                    <img
                      className="w-full h-auto"
                      src={service.icon}
                      alt={`${service.title} Icon`}
                    />
                  </div>

                  <div className="w-full flex text-center md:text-start flex-col justify-center gap-[15px]">
                    <p className="text-white text-[25px] md:text-[28px] transition-all duration-300 md:group-hover:text-[36px]">
                      {service.title}
                    </p>

                    <p className="text-[16px] md:text-[20px] text-white md:hidden md:group-hover:block md:transition-all duration-300">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="absolute bottom-[-20px] left-0 right-0 flex justify-center items-center gap-[10px] md:hidden">
              {servicesArray.map((_, index) => (
                <div
                  key={index}
                  onClick={() => scrollToSection(index)}
                  className={`cursor-pointer w-[8px] h-[8px] rounded-full transition-all duration-300 ${
                    activeIndex === index
                      ? "w-[12px] h-[12px] bg-white"
                      : "bg-white opacity-50"
                  }`}
                ></div>
              ))}
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
