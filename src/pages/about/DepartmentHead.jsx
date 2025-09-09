import React from "react";
import AdarshImg from "@/assets/images/aboutPage/team/Adarsh.png";
import RaginImg from "@/assets/images/aboutPage/team/Ragin.png";
import NabhanImg from "@/assets/images/aboutPage/team/Nabhan.png";
import NihalImg from "@/assets/images/aboutPage/team/Nihal.png";
import vishnuImg from "@/assets/images/aboutPage/team/vishnu.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination"; // Import pagination styles for Swiper
import "swiper/css/navigation";
import SwiperCore from "swiper";
import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper/modules";

// install Swiper modules
SwiperCore.use([Navigation, Pagination]);

export default function DepartmentHead() {
  const teamMembers = [
    { name: "Aswathi KP", role: "Human Resource", img: NabhanImg },
    { name: "Amna Iqbal", role: "Marketing", img: NabhanImg },
    {
      name: "Mohamed Azaruddin",
      role: "Brand Solutions",
      img: NabhanImg,
    },
    { name: "Faheemudheen K", role: "Design", img: NabhanImg },
    { name: "Navneeth B Chandran", role: "Brand Consultants", img: NabhanImg },
    { name: "Shazmina Abbas", role: "Accounts", img: NabhanImg },
    
  ];
  const slideCount = teamMembers.length;

  const bp = {
    640: { slidesPerView: Math.min(2, slideCount) },
    768: { slidesPerView: Math.min(3, slideCount) },
    1024: { slidesPerView: Math.min(4, slideCount), autoplay: false },
    1240: { slidesPerView: Math.min(5, slideCount), autoplay: false },
  };

  const businessHeads = [
    { name: "Ragin Raj", role: "SEO", img: NabhanImg },
    { name: "Umair Kallingal", role: "Social Media Marketing", img: NihalImg },
    {
      name: "Mohammed Zainudheen",
      role: "Performance Marketing",
      img: vishnuImg,
    },
    { name: "Yogesh", role: "Influencer Marketing", img: RaginImg },
    { name: "Vishnu KP", role: "Production", img: AdarshImg },
    { name: "Siba Fazal", role: "Branding & Creative", img: AdarshImg },
  ];

    const RegionalHead = [
    { name: "Muhammed Shabeer", role: "Regional Head", img: NabhanImg },
    
  ];

  return (
    <div className="bg-white px-[16px] md:px-[80px] py-[50px] lg:py-[100px] flex flex-col gap-[50px] lg:items-center lg:text-center">
      <div className="">
        <p className="text-[24px] text-40px font-[boldtext] mb-3">
          Meet the experts.
        </p>
        <h4 className="text-[20px] md:text-[18px] 3xl:text-[24px] font-[Helvetica-Light] ">
          Our Business Heads
        </h4>
        
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
          loop={false} // 🚫 no infinite loop
          watchOverflow={true} // ✅ hide arrows/pagination if not enough slides
          centerInsufficientSlides={true} // ✅ center slides if fewer than perView
          breakpoints={{
            640: { slidesPerView: Math.min(2, businessHeads.length) },
            768: { slidesPerView: Math.min(3, businessHeads.length) },
            1024: {
              slidesPerView: Math.min(4, businessHeads.length),
              autoplay: false, // 🚫 disable autoplay on laptop+
            },
            1240: {
              slidesPerView: Math.min(5, businessHeads.length),
              autoplay: false, // 🚫 disable autoplay on larger screens
            },
          }}
          className="swiper-pagination-black"
        >
          {businessHeads.map((member, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-start w-fit">
                {/* <div className="bg-[#F5F5F5] w-[355px] h-[355px] lg:h-[350px] lg:w-[200px]">
                  <img
                    className="pt-8 w-full h-full object-cover"
                    src={member.img}
                    alt={member.name}
                  />
                </div> */}
                <p className="text-[18px] 3xl:text-[24px] mt-1">
                  {member.name}
                </p>
                <p className="text-[16px] 3xl:text-[20px] text-[#040404BA] font-[thin]">
                  {member.role}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      
      


      <div className="">
        <h4 className="text-[20px] md:text-[18px] 3xl:text-[24px] font-[Helvetica-Light] mb-3">
         Our Regional Head
        </h4>

      </div>


      <div className="w-full">
        <div
          // modules={[Navigation, Pagination, Autoplay]}
          // spaceBetween={30}
          // slidesPerView={1}
          // navigation={false}
          // draggable
          // pagination={{ clickable: true }}
          // autoplay={{
          //   delay: 2500,
          //   disableOnInteraction: false,
          // }}
          // loop={false} // 🚫 no infinite loop
          // watchOverflow={true} // ✅ hide arrows/pagination if not enough slides
          // centerInsufficientSlides={true} // ✅ center slides if fewer than perView
          // breakpoints={{
          //   640: { slidesPerView: Math.min(2, businessHeads.length) },
          //   768: { slidesPerView: Math.min(3, businessHeads.length) },
          //   1024: {
          //     slidesPerView: Math.min(4, businessHeads.length),
          //     autoplay: false, // 🚫 disable autoplay on laptop+
          //   },
          //   1240: {
          //     slidesPerView: Math.min(1, businessHeads.length),
          //     autoplay: false, // 🚫 disable autoplay on larger screens
          //   },
          // }}
          className="flex items-center justify-center"
        >
          {RegionalHead.map((member, index) => (
            <div key={index}>
              <div className="flex flex-col items-start w-fit">
                {/* <div className="bg-[#F5F5F5] w-[355px] h-[355px] lg:h-[350px] lg:w-[200px]">
                  <img
                    className="pt-8 w-full h-full object-cover"
                    src={member.img}
                    alt={member.name}
                  />
                </div> */}
                <p className="text-[18px] 3xl:text-[24px] mt-1">
                  {member.name}
                </p>
                <p className="text-[16px] 3xl:text-[20px] text-[#040404BA] font-[thin]">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>



      <div className="">
        {/* <p className="text-[24px] text-40px font-[boldtext] mb-3">
          Meet the experts.
        </p> */}
        <h4 className="text-[20px] md:text-[18px] 3xl:text-[24px] font-[Helvetica-Light] mb-3">
          Our Department Heads
        </h4>
        
      </div>

      <div className="w-full">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={Math.min(1, slideCount)} // 1, or 0 if no slides
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
          onSwiper={(sw) => setTimeout(() => sw.update(), 0)} // ensure recalculation
          className="swiper-pagination-black"
        >
          {teamMembers.map((member, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-start">
                {/* <div className="bg-[#F5F5F5] w-[355px] h-[355px] lg:h-[350px] lg:w-[200px]">
                  <img
                    className="pt-8 w-full h-full object-cover"
                    src={member.img}
                    alt={member.name}
                  />
                </div> */}
                <p className="text-[18px] 3xl:text-[24px] mt-1">
                  {member.name}
                </p>
                <p className="text-[16px] 3xl:text-[20px] text-[#040404BA] font-[thin]">
                  {member.role}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>



    </div>
  );
}
