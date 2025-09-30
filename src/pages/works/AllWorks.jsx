import React from "react";

export default function AllWorks({ menuItems, selectedId, handleClick, content }) {
  return (
    <div className="bg-white flex flex-col-reverse lg:items-center lg:flex-row py-32 justify-between items-center px-[16px] lg:px-[80px] min-h-[632px]">
      <div className="w-full lg:w-8/12 2xl:w-7/12 3xl:w-3/5">
        <p className="text-black text-[34px] xl:text-[48px] font-[thin]">{content}</p>
      </div>
      <div className="w-full lg:w-fit my-[30px] lg:my-0">
        <ul className="text-black/50 font-[thin] text-lg lg:text-2xl text-start lg:text-end flex flex-col gap-[12px] 3xl:gap-5">
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
