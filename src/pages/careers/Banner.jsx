import React from "react";
import BannerImg1 from "@/assets/images/career/bnr1.jpg";
import BannerImg2 from "@/assets/images/career/bnr2.jpg";
import BannerImg3 from "@/assets/images/career/bnr3.jpg";

function Banner() {
  return (
    <div className="px-4 sm:px-6 md:px-16 lg:px-24 xl:px-32 2xl:px-40 py-32 md:py-44 bg-[#0E0E0E] flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
      
      {/* Text Section */}
      <div className="lg:w-1/2 flex flex-col justify-center text-center lg:text-left">
        <p className="text-[22px] sm:text-[26px] md:text-[34px] lg:text-[38px] xl:text-[44px] 2xl:text-[48px] text-white leading-snug sm:leading-tight md:leading-snug lg:leading-snug max-w-full md:max-w-xl">
          Are you passionate about helping brands grow with creative strategies?
          <span className="text-white/65">
            {" "}
            Join us in becoming a changemaker for brands.
          </span>
        </p>
      </div>

      {/* Image Grid Section */}
      <div className="lg:w-1/2 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-3 gap-4 md:gap-6">
        <img
          src={BannerImg1}
          alt="Team collaborating on a project"
          className="w-full h- sm:h-72 md:h-96 lg:row-span-3 lg:col-span-1 object-cover "
        />
        <img
          src={BannerImg2}
          alt="Creative workspace with people brainstorming"
          className="w-full h-40 sm:h-48 md:h-60 lg:row-span-1 lg:col-span-2 object-cover "
        />
        <img
          src={BannerImg3}
          alt="Office environment with modern design"
          className="w-full h-48 sm:h-56 md:h-72 lg:row-span-2 lg:col-span-2 object-cover "
        />
      </div>
    </div>
  );
}

export default Banner;
