import React from 'react'
import AdarshImg from '@/assets/images/aboutPage/team/Adarsh.png'
import RaginImg from '@/assets/images/aboutPage/team/Ragin.png'
import HarisImg from '@/assets/images/aboutPage/team/Haris.png'
import SaheelImg from '@/assets/images/aboutPage/team/Saheel.png'
import AmnaImg from '@/assets/images/aboutPage/team/Amna.png'

export default function OurTeam() {
    return (
        <div className='bg-white py-[50px] flex flex-col gap-[50px] items-center text-center'>
            <div className="">
                <h4 className='text-[18px] font-[Helvetica-Light] mb-3'>Our Team</h4>
                <p className='text-[28px] font-[boldtext] leading-none'>Meet the minds shaping an<br /> industry.</p>
            </div>
            <div className="flex gap-6 justify-between h-[300px] relative">
                <div>
                    <img className='w-full h-full' src={AdarshImg} alt="" />
                    <p className='text-[18px] mt-1'>Haris Aboobacker</p>
                    <p className='text-[16px] text-[#040404BA] font-[thin]'>Founder, CEOs</p>
                </div>
                <div>
                    <img className='w-full h-full' src={RaginImg} alt="" />
                    <p className='text-[18px] mt-1'>Haris Aboobacker</p>
                    <p className='text-[16px] text-[#040404BA] font-[thin]'>Founder, CEOs</p>
                </div>
                <div>
                    <img className='w-full h-full' src={HarisImg} alt="" />
                    <p className='text-[18px] mt-1'>Haris Aboobacker</p>
                    <p className='text-[16px] text-[#040404BA] font-[thin]'>Founder, CEOs</p>
                </div>
                <div>
                    <img className='w-full h-full' src={SaheelImg} alt="" />
                    <p className='text-[18px] mt-1'>Haris Aboobacker</p>
                    <p className='text-[16px] text-[#040404BA] font-[thin]'>Founder, CEOs</p>
                </div>
                <div>
                    <img className='w-full h-full' src={AmnaImg} alt="" />
                    <p className='text-[18px] mt-1'>Haris Aboobacker</p>
                    <p className='text-[16px] text-[#040404BA] font-[thin]'>Founder, CEOs</p>
                </div>
                <hr className='w-full border-black absolute bottom-0' />
            </div>
        </div>
    )
}
