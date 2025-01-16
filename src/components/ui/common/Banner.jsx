import React from "react";
import ButtonIcon from '@/assets/images/web/icons/buttonRightArrow.svg'
import LandingButton from "./LandingButton";

function Banner({ bannerImage, heading, description, imgClassName,tagline }) {
  return (
    <div className="flex mt-[150px]  gap-[100px] justify-between items-center poppins-regular">
      <div className="flex flex-col gap-[20px] w-6/12">
        <h1 className="text-white font-light">
          {tagline}
        </h1>
        <p className="text-[55px] leading-none text-white font-medium font-[AbroBold]">
          {heading}
        </p>
        <p className="text-[20px] text-white/70 font-light"> {description}</p>
        {/* <button className="bg-[#7744D5] py-[18px]  max-w-[271px] flex justify-center items-center gap-[10px] text-white rounded-[10px]">
          <p> GET A PROPOSAL</p>
          <img src={ButtonIcon} alt="" />
        </button> */}
        <div className="flex mt-8">
          <LandingButton text={'GET A PROPOSAL'} />
        </div>
      </div>
      <div className="w-6/12">
        <img className={`w-full h-full ${imgClassName}`} src={bannerImage} alt="" />
      </div>
    </div>
  );
}

export default Banner;
