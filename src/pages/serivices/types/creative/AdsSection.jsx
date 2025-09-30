import React from "react";

function AdsSection({ currentService }) {
  // Log currentService at the top
  console.log("Current Service Data:", currentService);

  if (!currentService?.adsImages) return null;

  return (
    <div className="px-[16px] lg:px-[80px] flex justify-center">
      {/* Desktop Image */}
      <img
        className="object-contain"
        src={currentService.adsImages.desktop}
        alt={`${currentService.link} desktop`}
      />
      {/* Mobile Image */}
      {/* <img
        className="block lg:hidden w-full object-cover"
        src={currentService.adsImages.mobile}
        alt={`${currentService.link} mobile`}
      /> */}
    </div>
  );
}

export default AdsSection;
