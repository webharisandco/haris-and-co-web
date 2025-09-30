import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import f1 from "@/assets/images/DigitalMarketing/f1.png";
import f2 from "@/assets/images/DigitalMarketing/f2.webp";
import f3 from "@/assets/images/DigitalMarketing/f3.webp";
import f4 from "@/assets/images/DigitalMarketing/f4.webp";
import f5 from "@/assets/images/DigitalMarketing/Khaleej times1.webp";
import arrowhover from "@/assets/images/DigitalMarketing/arrow.svg";

const HeadlinesSection = () => {
  const headlinesImages = [f1, f2, f3, f4, f5]; // your imported images
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <section className="bg-white pt-[70px] pb-[40px]  px-4 sm:px-6 lg:px-8 font-[Abrobold]">
      <div className="text-center mb-6">
        <h3 className="text-[31px] md:text-[41px] font-bold font-abrobold mb-2 ">
          Making Headlines
        </h3>
        <p className="text-[16px]  sm:text-[14px] sm:leading-tight">
          To get featured in multiple news articles gives us immense joy
        </p>
      </div>

      <div className="relative w-[96%] mx-auto pt-6 ">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          centeredSlides={true}
          // slidesPerView={2.3}
          spaceBetween={0}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className="w-full"
            breakpoints={{
                0: { slidesPerView: 1.8 },
                768: { slidesPerView: 1.8 },
                1024: { slidesPerView: 2.4 },
              }}
        >
          {headlinesImages.map((imgSrc, index) => (
            <SwiperSlide
              key={index}
              className="!flex justify-center transition-all duration-500"
            >
              <div
                className={`relative group h-[250px] md:h-[500px] md:w-[533px]  overflow-hidden transition-transform duration-500 ease-in-out ${
                  index === activeIndex
                    ? " scale-100 z-20 rounded-[20px] shadow-xl"
                    : " scale-90 opacity-80 z-10 rounded-[20px]"
                }`}
              >
                {/* Image */}
                <img
                  src={imgSrc}
                  alt={`Featured ${index + 1}`}
                  className="w-full h-full object-cover rounded-[20px] transition-all duration-500"
                />

                {/* Always show overlay on active */}
                {index === activeIndex && (
                  <div className="absolute inset-0 bg-[#6d539c63] rounded-[20px] opacity-100 transition-opacity duration-300" />
                )}

                {/* Arrow on hover (only if active) */}
                {index === activeIndex && (
                  <img
                    src={arrowhover}
                    alt="Arrow"
                    className="absolute bottom-[10px] right-[14px] w-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Dots styling is handled by Swiper by default */}
      </div>
    </section>
  );
};

export default HeadlinesSection;
