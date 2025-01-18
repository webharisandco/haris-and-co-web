import React from "react";
import ButtonIcon from '@/assets/images/web/icons/buttonRightArrow.svg'
import LandingButton from "../../ui/common/LandingButton";

function Banner({ bannerImage, heading, description, imgClassName,tagline,performance=false }) {
  return (
    <div className="px-[16px] md:px-[60px] lg:px-[100px]">


    <div className=" grid grid-cols-1 lg:grid-cols-2 mt-[124px] md:mt-[150px] gap-[73px] md:gap-[100px] justify-between items-center poppins-regular">
      <div className="flex flex-col gap-[20px] w-fit">
        <h1 className="text-white text-[12px] md:font-light">
          {tagline}
        </h1>
        <p className="text-[38px] md:text-[55px] leading-none text-white font-medium font-[AbroBold]">
          {heading}
        </p>
        <p className="text-[20px] text-white/70 font-light"> {description}</p>
        {/* <button className="bg-[#7744D5] py-[18px]  max-w-[271px] flex justify-center items-center gap-[10px] text-white rounded-[10px]">
          <p> GET A PROPOSAL</p>
          <img src={ButtonIcon} alt="" />
        </button> */}
        <div className="flex mt-8 justify-center md:justify-start">
          <LandingButton text={'GET A PROPOSAL'} />
          {performance && <LandingButton text={'View Our Results'} className={'bg-transparent hover:bg-transparent hover:text-white/70 text-white'} />}
        </div>
      </div>
      <div className="w-fit">
        <img className={`w-full h-full ${imgClassName}`} src={bannerImage} alt="" />
      </div>
    </div>
    </div>
  );
}

export default Banner;
