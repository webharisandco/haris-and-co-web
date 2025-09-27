import React from 'react'


export default function AwardSection({ image, title, date, desc, brandImg }) {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10   py-[80px] bg-white'>
            <img className='xl:w-[640px] xl:h-[357px] object-contain ' src={image} alt="" />
            {/* <div className="font-[thin] flex flex-col gap-5 justify-between md:px-10">
                <img src={brandImg} alt="" className='w-[150px] 3xl:w-[200px] ' /> 
                <div className='text-base md:text-[20px] 3xl:text-[28px] text-black/75 flex justify-between lg:justify-start  font-bold gap-1 -mt-32'><span>{title} </span> <span className='hidden md:flex'> </span> </div>
                <p className='text-[20px] md:text-[18px]  3xl:text-[20px] text-black/75 leading-tight -mt-4 lg:-mt-12'>{desc}</p>
            </div> */}

                  {/* Content */}
      <div className="font-[thin] flex flex-col gap-6">
        {/* Brand */}


        {/* Title + Date */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-3">
          <h2 className="text-lg  md:text-2xl 3xl:text-[28px] text-black font-bold ">
            <span>{title} </span>
          </h2>
          
        </div>


        {/* <div className='text-base md:text-[20px] 3xl:text-[28px] text-black/75 flex justify-between lg:justify-start  font-bold gap-1 -mt-32'><span>{title} </span> <span className='hidden md:flex'> </span> </div> */}

        {/* Description */}
        <p className="text-base md:text-lg 3xl:text-xl text-black/75 leading-relaxed">
          {desc}
        </p>

        <img
          src={brandImg}
          alt="brand"
          className="w-[120px] md:w-[150px] 3xl:w-[200px] object-contain"
        />
      </div>
        </div>
    )
}






