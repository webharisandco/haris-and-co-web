import React from 'react'
import RightArrowOfWhite from "@/assets/images/icons/rightArrowOffwhite.png";
import { Link } from 'react-router-dom';


export default function LinkWithArrow({ href, text, className }) {
    return (
        <div className={className}>
            <Link to={href} className=" flex gap-[11px]  border-b border-white/55 pb-0.5 mx-auto">
                <span
                    className="text-[18px]  text-opacity-[55%] "
                >
                    {text}
                </span>
                <img
                    src={RightArrowOfWhite}
                    alt="Right arrow"
                    className="w-[26px] font-medium h-full object-contain"
                />
            </Link>
        </div>
    )
}
