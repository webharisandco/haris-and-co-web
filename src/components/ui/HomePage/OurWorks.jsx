import React from "react";
import OurWorksData from "@/utils/data/ourWorks";
import RightArrowOfBlack from "@/assets/images/icons/rightArrowOfBlack.png";
import { Link } from "react-router-dom";
import { MoveRight } from "lucide-react";

function OurWorks() {
  return (
    <div className="px-[17px] md:px-[40px] lg:px-[80px] mt-[40px] md:mt-[80px]">
      <p className="text-[36px] lg:text-[40px] font-[helvetica-medium]">
        See Our Works
      </p>
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-y-[49px] md:gap-y-[100px] lg:gap-y-[150px] gap-x-[120px] mt-[40px] md:mt-[60px] lg:mt-[80px]">
        {OurWorksData.slice(0, 4).map((data) => (
          <Link to={"works/branding"}>
            <div
              key={data.id}
              className={`h-full flex flex-col ${
                data.id % 2 === 0 ? "mt-0 lg:mt-[78px]" : ""
              }`}
            >
              <img
                className="w-full h-[369px] object-cover lg:object-contain lg:h-full"
                src={data.image}
                alt={data.heading}
              />

              <p className="font-[helvetica-medium] pl-[5px] lg:pl-0 mt-[16px] lg:mt-0 tracking-tighter text-[24px] md:text-[36px] text-left ml-[-11px]">
                {data.heading}
              </p>
              <p className="text-black font-[Helvetica-Light] font-light opacity-55 text-left text-[16px] md:text-[24px]">
                {data.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
      <Link
        to="/works"
        className="group text-[18px] text-black/55 border-b border-b-black/55 flex w-fit mx-auto gap-[11px] my-[56px] md:my-[150px] justify-center items-center hover:text-black hover:border-b-black transition-all duration-300"
      >
        <span className="">See Our Works</span>
        <MoveRight
          size={30}
          className="text-black/55 transition-all duration-300 group-hover:text-black"
          strokeWidth={1.8}
        />
      </Link>
    </div>
  );
}

export default OurWorks;
