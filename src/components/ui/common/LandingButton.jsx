import { ArrowUpRight } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const LandingButton = ({text,icon,className, size=25,href}) => {
    return (
        <Link
        to={href} 
        className={`group bg-[#7744D5] hover:bg-[#7744D5]/50 text-white py-[15px] px-[20px] rounded-xl flex justify-center gap-[10px] transition-all duration-300 font-[Abroregular] w-full sm:w-auto ${className}`}>
        <span className='whitespace-nowrap '>{text}</span>
        <span>
          {icon ?? <ArrowUpRight className='group-hover:rotate-45 transition-all duration-300' size={23} />}
        </span>
      </Link>
    )
}

export default LandingButton