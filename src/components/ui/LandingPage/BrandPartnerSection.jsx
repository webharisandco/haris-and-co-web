import React from "react";
import popees from "@/assets/images/brandLogos/popees.svg";
import algate from "@/assets/images/brandLogos/algate.svg";
import amana from "@/assets/images/brandLogos/amana.svg";
import blueTyga from "@/assets/images/brandLogos/blueTyga.svg";
import disha from "@/assets/images/brandLogos/disha.svg";
import katara from "@/assets/images/brandLogos/katara.svg";
import laddyLoafella from "@/assets/images/brandLogos/laddyLoafella.svg";
import mavinza from "@/assets/images/brandLogos/mavinza.svg";
import mrAlfred from "@/assets/images/brandLogos/mr.alfred.svg";
import natya from "@/assets/images/brandLogos/natya.svg";
import tct from "@/assets/images/brandLogos/tct.svg";
import teens from "@/assets/images/brandLogos/teens.svg";
import westbrook from "@/assets/images/brandLogos/westbrook.svg";
import wildtree from "@/assets/images/brandLogos/wildtree.svg";
import BrandPartnerSmall1 from "@/assets/images/web/images/brandPartnerSmall.png";
import BrandPartnerSmall2 from "@/assets/images/web/images/brandPartnerSmall2.png";
function BrandPartnerSection() {
  return (
    <div className="mt-[57px] md:mt-[147px] flex flex-col-reverse md:flex-col px-[18px]  md:px-[100px]">
      <div className="flex flex-col   md:gap-[50px] md:border-t md:rounded-l-[46px] md:rounded-r-[46px] rounded-b-none border-b-0 md:border-l md:border-r md:border-white border-opacity-50  md:pt-[40px]  md:pb-[100px] md:mb-0">
        <div className="  md:px-[35px]">
          <div className=" hidden md:flex md:justify-between md:items-center md:gap-[40px]">
            <img className="w-[120px] h-full" src={popees} alt="Popees logo" />
            <img className="w-[120px] h-full" src={katara} alt="Katara logo" />
            <img className="w-[120px] h-full" src={amana} alt="Amana logo" />
            <img
              className="w-[120px] h-full"
              src={blueTyga}
              alt="Blue Tyga logo"
            />
            <img className="w-[120px] h-full" src={algate} alt="Algate logo" />
            <img
              className="w-[120px] h-full"
              src={laddyLoafella}
              alt="Laddy Loafella logo"
            />
            <img className="w-[120px] h-full" src={tct} alt="TCT logo" />
          </div>
          <div className="block md:hidden">
            <img src={BrandPartnerSmall1} alt="" />
          </div>
        </div>
        <div className="  md:px-[35px]">
          <div className=" hidden md:flex md:justify-between md:items-center md:gap-[40px]">
            <img
              className="w-[120px] h-full"
              src={westbrook}
              alt="Westbrook logo"
            />
            <img className="w-[120px] h-full" src={disha} alt="Disha logo" />
            <img className="w-[120px] h-full" src={natya} alt="Natya logo" />
            <img
              className="w-[120px] h-full"
              src={mrAlfred}
              alt="Mr. Alfred logo"
            />
            <img
              className="w-[120px] h-full"
              src={wildtree}
              alt="Wildtree logo"
            />
            <img className="w-[120px] h-full" src={teens} alt="Teens logo" />
            <img
              className="w-[120px] h-full"
              src={mavinza}
              alt="Mavinza logo"
            />
          </div>
          <div className="block md:hidden">
            <img src={BrandPartnerSmall2} alt="" />
          </div>
        </div>
      </div>
      <div className="w-full bg-[#151515] h-full py-[10px] md:py-[25px] flex justify-center items-center mb-[17px] md:mb-0 rounded-[10px] md:rounded-b-[46px]  md:mt-[-50px]">
        <p className="text-white text-center flex justify-center text-[13px] md:text-[20px] ">
          Brands we’ve powered with our <br className="block md:hidden" /> web
          solutions.
          <span className="text-[#7744D5] hidden md:block px-[3px]">
            View All
          </span>
        </p>
      </div>
    </div>
  );
}

export default BrandPartnerSection;
