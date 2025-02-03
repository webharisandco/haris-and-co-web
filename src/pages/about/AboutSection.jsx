import React from 'react'
import BannerImg from '@/assets/images/aboutPage/Banner.png'

export default function AboutSection() {
    return (
        <div className='bg-white px-[16px] lg:px-[80px] pt-[50px] -mb-[70px] space-y-10 '>
            <img src={BannerImg} alt="" className='-translate-y-36' />
            <div className=" flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap:14 -translate-y-36">
                <h2 className='font-medium lg:w-1/2 text-[24px]  lg:text-[27px]  xl:text-[29px] 3xl:text-[40px]'>
                    About Haris&Co.: Where Creativity Meets Strategy, Transforming Brands
                </h2>
                <div className=" lg:w-1/2 space-y-5  text-[20px] lg:text-[15px] font-[Helvetica-Light] text-black/80">
                    <p>At Haris&Co., our mission is to empower businesses by creating distinctive and impactful brand identities that resonate with their audiences. We believe that every brand has a unique story to tell, and our goal is to help you tell it in the most compelling way possible. By combining creativity, strategy, and technology, we deliver solutions that not only meet your business goals but also inspire and connect with people on a deeper level.At Haris&Co.</p>
                    <p>At Haris&Co., our mission is to empower businesses by creating distinctive and impactful brand identities that resonate with their audiences. We believe that every brand has a unique story to tell, and our goal is to help you tell it in the most compelling way possible. By combining creativity, strategy, and technology, we deliver solutions that not only meet your business goals but also inspire and connect with people on a deeper level.At Haris&Co., our mission is to empower businesses by creating distinctive and impactful brand identities that resonate with their audiences. We believe that every brand has a unique story to tell, and our goal is to help ..</p>
                </div>
            </div>
        </div>
    )
}
