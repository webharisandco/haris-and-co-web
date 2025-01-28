import React from "react";

function Banner() {
  return (
    <div className="bg-black flex justify-start items-center px-[16px] lg:px-[100px] min-h-[600px] lg:min-h-[650px]">
      <div className="w-full *:lg:w-10/12 2xl:w-9/12">
        <p className="text-white text-[40px] lg:text-[70px] lg:leading-[80px]">
          Discover <span className="text-white/50"> our full suite of creative and</span> digital services
        </p>
      </div>
    </div>
  );
}

export default Banner;
