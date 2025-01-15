import React from "react";
import MomToBe from "../../../assets/images/web/images/momToBe.png";
import Pharmacy from "../../../assets/images/web/images/pharmacy.png";
import SkinCare from "../../../assets/images/web/images/skinCare.png";
import Nuts from "../../../assets/images/web/images/nuts.png";

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
            <p className="text-white text-[20px]">2. Vamping up Truthcare     Pharmacy.</p>
          </div>
        </div>
        <div className="flex flex-col gap-[40px]">
          <div>
            <img src={SkinCare} alt="" />
          </div>
          <div>
            <p className="text-white text-[20px]">3. Making gifting special with Keva Box</p>
          </div>
        </div>
        <div className="flex flex-col gap-[40px]">
          <div>
            <img src={Nuts} alt="" />
          </div>
          <div>
            <p className="text-white text-[20px]">4. Serving the goodness of nuts with Wild Tree.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurLatestWorks;
