import React, { useState } from "react";
import SibaImg from "@/assets/images/aboutPage/team/siba.png";
import RaginImg from "@/assets/images/aboutPage/team/Ragin_copy.png";
import MuhammedImg from "@/assets/images/aboutPage/team/Mohammed.png";
import AzarImg from "@/assets/images/aboutPage/team/Azar.png";
import vishnuImg from "@/assets/images/aboutPage/team/vishnu_copy.png";
import UmairImg from "@/assets/images/aboutPage/team/Umair.png";
import Yogesh from "@/assets/images/aboutPage/team/Yogi.png";
import Amna from "@/assets/images/aboutPage/team/AMNAA.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SwiperCore from "swiper";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

SwiperCore.use([Navigation, Pagination]);

export default function DepartmentHead() {
  const [modalImg, setModalImg] = useState(null);

  const teamMembers = [
    { name: "Aswathi KP", role: "Human Resource" },
    { name: "Amna Iqbal", role: "Marketing", img: Amna},
    { name: "Mohamed Azaruddin", role: "Brand Solutions", img: AzarImg },
    { name: "Faheemudheen K", role: "Design" },
    { name: "Navneeth B Chandran", role: "Brand Consultants" },
    { name: "Shazmina Abbas", role: "Accounts" },
  ];

  const businessHeads = [
    { name: "Ragin Raj", role: "SEO", img: RaginImg },
    { name: "Umair Kallingal", role: "Social Media Marketing", img: UmairImg },
    { name: "Mohammed Zainudheen", role: "Performance Marketing", img: MuhammedImg },
    { name: "Yogesh", role: "Influencer Marketing", img: Yogesh },
    { name: "Vishnu KP", role: "Production", img: vishnuImg },
    { name: "Siba Fazal", role: "Branding & Creative", img: SibaImg },
  ];

  const RegionalHead = [
    { name: "Muhammed Shabeer", role: "Regional Head - UAE" },
  ];

  const Modal = ({ img, onClose }) => (
    <div
      className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <img
        src={img}
        alt="Full View"
        className="max-w-full max-h-full rounded-lg shadow-lg object-contain"
        onClick={(e) => e.stopPropagation()}
      />
      <button
        className="absolute top-8 right-8 text-white text-3xl font-bold bg-black bg-opacity-50 rounded-full px-4 py-2"
        onClick={onClose}
      >
        &times;
      </button>
    </div>
  );

  return (
    <div className="bg-white px-[16px] md:px-[80px] pt-[50px] pb-[24px] lg:pt-[80px] lg:pb-[32px] flex flex-col gap-[32px] items-center text-center">
      {modalImg && <Modal img={modalImg} onClose={() => setModalImg(null)} />}

      <div>
        <p className="text-[24px] text-40px font-[boldtext] mb-3">Meet the experts</p>
        <h4 className="text-[20px] md:text-[18px] 3xl:text-[24px]">Our Business Heads</h4>
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
            640: { slidesPerView: Math.min(2, businessHeads.length), spaceBetween: 20 },
            768: { slidesPerView: Math.min(2, businessHeads.length), spaceBetween: 30 },
            1024: { slidesPerView: Math.min(4, businessHeads.length), autoplay: false, spaceBetween: 40 },
            1240: { slidesPerView: Math.min(5, businessHeads.length), autoplay: false, spaceBetween: 50 },
          }}
          className="swiper-pagination-black"
        >
          {businessHeads.map((member, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-start w-fit">
                <div
                  className="bg-[#F5F5F5] w-[355px] h-[355px] lg:h-[350px] lg:w-[200px] flex items-center justify-center cursor-pointer"
                  onClick={() => member.img && setModalImg(member.img)}
                  title={member.img ? "View Fullscreen" : ""}
                >
                  {member.img ? (
                    <img
                      className="pt-8 w-full h-full object-contain lg:object-cover rounded-lg transition-transform duration-150 hover:scale-105"
                      src={member.img}
                      alt={member.name}
                    />
                  ) : (
                    <p className="text-gray-400">No Image</p>
                  )}
                </div>
                <p className="text-[18px] 3xl:text-[24px] mt-1">{member.name}</p>
                <p className="text-[16px] 3xl:text-[20px] text-[#040404BA] font-[thin]">{member.role}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Department Heads */}
      <div>
        <h4 className="text-[20px] md:text-[18px] 3xl:text-[24px] mb-3">Our Department Heads</h4>
      </div>
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
            640: { slidesPerView: Math.min(2, teamMembers.length), spaceBetween: 20 },
            768: { slidesPerView: Math.min(2, teamMembers.length), spaceBetween: 10 },
            1024: { slidesPerView: Math.min(4, teamMembers.length), autoplay: false, spaceBetween: 40 },
            1240: { slidesPerView: Math.min(5, teamMembers.length), autoplay: false, spaceBetween: 50 },
          }}
          className="swiper-pagination-black"
        >
          {teamMembers.map((member, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-start w-fit">
                <div
                  className="bg-[#F5F5F5] w-[355px] h-[355px] lg:h-[350px] lg:w-[200px] flex items-center justify-center cursor-pointer"
                  onClick={() => member.img && setModalImg(member.img)}
                  title={member.img ? "View Fullscreen" : ""}
                >
                  {member.img ? (
                    <img
                      className="pt-8 w-full h-full object-cover rounded-lg transition-transform duration-150 hover:scale-105"
                      src={member.img}
                      alt={member.name}
                    />
                  ) : (
                    <p className="text-gray-400">No Image</p>
                  )}
                </div>
                <p className="text-[18px] 3xl:text-[24px] mt-1">{member.name}</p>
                <p className="text-[16px] 3xl:text-[20px] text-[#040404BA] font-[thin]">{member.role}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Regional Heads */}
      <div>
        <h4 className="text-[20px] md:text-[18px] 3xl:text-[24px] mb-3">Our Regional Heads</h4>
      </div>
      <div className="w-full flex items-center justify-center">
        {RegionalHead.map((member, index) => (
          <div key={index} className="flex flex-col items-start w-fit">
            <div className="bg-[#F5F5F5] w-[355px] h-[355px] lg:h-[350px] lg:w-[200px] flex items-center justify-center">
              {member.img ? (
                <img className="pt-8 w-full h-full object-cover" src={member.img} alt={member.name} />
              ) : (
                <p className="text-gray-400">No Image</p>
              )}
            </div>
            <p className="text-[18px] 3xl:text-[24px] mt-1">{member.name}</p>
            <p className="text-[16px] 3xl:text-[20px] text-[#040404BA] font-[thin]">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
