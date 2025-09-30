import React from "react";
import SibaImg from "@/assets/images/aboutPage/team/siba.png";
import RaginImg from "@/assets/images/aboutPage/team/Ragin_copy.png";
import MuhammedImg from "@/assets/images/aboutPage/team/Mohammed.png";
import AzarImg from "@/assets/images/aboutPage/team/Azar.png";
import vishnuImg from "@/assets/images/aboutPage/team/vishnu_copy.png";
import UmairImg from "@/assets/images/aboutPage/team/Umair.png";
import Yogesh from "@/assets/images/aboutPage/team/Yogi.png"
import { Swiper, SwiperSlide } from "swiper/react";
import Amna from "@/assets/images/aboutPage/team/Amna.png"
import "swiper/css";
import "swiper/css/pagination"; // Import pagination styles for Swiper
import "swiper/css/navigation";
import SwiperCore from "swiper";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

SwiperCore.use([Navigation, Pagination]);

export default function DepartmentHead() {
  const teamMembers = [
    { name: "Aswathi KP", role: "Human Resource" },
    { name: "Amna Iqbal", role: "Marketing", img:Amna },
    {
      name: "Mohamed Azaruddin",
      role: "Brand Solutions",
      img: AzarImg,
    },
    { name: "Faheemudheen K", role: "Design" },
    { name: "Navneeth B Chandran", role: "Brand Consultants" },
    { name: "Shazmina Abbas", role: "Accounts" },
  ];
  const slideCount = teamMembers.length;

  const bp = {
    640: { slidesPerView: Math.min(2, slideCount) },
    768: { slidesPerView: Math.min(3, slideCount) },
    1024: { slidesPerView: Math.min(4, slideCount), autoplay: false },
    1240: { slidesPerView: Math.min(5, slideCount), autoplay: false },
  };

  const businessHeads = [
    { name: "Ragin Raj", role: "SEO", img: RaginImg },
    { name: "Umair Kallingal", role: "Social Media Marketing", img: UmairImg },
    {
      name: "Mohammed Zainudheen",
      role: "Performance Marketing",
      img: MuhammedImg,
    },
    { name: "Yogesh", role: "Influencer Marketing", img:Yogesh },
    { name: "Vishnu KP", role: "Production", img: vishnuImg },
    { name: "Siba Fazal", role: "Branding & Creative", img: SibaImg },
  ];

  const RegionalHead = [
    { name: "Muhammed Shabeer", role: "Regional Head - UAE" },
  ];

  return (
    <div className="bg-white px-[16px] md:px-[80px] py-[50px] lg:py-[100px] flex flex-col gap-[50px] lg:items-center lg:text-center">
      <div className="">
        <p className="text-[24px] text-40px font-[boldtext] mb-3">
          Meet the experts.
        </p>
        <h4 className="text-[20px] md:text-[18px] 3xl:text-[24px]  ">
          Our Business Heads
        </h4>
      </div>

      {/* Business Heads */}
      <div className="w-full">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation={false}
          draggable
          pagination={{ clickable: true }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={false}
          watchOverflow={true}
          centerInsufficientSlides={true}
          breakpoints={{
            640: { slidesPerView: Math.min(2, businessHeads.length) },
            768: { slidesPerView: Math.min(3, businessHeads.length) },
            1024: {
              slidesPerView: Math.min(4, businessHeads.length),
              autoplay: false,
            },
            1240: {
              slidesPerView: Math.min(5, businessHeads.length),
              autoplay: false,
            },
          }}
          className="swiper-pagination-black"
        >
          {businessHeads.map((member, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-start w-fit">
                <div className="bg-[#F5F5F5] w-[355px] h-[355px] lg:h-[350px] lg:w-[200px] flex items-center justify-center">
                  {member.img ? (
                    <img
                      className="pt-8 w-full h-full object-cover"
                      src={member.img}
                      alt={member.name}
                    />
                  ) : (
                    <p className="text-gray-400">No Image</p>
                  )}
                </div>
                <p className="text-[18px] 3xl:text-[24px] mt-1">{member.name}</p>
                <p className="text-[16px] 3xl:text-[20px] text-[#040404BA] font-[thin]">
                  {member.role}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Department Heads */}
      <div className="">
        {/* <p className="text-[24px] text-40px font-[boldtext] mb-3">
          Meet the experts.
        </p> */}
        <h4 className="text-[20px] md:text-[18px] 3xl:text-[24px]  mb-3">
          Our Department Heads
        </h4>
      </div>

      <div className="w-full">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={Math.min(1, slideCount)}
          navigation={false}
          draggable
          pagination={{ clickable: true }}
          autoplay={
            slideCount > 1
              ? { delay: 2500, disableOnInteraction: false }
              : false
          }
          loop={false}
          watchOverflow={true}
          centerInsufficientSlides={true}
          breakpoints={bp}
          onSwiper={(sw) => setTimeout(() => sw.update(), 0)}
          className="swiper-pagination-black"
        >
          {teamMembers.map((member, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-start w-fit">
                <div className="bg-[#F5F5F5] w-[355px] h-[355px] lg:h-[350px] lg:w-[200px] flex items-center justify-center">
                  {member.img ? (
                    <img
                      className="pt-8 w-full h-full object-cover"
                      src={member.img}
                      alt={member.name}
                    />
                  ) : (
                    <p className="text-gray-400">No Image</p>
                  )}
                </div>
                <p className="text-[18px] 3xl:text-[24px] mt-1">{member.name}</p>
                <p className="text-[16px] 3xl:text-[20px] text-[#040404BA] font-[thin]">
                  {member.role}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Regional Heads */}
      <div className="">

        <h4 className="text-[20px] md:text-[18px] 3xl:text-[24px]  mb-3">
         Our Regional Heads

        </h4>
      </div>

      <div className="w-full flex items-center justify-center">
        {RegionalHead.map((member, index) => (
          <div key={index} className="flex flex-col items-start w-fit">
            <div className="bg-[#F5F5F5] w-[355px] h-[355px] lg:h-[350px] lg:w-[200px] flex items-center justify-center">
              {member.img ? (
                <img
                  className="pt-8 w-full h-full object-cover"
                  src={member.img}
                  alt={member.name}
                />
              ) : (
                <p className="text-gray-400">No Image</p>
              )}
            </div>
            <p className="text-[18px] 3xl:text-[24px] mt-1">{member.name}</p>
            <p className="text-[16px] 3xl:text-[20px] text-[#040404BA] font-[thin]">
              {member.role}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
