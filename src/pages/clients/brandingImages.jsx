import React from "react";
import img5 from "../../assets/images/marketing/Logos.jpeg";
import Br1 from "../../assets/images/marketing/logo1.jpg";
import Br2 from "../../assets/images/marketing/logo2.jpg";
import Br3 from "../../assets/images/marketing/logo3.jpg";
import Br4 from "../../assets/images/marketing/logo4.jpg";
import Br5 from "../../assets/images/marketing/logo5.jpg";
import Br6 from "../../assets/images/marketing/logo6.jpg";
import Br7 from "../../assets/images/marketing/logo7.jpg";
import Br8 from "../../assets/images/marketing/logo8.jpg";
import Br9 from "../../assets/images/marketing/logo9.jpg";
import Br10 from "../../assets/images/marketing/logo10.jpg";
import Br11 from "../../assets/images/marketing/logo11.jpg";
import Br12 from "../../assets/images/marketing/logo12.jpg";
import Br13 from "../../assets/images/marketing/logo13.jpg";
function BrandingImages() {
  return (
    <div className="bg-white  ">
      <div className="hidden lg:flex p-[80px] justify-center">
        <img src={img5} alt="" />
      </div>
      <div className="flex lg:hidden py-[38px]  flex-col gap-[30px] w-full">
        <img src={Br1} alt="Brand 1" />
        <img src={Br2} alt="Brand 2" />
        <img src={Br3} alt="Brand 3" />
        <img src={Br4} alt="Brand 4" />
        <img src={Br5} alt="Brand 5" />
        <img src={Br6} alt="Brand 6" />
        <img src={Br7} alt="Brand 7" />
        <img src={Br8} alt="Brand 8" />
        <img src={Br9} alt="Brand 9" />
        <img src={Br10} alt="Brand 10" />
        <img src={Br11} alt="Brand 11" />
        <img src={Br12} alt="Brand 12" />
        <img src={Br13} alt="Brand 13" />
      
      </div>
    </div>
  );
}

export default BrandingImages;
