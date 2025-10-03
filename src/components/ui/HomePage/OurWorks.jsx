import React from "react";
import OurWorksData from "@/utils/data/ourWorks";
import { Link } from "react-router-dom";
import { MoveRight } from "lucide-react";

function OurWorks() {
  return (
    <div className="px-4 sm:px-8 md:px-12 lg:px-20 mt-10 md:mt-20">
      {/* Section Title */}
      <p className="text-2xl sm:text-3xl lg:text-4xl font-[helvetica-medium] text-center lg:text-left">
        See Our Works
      </p>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 mt-8 md:mt-14">
        {OurWorksData.slice(0, 6).map((data) => (
          // <Link to={"works/branding"} key={data.id}>
            <div className="flex flex-col h-full">
              {/* Image */}
              <img
                className="w-full  object-contain "
                src={data.image}
                alt={data.heading}
              />

              {/* Heading */}
              <p className="font-[helvetica-medium] mt-3 text-lg md:text-xl  leading-snug text-left">
                {data.heading}
              </p>

              {/* Description */}
              <p className="text-black font-normal font-[HelveticaNeue] tracking-wide leading-relaxed opacity-70 text-sm   mt-1 leading-relaxed text-left break-words">
                {data.description}
              </p>
            </div>
          // </Link>
        ))}
      </div>

      {/* View All Works Link */}
      <Link
        to="/works"
        className="group text-base sm:text-lg md:text-xl text-black/55 border-b border-b-black/55 flex w-fit mx-auto gap-2 sm:gap-3 md:gap-4 my-10 md:my-20 justify-center items-center hover:text-black hover:border-b-black transition-all duration-300"
      >
        <span>See Our Works</span>
        <MoveRight
          size={26}
          className="text-black/55 transition-all duration-300 group-hover:text-black"
          strokeWidth={1.8}
        />
      </Link>
    </div>
  );
}

export default OurWorks;
