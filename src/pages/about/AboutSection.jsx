import React from 'react'
import BannerImg from '@/assets/images/About/Banner.png'

export default function AboutSection() {
    return (
        <div className='bg-white px-[80px] py-[50px] space-y-9 '>
            <img src={BannerImg} alt="" className='-translate-y-36' />
            <div className=" flex gap-10 -translate-y-36">
                <h2 className='font-medium'>
                    About Haris&Co.: Where Creativity Meets Strategy, Transforming Brands
                </h2>
                <div className="font-[thin]">
                    <p>At Haris&Co., our mission is to empower businesses by creating distinctive and impactful brand identities that resonate with their audiences. We believe that every brand has a unique story to tell, and our goal is to help you tell it in the most compelling way possible. By combining creativity, strategy, and technology, we deliver solutions that not only meet your business goals but also inspire and connect with people on a deeper level.At Haris&Co.</p>
                    <p>At Haris&Co., our mission is to empower businesses by creating distinctive and impactful brand identities that resonate with their audiences. We believe that every brand has a unique story to tell, and our goal is to help you tell it in the most compelling way possible. By combining creativity, strategy, and technology, we deliver solutions that not only meet your business goals but also inspire and connect with people on a deeper level.At Haris&Co., our mission is to empower businesses by creating distinctive and impactful brand identities that resonate with their audiences. We believe that every brand has a unique story to tell, and our goal is to help ..</p>
                </div>
            </div>
        </div>
    )
}
