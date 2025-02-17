import React from 'react'
import AdarshImg from '@/assets/images/aboutPage/team/Adarsh.png'
import RaginImg from '@/assets/images/aboutPage/team/Ragin.png'
import HarisImg from '@/assets/images/aboutPage/team/Haris.png'
import SaheelImg from '@/assets/images/aboutPage/team/Saheel.png'
import AmnaImg from '@/assets/images/aboutPage/team/Amna.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination"; // Import pagination styles for Swiper
import 'swiper/css/navigation';
import SwiperCore from "swiper";
import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper/modules';

// install Swiper modules
SwiperCore.use([Navigation, Pagination]);


export default function OurTeam() {
    return (
        <div className='bg-white py-[50px] flex flex-col gap-[50px] lg:items-center lg:text-center'>
            <div className="">
                <h4 className='text-[18px] 3xl:text-[24px] font-[Helvetica-Light] mb-3'>Our Team</h4>
                <p className='text-[28px] text-40px font-[boldtext] leading-none'>Meet the minds shaping an<br /> industry.</p>
            </div>
            <div className="w-full relative">
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    navigation={false}
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
                    className="swiper-pagination-black" 
                >
                    <SwiperSlide>
                        <div className='flex flex-col items-center'>
                            <img className=' h-[300px] 3xl:h-[400px]' src={AdarshImg} alt="" />
                            <p className='text-[18px] 3xl:text-[24px] mt-1 font-[Helvetica-Medium]'>Haris Aboobacker</p>
                            <p className='text-[16px] text-[#040404BA] font-[thin]'>Founder, CEOs</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>

                        <div className='flex flex-col items-center' >
                            <img className=' h-[300px] 3xl:h-[400px]' src={RaginImg} alt="" />
                            <p className='text-[18px] 3xl:text-[24px] mt-1 font-[Helvetica-Medium]'>Haris Aboobacker</p>
                            <p className='text-[16px] text-[#040404BA] font-[thin]'>Founder, CEOs</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>

                        <div className='flex flex-col items-center'>
                            <img className=' h-[300px] 3xl:h-[400px]' src={HarisImg} alt="" />
                            <p className='text-[18px] 3xl:text-[24px] mt-1 font-[Helvetica-Medium]'>Haris Aboobacker</p>
                            <p className='text-[16px] text-[#040404BA] font-[thin]'>Founder, CEOs</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>

                        <div className='flex flex-col items-center'>
                            <img className=' h-[300px] 3xl:h-[400px]' src={SaheelImg} alt="" />
                            <p className='text-[18px] 3xl:text-[24px] mt-1 font-[Helvetica-Medium]'>Haris Aboobacker</p>
                            <p className='text-[16px] text-[#040404BA] font-[thin]'>Founder, CEOs</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='flex flex-col items-center'>
                            <img className=' h-[300px] 3xl:h-[400px]' src={AmnaImg} alt="" />
                            <p className='text-[18px] 3xl:text-[24px] mt-1 font-[Helvetica-Medium]'>Haris Aboobacker</p>
                            <p className='text-[16px] text-[#040404BA] font-[thin]'>Founder, CEOs</p>
                        </div>
                    </SwiperSlide>
                </Swiper >
                <hr className='w-full border-black absolute bottom-[100px] lg:bottom-14 3xl:bottom-16  block' />
            </div>
        </div>
    )
}
