import React from 'react';
import img1 from "@/assets/images/aboutPage/life/imgg1.jpg";
import img2 from "@/assets/images/aboutPage/life/imgg2.jpg";
import img3 from "@/assets/images/aboutPage/life/imgg3.jpg";
import img4 from "@/assets/images/aboutPage/life/imgg4.jpg";
import img5 from "@/assets/images/aboutPage/life/imgg5.jpg";
import img6 from "@/assets/images/aboutPage/life/imgg6.jpg";

export default function LifeSection() {
    return (
        <div className='flex flex-col gap-8 bg-white text-center px-[16px] md:px-[80px] pb-[50px]'>
            <h2 className='text-[32px] text-start lg:text-center lg:text-40px font-[boldtext]'>
                Life at Haris&Co
            </h2>

            {/* Mobile - lg (default stacked/flex layout) */}
            <div className="flex flex-col lg:flex-row flex-wrap gap-5 xl:hidden">
                <div className="flex-1 min-w-[30%]">
                    <img src={img1} alt="" className='w-full h-[320px] object-cover' />
                </div>
                <div className="flex-1 min-w-[30%]">
                    <img src={img2} alt="" className='w-full h-[320px] object-cover' />
                </div>
                <div className="flex-1 min-w-[30%]">
                    <img src={img3} alt="" className='w-full h-[320px] object-cover' />
                </div>
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

            {/* XL+ layout (grid with custom spans) */}
            <div className="hidden xl:grid xl:grid-cols-12 xl:grid-rows-2 xl:gap-6">
                {/* Top row */}
                <div className="col-span-4 row-span-1">
                    <img src={img1} alt="" className="w-full h-full object-cover " />
                </div>
                <div className="col-span-5 row-span-1">
                    <img src={img2} alt="" className="w-full h-full object-cover " />
                </div>
                <div className="col-span-3 row-span-1">
                    <img src={img3} alt="" className="w-full h-full object-cover " />
                </div>

                {/* Bottom row */}
                <div className="col-span-5 row-span-1">
                    <img src={img4} alt="" className="w-full h-full object-cover " />
                </div>
                <div className="col-span-3 row-span-1">
                    <img src={img5} alt="" className="w-full h-full object-cover " />
                </div>
                <div className="col-span-4 row-span-1">
                    <img src={img6} alt="" className="w-full h-full object-cover " />
                </div>
            </div>
        </div>
    );
}