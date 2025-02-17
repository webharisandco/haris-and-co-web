import React from "react";
import LinkWithArrow from "@/components/ui/common/LinkWithArrow";
import { ArrowRight } from 'lucide-react'
import { Link } from "react-router-dom";

function BrandingSection({ BrandingContents }) {
  return (
    <div className="bg-white lg:pt-[70px] w-full px-[16px] md:px-[80px] pb-[36px] flex flex-col gap-[70px]">
      {BrandingContents.map((BrandingContent, index) => (
        <>
          <div className="w-full hidden lg:block">
            <div
              key={index}
              className={`w-full flex justify-between items-center gap-5 ${
                index % 2 === 1 ? "flex-row-reverse" : ""
              } `}
            >
              <div
                className={`w-6/12 flex flex-col justify-center my-auto gap-[15px] ${
                  index % 2 === 0 ? "pe-[70px] 3xl:pe-[90px]" : "px-[35px] 3xl:ps-[80px]"
                }`}
              >
                <div>
                  <p className="font-[helvetica-medium] text-48px ">
                    {BrandingContent.title}
                  </p>
                </div>
                <div>
                  <p className="text-[21px] 3xl:text-[24px] leading-[26px] text-black mb-4 lg:w-3/4">
                    {BrandingContent.description}
                  </p>
                </div>
                <div>
                  <ul className="grid list-disc grid-cols-3 gap-[10px] 3xl:gap-7 text-[18px] 3xl:text-[24px]">
                    {BrandingContent.services.map((service, serviceIndex) => (
                      <li
                        key={serviceIndex}
                        className=" text-black/70 font-[thin] list-inside text-nowrap"
                      >
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-[30px]">
                  <Link to={"/marketing"} className="text-black/55 font-[helvetica-medium] hover:text-black transition-all duration-300  flex items-center gap-2 3xl:text-[24px]">
                    {BrandingContent.action.label}
                    <ArrowRight className='' size={25}/>
                  </Link>
                </div>
              </div>
              <div className="w-6/12 overflow-hidden">
                <img
                  className="w-full h-fit lg:h-[500px] 3xl:h-[600px] object-cover transform transition-transform duration-300 hover:scale-110"
                  src={BrandingContent.image}
                  alt={BrandingContent.title}
                />
              </div>
            </div>
          </div>
          <div className=" block lg:hidden w-full pt-[50px]">
            <div key={index} className={`w-full flex-col  justify-between  `}>
              <div className="">
                <p className=" font-[boldtext] text-[32px]">
                  {BrandingContent.title}
                </p>
              </div>
              <div className=" mt-[30px]">
                <img
                  className="w-fit h-[250px] lg:h-[500px]  object-cover"
                  src={BrandingContent.image}
                  alt={BrandingContent.title}
                />
              </div>
              <div className=" mt-[26px] flex flex-col justify-center  ">
                <div>
                  <p className="text-[16px] font-medium text-black ">
                    {BrandingContent.description}
                  </p>
                </div>
                <div className="mt-[30px]">
                  <ul className="grid list-disc grid-cols-1 gap-[20px] px-[20px] text-[20px]">
                    {BrandingContent.services
                      .slice(0, 3)
                      .map((service, serviceIndex) => (
                        <li key={serviceIndex} className=" text-black/70 font-[thin]">
                          {service}
                        </li>
                      ))}
                  </ul>
                </div>
                <div className="mt-[30px] ">
                  <button className="text-gray-500 font-[helvetica-medium]  text-[27px] flex items-center gap-[10px] ">
                <p className="">{BrandingContent.action.label}</p>    
                    <img src={BrandingContent.action.icon} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ))}
    </div>
  );
}

export default BrandingSection;
