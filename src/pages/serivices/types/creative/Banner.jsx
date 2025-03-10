import React from "react";

function Banner({currentService}) {
  return (
    <div className="bg-[#0E0E0E] flex justify-start items-center px-[16px] lg:px-[100px] min-h-[600px] lg:min-h-[650px]">
      <div className="w-full *:lg:w-10/12 2xl:w-9/12">
        <p className="text-white text-[40px] lg:text-[70px] xl:text-[85px] 3xl:text-[96px] lg:leading-[80px] font-[helvetica-medium] ">
          {currentService.subHeading}
        </p>
      </div>
    </div>
  );
}

export default Banner;