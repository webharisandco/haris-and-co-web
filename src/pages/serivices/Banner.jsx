import React from "react";

function Banner() {
  return (
    <div className="bg-[#0E0E0E] flex justify-start items-center px-[16px] lg:px-[100px] min-h-[600px] lg:min-h-[650px]">
      <div  className="w-full *:lg:w-9/12 2xl:w-10/12 3xl:w-9/12">
        <p className="text-white text-[40px] lg:text-[60px]  xl:text-[70px] leading-[50px] lg:leading-[70px] font-[helvetica-medium]">
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
