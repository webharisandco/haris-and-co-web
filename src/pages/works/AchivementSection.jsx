import React from "react";

function AchivementSection() {
  return (
    <div className=" mt-[30px] lg:mt-[85px] mb-[30px] lg:mb-[53px] w-full px-[16px]">
      <div className="flex justify-center text-center">
        <p className="text-black text-[32px] lg:text-[50px] xl:text-[55px] leading-none font-[boldtext]">
          Crafting Bold{" "}
          <span className="font-[thin]">
            Ideas and Innovative Designs to Build <br /> Unique Stories,{" "}
          </span>{" "}
          Captivating Experiences, and <br />{" "}
          <span className="font-[thin]">
            Transformative Brand Journeys Globally
          </span>
        </p>
      </div>
      <div className="mt-[36px] lg:mt-[112px] flex flex-col lg:flex-row justify-center  gap-[30px] lg:gap-[120px]">
        <div className="flex flex-col   items-center ">
          <p className="text-[36px] lg:text-[64px] font-[boldtext] ">50+</p>
          <p className="text-[21px] font-[thin] text-center">Brands</p>
        </div>
        <div className="flex flex-col   items-center ">
          <p className="text-[36px] lg:text-[64px] font-[boldtext]">500+</p>
          <p className="text-[21px] font-[thin] text-center">
            Projects Launched <br /> across India and GCC
          </p>
        </div>
        <div className="flex flex-col   items-center">
          <p className="text-[36px] lg:text-[64px] font-[boldtext]">20+</p>
          <p className="text-[21px] font-[thin] text-center">Ad films</p>
        </div>
      </div>
    </div>
  );
}

export default AchivementSection;
