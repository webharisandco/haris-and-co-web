import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination"; // Import pagination styles for Swiper
import "swiper/css/navigation";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";

import arsh from "@/assets/images/clients/Arsh.png";
import ashik from "@/assets/images/clients/Ashik.png";
import kevin from "@/assets/images/clients/Kevin.png";
import Jasim from "@/assets/images/clients/Bosq.png";
import shan from "@/assets/images/clients/Shan.png";
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
    {
      img: arsh,
      name: "Arsh Navas",
      role: "Chief Brand Officer",
      link: "https://www.youtube.com/watch?v=u4hVsNXVoYE"
    },
    {
      img: ashik,
      name: "Ashik",
      role: "Marketing Director",
      link: "https://www.youtube.com/watch?v=CXk-xI4Npmc"
    },
    {
      img: kevin,
      name: "Kevin Mohanji Gera",
      role: "Business Development Manager",
      link: "https://www.youtube.com/watch?v=LXWGDUwGkEk"
    },
    {
      img: Jasim,
      name: "Jasim SM",
      role: "CEO BOSQ",
      link: "https://www.youtube.com/watch?v=qhehmRAaO7Y"
    },
    {
      img: shan,
      name: "Shan A Salam",
      role: "Founder The One Percentage",
      link: "https://www.youtube.com/watch?v=PU2ILf3qTt0"
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
           <div className="relative">
             <img
               className="object-contain"
               src={client.img}
               alt={client.name}
             />
         
             {/* Bottom white gradient overlay */}
             <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-white to-transparent z-10" />
         
             {/* Text and Play button */}
             <div className="flex items-center justify-between w-full absolute bottom-6 px-6 z-20">
               <div>
                 <p className="font-medium text-black text-[32px] leading-none">
                   {client.name}
                 </p>
                 <p className="text-[20px] text-black font-[thin]">
                   {client.role}
                 </p>
               </div>
         
               <div>
                 <a target="_blank" href={client.link}>
                   <img src={PlayIcon} alt="Play" />
                 </a>
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
