import React from "react";

function Banner() {
  return (
    <div className="px-4 sm:px-6 md:px-[80px] bg-[#0E0E0E] min-h-[400px] md:min-h-[632px] lg:min-h-[700px] flex items-center">
  <p className="text-[28px] sm:text-[36px] md:text-[48px] lg:text-[50px] text-white leading-tight sm:leading-snug md:leading-none max-w-[90%] md:max-w-2xl">
    Gain new insights from the{" "}
    <span className="text-white/65">creative minds in the industry!</span>
  </p>
</div>

  );
}

export default Banner;
