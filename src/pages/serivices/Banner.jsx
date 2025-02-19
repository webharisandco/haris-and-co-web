import React from "react";

function Banner() {
  return (
    <div className="bg-[#0E0E0E] flex justify-start items-center px-[16px] lg:px-[100px] min-h-[600px] lg:min-h-[650px]">
      <div className="w-full *:lg:w-9/12 2xl:w-10/12 3xl:w-9/12">
        <p className="text-white text-[40px] lg:text-[60px]  xl:text-[70px] lg:leading-[70px] font-[helvetica-medium]">
          We offer
          <span className="text-white/50 font-[thin]"> services that bring out the x factor and help</span>{" "}
          you scale
        </p>

      </div>
    </div>
  );
}

export default Banner;
