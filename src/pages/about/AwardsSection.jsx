import React from 'react'
import awardImg from '@/assets/images/aboutPage/awards/award.png'
import LinkWithArrow from '@/components/ui/common/LinkWithArrow';
export default function AwardsSection() {
    return (
        <div className='px-16 lg:px-[80px] py-[30px] flex flex-col  gap-[70px] bg-[#0E0E0E] overflow-hidden'>
            <h4 className='text-white  text-[27px] md:text-[35px] '>Awards</h4>
            <div className=" flex gap-5 justify-between">
                <img src={awardImg} className='w-[120px] object-contain' />
                <img src={awardImg} className='w-[120px] object-contain' />
                <img src={awardImg} className='w-[120px] object-contain' />
                <img src={awardImg} className='w-[120px] object-contain' />
                <img src={awardImg} className='w-[120px] object-contain' />
            </div>
            <LinkWithArrow text="View All Awards" href="#" className='mx-auto group text-white/55 my-8 hover:text-white transition-all ease-in-out duration-300' />
        </div>
    )
}
