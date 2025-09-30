import React from "react";

function Banner() {
  return (
    <div className=" px-[16px] md:px-[80px]  bg-[#0E0E0E] min-h-[632px] lg:min-h-[700px] items-center flex">
      <p className="text-[40px] text-80px text-white   leading-none ">
        Gain new insights from the
        <span className="text-white/65 ">
          {" "}
          creative minds in the industry!
        </span>{" "}
      </p>
    </div>
  );
}

export default Banner;
