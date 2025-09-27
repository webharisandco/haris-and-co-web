import React from "react";
import awardImage from "../../assets/images/awards/awardimage1.png";


function Banner() {
  return (
    <div className="px-[16px] md:px-[80px] min-h-[300px]  lg:min-h-[700px] flex flex-col items-start justify-center max-w-4xl" >
      <p className="text-xl md:text-3xl lg:text-5xl text-white mt-32 ">
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
      {/* <div className="w-full flex justify-center">
        <img
          src={awardImage}
          alt="Awards Banner"
          className="w-[70%] max-w-[900px] h-auto object-cover"
        />
      </div> */}
    </div>
  );
}

export default Banner;
