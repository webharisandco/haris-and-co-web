import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

function BrandingSection({ BrandingContents }) {
  return (
    <div className="bg-white lg:pt-[70px] w-full px-[16px] md:px-[80px] py-20 pb-[36px] flex flex-col  gap-[70px]">
      {BrandingContents.map((brandingContent, index) => (
        <>
          {/* -------------- web ------------------- */}
          <div className="bg-white w-full hidden lg:block ">
            <div
              id={brandingContent.id}
              key={index}
              className={`w-full flex justify-between items-center gap-5 ${
                index % 2 === 1 ? "flex-row-reverse" : ""
              } `}
            >
              <div
                className={`w-6/12 flex flex-col justify-center my-auto gap-[15px] ${
                  index % 2 === 0
                    ? "pe-[70px] 3xl:pe-[90px]"
                    : "px-[35px] 3xl:ps-[80px]"
                }`}
              >
                <div>
                  <p className="font-[helvetica-medium] text-[48px] ">
                    {brandingContent.title}
                  </p>
                </div>
                <div>
                  <p className="text-[21px] 3xl:text-[24px] leading-[26px] text-black mb-4 lg:w-full">
                    {brandingContent.description}
                  </p>
                </div>
                <div className="xl:ml-[15px]">
                  <ul className="grid list-disc list-outside font-[thin] tracking-wider  grid-cols-3 gap-[10px] 3xl:gap-7 text-[5px] lg:text-[16px] ">
                    {brandingContent.services.map((service, serviceIndex) => (
                      <li
                        key={serviceIndex}
                        className="text-black/70 font-light leading-snug"
                      >
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-[30px] xl:ml-[-5px]">
                  <Link
                    to={brandingContent.action.link}
                    className="text-black/55 font-[helvetica-medium] hover:text-black transition-all duration-300  flex items-center gap-2 3xl:text-[24px]"
                  >
                    {brandingContent.action.label}
                    <ArrowRight className="" size={25} />
                  </Link>
                </div>
              </div>
              <div className="w-6/12 overflow-hidden">
                <img
                  className="w-full h-fit lg:h-[500px] 3xl:h-[600px] object-contain transform transition-transform duration-300 hover:scale-110"
                  src={brandingContent.image}
                  alt={brandingContent.title}
                />
              </div>
            </div>
          </div>


          {/* -------------- mobile ------------------- */}
          <div className="bg-white block lg:hidden w-full ">
            <div key={index} className={`w-full flex-col  justify-between  `}>
              <div className="">
                <p className=" font-[helvetica-medium] text-[28px] md:text-[32px]">
                  {brandingContent.title}
                </p>
              </div>
              <div className=" mt-[30px]">
                <img
                  className="w-fit h-[250px] lg:h-[500px]  object-contain"
                  src={brandingContent.image}
                  alt={brandingContent.title}
                />
              </div>
              <div className=" mt-[26px] flex flex-col justify-center  ">
                <div>
                  <p className="text-[16px] font-[helvetica-medium] text-black ">
                    {brandingContent.description}
                  </p>
                </div>
                <div className="mt-[30px]">
                  <ul className="grid list-disc grid-cols-1  gap-[20px] px-[20px] text-[15px]">
                    {brandingContent.services
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
                  <Link
                    to={brandingContent.action.link}
                    className="text-black/55 font-[helvetica-medium] hover:text-black transition-all duration-300  flex items-center gap-2 3xl:text-[24px]"
                  >
                    {brandingContent.action.label}
                    <ArrowRight className="" size={25} />
                  </Link>
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
