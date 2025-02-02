import React from "react";
import img from "../../assets/images/branding/img1.png";
import img1 from "../../assets/images/branding/img3.png";
import img2 from "../../assets/images/branding/img4.png";
import img3 from "../../assets/images/branding/img5.png";
import img4 from "../../assets/images/branding/img6.png";

const BrandImages = () => {
  return (
    <div className="px-[16px] lg:px-[80px] mb-[83px]">
      <div className="flex w-full justify-between gap-[24px]">
        <div className="w-fit">
          <img className="w-fit h-fit" src={img} alt="" />
        </div>
        <div className="w-fit">
          <img className="w-fit h-fit" src={img1} alt="" />
        </div>
      </div>
      <div className="flex mt-[24px] w-full flex-col-3 gap-[24px]">
        <div className="w-fit">
          <img className="w-fit h-fit" src={img2} alt="" />
        </div>
        <div className="w-fit">
          <img className="w-fit h-fit" src={img3} alt="" />
        </div>
        <div className="w-fit">
          <img className="w-fit h-fit" src={img4} alt="" />
        </div>
      </div>
    </div>
  );
};

export default BrandImages;
