import React, { useState } from "react";
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
function BrandPartnerSection({ barandLogos, text, brandLogosSmall }) {
  const [showAll, setShowAll] = useState(false);
  const toggleView = () => {
    setShowAll(!showAll);
  };
  return (
    <div className="mt-[57px] md:mt-[147px] flex flex-col-reverse lg:flex-col px-[18px]  md:px-[100px]">
      <div className="flex flex-col   lg:gap-[50px] lg:border-t md:rounded-l-[46px] lg:rounded-r-[46px] rounded-b-none border-b-0 lg:border-l lg:border-r md:border-white border-opacity-50  md:pt-[40px]  md:pb-[100px] md:mb-0">
        <div className="  md:px-[35px]">
          <div className="overflow-hidden lg:hidden">
            <div className="overflow-hidden h-[220px] relative">
              <div className="flex flex-wrap  animate-scroll ">
                {[...brandLogosSmall, ...brandLogosSmall]?.map(
                  (logoSmall, index) => (
                    <div
                      key={index}
                      className="flex-shrink-0 w-[300px] h-[100px]"
                    >
                      <img
                        src={logoSmall.image}
                        alt={`Brand logo ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="md:px-[35px]">
          <div className="hidden lg:flex lg:flex-col  md:items-center md:gap-[40px]">
            {barandLogos
              .slice(0, showAll ? barandLogos.length : 2)
              .map((logos, index) => (
                <div key={index}>
                  <img src={logos.image} alt="Brand Logo" />
                </div>
              ))}
          </div>
        </div>
      </div>
      <div className="w-full bg-[#151515] h-full py-[10px] lg:py-[25px] flex justify-center items-center mb-[17px] md:mb-0 rounded-[10px] lg:rounded-b-[46px]  lg:mt-[-50px]">
        <p className="text-white text-center flex justify-center text-[13px] lg:text-[20px] ">
          {text}
          <span
            onClick={toggleView}
            className="text-[#7744D5] hidden lg:block px-[3px] cursor-pointer"
          >
            {showAll ? "View Less" : "View All"}
          </span>
        </p>
      </div>
    </div>
  );
}

export default BrandPartnerSection;
