import React from "react";
import LinkWithArrow from "@/components/ui/common/LinkWithArrow";

function BrandingSection({ BrandingContents }) {
  return (
    <div className="bg-white lg:pt-[58px] w-full px-[16px] lg:px-[80px] pb-[36px]">
      {BrandingContents.map((BrandingContent, index) => (
        <>
          <div className="w-full hidden lg:block">
            <div
              key={index}
              className={`w-full flex justify-between gap-5 ${
                index % 2 === 1 ? "flex-row-reverse" : ""
              } `}
            >
              <div
                className={`w-6/12 flex flex-col justify-center gap-[15px] ${
                  index % 2 === 0 ? "pe-[70px]" : "px-[35px]"
                }`}
              >
                <div>
                  <p className="font-[boldtext] text-[45px] ">
                    {BrandingContent.title}
                  </p>
                </div>
                <div>
                  <p className="text-[21px] text-black mb-4">
                    {BrandingContent.description}
                  </p>
                </div>
                <div>
                  <ul className="grid list-disc grid-cols-3 gap-[10px] text-[18px]">
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
                  <button className="text-black/55  flex items-center gap-2">
                    {BrandingContent.action.label}
                    <img src={BrandingContent.action.icon} />
                  </button>
                </div>
              </div>
              <div className="w-6/12 mt-[70px]">
                <img
                  className="w-full h-fit lg:h-[500px]  object-cover"
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
                        <li
                          key={serviceIndex}
                          className=" text-black/70 font-[thin]"
                        >
                          {service}
                        </li>
                      ))}
                  </ul>
                </div>
                <div className="mt-[30px] ">
                  <button className="text-gray-500  text-[27px] flex items-center gap-[10px] ">
                    {BrandingContent.action.label}
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
