import React from "react";

function Banner() {
  return (
    <div className=" px-[16px] md:px-[80px]  pt-[150px] pb-[150px] lg:pt-[180px] lg:pb-[180px] flex items-center  lg:min-h-[632px] bg-[#0E0E0E]">
      <div className=" flex flex-col gap-[35px]">
        <p className="text-[24px]  lg:text-5xl text-white leading-[1.1]">
          We are dedicated to help brands scale through{" "}
          <span className="text-white/65 ">
            {" "}
            creative and authentic marketing strategies, engaging designs,
          </span>{" "}
          and{" "}
          <span className="text-white/65 ">
            technology
          </span>
          .
        </p>
      </div>
    </div>
  );
}

export default Banner;
