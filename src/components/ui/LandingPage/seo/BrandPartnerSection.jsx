import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Navigation, Pagination,  Autoplay } from "swiper/modules";
SwiperCore.use([Navigation, Pagination]);

function BrandPartnerSection({ barandLogos, text, brandLogosSmall }) {
  const [showAll, setShowAll] = useState(false);
  const toggleView = () => setShowAll(!showAll);

  const half = Math.ceil(brandLogosSmall?.length / 2);
  const firstHalf = brandLogosSmall?.slice(0, half);
  const secondHalf = brandLogosSmall?.slice(half);

  // Initial and full logo sets
  const initialVisibleLogos = barandLogos.filter((logo) => logo.id === 1);
  const extraLogos = barandLogos.filter((logo) => logo.id !== 1);

  return (
    <div className="mt-[57px] bg-black md:mt-[90px] flex flex-col-reverse lg:flex-col px-[18px] md:px-[80px] ">
      {/* Main logo section */}
      <div className="flex flex-col lg:border-t md:rounded-l-[24px] lg:rounded-r-[24px] rounded-b-none border-b-0 lg:border-l lg:border-r md:border-white border-opacity-50 md:pt-[10px] md:pb-[50px] md:mb-0">
        
        {/* Mobile swiper view */}
        <div className="md:px-[35px]">
          <div className="overflow-hidden lg:hidden h-fit">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              autoplay={{ delay: 2500 }}
              loop={true}
              className="swiper-pagination-white max-h-[200px]"
            >
              {firstHalf?.map((logoSmall, index) => (
                <SwiperSlide className="h-fit" key={index}>
                  <div className="w-fit">
                    <img
                      src={logoSmall.image}
                      alt={`Brand logo ${index + 1}`}
                      className="w-fit object-contain"
                    />
                  </div>
                  {secondHalf[index] && (
                    <div className="h-auto w-fit">
                      <img
                        src={secondHalf[index]?.image}
                        alt={`Brand logo ${index + 1 + half}`}
                        className="w-fit object-contain"
                      />
                    </div>
                  )}
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* Desktop view with transition */}
        <div className="hidden lg:flex lg:flex-col md:items-center">
          {/* First image always visible */}
          <div className="grid gap-4">
            {initialVisibleLogos.map((logo, index) => (
              <div key={index} className="transition-transform duration-500 ease-in-out">
                <img 
                  src={logo.image} 
                  alt={`Brand Logo ${index + 1}`} 
                  className="rounded-[46px]"
                />
              </div>
            ))}
          </div>

          {/* Expandable section with transition */}
          <div
            className={`overflow-hidden transition-all duration-700 ease-in-out ${
              showAll ? 'max-h-[1000px] opacity-100 mt-4' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="grid gap-4">
              {extraLogos.map((logo, index) => (
                <div key={index} className="transition-all duration-500 ease-in-out">
                  <img
                    src={logo.image}
                    alt={`Brand Logo ${index + 2}`}
                    className="rounded-[46px]"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* View All / View Less toggle */}
      {barandLogos.length > 1 && (
        <div className="w-full bg-[#151515] h-full py-[10px] lg:py-[25px] flex justify-center items-center mb-[17px] md:mb-0 rounded-[10px] lg:rounded-b-[46px] lg:mt-[-50px]">
          <p className="text-white text-center flex justify-center text-[13px] lg:text-[17px]">
            {text}
            <span
              onClick={toggleView}
              className="text-[#7744D5] hidden lg:block px-[3px] cursor-pointer hover:text-opacity-80 transition-colors duration-300"
            >
              {showAll ? "View Less" : "View All"}
            </span>
          </p>
        </div>
      )}
    </div>
  );
}

export default BrandPartnerSection;