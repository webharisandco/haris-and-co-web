import React from 'react'
import { Link } from 'react-router-dom'
import { RightArrow } from "@/assets/images/icons/RightArrow";
import { MoveRight } from 'lucide-react';
import WhiteArrow from '@/assets/images/icons/whiteArrow.svg'
import blackRightArrow from '@/assets/images/icons/blackRightArrow.svg'


export default function Button({ text, href, className, btnClassName, color = 'black' }) {
    return (
        <div className="flex items-center overflow-hidden">
            <Link
                to={href}
                className={"group relative overflow-hidden   transition-colors duration-300 ease-in-out text-black "+ className}>
                <div className={`transition-all duration-300 ease-in-out px-[20px] py-[10px] flex items-center justify-center gap-[10px] border border-solid border-black  group-hover:bg-black group-hover:ps-[20px] group-hover:pr-[20px] group-hover:text-white w-[150px] ${btnClassName}`}>
                    <span className=" transition-transform duration-300 ease-in-out group-hover:-translate-x-0.5 text-nowrap">
                        {text}
                    </span>
                        <img
                            src={blackRightArrow}
                            className="transition-all duration-300 delay-200 ease-in-out relative group-hover:absolute opacity-100 group-hover:opacity-0  group-hover:-right-10"
                        />
                        <img
                            src={WhiteArrow}
                            className="opacity-0 transition-all duration-300  easeout absolute group-hover:opacity-100  group-hover:relative group-hover:translate-x-0 group-hover:right-1 -right-10 "
                        />
                </div>
            </Link>
        </div>
    )
}

