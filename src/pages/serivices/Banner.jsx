import React from "react";

function Banner() {
  return (
    <div className="bg-[#0E0E0E] flex justify-center items-center px-[16px] lg:px-[80px] min-h-[432px] lg:min-h-[700px]">
      <div  className="w-full *:lg:w-9/12 2xl:w-10/12 3xl:w-9/12 mt-20">
        <p className="text-white text-[24px] md:text-[32px] lg:text-[48px]  xl:text-[65px] leading-[40px] lg:leading-[70px] font-[helvetica-medium]">
          Tired of all the cookie-cutter strategies?
          <span className="text-white/50 font-[thin]">
            {" "}
            Discover tailored solutions
          </span>{" "}
          that drive growth
        </p>

      </div>
    </div>
  );
}

export default Banner;
