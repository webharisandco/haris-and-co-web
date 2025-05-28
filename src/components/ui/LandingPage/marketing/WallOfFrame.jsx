import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";

import award1 from "@/assets/images/DigitalMarketing/startup award.png";
import award3 from "@/assets/images/DigitalMarketing/brand storyz.png";
import award2 from "@/assets/images/DigitalMarketing/pepper award.png";
import b from "@/assets/images/DigitalMarketing/b.png";
import amna from "@/assets/images/DigitalMarketing/amna.png";

const awards = [
  {
    img: award1,
    text: "afaqs! Startup Brands Award",
    sub: "- Best Use of Video on Social Media",
  },
  {
    img: award2,
    text: "Pepper Awards",
    sub: "- Best Single Online Video",
  },
  {
    img: award3,
    text: "afaqs! Brand Storyz Award",
    sub: "- Best Lead Generation Campaign",
  },
  {
    img: award1,
    text: "afaqs! Startup Brands Award",
    sub: "- Best Branded Content",
  },
  {
    img: b,
    text: "afaqs! Startup Brands Award",
    sub: "- Best Social Media Campaign",
  },
  {
    img: award3,
    text: "afaqs! Startup Brands Award",
    sub: "- Best Moment Marketing",
  },
];

export default function WallOfFame() {
  return (
    <div className="pt-16 font-poppins bg-black">
      <div className="px-[20px] lg:px-[100px] mx-auto lg:flex gap-8">
        {/* Left Column */}
        <div className="lg:w-2/3 mt-10 lg:mt-0">
          <h3 className="text-white text-[35px] lg:text-[40px] font-bold pb-3 font-[Abrobold] text-center lg:text-left">
            The Wall of Fame
          </h3>
          <p className="text-[#C0C0C0] text-[16px] text-center lg:text-left">
            Our{" "}
            <Link to="/awards" className="text-[#7744D5]">
              awards
            </Link>{" "}
            and recognitions
          </p>

          <div className="pt-20 ">
            <Swiper
            className="min-h-[200px] md:min-h-[350px]"
              spaceBetween={30}
              centeredSlides={true}
              slidesPerView={3}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              effect="coverflow"
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 1.5,
                slideShadows: false,
              }}
              loop={true}
              modules={[Autoplay, EffectCoverflow]}
              breakpoints={{
                0: { slidesPerView: 3 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              onSlideChange={(swiper) => {
                // You can track active slide index here if needed
              }}
            >
              {awards.map((item, idx) => (
                <SwiperSlide key={idx}>
                  {({ isActive }) => (
                    <div
                      className={`flex flex-col items-center transition-transform duration-300 ${
                        isActive ? "scale-110" : "scale-90 opacity-70"
                      }`}
                    >
                      <img
                        src={item.img}
                        alt="Award"
                        className="w-full transition-transform duration-300"
                      />
                      {isActive && (
                        <p className="text-white text-sm text-center mt-2 w-[100%]">
                          {item.text}{" "}
                          <span className="hidden sm:inline">{item.sub}</span>
                        </p>
                      )}
                    </div>
                  )}
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:w-1/3 hidden lg:flex items-center justify-center">
          <img src={amna} alt="Award" className="w-full max-w-sm" />
        </div>
      </div>
    </div>
  );
}