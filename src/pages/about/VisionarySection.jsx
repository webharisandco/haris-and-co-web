import React from 'react'
import tedImg from '@/assets/images/aboutPage/ted.png'
import humanprenuerImg from '@/assets/images/aboutPage/humanprenuer.png'

export default function VisionarySection() {
    return (
        <div className='bg-[#0E0E0E] text-white flex flex-col items-center py-[50px] px-[16px] md:px-[80px] gap-[100px] '>
            <h4 className='text-40px' >Meet the Visionary Behind the Brand</h4>
            <div className="flex gap-20">
                <div className="w-1/2 bg-[#212121] flex h-[320px] relative">
                    <div className="w-1/2  h-full">
                        <img src={humanprenuerImg} alt="" className='absolute bottom-[0] h-[600px] pt-16 left-0 ' />
                    </div>
                    <div className="w-1/2 py-10 h-full">
                        <div className="flex flex-col justify-between h-full">
                            <div className="">
                                <p className='text-[20px] text-white/45 font-[thin] leading-none'>Author of</p>
                                <h6 className='text-48px leading-none'>Humanprenuer</h6>
                            </div>
                            <img src={tedImg} alt="" className='z-10 w-[250px]' />
                        </div>
                    </div>
                </div>
                <div className="w-1/2 flex flex-col justify-between">
                    <p className='text-[21px] font-light tracking-tight leading-snug italic' >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <div cslassName="">
                        <p className='text-[28px]' >Haris Aboobacker</p>
                        <p className='text-white/75'>Founder, CEO</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
