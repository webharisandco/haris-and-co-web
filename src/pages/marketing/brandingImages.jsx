import React from "react";
import img5 from "../../assets/images/marketing/img5.png";
import Br1 from "../../assets/images/marketing/br1.svg";
import Br2 from "../../assets/images/marketing/br2.svg";
import Br3 from "../../assets/images/marketing/br3.svg";
import Br4 from "../../assets/images/marketing/br4.svg";
import Br5 from "../../assets/images/marketing/br5.svg";
import Br6 from "../../assets/images/marketing/br6.svg";
import Br7 from "../../assets/images/marketing/br7.svg";
import Br8 from "../../assets/images/marketing/br8.svg";

function BrandingImages() {
  return (
    <div className="bg-white px-[13px] lg:px-0 lg:p-[80px]">
      <div className="hidden lg:flex">
        <img src={img5} alt="" />
      </div>
      <div className="flex lg:hidden py-[38px] flex-col gap-[30px] w-full">
        <img src={Br1} alt="Brand 1" />
        <img src={Br2} alt="Brand 2" />
        <img src={Br3} alt="Brand 3" />
        <img src={Br4} alt="Brand 4" />
        <img src={Br5} alt="Brand 5" />
        <img src={Br6} alt="Brand 6" />
        <img src={Br7} alt="Brand 6" />
        <img src={Br8} alt="Brand 6" />
      </div>
    </div>
  );
}

export default BrandingImages;
