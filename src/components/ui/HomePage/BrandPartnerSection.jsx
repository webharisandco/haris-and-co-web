import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MoveRight } from 'lucide-react';
import BrandPartnerSecond from "../../../assets/images/brandPartnerSecond.png";
import Br1 from "../../../assets/images/marketing/logo1.jpg";
import Br2 from "../../../assets/images/marketing/logo2.jpg";
import Br3 from "../../../assets/images/marketing/logo3.jpg";
import Br4 from "../../../assets/images/marketing/logo4.jpg";
import Br5 from "../../../assets/images/marketing/logo5.jpg";
import Br6 from "../../../assets/images/marketing/logo6.jpg";
import Br7 from "../../../assets/images/marketing/logo7.jpg";
import Br8 from "../../../assets/images/marketing/logo8.jpg";
import Br9 from "../../../assets/images/marketing/logo9.jpg";
import Br10 from "../../../assets/images/marketing/logo10.jpg";
import Br11 from "../../../assets/images/marketing/logo11.jpg";
import Br12 from "../../../assets/images/marketing/logo12.jpg";
import Br13 from "../../../assets/images/marketing/logo13.jpg";
import brandpartnerFirst from"../../../assets/images/brandPartnerFirst.png";

const BrandPartnerSection = () => {

  const [clicked, setClicked] = useState(false)

  return (
    <div className="bg-black py-[64px] px-[16px] md:px-[40px] flex flex-col gap-[50px] overflow-hidden items-center">

      {/* Desktop image */}
      <img
        src={clicked ? brandpartnerFirst : BrandPartnerSecond}
        alt="A collection of partner and client logos"
        className="hidden lg:flex w-full h-auto object-contain"
      />

    {/* Mobile / Tablet button */}
      <div className="lg:flex hidden justify-center">
  <button 
    onClick={() => setClicked(!clicked)} 
    className="group flex items-center gap-[11px] text-white/55 border-b border-white/55 pb-0.5 hover:text-white hover:border-white transition-all duration-300"
  >
    <span className="text-[15px] md:text-[18px]">
      {clicked ? "View Less " : "View More"}
    </span>
    <MoveRight 
      size={30} 
      className="text-white/55 transition-all duration-300 group-hover:text-white" 
      strokeWidth={1.8} 
    />
  </button>
</div>


      {/* Mobile / Tablet logos */}
      <div className="flex flex-col gap-[30px] w-fulˀl lg:hidden py-[38px]">
        {[Br1, Br2, Br3, Br4, Br6, Br7, Br8, Br9, Br13 , Br10, Br11, Br12, Br5].map((logo, index) => (
          <img key={index} src={logo} alt={`Brand ${index + 1}`} className="w-full h-auto object-contain" />
        ))}
      </div>

      

    </div>
  );
}

export default BrandPartnerSection;
