import React from "react";
import Image from "@/assets/images/workSection/img1.svg";
import smallImage from "@/assets/images/workSection/achSmall.png";

function AdsSection() {
  return (
    <div className="px-[16px] lg:px-[80px] flex justify-center">
      <img className="w-fit h-fit lg:block hidden" src={Image} alt="" />
      <img className="w-full object-cover h-fit  block lg:hidden" src={smallImage} alt="" />
    </div>
  );
}

export default AdsSection;
