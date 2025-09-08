import React from 'react'

export const ClientsDataSection = () => {
  return (
    <div className="py-[56px] md:py-[96px]  bg-[#0E0E0E] w-full flex flex-col gap-[56px] md:gap-[87px] items-center justify-center">
        <div className="text-center px-[16px]  md:px-[150px] 2xl:w-5/6  3xl:w-3/5">
          <p className="text-[22px] md:text-[35px] lg:text-[54px] text-white opacity-100 font-medium leading-tight sm:tracking-normal tracking-tighter">
            <span className="font-[thin] opacity-50">  Crafting transformative </span>digital experiences<span className="font-[thin] opacity-50"> for the world's leading
              brands by seamlessly blending design, technology,</span> and marketing.
          </p>
        </div>

        <div className="w-full flex flex-col gap-[35px] md:gap-[50px] lg:gap-0 items-center lg:flex-row lg:justify-around ">
          <div className="flex flex-col text-center lg:text-start leading-none gap-1">
            <p className="text-[36px] md:text-[50px] lg:text-[64px] font-[helvetica-medium]  text-white text-opacity-50">500+</p>
            <p className="text-[24px] md:text-[30px] lg:text-[34px] text-white text-opacity-50 font-[thin] w-fit">Clients</p>
          </div>
          <div className="flex flex-col text-center lg:text-start leading-none gap-1">
            <p className="text-[36px] md:text-[50px] lg:text-[64px] font-[helvetica-medium]  text-white text-opacity-50">1000+</p>
            <p className="text-[24px] md:text-[30px] lg:text-[34px] text-white text-opacity-50 font-[thin] w-fit">Projects Done
            </p>
          </div>
          <div className="flex flex-col text-center lg:text-start leading-none gap-1">
            <p className="text-[36px] md:text-[50px] lg:text-[64px] font-[helvetica-medium]  text-white text-opacity-50">4.9</p>
            <p className="text-[24px] md:text-[30px] lg:text-[34px] text-white text-opacity-50 font-[thin] w-fit">
            Rated on Google
            </p>
          </div>
        </div>
      </div>
  )
}
