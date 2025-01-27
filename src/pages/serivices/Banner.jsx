import React from "react";

function Banner() {
  return (
    <div className="bg-black flex justify-start items-center px-[16px] lg:px-[100px] min-h-[600px] lg:min-h-[700px]">
      <div className="w-full *:lg:w-10/12">
        <p className="text-white text-[40px] lg:text-[80px] leading-[90px]">
          Discover <span className="text-white/50"> Our Full Suite of Creative and</span> Digital Services
        </p>
      </div>
    </div>
  );
}

export default Banner;
