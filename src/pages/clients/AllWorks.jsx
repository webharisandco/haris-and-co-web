import React, { useState } from "react";

function AllWorks({menuItems,handleClick,selectedId,content}) {
  
  return (
    <div className="bg-white flex flex-col lg:items-center lg:flex-row pt-[18px] lg:pt-0 justify-between   items-center px-[16px] lg:px-[80px] min-h-[700px]">
      <div className="w-full  lg:w-8/12 2xl:w-10/12">
        <p className="text-black text-48 font-[thin]">{content}</p>
      </div>
      <div className=" w-full lg:w-fit my-[30px] lg:my-0">
      <ul className="text-black/50 font-[thin] text-[24px] text-start lg:text-end flex flex-col gap-[12px]">
      {menuItems.map((item) => (
        <li
          key={item.id}
          onClick={() => handleClick(item.id, item.content)}
          className={`cursor-pointer hover:text-black ${
            selectedId === item.id ? "text-black" : "text-black/50"
          }`}
        >
          {item.label}
        </li>
      ))}
    </ul>
      </div>
    </div>
  );
}

export default AllWorks;
