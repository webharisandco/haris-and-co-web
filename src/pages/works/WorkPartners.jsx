import React from "react";
import { Link } from "react-router-dom";

export default function WorkPartners({ ourWorksData }) {
  return (
    <div className="bg-[#0E0E0E]">
      <div className="px-[17px] md:px-[40px] lg:px-[80px] mt-[40px] pb-[20px] lg:pb-[180px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-[40px] gap-y-[60px] md:gap-x-[60px] md:gap-y-[80px] lg:gap-x-[80px] lg:gap-y-[100px] mt-[40px] md:mt-[60px] lg:mt-[80px]">
          {ourWorksData.map((data) => (
            <Link to="#" key={data.id}>
              <div className="h-full flex flex-col">
                <img
                  className="w-full h-auto object-contain"
                  src={data.image}
                  alt={data.heading}
                />
                <p className="font-medium text-white tracking-wide text-[20px] md:text-[28px] lg:text-[32px] my-[10px] text-left">
                  {data.heading}
                </p>
                <p className="text-white opacity-55 tracking-wide font-[thin] text-left text-[14px] md:text-[18px] ">
                  {data.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
