import React from "react";
import awardImage from "../../assets/images/awards/awardimage1.png";


function Banner() {
  return (
    <div className="px-[16px] md:px-[80px] bg-[#0E0E0E] min-h-[632px] lg:min-h-[700px] flex flex-col items-center justify-center">
      <p className="text-[40px] text-white leading-none mb-10">
        Transforming
        <span className="text-white/65 font-[Helvetica-Light]">
          {" "}
          your vision into{" "}
        </span>{" "}
        <span className="text-white/65 font-[Helvetica-Light]">
          remarkable
        </span>{" "}
        experiences
      </p>

      {/* Awards image banner below text */}
      <div className="w-full flex justify-center">
        <img
          src={awardImage}
          alt="Awards Banner"
          className="w-[70%] max-w-[900px] h-auto object-contain"
        />
      </div>
    </div>
  );
}

export default Banner;
