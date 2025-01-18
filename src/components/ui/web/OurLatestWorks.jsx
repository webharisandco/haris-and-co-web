import React from "react";
import MomToBe from "@/assets/images/web/images/momToBe.png";
import Pharmacy from "@/assets/images/web/images/pharmacy.png";
import SkinCare from "@/assets/images/web/images/skinCare.png";
import Nuts from "@/assets/images/web/images/nuts.png";
import ButtonIcon from "@/assets/images/web/icons/buttonRightArrow.svg";
import LandingButton from "../common/LandingButton";

function OurLatestWorks({text}) {
  return (
    <div className=" mt-[75px] md:mt-[130px] px-[18px] md:px-[100px]">
      <div className="flex justify-center md:justify-start  md:items-start">

      <p className="text-white text-[30px]  md:text-[48px]">
        Our <br className=" hidden md:block" />
        Latest Work
      </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-[35px] mt-[25px] md:mt-[72px]">

  <div className="flex flex-col gap-[40px]">
    <div>
      <img src={MomToBe} alt="Mom To Be" />
    </div>
    <div>
      <p className="text-white text-[20px]">1. Revamping Popees</p>
    </div>
  </div>


  <div className="hidden md:flex flex-col gap-[40px]">
    <div>
      <img src={Pharmacy} alt="Pharmacy" />
    </div>
    <div>
      <p className="text-white text-[20px]">2. Vamping up Truthcare Pharmacy.</p>
    </div>
  </div>
  <div className="hidden md:flex flex-col gap-[40px]">
    <div>
      <img src={SkinCare} alt="Skin Care" />
    </div>
    <div>
      <p className="text-white text-[20px]">3. Making gifting special with Keva Box</p>
    </div>
  </div>
  <div className="hidden md:flex flex-col gap-[40px]">
    <div>
      <img src={Nuts} alt="Nuts" />
    </div>
    <div>
      <p className="text-white text-[20px]">
        4. Serving the goodness of nuts with Wild Tree.
      </p>
    </div>
  </div>
</div>

<div className=" mt-[66px] md:mt-[111px] flex flex-col md:flex-row gap-[30px] justify-between w-full">
        <div className="md:w-9/12">
          <p className=" text-[16px] md:ext-[20px] text-white">
          {text}
          </p>
        </div>
        <div className="md:w-3/12 flex justify-start md:justify-end">
        {/* <LandingButton text={'View AllL'} /> */}
          <button className="bg-[#7744D5]  h-[66px] w-[179px] flex justify-center items-center gap-[10px] text-white rounded-[10px]">
            <p className="text-[18px]"> View All</p>
            <img src={ButtonIcon} alt="" />
          </button>
        </div>
      </div>

      
    </div>
  );
}

export default OurLatestWorks;
