import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination"; // Import pagination styles for Swiper
import "swiper/css/navigation";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";

import client1 from "@/assets/images/clients/client1.png";
import client2 from "@/assets/images/clients/client2.png";
import client3 from "@/assets/images/clients/client3.png";
import client4 from "@/assets/images/clients/client4.png";
import PlayIcon from "@/assets/images/icons/play.svg";
import { Link } from "react-router-dom";
import { MoveRight } from "lucide-react";
// styled-component wrap
// one of data you want to show
import SwiperCore from "swiper";

// install Swiper modules
SwiperCore.use([Navigation, Pagination]);

function ClientsSection() {
  const clients = [
    { img: client1, name: "Emily Wong", role: "Chief Brand Officer" },
    { img: client2, name: "Emily Wong", role: "Chief Brand Officer" },
    { img: client3, name: "Emily Wong", role: "Chief Brand Officer" },
    { img: client4, name: "Emily Wong", role: "Chief Brand Officer" },
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
          navigation={true} // Enable navigation (set to false if not needed)
          pagination={{ clickable: true }} // Ensure pagination works
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          className="swiper-pagination-white"
        >
          {clients.map((client, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-[400px]">
                <img
                  className=" object-contain"
                  src={client.img}
                  alt={client.name}
                />
                <div className="flex items-center justify-between w-full absolute bottom-6 px-6 ">
                  <div>
                    <p className="font-medium text-black text-[32px] leading-none">
                      {client.name}
                    </p>
                    <p className="text-[20px] text-black font-[thin]">
                      {client.role}
                    </p>
                  </div>
                  <div>
                    <img src={PlayIcon} alt="Play" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="w-full hidden justify-center mt-[80px] pb-[80px] h-full md:flex">
        <Link
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
        </Link>
      </div>
    </div>
  );
}

export default ClientsSection;
