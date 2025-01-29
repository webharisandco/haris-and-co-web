import React from "react";

function Banner() {
  return (
    <div className=" px-[16px] md:px-[80px] pt-[180px] pb-[180px] bg-[#0E0E0E]">
      <div className=" flex flex-col gap-[35px]">
        <p className="lg:text-[48px] xl:text-[55px] 3xl:text-[64px] text-white">
          Transforming<span className="text-white/65 font-[Helvetica-Light]"> your visions into<br /> remarkable </span>experiences
        </p>
      </div>
    </div>
  );
}

export default Banner;
