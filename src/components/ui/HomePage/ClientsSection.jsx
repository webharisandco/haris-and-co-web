import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";

import arsh from "@/assets/images/clients/Arsh.png";
import ashik from "@/assets/images/clients/Ashik.png";
import salman_thorop from "@/assets/images/clients/salman_thorop.jpg";
import Jasim from "@/assets/images/clients/Bosq.png";
import shan from "@/assets/images/clients/Shan.png";
import PlayIcon from "@/assets/images/icons/play.svg";

import SwiperCore from "swiper";
SwiperCore.use([Navigation, Pagination]);

function ClientsSection() {
  const clients = [
    {
      img: arsh,
      name: "Arsh Navas",
      role: "Chief Brand Officer",
      link: "https://youtu.be/6JP6r9x2ROc?si=bAiOcGLdZhCF1pE_",
      company: "Gatezone Transport",
    },
    {
      img: ashik,
      name: "Ashik",
      role: "Marketing Director",
      link: "https://youtu.be/oW9NIapHaFU?si=-JvkVwyWdn9J3ZIl",
      company: "Mr Alfred UAE",
    },
    {
      img: salman_thorop,
      name: "Salman Thorop",
      role: "Founder & CEO",
      link: "https://youtube.com/shorts/yLVQjXDWv34?si=fA1t_j3s8o3x-idf",
      company: "Duvolks",
    },
    {
      img: Jasim,
      name: "Jasim SM",
      role: "CEO",
      link: "https://youtu.be/kCFIlw110_k?si=VsQdEDiPkXntKG-E",
      company: "Bosq Ergonomic Living",
    },
    {
      img: shan,
      name: "Shan A Salam",
      role: "Founder of One Percentages",
      link: "https://youtu.be/u2ORY0ki8Sg?si=YBL1YVNhUNLGKnQY",
      company: "E-commerce Consultant",
    },
  ];

  return (
    <div className="bg-black px-[17px] md:px-[40px] lg:px-[80px] xl:px-[120px] h-full pb-[36px] md:pb-0">
      <div className="py-[36px] md:py-[80px] text-center md:text-left">
        <p className="text-white text-[28px] sm:text-[32px] md:text-[40px] leading-tight">
          What Our Clients Say
        </p>
      </div>

      <div className="w-full">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          navigation={false}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1.3 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="swiper-pagination-white"
        >
          {clients.map((client, index) => (
            <SwiperSlide key={index}>
              <a
                href={client.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative group overflow-hidden "
              >
                <img
                  src={client.img}
                  alt={client.name}
                  className="w-full h-auto max-h-[500px] object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Overlay Gradient */}
                <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-white to-transparent z-10"></div>

                {/* Text and Play Button */}
                <div className="flex items-center justify-between w-full absolute bottom-4 sm:bottom-6 px-3 sm:px-6 z-20">
                  <div className="flex flex-col gap-[2px] sm:gap-[4px]">
                    <p className="font-medium text-black text-[20px] sm:text-[24px] md:text-[28px] leading-none whitespace-nowrap">
                      {client.name}
                    </p>
                    <p className="text-[14px] sm:text-[18px] text-black font-light">
                      {client.role}
                    </p>
                    <p className="text-[12px] sm:text-[15px] text-gray-800 capitalize font-light">
                      {client.company}
                    </p>
                  </div>
                  <img
                    src={PlayIcon}
                    alt="Play"
                    className="w-[32px] sm:w-[40px] md:w-[48px]"
                  />
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default ClientsSection;
