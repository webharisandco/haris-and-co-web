import React, { useEffect, useRef, useState } from "react";
import DownArrow from "@/assets/images/web/icons/downArrowBlue.svg";
import CodingIcon from "@/assets/images/icons/codingIcon.svg";
import EcomIcon from "@/assets/images/icons/ecomIcon.svg";
import DevIcon from "@/assets/images/icons/devIcon.svg";
import UiUxIcon from "@/assets/images/icons/uiUxIcon.svg";
import ContentWritingIcon from "@/assets/images/icons/contentWritingIcon.svg";
import ConversionIcon from "@/assets/images/icons/conversionIcon.svg";
import ContentBig from "../../../assets/images/web/images/contentBig.png";
import UiUxBig from "../../../assets/images/web/images/uiUxBig.jpg";
import CustomeWebBig from "../../../assets/images/web/images/customeWebBig.png";
import ConversionBig from "../../../assets/images/web/images/conversionBig.png";
import EcomBig from "../../../assets/images/web/images/EcomBig.png";
import Banner from "@/assets/images/web/images/whatWeProvideBanner.png";
// import Grid from "../../../assets/images/web/images/grid.svg"

function WhatWeProvide() {
  const [currentTitle, setCurrentTitle] = useState("WordPress Development");
  const servicesArray = [
    {
      title: "WordPress Development",
      description:
        "We build powerful WordPress websites that grow with your business. Our team customizes every feature, plugin, and function to match your unique needs while keeping management simple.",
      icon: CodingIcon,
      img: Banner,
    },
    {
      title: "Ecommerce Development",
      description:
        "We build powerful WordPress websites that grow with your business. Our team customizes every feature, plugin, and function to match your unique needs while keeping management simple.",
      icon: EcomIcon,
      img: EcomBig,
    },
    {
      title: "Custom Web Development",
      description:
        "We build powerful WordPress websites that grow with your business. Our team customizes every feature, plugin, and function to match your unique needs while keeping management simple.",
      icon: DevIcon,
      img: CustomeWebBig,
    },
    {
      title: "UI/UX Design",
      description:
        "We build powerful WordPress websites that grow with your business. Our team customizes every feature, plugin, and function to match your unique needs while keeping management simple.",
      icon: UiUxIcon,
      img: UiUxBig,
    },
    {
      title: "Content Writing",
      description:
        "We build powerful WordPress websites that grow with your business. Our team customizes every feature, plugin, and function to match your unique needs while keeping management simple.",
      icon: ContentWritingIcon,
      img: ContentBig,
    },
    {
      title: "Conversion Rate Optimization",
      description:
        "We build powerful WordPress websites that grow with your business. Our team customizes every feature, plugin, and function to match your unique needs while keeping management simple.",
      icon: ConversionIcon,
      img: ConversionBig,
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
        <div className="w-full  flex flex-row items-center justify-between  mt-[65px] md:pr-[70px]">
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
                  className="flex flex-col md:flex-row md:gap-[60px] group min-w-[300px] md:min-w-0"
                  onMouseEnter={() => setCurrentTitle(service.title)}
                  onMouseLeave={() => setCurrentTitle("")}
                >
                  <div className="  w-fit  md:hidden h-full items-center px-[50px]">
                    <img src={service.img} alt={service.title} />
                  </div>

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
          <div className=" hidden w-fit md:w-[40%] md:flex h-full items-center">
            {currentTitle == "WordPress Development" ? (
              <img src={Banner} alt="" />
            ) : currentTitle == "Ecommerce Development" ? (
              <img src={EcomBig} alt="" />
            ) : currentTitle == "Custom Web Development" ? (
              <img src={CustomeWebBig} alt="" />
            ) : currentTitle == "UI/UX Design" ? (
              <img src={UiUxBig} alt="" />
            ) : currentTitle == "Content Writing" ? (
              <img src={ContentBig} alt="" />
            ) : currentTitle == "Conversion Rate Optimization" ? (
              <img src={ConversionBig} alt="" />
            ) : (
              <img src={Banner} alt="" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhatWeProvide;
