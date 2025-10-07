import React from "react";

function Banner() {
  return (
    <div className="bg-[#0E0E0E] flex justify-start items-center px-[16px] lg:px-[100px] min-h-[632px] lg:min-h-[700px]">
    <div className="w-full *:lg:w-10/12 2xl:w-9/12">
      <p className="text-white text-[40px] lg:text-[60px]  xl:text-[70px] lg:leading-[80px] font-[helvetica-medium] ">
          Transforming{" "}
          <span className="text-white/50  font-[thin]"> your visions into remarkable</span>{" "}
          experiences
        </p>
      </div>
    </div>
  );
}

export default Banner;
