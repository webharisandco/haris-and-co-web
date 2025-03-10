import React from 'react'
import tedImg from '@/assets/images/aboutPage/ted.png'
import humanprenuerImg from '@/assets/images/aboutPage/humanprenuer2.png'

export default function VisionarySection() {
    return (
        <div className='bg-[#0E0E0E] text-white flex flex-col items-center py-[50px] lg:py-[80px] px-[16px] md:px-[80px] gap-[220px]  lg:gap-[80px] xl:gap-[100px] '>
            <h4 className='text-[30px] text-40px mb-8 md:mb-0' >Meet the Visionary Behind the Brand</h4>
            <div className="flex flex-col lg:flex-row gap-20">
                <div className="lg:w-1/2 bg-[#212121] flex flex-col md:flex-row h-[550px] md:h-[500px] lg:h-[320px] 3xl:h-[450px] relative">
                    <div className="md:w-7/12  h-1/2 md:h-full relative">
                        <img src={humanprenuerImg} alt="" className='absolute w-full lg:w-auto bottom-0  md:bottom-[0]  lg:h-[500px]  xl:h-[550px] 3xl:h-[650px]  3xl:w-full object-cover  md:-left-2 ' />
                    </div>
                    <div className="md:w-1/3 md:py-10 h-1/2 lg:py-10 md:h-full relative md:-left-10  ">
                        <div className="flex  flex-col-reverse md:flex-col justify-end md:justify-between h-full ">
                            <div className="z-10 px-3 my-auto lg:my-0">
                                <p className='text-[20px] 3xl:text-[24px] text-white/45 font-[thin] leading-none mb-2 '>Author of</p>
                                <h6 className='text-[48px] lg:text-48px leading-none'>Humanprenuer</h6>
                            </div>
                            <img src={tedImg} alt="" className='z-10 w-full md:w-3/4 lg:w-[200px] xl:w-full' />
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/2 flex flex-col justify-between">
                    <p className='text-[20px] md:text-[21px] 3xl:text-[24px] font-[thinItalic] tracking-tight leading-snug' >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <div cslassName="">
                        <p className='text-[28px]' >Haris Aboobacker</p>
                        <p className='text-white/75'>Founder, CEO</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
