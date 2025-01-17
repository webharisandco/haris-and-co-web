import React from 'react'
import PersonIcon from '@/assets/images/landing/PersonIcon.svg'
import TestimonialIcon from '@/assets/images/landing/TestimonialIcon.svg'
import { Star } from 'lucide-react'


const Testimonial = () => {
    return (
        <div className="py-[50px]">
            <div className='shadow-[0px_0px_6.63px_6.63px_#1515150D] px-[16px] md:px-[80px] lg:px-[100px] py-[50px]  grid lg:grid-cols-[1fr_1.2fr] items-center gap-10 '>
                <div className="">
                    <h6 className='font-[Abrobold] text-[30px] md:text-[40px]  lg:text-[45px]'>Client Reviews</h6>
                    <p className='poppins-light text-base  lg:text-lg w-3/4 lg:w-1/2'>Here is what our clients have to say about our service</p>
                    <div className="flex gap-5 mt-5">
                        <img src={TestimonialIcon} className='w-[40px] lg:w-[53px]' alt='Testimonial Icon' />
                        <div className="flex flex-col">
                            <div className="flex">
                                <Star color='white' fill='#F1C644' />
                                <Star color='white' fill='#F1C644' />
                                <Star color='white' fill='#F1C644' />
                                <Star color='white' fill='#F1C644' />
                                <Star color='white' fill='#F1C644' />
                            </div>
                            <p className='text-black/50 text-[13px] md:text-[16px]'>Reviews</p>
                        </div>
                    </div>
                </div>
                <div className="bg-[#151515] rounded-[24px] lg:rounded-[40px] p-5 lg:x-[45px] lg:pb-[40px] lg:pt-[65px] text-white flex flex-col gap-4 text-[13px] lg:text-lg">
                    <h6 className='poppins-semibold text-lg'>Lorem Ipsum</h6>
                    <p className='poppins-regular '>“Lorem ipsum dolor sit amet, consectetur dori adipiscing elit, sed do eiusmod tempor kil incididunt ut labore et dolore “Lorem ipsum dolor sit amet, consectetur dori adipiscing elit, sed do eiusmod tempor kil incididunt ut labore et dolore””</p>
                    <div className="flex gap-3 lg:gap-5 items-center">
                        <img src={PersonIcon} alt='avatar icon' className='w-[35px] lg:w-[70px]'/>
                        <div className="">
                            <p className='poppins-semibold '>Lorem</p>
                            <p className='poppins-regular'>Lorem Ipsum</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Testimonial