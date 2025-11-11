import React from "react";

function AchivementSection() {
  return (
    <div className="bg-black py-[30px] lg:py-[100px] px-[16px] lg:px-[100px] min-h-[632px]">
      <div className="flex justify-start text-center lg:text-start items-center ">
        <div className="w-full lg:w-10/12 xl:w-[70%]">
          <p className="text-white text-[22px] leading-[39px] font-[helvetica-medium] lg:text-[45px] lg:leading-none">
            At Haris & Co., we value creating experiences{" "}
            <span className="text-white/50 font-[thin]">
              for our clients that transcend their expectations.
            </span>{" "}
            We believe in the power of dedicated teamwork and creativity.{" "}
            <span className="text-white/50 font-[thin]">
              With Haris & Co., get creative solutions that deliver results.
            </span>
          </p>
        </div>
      </div>

      <div className="mt-[50px] lg:mt-[100px] w-full flex flex-col mb-[30px] lg:mb-0 lg:flex-row lg:justify-between lg:w-10/12 xl:w-11/12">
        <div className="flex flex-col items-center lg:items-start sm:mt-[30px]  lg:text-start justify-center w-full">
          <p className="text-[36px] font-[helvetica-medium] lg:text-[58px] text-white/50 leading-none">
            500+
          </p>
          <p className="text-[20px] lg:text-[30px] text-white/50 font-[thin]">
            Clients
          </p>
        </div>
        <div className="flex flex-col items-center lg:items-start mt-[30px]  lg:text-start w-full ">
          <p className="text-[36px] font-[helvetica-medium] lg:text-[58px] text-white/50 leading-none">
            1000+
          </p>
          <p className="text-[20px] lg:text-[30px] text-white/50 font-[thin]">
            Projects Done
          </p>
        </div>
        <div className="flex flex-col items-center lg:items-start mt-[30px]  lg:text-start w-full ">
          <p className="text-[36px] font-[helvetica-medium] lg:text-[58px] text-white/50 leading-none text-start">
            5+
          </p>
          <p className="text-[20px] lg:text-[30px] text-white/50 font-[thin]">
            Countries
          </p>
        </div>
      </div>
    </div>
  );
}

export default AchivementSection;
