import React from 'react'
import ResultImg from '@/assets/images/landing/ResultImg.png'
import LandingButton from '../common/LandingButton'

const ResultSection = () => {
    return (
        <div className='flex flex-col gap-[70px] md:px-[80px] py-[50px] font-[Abrobold] text-white'>
            <h4 className='text-[30px] md:text-[40px] lg:text-[48px] mx-auto px-[50px] text-center'>Don’t Take Our Word for It <br />View Our Results Instead</h4>
            <div className="px-4">
                <img src={ResultImg} className="" alt="Showing Results" />
            </div>
            <LandingButton text={'Check Out Our Case Studies'} className={'bg-transparent hover:bg-transparent hover:text-white/70 ms-auto text-[11px] gap-2'} size={20}/>
        </div>
    )
}

export default ResultSection