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

function BrandPartnerSection() {
  return (
    <div className="mt-[147px]">

    <div className="flex flex-col  gap-[50px] border-t rounded-l-[46px] rounded-r-[46px] rounded-b-none border-b-0 border-l border-r border-white border-opacity-50  py-[40px]">
      <div className="flex justify-between items-center gap-[40px] px-[35px]">
        <img className="w-[120px] h-full" src={popees} alt="Popees logo" />
        <img className="w-[120px] h-full" src={katara} alt="Katara logo" />
        <img className="w-[120px] h-full" src={amana} alt="Amana logo" />
        <img className="w-[120px] h-full" src={blueTyga} alt="Blue Tyga logo" />
        <img className="w-[120px] h-full" src={algate} alt="Algate logo" />
        <img
          className="w-[120px] h-full"
          src={laddyLoafella}
          alt="Laddy Loafella logo"
        />
        <img className="w-[120px] h-full" src={tct} alt="TCT logo" />
      </div>
      <div className="flex justify-between items-center gap-[40px] px-[35px]">
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
        <img className="w-[120px] h-full" src={wildtree} alt="Wildtree logo" />
        <img className="w-[120px] h-full" src={teens} alt="Teens logo" />
        <img className="w-[120px] h-full" src={mavinza} alt="Mavinza logo" />
      </div>
    </div>
    <div className="w-full bg-[#151515] h-full py-[25px] flex justify-center items-center rounded-b-[46px] ">
        <p className="text-white text-[20px]">Brands we’ve powered with our web solutions. <span className="text-[#7744D5]">View All</span> </p>
      </div>
    </div>
  );
}

export default BrandPartnerSection;
