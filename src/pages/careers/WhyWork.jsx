import React from 'react'

export default function WhyWork() {
    return (
       
        <div className='bg-white px-[16px] md:px-[80px] py-[80px] 3xl:py-[100px] flex flex-col md:items-center gap-[70px]'>
            <h2 className="text-[30px] 3xl:text-[40px] font-[helvetica-medium]">Why work with us ?</h2>
            <div className="flex justify-between flex-col md:flex-row gap-10">
                <div className="flex gap-2">
                    <div className="text-[40px] font-[boldtext]">01.</div>
                    <div className="flex flex-col gap-3 3xl:gap-5">
                        <h3 className='text-[24px] 3xl:text-[32px] leading-snug font-[helvetica-medium]'>Collaborative and Creative Environment</h3>
                        <p className='font-[thin] 3xl:text-[20px] w-10/12'>Join us and become a part of a community that fosters a supportive and creative space.</p>
                    </div>
                </div>
                <div className="flex gap-2">
                    <div className="text-[40px] font-[boldtext]">02.</div>
                    <div className="flex flex-col gap-3 3xl:gap-5">
                        <h3 className='text-[24px] 3xl:text-[32px] leading-snug font-[helvetica-medium]'>Opportunities for Growth and Development</h3>
                        <p className='font-[thin] 3xl:text-[20px] w-10/12'>Get a chance to collaborate and learn from skilled professionals to catapult your growth in the industry.</p>
                    </div>
                </div>
                <div className="flex gap-2">
                    <div className="text-[40px] font-[boldtext]">03.</div>
                    <div className="flex flex-col gap-3 3xl:gap-5">
                        <h3 className='text-[24px] 3xl:text-[32px] leading-snug font-[helvetica-medium]'>Impactful Work with<br/> Leading Brands</h3>
                        <p className='font-[thin] 3xl:text-[20px] w-10/12'>Our track record speaks for itself. Gain exposure and work with some of the top names out there.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
