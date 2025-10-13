import React, { useState } from "react";
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

function ClientsSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState("");

  const clients = [
    {
      img: arsh,
      name: "Arsh Navas",
      role: "Chief Brand Officer",
      link: "https://www.youtube.com/embed/6JP6r9x2ROc",
      company: "Gatezone Transport",
    },
    {
      img: ashik,
      name: "Ashik",
      role: "Marketing Director",
      link: "https://www.youtube.com/embed/oW9NIapHaFU",
      company: "Mr Alfred UAE",
    },
    {
      img: salman_thorop,
      name: "Salman Thorop",
      role: "Founder & CEO",
      link: "https://www.youtube.com/embed/yLVQjXDWv34",
      company: "Duvolks",
    },
    {
      img: Jasim,
      name: "Jasim SM",
      role: "CEO",
      link: "https://www.youtube.com/embed/kCFIlw110_k",
      company: "Bosq Ergonomic Living",
    },
    {
      img: shan,
      name: "Shan A Salam",
      role: "Founder of One Percentages",
      link: "https://www.youtube.com/embed/u2ORY0ki8Sg",
      company: "E-commerce Consultant",
    },
  ];

  const openModal = (videoLink) => {
    // add autoplay and clean UI params to the video link
    const cleanVideoLink = `${videoLink}?autoplay=1&controls=0&showinfo=0&modestbranding=1&rel=0&iv_load_policy=3`;
    setCurrentVideo(cleanVideoLink);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setCurrentVideo("");
    setIsModalOpen(false);
  };

  return (
    <div className="bg-black px-[17px] md:px-[40px] lg:px-[80px] xl:px-[120px] h-full pb-[36px] md:pb-0">
      <div className="py-[36px] md:py-[80px] text-center md:text-left">
        <p className="text-white text-[28px] sm:text-[32px] md:text-[40px] leading-tight">
          What Our Clients Say
        </p>
      </div>

      {/* Swiper Carousel */}
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
              <div
                onClick={() => openModal(client.link)}
                className="block relative group overflow-hidden cursor-pointer"
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
                    <p className="font-medium text-black sm:text-[24px] md:text-[28px] lg:text-[25px]  leading-none whitespace-nowrap ">
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
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Cinematic Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-50 transition-opacity duration-500 ease-in-out"
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-4xl h-[60vh] md:h-[70vh] rounded-xl overflow-hidden shadow-2xl animate-fadeIn"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={currentVideo}
              title="Client Video"
              className="w-full h-full"
              frameBorder="0"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
              style={{
                pointerEvents: "none",
              }}
            ></iframe>

            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-3 right-5 text-white text-4xl font-bold hover:scale-110 transition-transform duration-200"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ClientsSection;
