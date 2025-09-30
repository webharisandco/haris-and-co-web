import React from "react";
import AdarshImg from "@/assets/images/aboutPage/team/Adarsh.png";
import RaginImg from "@/assets/images/aboutPage/team/Ragin.png";
import HarisImg from "@/assets/images/aboutPage/team/Haris.png";
import SaheelImg from "@/assets/images/aboutPage/team/Saheel.png";
import AmnaImg from "@/assets/images/aboutPage/team/Amna.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination"; // Import pagination styles for Swiper
import "swiper/css/navigation";
import SwiperCore from "swiper";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// install Swiper modules
SwiperCore.use([Navigation, Pagination]);

export default function OurTeam() {
  const teamMembers = [
    
    {
      name: "Haris Aboobacker ",
      role: "Chief Executive Officer",
      img: RaginImg,
    },
    { name: "Adarsh MS", role: "Chief Growth Officer", img: AdarshImg },
    {
      name: "Mohamed Azaruddin",
      role: "Chief Operating Officer",
      img: HarisImg,
    },
    { name: "Ragin Raj", role: "Chief People Officer", img: SaheelImg },
    { name: "Nizwa Iqbal", role: "Chief Financial Officer", img: AmnaImg },
  ];

  const slideCount = teamMembers.length;
  return (
    <div className="bg-white py-[50px] px-[16px] lg:px-0 flex flex-col gap-[50px] lg:items-center lg:text-center">
      <div className="">
        <h4 className="text-[18px] 3xl:text-[24px]  mb-3">
          Our Team
        </h4>
        <p className="text-[28px] text-40px font-[boldtext] leading-none">
          Meet the brains behind our <br /> creativity.
        </p>
      </div>
      <div className="w-full relative">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation={false}
          pagination={true}
          autoplay={
            slideCount > 1
              ? { delay: 2500, disableOnInteraction: false }
              : false
          }
          loop={true}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
            1240: { slidesPerView: 6 },
          }}
          className="swiper-pagination-black "
        >
          {teamMembers.map((member, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center w-full">
                {/* <img
                  className="w-full max-w-[228px] md:max-w-[300px] h-[300px] object-cover 3xl:h-[400px]"
                  src={member.img}
                  alt={member.name}
                /> */}
                <p className="text-[18px] 3xl:text-[24px] mt-1 font-[Helvetica-Medium]">
                  {member.name}
                </p>
                <p className="text-[16px] text-[#040404BA] font-[thin]">
                  {member.role}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* <hr className="w-full border-black absolute bottom-[100px] lg:bottom-[56px] 3xl:bottom-16 block" /> */}
      </div>
    </div>
  );
}
