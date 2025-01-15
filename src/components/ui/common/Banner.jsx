import React from "react";
import ButtonIcon from '../../../assets/images/web/icons/buttonRightArrow.svg'

function Banner({ bannerImage, heading, description }) {
  return (
    <div className="flex  gap-[100px] justify-between items-center">
      <div className="flex flex-col gap-[20px]">
        <p className="text-white">
          Conversion-focused Website Development Company in Dubai
        </p>
        <p className="text-[57px] leading-none text-white font-medium">
          {heading}
        </p>
        <p className="text-[20px] text-white"> {description}</p>
        <button className="bg-[#7744D5] py-[18px]  max-w-[271px] flex justify-center items-center gap-[10px] text-white rounded-[10px]">
          <p> GET A PROPOSAL</p>
          <img src={ButtonIcon} alt="" />
        </button>
      </div>
      <div>
        <img className="w-full h-full" src={bannerImage} alt="" />
      </div>
    </div>
  );
}

export default Banner;
