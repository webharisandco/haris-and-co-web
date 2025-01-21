import React from "react";
import ButtonIcon from '@/assets/images/web/icons/buttonRightArrow.svg'
import LandingButton from "../../ui/common/LandingButton";
import OptimizedBanner from "../common/OptimizedBanner";

function Banner({ bannerImage, heading, description, imgClassName, tagline, performance = false }) {
  return (
    <div className="px-[16px] md:px-[60px] lg:px-[100px]">
      <div className={` grid grid-cols-1  mt-[50px] md:mt-[75px] lg:mt-[100px] xl:mt-[125px] gap-[73px] md:gap-[100px] justify-between items-center poppins-regular ${performance ? 'lg:grid-cols-[1.4fr_1fr]' : 'lg:grid-cols-[1.6fr_1fr]'}`}>
        <div className="flex flex-col gap-[20px] w-fit">
          <h1 className="text-white text-[13px] md:text-[15px] lg:text-[17px] md:font-light">
            {tagline}
          </h1>
          <h2 className="text-[37px]  xl:text-[43px] 2xl:text-[50px] text-white font-medium font-[AbroBold] leading-tight">
            <span className="block lg:hidden">{heading}</span>
            {!performance && <span className="hidden lg:block">
              {/* Replace the space where you want a <br> with an actual line break */}
              {heading.split(' ').slice(0, 4).join(' ')} <br /> {heading.split(' ').slice(4).join(' ')}
            </span>}
            {performance && <span className="hidden lg:block">{ heading}</span>}
          </h2>
          <p className="text-[11px] md:text-[15px] lg:text-[14px]  2xl:text-[17px] text-white/70 font-light w-full lg:w-5/6 "> {description}</p>
          <div className="flex mt-8 justify-center md:justify-start flex-col md:flex-row gap-[20px]">
            <LandingButton text={'GET A PROPOSAL'} />
            {performance && <LandingButton text={'View Our Results'} className={'bg-transparent hover:bg-transparent hover:text-white/70 text-white'} />}
          </div>
        </div>
        <div className="w-fit">
          <OptimizedBanner src={bannerImage} alt="Banner Image" />
          {/* <img className={`w-full h-full ${imgClassName}`} src={bannerImage} alt="" /> */}
        </div>
      </div>
    </div>
  );
}

export default Banner;
