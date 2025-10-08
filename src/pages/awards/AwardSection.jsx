import React from "react";

export default function AwardSection({ image, title, date, desc, brandImg }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 py-10 lg:py-[80px] bg-white">
      {/* Image Section */}
      <div className="flex justify-center lg:justify-start">
        <img
          className="w-full max-w-[640px] h-auto object-contain "
          src={image}
          alt={title}
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col justify-center font-[thin] gap-6 px-4 md:px-0">
        {/* Title */}
        <h2 className="text-xl md:text-2xl xl:text-[28px] text-black font-bold leading-tight">
          {title}
        </h2>

        {/* Description */}
        <p className="text-base md:text-lg xl:text-xl text-black/75 leading-relaxed">
          {desc}
        </p>

        {/* Brand Image */}
        <img
          src={brandImg}
          alt="brand"
          className="w-[120px] md:w-[150px] xl:w-[200px] object-contain"
        />
      </div>
    </div>
  );
}
