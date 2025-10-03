import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination"; // Import pagination styles for Swiper
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";

import arsh from "@/assets/images/clients/Arsh.png";
import ashik from "@/assets/images/clients/Ashik.png";
import salman_thorop from "@/assets/images/clients/salman_thorop.jpg";
import Jasim from "@/assets/images/clients/Bosq.png";
import shan from "@/assets/images/clients/Shan.png";
import PlayIcon from "@/assets/images/icons/play.svg";
import arabi from "@/assets/images/clients/arabi.jpg"


import SwiperCore from "swiper";


SwiperCore.use([Navigation, Pagination]);

function ClientsSection() {
  const clients = [
    {
      img: arsh,
      name: "Arsh Navas",
      role: "Chief Brand Officer",
      link: "https://youtu.be/6JP6r9x2ROc?si=bAiOcGLdZhCF1pE_",
      company: "Gatezone transport"
      // https://www.instagram.com/reel/DB367jVBT2u/?igsh=MWd5cGluMGxkdjV3cg==
    },
    {
      img: ashik,
      name: "Ashik",
      role: "Marketing Director",
      link: "https://youtu.be/oW9NIapHaFU?si=-JvkVwyWdn9J3ZIl",
      company: "Mr Alfred united arab emirates"
      // https://www.instagram.com/reel/DB3yj-xhe2_/?igsh=MWdrZmV2dHJpZWR4aQ==
    },
    {
      img: salman_thorop,
      name: "Salman Thorop",
      role: "Founder and CEO ",
      link: "https://youtube.com/shorts/yLVQjXDWv34?si=fA1t_j3s8o3x-idf",
      company:"Duvolks"
      // https://www.instagram.com/reel/DK9ruMOTRFM/?igsh=aXFsbm40MjJnanBm
    },
    {
      img: Jasim,
      name: "Jasim SM",
      role: "CEO ",
      link: "https://youtu.be/kCFIlw110_k?si=VsQdEDiPkXntKG-E",
      company: "Bosq Ergonomic Living"
      // https://www.instagram.com/reel/C3ukEL8P-3L/?igsh=bDZzb2xybXh4aThs
    },
    {
      img: shan,
      name: "Shan A Salam",
      role: "Founder of one percentages ",
      link: "https://youtu.be/u2ORY0ki8Sg?si=YBL1YVNhUNLGKnQY",
      company:" E-commerce consultant"
      // https://www.instagram.com/reel/C3r7E01Pn9_/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==
    },
    {
      img: arabi,
      name: "Abbas",
      role: "",
      link: "https://youtube.com/shorts/chYuCsunOtQ?si=78vMvBORwLMgwkaT",
      // https://www.instagram.com/reel/DNPxOc-xxs1/?igsh=MWpqNm1oYm9sMGh5dw==
     
    }
  ];

  return (
    <div className="bg-black px-[17px] md:px-[40px] lg:px-[80px] h-full pb-[36px] md:pb-[0px]">
      <div className="py-[36px] md:py-[80px]">
        <p className="text-white text-[32px] md:text-[40px]">
          What Our Clients Say
        </p>
      </div>
      <div className="w-full">
        <Swiper
          modules={[Navigation, Pagination]} // Ensure modules are passed here
          spaceBetween={20}
          slidesPerView={1}
          navigation={false} 
          pagination={{ clickable: true }} // Ensure pagination works
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          className="swiper-pagination-white"
        >
          {clients.map((client, index) => (
            <SwiperSlide key={index}>
              <a
                href={client.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative"
              >
                <img
                  className="object-contain w-full"
                  src={client.img}
                  alt={client.name}
                />

                {/* Bottom white gradient overlay */}
                <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-white to-transparent z-10" />

                {/* Text and Play button */}
                <div className="flex items-center justify-between w-full absolute bottom-6 px-6 z-20">
                  <div>
                    <p className="font-medium text-black text-[28px] leading-none whitespace-nowrap">
                      {client.name}
                    </p>
                    <p className="text-[20px] text-black font-[thin]">
                      {client.role}
                    </p>
                    <p className="text-[15px] text-gray-800 capitalize font-[thin]">
                      {client.company}
                    </p>
                  </div>

                  <div>
                    <img src={PlayIcon} alt="Play" />
                  </div>
                </div>
              </a>
            </SwiperSlide>

          ))}
        </Swiper>
      </div>
      <div className="w-full hidden justify-center mt-[80px] pb-[80px] h-full md:flex">
        {/* <Link
          to="/clients"
          className="group flex gap-[11px] text-white/55 border-b border-white/55 pb-0.5 hover:text-white hover:border-b-white transition-all duration-300"
        >
          <span className="text-[18px] text-opacity-[55%]">
            View All Testimonials
          </span>
          <MoveRight
            size={30}
            className="text-white/55 transition-all duration-300 group-hover:text-white"
            strokeWidth={1.8}
          />
        </Link> */}
      </div>
    </div>
  );
}

export default ClientsSection;
