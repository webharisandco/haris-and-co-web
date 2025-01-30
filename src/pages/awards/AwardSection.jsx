import React from 'react'


export default function AwardSection({image,title,date,desc,brandImg}) {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10   py-[80px] bg-white'>
            <img src={image} alt="" />
            <div className="font-[thin] flex flex-col justify-between px-10">
                <div className='text-[20px] text-black/75'><span>{title} </span> . {date}</div>
                <p className='text-[18px] leading-tight -mt-4'>{desc}</p>
                <img src={brandImg} alt="" className='w-[150px]' />
            </div>
        </div>
    )
}
