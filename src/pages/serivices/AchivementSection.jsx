import React from "react";

function AchivementSection() {
  return (
    <div className="bg-[#0E0E0E] py-[30px] lg:py-[100px] px-[16px] lg:px-[100px] min-h-[700px]">
      <div className="flex justify-start items-center ">
        <div className="w-full lg:w-10/12 xl:w-[65%]">
          <p className="text-white text-[32px] font-[helvetica-medium] text-64px leading-none">
            Every innovation{" "}
            <span className="text-white/50 font-[thin]">
              that happens here is out of a quest to get better at what we are
              already doing.{" "}
            </span>{" "}
            We deliver ideas that make a difference,{" "}
            <span className="text-white/50 font-[thin]">
              create experiences that transform lives and build ecosystems that{" "}
            </span>{" "}
            foster progress.
          </p>
        </div>
      </div>

      <div className="mt-[50px] lg:mt-[100px] w-full flex flex-col mb-[30px] lg:mb-0 lg:flex-row lg:justify-between lg:w-10/12 xl:w-11/12">
        <div className="flex flex-col items-center lg:items-start sm:mt-[30px]  lg:text-start justify-center w-full">
          <p className="text-[36px] font-[helvetica-medium] lg:text-[58px] text-white/50 leading-none">500+</p>
          <p className="text-[20px] lg:text-[30px] text-white/50 font-[thin]">Clients</p>
        </div>
        <div className="flex flex-col items-center lg:items-start mt-[30px]  lg:text-start w-full ">
          <p className="text-[36px] font-[helvetica-medium] lg:text-[58px] text-white/50 leading-none">1000+</p>
          <p className="text-[20px] lg:text-[30px] text-white/50 font-[thin]">
            Projects Done
          </p>
        </div>
        <div className="flex flex-col items-center lg:items-start mt-[30px]  lg:text-start w-full ">
          <p className="text-[36px] font-[helvetica-medium] lg:text-[58px] text-white/50 leading-none text-start">4.9</p>
          <p className="text-[20px] lg:text-[30px] text-white/50 font-[thin]">
            Rating on Google
          </p>
        </div>
      </div>
    </div>
  );
}

export default AchivementSection;
