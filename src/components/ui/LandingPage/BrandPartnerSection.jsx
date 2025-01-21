import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper/modules";
SwiperCore.use([Navigation, Pagination]);
function BrandPartnerSection({ barandLogos, text, brandLogosSmall }) {
  const [showAll, setShowAll] = useState(false);
  const toggleView = () => {
    setShowAll(!showAll);
  };
  const groupedLogos = [];
  for (let i = 0; i < brandLogosSmall.length; i += 2) {
    groupedLogos.push(brandLogosSmall.slice(i, i + 2));
  }
  const half = Math.ceil(brandLogosSmall.length / 2);
  const firstHalf = brandLogosSmall.slice(0, half);
  const secondHalf = brandLogosSmall.slice(half);
  return (
    <div className="mt-[57px] md:mt-[147px] flex flex-col-reverse lg:flex-col px-[18px]  md:px-[100px] poppins-regular">
      <div className="flex flex-col    lg:border-t md:rounded-l-[46px] lg:rounded-r-[46px] rounded-b-none border-b-0 lg:border-l lg:border-r md:border-white border-opacity-50  md:pt-[40px]  md:pb-[100px] md:mb-0">
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
              {firstHalf.map((logoSmall, index) => (
                <SwiperSlide  className="h-fit" key={index}>
                  {/* Display first half in the first div */}
                  <div className=" w-fit ">
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
        <div className="">
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
