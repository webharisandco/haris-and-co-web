import React from "react";


function Banner() {
  return (
    <div className="px-[24px] md:px-[32px] min-h-[400px]  lg:min-h-[700px] flex flex-col items-start justify-center max-w-4xl" >
      <p className="text-[24px] md:text-4xl lg:text-5xl text-white mt-32 ">
        Transforming
        <span className="text-white/65 ">
          {" "}
          your vision into{" "}
        </span>{" "}
        <span className="text-white/65 ">
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
