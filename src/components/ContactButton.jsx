import React from 'react'
import { Link } from 'react-router-dom'
import { RightArrow } from "@/assets/images/icons/RightArrow";
import RightSmallArrow from '@/assets/images/icons/rightArrow.png'


export default function ContactButton({ text, href }) {
    return (
        <div className="flex items-center ">
            <Link
                href={href}
                className="group relative overflow-hidden text-[18px] text-white transition-colors duration-300 ease-in-out "
            >
                <div className="px-[22px] py-[12px] flex items-center gap-[10px] border border-solid border-white  group-hover:bg-white group-hover:ps-[20px] group-hover:pr-[20px] group-hover:text-black w-[175px]">
                    <span className="transition-transform duration-300 ease-in-out group-hover:-translate-x-2 text-nowrap">
                        {text}
                    </span>
                    <div className="">
                        <img
                            src={RightSmallArrow}
                            className="transition-all duration-300 delay-200 ease-in-out relative group-hover:absolute opacity-100 group-hover:opacity-0"
                        />
                        <RightArrow className="opacity-0 transition-all duration-300 delay-200 easeout group-hover:opacity-100 absolute group-hover:relative group-hover:-translate-x-2"
 />
                    </div>
                </div>
            </Link>
        </div>
    )
}

