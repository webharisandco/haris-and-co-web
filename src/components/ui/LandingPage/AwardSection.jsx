import React from "react";
import award from "../../../assets/images/awards/awards.svg";

function AwardSection() {
  return (
    <div className="py-[80px] px-[100px]">
      <div className="flex w-full justify-center mb-[70px]">
        <p class="text-[37px]  xl:text-[43px] 2xl:text-[50px] text-white font-medium font-[AbroBold] leading-tight">
          Awards
        </p>
      </div>
      <div className="grid grid-cols-5 gap-[50px]">
        <img className="w-fit h-fit" src={award} alt="" />
        <img className="w-fit h-fit" src={award} alt="" />
        <img className="w-fit h-fit" src={award} alt="" />
        <img className="w-fit h-fit" src={award} alt="" />
        <img className="w-fit h-fit" src={award} alt="" />
      </div>
    </div>
  );
}

export default AwardSection;