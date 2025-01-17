import { ArrowUpRight } from 'lucide-react'
import React from 'react'

const LandingButton = ({text,icon,className, size=25}) => {
    return (
        <button className={`group bg-[#7744D5]  hover:bg-[#7744D5]/50 text-white py-[15px] px-[20px] rounded-xl flex gap-[10px] transition-all duration-300 font-[Abroregular] items-center text-md ${className} `}>
            <span className='text-nowrap'>{text}</span>
            <span>{icon ?? <ArrowUpRight className='group-hover:rotate-45 transition-all duration-300 pb-0.5'size={size} />}</span>
        </button>
    )
}

export default LandingButton