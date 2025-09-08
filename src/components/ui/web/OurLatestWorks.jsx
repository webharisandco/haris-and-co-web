import React from "react";
import MomToBe from "@/assets/images/web/images/momToBe.png";
import Pharmacy from "@/assets/images/web/images/pharmacy.png";
import SkinCare from "@/assets/images/web/images/skinCare.png";
import Nuts from "@/assets/images/web/images/nuts.png";
import ButtonIcon from "@/assets/images/web/icons/buttonRightArrow.svg";
import LandingButton from "../common/LandingButton";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination"; // Import pagination styles for Swiper
import 'swiper/css/navigation';
import SwiperCore from "swiper";
import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper/modules';


// install Swiper modules
SwiperCore.use([Navigation, Pagination]);


function OurLatestWorks({ text }) {
  return (
    <div className="mt-[75px] md:mt-[130px] px-[18px] md:px-[100px] font-[AbroBold]">
      <div className="flex justify-center md:justify-start  md:items-start">
        <p className="text-white text-[30px] md:text-[36px]">
          Our <br className="hidden md:block" />
          Latest Work
        </p>
      </div>

      <div className="mt-[25px] md:mt-[72px]">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation={false}
          pagination={true}
          autoplay={{ delay: 2500 }}
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          className="swiper-pagination-white" // Add custom class

        >
          <SwiperSlide>
            <div className="flex flex-col gap-[40px]">
              <div>
                <img src={MomToBe} alt="Mom To Be" />
              </div>
              <div>
                <p className="text-white text-[20px]">1. Revamping Popees</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex flex-col gap-[40px]">
              <div>
                <img src={Pharmacy} alt="Pharmacy" />
              </div>
              <div>
                <p className="text-white text-[20px]">2. Vamping up Truthcare Pharmacy.</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex flex-col gap-[40px]">
              <div>
                <img src={SkinCare} alt="Skin Care" />
              </div>
              <div>
                <p className="text-white text-[20px]">3. Making gifting special with Keva Box</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex flex-col gap-[40px]">
              <div>
                <img src={Nuts} alt="Nuts" />
              </div>
              <div>
                <p className="text-white text-[20px]">
                  4. Serving the goodness of nuts with Wild Tree.
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="mt-[25px] md:mt-[111px] flex flex-col md:flex-row gap-[30px] justify-between w-full">
        <div className="w-full">
          <p className="text-[16px] md:text-[15px] lg:text-[14px]  2xl:text-[17px] text-white poppins-light">
            {text}
          </p>
        </div>
        {/* <div className="md:w-3/12 flex justify-start md:justify-end">
          <button className="bg-[#7744D5] h-[66px] w-[179px] flex justify-center items-center gap-[10px] text-white rounded-[10px]">
            <p className="text-[18px]"> View All</p>
            <img src={ButtonIcon} alt="" />
          </button>
        </div> */}
      </div>
    </div>
  );
}

export default OurLatestWorks;
