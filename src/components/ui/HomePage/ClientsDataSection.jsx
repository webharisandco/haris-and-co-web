import React from 'react'

export const ClientsDataSection = () => {
  return (
   <div className="bg-black py-[56px] md:py-[96px] bg-[#0E0E0E] w-full flex flex-col gap-[56px] md:gap-[87px] items-center justify-center">
     
     {/* Top text */}
     <div className="text-center px-[16px] md:px-[150px] 2xl:w-5/6 3xl:w-3/5">
       <p className="text-[22px] md:text-[35px] lg:text-[50px] leading-tight tracking-wide text-white font-normal">
         <span className="opacity-50 font-[HelveticaNeue] ">Crafting transformative </span>
         <span className="opacity-100">digital</span>
         <br />
         <span className="opacity-100">experiences</span> 
         <span className="opacity-50 font-[HelveticaNeue]"> for the world's leading</span>
         <br />
         <span className="opacity-50 font-[HelveticaNeue]">brands by bringing together</span>
         <br />
         <span className="opacity-50 font-[HelveticaNeue]">design, technology, </span>
         <span className="opacity-100">and marketing.</span>
       </p>
     </div>

     {/* Stats */}
     <div className="w-full lg:w-9/12 flex flex-col gap-[35px] md:gap-[50px] items-center lg:flex-row lg:justify-between mx-auto">
       <div className="flex flex-col text-center lg:text-start leading-none gap-1">
         <p className="text-[36px] md:text-[50px] lg:text-[60px] font-[helvetica-medium] text-white text-opacity-50">500+</p>
         <p className="text-[24px] md:text-[30px] lg:text-[40px] text-white text-opacity-70 font-[thin] w-fit">Clients</p>
       </div>
       <div className="flex flex-col text-center lg:text-start leading-none gap-1">
         <p className="text-[36px] md:text-[50px] lg:text-[60px] font-[helvetica-medium] text-white text-opacity-50">1000+</p>
         <p className="text-[24px] md:text-[30px] lg:text-[40px] text-white text-opacity-70 font-[thin] w-fit">Projects Done</p>
       </div>
       <div className="flex flex-col text-center lg:text-start leading-none gap-1">
         <p className="text-[36px] md:text-[50px] lg:text-[60px] font-[helvetica-medium] text-white text-opacity-50">5+</p>
         <p className="text-[24px] md:text-[30px] lg:text-[40px] text-white text-opacity-70 font-[thin] w-fit">Countries</p>
       </div>
     </div>

   </div>
  )
}
