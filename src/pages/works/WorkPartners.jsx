import React from "react";
import OurWorksData from "@/utils/data/ourWorks";

function WorkPartners() {
  return (
    <div className="bg-[#0E0E0E]">
      <div className="px-[17px] md:px-[40px] lg:px-[80px] mt-[40px] pb-[20px] lg:pb-[180px]">
        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-y-[49px] md:gap-y-[100px] lg:gap-y-[150px] gap-x-[120px] mt-[40px] md:mt-[60px] lg:mt-[80px]">
          {OurWorksData.map((data) => (
            <div
              // to="/branding"
              key={data.id}
              className={`h-full flex flex-col ${data.id % 2 === 0 ? "mt-0 lg:mt-[78px]" : ""
                }`}
            >
              <img
                className="w-full h-full"
                src={data.image}
                alt={data.heading}
              />

              <p className="font-medium text-white tracking-tighter text-[24px] my-[15px] md:my-0 md:text-[36px] text-left ml-[-11px]">
                {data.heading}
              </p>
              <p className="text-white ml-[-5px] lg:ml-0 font-[thin] opacity-55 text-left text-[16px] md:text-[24px]">
                {data.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WorkPartners;
