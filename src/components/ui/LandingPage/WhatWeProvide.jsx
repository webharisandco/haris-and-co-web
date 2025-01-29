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
import Campaign from "@/assets/images/landing/whatsIncluded/campaign.png";
import CampaignIcon from "@/assets/images/landing/whatsIncluded/campaignIcon.png";
import Strategisation from "@/assets/images/landing/whatsIncluded/strategisation.png";
import StrategisationIcon from "@/assets/images/landing/whatsIncluded/strategisationIcon.png";
import Creative from "@/assets/images/landing/whatsIncluded/creative.png";
import CreativeIcon from "@/assets/images/landing/whatsIncluded/creativeIcon.png";
import Revenue from "@/assets/images/landing/whatsIncluded/revenue.png";
import RevenueIcon from "@/assets/images/landing/whatsIncluded/revenueIcon.png";
import { ArrowUpRight } from "lucide-react";
// import Grid from "../../../assets/images/web/images/grid.svg"

function WhatWeProvide({ performance = false }) {
  const [currentTitle, setCurrentTitle] = useState(0);
  const webServicesArray = [
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
        "We create Shopify-based online stores that sell. From secure payment systems to smooth checkout flows, we engineer every aspect to maximize sales and simplify store management.",
      icon: EcomIcon,
      img: EcomBig,
    },
    {
      title: "Custom Web Development",
      description:
        "We develop websites from the ground up, tailoring every feature and function to your business requirements. No templates, no limitations – just pure customization.",
      icon: DevIcon,
      img: CustomeWebBig,
    },
    {
      title: "UI/UX Design",
      description:
        "We craft intuitive user experiences and stunning interfaces that guide visitors naturally through your website, making every interaction count. This is by default included in each service.",
      icon: UiUxIcon,
      img: UiUxBig,
    },
    {
      title: "Content Writing",
      description:
        "We write compelling content that speaks to your audience, tells your story, and drives action. Every word is optimized for both users and search engines.",
      icon: ContentWritingIcon,
      img: ContentBig,
    },
    {
      title: "Conversion Rate Optimization",
      description:
        "We optimize every page element strategically to turn more visitors into customers, using data-driven insights and proven conversion tactics. This is actually included in each service.",
      icon: ConversionIcon,
      img: ConversionBig,
    },
  ];

  const performanceServicesArray = [
    {
      title: "Strategisation",
      description:
        "We map out a data-driven plan to reach your target audience with the right message, at the right time",
      icon: StrategisationIcon,
      img: Strategisation,
    },
    {
      title: "Creatives Development",
      description:
        "We design eye-catching and persuasive ad creatives that resonate with your ideal customers.",
      icon: CreativeIcon,
      img: Creative,
    },
    {
      title: "Campaign Initiation",
      description:
        "We handle the technical aspects of launching your campaign across relevant platforms, ensuring a smooth rollout.",
      icon: CampaignIcon,
      img: Campaign,
    },
    {
      title: "Revenue Maximization",
      description:
        " Our team is committed to driving your revenue growth. We carefully analyse your campaign and optimise it continuously to deliver the best possible results.",
      icon: RevenueIcon,
      img: Revenue,
    },
  ];

  const servicesArray = performance
    ? performanceServicesArray
    : webServicesArray;

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
    <div className="px-[18px] md:px-[100px] ">
      <div
        //  style={{
        //   backgroundImage: `url(${Grid})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        className=" w-full my-[100px] md:my-[152px] px-[20px] md:px-[51px] py-[104px] rounded-[20px] bg-[#151515] relative"
      >
        <div className="w-full h-full grid-bg absolute top-0 left-0"></div>
        <div className="w-full flex justify-between items-center flex-col md:flex-row">
          <p className="text-[30px] md:text-[36px] text-white text-center lg:text-start w-[90%] font-[AbroBold]">
            {performance ? "What’s Included in Our Service" : "What We Provide"}{" "}
          </p>
          {/* <img className="h-[18px] md:h-[55px] text-[#16BD88]" src={DownArrow} alt="" /> */}
          <ArrowUpRight
            size={80}
            color={performance ? "#16BD88" : "#7744D5"}
            className="rotate-180 ms-auto w-[50px] md:w-[80px] absolute right-10  top-[20%] sm:top-[20%] md:top-[15%]"
          />
        </div>
        <div className="w-full  flex flex-row items-center justify-between  mt-[65px] lg:pr-[70px]">
          <div className="relative lg:w-[65%] w-full lg:overflow-visible">
            <div
              ref={containerRef}
              className="flex lg:flex-col flex-row lg:gap-[51px] gap-[20px] overflow-x-auto no-scrollbar"
              style={{
                WebkitOverflowScrolling: "touch",
              }}
            >
              {servicesArray.map((service, index) => (
                <div
                  key={index}
                  className="flex flex-col lg:flex-row lg:gap-[60px] group min-w-[300px] lg:min-w-0"
                  onClick={() => setCurrentTitle(index)}
                  // onMouseLeave={() => setCurrentTitle(0)}
                >
                  <div className="  w-fit  lg:hidden h-full items-center px-[50px]">
                    <img src={service.img} alt={service.title} />
                  </div>

                  <div
                    className={`hidden  lg:block w-[44px] transition-all  duration-300 ${
                      currentTitle == index && "scale-125 translate-y-1"
                    }`}
                  >
                    <img
                      className={`w-full h-auto ${
                        currentTitle == index && "scale-120 translate-y-2"
                      }`}
                      src={service.icon}
                      alt={`${service.title} Icon `}
                    />
                  </div>

                  <div className="w-full flex text-center lg:text-start flex-col justify-center gap-[15px]">
                    <p
                      className={`text-white text-[25px] lg:text-[28px] transition-all duration-300 cursor-pointer ${
                        currentTitle == index && "lg:text-[32px]"
                      } font-[AbroRegular]`}
                    >
                      {service.title}
                    </p>
                    <p className="text-[16px] md:text-[15px] lg:text-[14px]  2xl:text-[17px] text-white block lg:hidden  lg:transition-all duration-300 poppins-light">
                      {service.description}
                    </p>
                    {currentTitle == index && (
                      <p className="text-[16px] md:text-[15px] lg:text-[14px]  2xl:text-[17px] poppins-light  hidden lg:block text-white  lg:transition-all duration-300">
                        {service.description}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="absolute bottom-[-20px] left-0 right-0 flex justify-center items-center gap-[10px] lg:hidden">
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
            {/* {currentTitle == "WordPress Development" ? (
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
            )} */}
            {servicesArray[currentTitle].img && (
              <img
                src={servicesArray[currentTitle].img}
                alt={servicesArray[currentTitle].title}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhatWeProvide;
