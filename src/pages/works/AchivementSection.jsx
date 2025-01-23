import React from "react";

function AchivementSection() {
  return (
    <div className=" mt-[85px] mb-[53px] w-full">
      <div>
        <p className="text-[48px] text-center text-black poppins-semibold">
          Crafting Bold Ideas and Innovative Designs to Build <br /> Unique
          Stories, Captivating Experiences, and <br /> Transformative Brand
          Journeys Globally
        </p>
      </div>
      <div className="mt-[112px] flex justify-center  gap-[120px]">
        <div className="flex flex-col   items-center ">
            <p className="text-[64px] poppins-semibold ">50+</p>
            <p className="text-[21px] text-center">Brands</p>
        </div>
        <div className="flex flex-col   items-center ">
            <p className="text-[64px] poppins-semibold">500+</p>
            <p className="text-[21px] text-center">Projects Launched <br /> across India and GCC</p>
        </div>
        <div className="flex flex-col   items-center">
            <p className="text-[64px] poppins-semibold">20+</p>
            <p className="text-[21px] text-center">Ad films</p>
        </div>
      </div>
    </div>
  );
}

export default AchivementSection;
