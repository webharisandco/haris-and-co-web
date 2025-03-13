import React from 'react'
import AdarshImg from '@/assets/images/aboutPage/team/Adarsh.png'
import RaginImg from '@/assets/images/aboutPage/team/Ragin.png'
import NabhanImg from '@/assets/images/aboutPage/team/Nabhan.png'
import NihalImg from '@/assets/images/aboutPage/team/Nihal.png'
import vishnuImg from '@/assets/images/aboutPage/team/vishnu.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination"; // Import pagination styles for Swiper
import 'swiper/css/navigation';
import SwiperCore from "swiper";
import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper/modules';

// install Swiper modules
SwiperCore.use([Navigation, Pagination]);


export default function DepartmentHead() {
    const teamMembers = [
        { name: "Abu Nabhan", role: "Chief of Branding", img: NabhanImg },
        { name: "Nihal Zubair", role: "Chief of Creative", img: NihalImg },
        { name: "Vishnu KP", role: "Chief of Production", img: vishnuImg },
        { name: "Ragin Raj", role: "Chief of SEO", img: RaginImg },
        { name: "Adarsh MS", role: "Chief of Performance Marketing", img: AdarshImg },
    ];

    return (
        <div className='bg-white px-[16px] md:px-[80px] py-[50px] lg:py-[100px] flex flex-col gap-[50px] lg:items-center lg:text-center'>
            <div className="">
                <h4 className='text-[20px] md:text-[18px] 3xl:text-[24px] font-[Helvetica-Light] mb-3'>Our Department Heads</h4>
                <p className='text-[24px] text-40px font-[boldtext] leading-none'>Meet the experts.</p>
            </div>

          <div className="w-full">
    <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation={false}
        draggable
        pagination={true}
        autoplay={{ delay: 2500 }}
        loop={true}
        breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
            1240: { slidesPerView: 5 },
        }}
        className="swiper-pagination-black"
    >
        {teamMembers.map((member, index) => (
            <SwiperSlide key={index}>
                <div className='flex flex-col items-start w-fit'>
                    <div className="bg-[#F5F5F5] w-[355px] h-[355px] lg:h-[350px] lg:w-[230px]">
                        <img className='pt-8 w-full h-full object-cover' src={member.img} alt={member.name} />
                    </div>
                    <p className='text-[18px] 3xl:text-[24px] mt-1'>{member.name}</p>
                    <p className='text-[16px] 3xl:text-[20px] text-[#040404BA] font-[thin]'>{member.role}</p>
                </div>
            </SwiperSlide>
        ))}
    </Swiper>
</div>
        </div>
    )
}
