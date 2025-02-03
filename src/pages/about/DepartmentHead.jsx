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
    return (
        <div className='bg-white px-[16px] md:px-[80px] py-[50px] lg:py-[100px] flex flex-col gap-[50px] lg:items-center'>
            <div className="">
                <h4 className='text-[20px] md:text-[18px] font-[Helvetica-Light] mb-3'>Our Department Heads</h4>
                <p className='text-[24px] md:text-[28px] font-[boldtext] leading-none'>Meet the minds shaping an<br /> industry.</p>
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
                        640: {
                            slidesPerView: 2,
                        },
                        768: {
                            slidesPerView: 3,
                        },
                        1024: {
                            slidesPerView: 4,
                        },
                        1240: {
                            slidesPerView: 5,
                        },
                    }}
                    className="swiper-pagination-black" // Add custom class

                >
                    <SwiperSlide>
                        <div className='flex flex-col items-center'>
                            <div className="bg-[#F5F5F5] h-[350px] w-[300px] mx-auto">
                                <img className='pt-8 w-full   h-full object-contain' src={NabhanImg} alt="" />
                            </div>
                            <p className='text-[18px] mt-1'>Haris Aboobacker</p>
                            <p className='text-[16px] text-[#040404BA] font-[thin]'>Founder, CEOs</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='flex flex-col items-center'>
                            <div className="bg-[#F5F5F5] h-[350px] w-[300px]">
                                <img className='pt-8 w-full   h-full object-contain' src={NihalImg} alt="" />
                            </div>
                            <p className='text-[18px] mt-1'>Haris Aboobacker</p>
                            <p className='text-[16px] text-[#040404BA] font-[thin]'>Founder, CEOs</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='flex flex-col items-center'>
                            <div className="bg-[#F5F5F5] h-[350px] w-[300px]">
                                <img className='pt-8 w-full   h-full object-contain' src={vishnuImg} alt="" />
                            </div>
                            <p className='text-[18px] mt-1'>Haris Aboobacker</p>
                            <p className='text-[16px] text-[#040404BA] font-[thin]'>Founder, CEOs</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className='flex flex-col items-center'>
                        <div className="bg-[#F5F5F5] h-[350px] w-[300px]">
                            <img className='pt-8 w-full   h-full object-contain' src={RaginImg} alt="" />
                        </div>
                        <p className='text-[18px] mt-1'>Haris Aboobacker</p>
                        <p className='text-[16px] text-[#040404BA] font-[thin]'>Founder, CEOs</p>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className='flex flex-col items-center'>
                        <div className="bg-[#F5F5F5] h-[350px] w-[300px]">
                            <img className='pt-8 w-full h-full object-contain' src={AdarshImg} alt="" />
                        </div>
                        <p className='text-[18px] mt-1'>Haris Aboobacker</p>
                        <p className='text-[16px] text-[#040404BA] font-[thin]'>Founder, CEOs</p>
                    </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}
