import React from "react";
import MomToBe from "@/assets/images/web/images/momToBe.png";
import Pharmacy from "@/assets/images/web/images/pharmacy.png";
import SkinCare from "@/assets/images/web/images/skinCare.png";
import Nuts from "@/assets/images/web/images/nuts.png";
import ButtonIcon from "@/assets/images/web/icons/buttonRightArrow.svg";

function OurLatestWorks() {
  return (
    <div className="mt-[130px]">
      <p className="text-white text-[48px]">
        Our <br />
        Latest Work
      </p>

      <div className="grid grid-cols-4 gap-[35px] mt-[72px]">
        <div className="flex flex-col gap-[40px]">
          <div>
            <img src={MomToBe} alt="" />
          </div>
          <div>
            <p className="text-white text-[20px]">1. Revamping Popees</p>
          </div>
        </div>
        <div className="flex flex-col gap-[40px]">
          <div>
            <img src={Pharmacy} alt="" />
          </div>
          <div>
            <p className="text-white text-[20px]">
              2. Vamping up Truthcare Pharmacy.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-[40px]">
          <div>
            <img src={SkinCare} alt="" />
          </div>
          <div>
            <p className="text-white text-[20px]">
              3. Making gifting special with Keva Box
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-[40px]">
          <div>
            <img src={Nuts} alt="" />
          </div>
          <div>
            <p className="text-white text-[20px]">
              4. Serving the goodness of nuts with Wild Tree.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-[111px] flex gap-[30px] justify-between w-full">
        <div className="w-9/12">
          <p className="text-[20px] text-white">
            These are a few of the many websites we have developed thus far.
            This portfolio includes projects ranging from dynamic e-commerce
            platforms to engaging corporate websites that adhere to the
            respective brand guidelines and drive results in various industries.
          </p>
        </div>
        <div className="w-3/12 flex justify-end">
          <button className="bg-[#7744D5]  h-[66px] w-[179px] flex justify-center items-center gap-[10px] text-white rounded-[10px]">
            <p> View All</p>
            <img src={ButtonIcon} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default OurLatestWorks;
