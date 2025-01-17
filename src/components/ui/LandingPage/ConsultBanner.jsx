import React from 'react'
import LandingButton from '../common/LandingButton'

const ConsultBanner = () => {
    return (
        <div className=" px-[16px] py-[50px] md:px-[80px] lg:px-[100px]">
        <div className='bg-[#F1C644] w-full rounded-[10px] md:rounded-[30px] lg:rounded-[40px] flex     justify-center md:justify-between px-[16px] md:px-[50px] lg:px-[70px] py-[55px] items-center gap-10 flex-col md:flex-row'>
            <p className='md:text-[90px] text-[40px] bebas-neue-regular font-bold text-white text-center md:text-start'>Let’s Discuss How We Can 2x Your Brand With Ads</p>
            <LandingButton text={'Consult Us'} className={'px-[45px] py-[25px] '} />
        </div>
        </div>
    )
}

export default ConsultBanner