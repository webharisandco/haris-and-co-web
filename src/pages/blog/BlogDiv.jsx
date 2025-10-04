import React from "react";
import { Link } from "react-router-dom";

export default function BlogDiv({ img, title, type, date, className, link, index}) {
  return (
    // <Link to={'/blog/1'}>
    <Link
      to={`/blogs/${link}`}
      className={`flex flex-col  gap-5 md:gap-[30px] h-fit ${className} cursor-pointer`}
    >
     <img
        className={`${index < 2 ? "w-fit h-fit" : " object-contain"}`}
        src={img}
        alt={title}
      />
      {/* <h6 className="text-[20px] hidden lg:block text-white/50">{type}</h6> */}
      <p className="font-medium text-white tracking-wide text-[20px] md:text-[28px] lg:text-[32px] my-[10px] text-left">
        {title}
      </p>
      <p className="text-[20px] lg:text-[22px] block lg:hidden text-white/50">
        {type}
      </p>
      <p className="text-[20px] hidden lg:block text-white/50">{date}</p>
      <div className="flex justify-between  lg:hidden mt-8">
        <p className="text-[20px] text-white/50">November 07, 2024 . </p>
        {/* <p className="text-[20px] text-white/50"> 6  min read</p> */}
      </div>
    </Link>
    // </Link>
  );
}
