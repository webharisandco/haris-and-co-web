import React from "react";
import awardImage from "../../../../src/assets/images/awards/awardimage1.png";

const AwardsBanner = () => {
  return (
    <div className="w-screen lg:h-screen bg-black flex justify-center items-center p-4 box-border">
      <img
        src={awardImage}
        alt="Award"
        className="w-full h-auto max-h-[80vh] object-contain 
                   md:max-h-[70vh] sm:max-h-[60vh] xs:max-h-[50vh]"
      />
    </div>
  );
};

export default AwardsBanner;
