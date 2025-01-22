import React from 'react'
import Img1 from '@/assets/images/landing/case-study/img1.svg'
import Img2 from '@/assets/images/landing/case-study/img2.svg'
import Img3 from '@/assets/images/landing/case-study/img3.svg'
import { Clock } from 'lucide-react'
import LandingButton from '../common/LandingButton'


const CaseStudy = () => {
    return (
        <div className='px-[16px] md:px-[80px] lg:px-[100px] py-[50px]'>
            <div className="flex justify-center items-center flex-col gap-3 mb-[40px] md:mb-[60px] lg:mb-[70px] text-center">
                <h3 className='font-[Abrobold] text-[30px] md:text-[40px] lg:text-[48px]'>Our Case Studies</h3>
                <p className='text-[16px] md:text-[18px] lg:text-[20px] poppins-medium'>Read in detail about our stories of victories.</p>
            </div>
            <div className="flex flex-col lg:flex-row gap-5 poppins-regular">
                <div className="shadow-[6.91px_6.91px_20.74px_0px_#00000026] px-4 py-3 rounded-3xl lg:w-1/2 space-y-9">
                    <img src={Img1} className="h-[310px] lg:h-auto object-cover rounded-[14px] w-full" alt="" />
                    <div className="flex flex-col gap-3 md:gap-5 lg:gap-7 px-2 lg:px-5">
                        <h6 className='text-[25px] md:text-[30px] lg:text-[32px] poppins-semibold w-11/12 lg:w-3/4'>Generated a Massive ₹10 Million in 6 Months</h6>
                        <div className="flex gap-3 text-[11px] md:text-[15px] lg:text-[14px]  2xl:text-[17px] items-center"><Clock color='#fff' fill='#888888' /><p className='text-black/60'>March 8, 2024</p></div>
                        <p className='text-[11px] md:text-[15px] lg:text-[14px]  2xl:text-[17px] w-11/12 lg:w-10/12 mb-4 text-black/60'>Explore how we transformed Bluetyga into a revenue-generating company from scratch.</p>
                    </div>
                </div>

                <div className="flex flex-col lg:w-1/2 gap-7">
                    <div className="shadow-[6.91px_6.91px_20.74px_0px_#00000026] px-2 md:px-4 py-4 rounded-3xl grid lg:grid-cols-[1fr_1.1fr] gap-10">
                        <img src={Img2} className="h-[310px] w-full lg:h-auto rounded-[14px] object-cover" alt="" />
                        <div className=" flex flex-col gap-3 md:gap-5 justify-center px-2 lg:pr-5 ">
                            <h6 className='text-[25px] poppins-medium'>Generated a Massive ₹10 Million in 6 Months</h6>
                            <div className="flex gap-3 text-[11px] md:text-[15px] lg:text-[14px]  2xl:text-[17px] items-center"><Clock color='#fff' fill='#888888' /><p className='text-black/60'>March 8, 2024</p></div>
                            <p className='text-[11px] md:text-[15px] lg:text-[14px]  2xl:text-[17px] text-black/60 mt-5'>Dive in to learn how we improved the online sales rate of Walkaroo - one of India's leading footwear brands.
                            </p>
                        </div>
                    </div>
                    <div className="shadow-[6.91px_6.91px_20.74px_0px_#00000026] px-4 py-3 rounded-3xl hidden lg:grid grid-cols-[1fr_1.1fr] gap-10">
                        <img src={Img3} className="" alt="" />
                        <div className="flex flex-col gap-7 justify-center ">
                            <h6 className='text-[25px] poppins-medium'>Scaled From ₹900K to ₹2 Million
                            </h6>
                            <div className="flex gap-3 text-[11px] md:text-[15px] lg:text-[14px]  2xl:text-[17px] items-center"><Clock color='#fff' fill='#888888' /><p className='text-black/60'>March 8, 2024</p></div>
                            <p className='text-[11px] md:text-[15px] lg:text-[14px]  2xl:text-[17px] text-black/60'>Explore how we transformed Bluetyga into a revenue-generating company from scratch.</p>
                        </div>
                    </div>
                </div>
            </div>
            <LandingButton text={'View More'} className={'mx-auto mt-[60px]'} />
        </div>
    )
}

export default CaseStudy