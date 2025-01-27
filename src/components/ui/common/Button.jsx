import React from 'react'
import { Link } from 'react-router-dom'
import { RightArrow } from "@/assets/images/icons/RightArrow";
import { MoveRight } from 'lucide-react';
import RightSmallArrow from '@/assets/images/icons/rightArrow.png'
import blackRightArrow from '@/assets/images/icons/blackRightArrow.svg'


export default function Button({ text, href, className, color = 'black' }) {
    return (
        <div className="flex items-center ">
            <Link
                href={href}
                className={"group relative overflow-hidden text-[18px]  transition-colors duration-300 ease-in-out text-" + color + ' ' + className}>
                <div className={`px-[22px] py-[10px] flex items-center justify-center gap-[10px] border border-solid border-${color}  group-hover:bg-white group-hover:ps-[20px] group-hover:pr-[20px] group-hover:text-black w-[150px]`}>
                    <span className="text-nowrap">
                        {text}
                    </span>
                    {/* <MoveRight size={30} className='mt-1'/> */}
                    <img
                        src={blackRightArrow}
                        className="transition-all duration-300 ease-in-out w-6 group-hover:w-10 mt-1"
                    />
                    {/* <RightArrow width={40} className=" transition-all duration-300 delay-200 easeout mt-1" /> */}
                </div>
            </Link>
        </div>
    )
}

