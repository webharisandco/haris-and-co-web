import React from 'react';
import img1 from "@/assets/images/aboutPage/life/img1.png";
import img2 from "@/assets/images/aboutPage/life/img2.png";
import img3 from "@/assets/images/aboutPage/life/img3.png";
import img4 from "@/assets/images/aboutPage/life/img4.png";
import img5 from "@/assets/images/aboutPage/life/img5.png";
import img6 from "@/assets/images/aboutPage/life/img6.png";

export default function LifeSection() {
    return (
        <div className='flex flex-col gap-8 bg-white text-center px-[16px] md:px-[80px] pb-[50px]'>
            <h2 className='text-40px'>Life at Haris&Co</h2>
            <div className="flex flex-col lg:flex-row flex-wrap gap-5">
                {/* First 3 images visible on all screens */}
                <div className="flex-1 min-w-[30%]">
                    <img src={img1} alt="" className='w-full h-[320px] object-cover' />
                </div>
                <div className="flex-1 min-w-[30%]">
                    <img src={img2} alt="" className='w-full h-[320px] object-cover' />
                </div>
                <div className="flex-1 min-w-[30%]">
                    <img src={img3} alt="" className='w-full h-[320px] object-cover' />
                </div>

                {/* Last 3 images visible only on lg screens and above */}
                <div className="flex-1 min-w-[30%] hidden lg:block">
                    <img src={img4} alt="" className='w-full h-[320px] object-cover' />
                </div>
                <div className="flex-1 min-w-[30%] hidden lg:block">
                    <img src={img5} alt="" className='w-full h-[320px] object-cover' />
                </div>
                <div className="flex-1 min-w-[30%] hidden lg:block">
                    <img src={img6} alt="" className='w-full h-[320px] object-cover' />
                </div>
            </div>
        </div>
    );
}