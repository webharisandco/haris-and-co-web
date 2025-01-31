import React from 'react'

export default function BlogDiv({ img, title, type, date, className }) {
  return (
    <div className={`flex flex-col gap-5 md:gap-[30px] h-fit ${className}`}>
      <img className="w-fit h-fit" src={img} alt="" />
      <h6 className="text-[20px] hidden lg:block text-white/50">{type}</h6>
      <p className="text-[32px] lg:text-[40px] text-white lg:leading-[36px] tracking-tighter">{title}</p>
      <p className="text-[20px] lg:text-[22px] block lg:hidden text-white/50">{type}</p>
      <p className="text-[20px] hidden lg:block text-white/50">{date}</p>
      <div className="flex justify-between  lg:hidden mt-8">
        <p className="text-[20px] text-white/50">November 07, 2024   . </p>
        <p className="text-[20px] text-white/50"> 6  min read</p>
      </div>
    </div>
  )
}
