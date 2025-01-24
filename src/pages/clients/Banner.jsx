import React from "react";

function Banner() {
  return (
    <div className="bg-black flex justify-start items-center px-[100px] min-h-[700px]">
      <div className="w-10/12">
        <p className="text-white text-[80px] leading-[90px]">
          Transforming{" "}
          <span className="text-white/50"> your visions into remarkable</span>{" "}
          experiences
        </p>
      </div>
    </div>
  );
}

export default Banner;
