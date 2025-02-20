import React from "react";

function Banner() {
  return (
    <div className=" px-[16px] md:px-[80px]  bg-[#0E0E0E] min-h-[600px] lg:min-h-[650px] items-center flex">
      <p className="text-[40px] text-80px text-white   leading-none ">
        Our clients aren’t the
        <span className="text-white/65 font-[Helvetica-Light]">
          {" "}
          only ones who love our work.{" "}
        </span>{" "}
        See the{" "}
        <span className="text-white/65 font-[Helvetica-Light]">
          {" "}
          recognition
        </span>{" "}
        we received.
      </p>
    </div>
  );
}

export default Banner;
