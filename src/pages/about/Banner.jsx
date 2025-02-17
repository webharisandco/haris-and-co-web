import React from "react";

function Banner() {
  return (
    <div className=" px-[16px] md:px-[80px] pt-[180px] pb-[180px] min-h-[600px]  lg:min-h-[650px] bg-[#0E0E0E]">
      <div className=" flex flex-col gap-[35px]">
        <p className="text-[40px] text-80px text-white leading-[1.1]">
          Transforming<span className="text-white/65 font-[Helvetica-Light]"> your visions into<br /> remarkable </span>experiences
        </p>
      </div>
    </div>
  );
}

export default Banner;
