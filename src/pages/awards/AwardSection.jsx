import React from 'react'


export default function AwardSection({ image, title, date, desc, brandImg }) {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10   py-[80px] bg-white'>
            <img className='xl:w-[640px] xl:h-[357px] object-contain ' src={image} alt="" />
            <div className="font-[thin] flex flex-col gap-10 justify-between md:px-10">
                <div className='text-base md:text-[20px] 3xl:text-[24px] text-black/75 flex justify-between lg:justify-start gap-1'><span>{title} </span> <span className='hidden md:flex'> </span> </div>
                <p className='text-[20px] md:text-[18px]  3xl:text-[20px] text-black/75 leading-tight -mt-4 3xl:-mt-12'>{desc}</p>
                <img src={brandImg} alt="" className='w-[150px] 3xl:w-[200px]' /> 
            </div>
        </div>
    )
}
