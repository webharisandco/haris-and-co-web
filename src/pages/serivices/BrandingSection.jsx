import React from "react";

function BrandingSection({ BrandingContents }) {
  return (
    <div className="bg-white mt-[58px] w-full px-[80px] pb-[36px]">
      {BrandingContents.map((BrandingContent, index) => (
        <div
          key={index}
          className={`w-full flex justify-between gap-[100px] mt-[74px] ${
            index % 2 === 1 ? "flex-row-reverse" : ""
          }`}
        >
          <div className="w-6/12 flex flex-col justify-center gap-[10px] ">
            <div>
              <p className=" font-bold text-[48px]">{BrandingContent.title}</p>
            </div>
            <div>
              <p className="text-[24px] text-gray-600">
                {BrandingContent.description}
              </p>
            </div>
            <div>
              <ul className="grid list-disc grid-cols-3 gap-[10px] text-[20px]">
                {BrandingContent.services.map((service, serviceIndex) => (
                  <li key={serviceIndex} className=" text-gray-500">
                    {service}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-[30px]">
              <button className="text-gray-500  text-[20px] flex items-center gap-2">
                {BrandingContent.action.label}
                <img src={BrandingContent.action.icon} />
              </button>
            </div>
          </div>
          <div className="w-6/12">
            <img
              className="w-fit h-fit lg:h-[580px]  object-cover"
              src={BrandingContent.image}
              alt={BrandingContent.title}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default BrandingSection;
