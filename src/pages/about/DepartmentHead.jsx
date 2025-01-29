import React from 'react'
import AdarshImg from '@/assets/images/aboutPage/team/Adarsh.png'
import RaginImg from '@/assets/images/aboutPage/team/Ragin.png'
import NabhanImg from '@/assets/images/aboutPage/team/Nabhan.png'
import NihalImg from '@/assets/images/aboutPage/team/Nihal.png'
import vishnuImg from '@/assets/images/aboutPage/team/vishnu.png'

export default function DepartmentHead() {
    return (
        <div className='bg-white px-[80px] py-[100px] flex flex-col gap-[50px] items-center text-center'>
            <div className="">
                <h4 className='text-[18px] font-[Helvetica-Light] mb-3'>Our Department Heads</h4>
                <p className='text-[28px] font-[boldtext] leading-none'>Meet the minds shaping an<br /> industry.</p>
            </div>
            <div className="flex gap-6 justify-between h-[220px] relative">
                <div>
                    <div className="bg-[#F5F5F5] h-full mx-auto">
                        <img className='pt-8 w-full   h-full' src={NabhanImg} alt="" />
                    </div>
                    <p className='text-[18px] mt-1'>Haris Aboobacker</p>
                    <p className='text-[16px] text-[#040404BA] font-[thin]'>Founder, CEOs</p>
                </div>
                <div>
                    <div className="bg-[#F5F5F5] h-full">
                        <img className='pt-8 w-full   h-full' src={NihalImg} alt="" />
                    </div>
                    <p className='text-[18px] mt-1'>Haris Aboobacker</p>
                    <p className='text-[16px] text-[#040404BA] font-[thin]'>Founder, CEOs</p>
                </div>
                <div>
                    <div className="bg-[#F5F5F5] h-full">
                        <img className='pt-8 w-full   h-full' src={vishnuImg} alt="" />
                    </div>
                    <p className='text-[18px] mt-1'>Haris Aboobacker</p>
                    <p className='text-[16px] text-[#040404BA] font-[thin]'>Founder, CEOs</p>
                </div>
                <div>
                    <div className="bg-[#F5F5F5] h-full">
                        <img className='pt-8 w-full   h-full' src={RaginImg} alt="" />
                    </div>
                    <p className='text-[18px] mt-1'>Haris Aboobacker</p>
                    <p className='text-[16px] text-[#040404BA] font-[thin]'>Founder, CEOs</p>
                </div>
                <div>
                    <div className="bg-[#F5F5F5] h-full">
                        <img className='pt-8 w-full   h-full' src={AdarshImg} alt="" />
                    </div>
                    <p className='text-[18px] mt-1'>Haris Aboobacker</p>
                    <p className='text-[16px] text-[#040404BA] font-[thin]'>Founder, CEOs</p>
                </div>
            </div>
        </div>
    )
}
