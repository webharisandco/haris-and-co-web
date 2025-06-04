import React from "react";
import Blog1 from "@/assets/images/blogs/blg1.webp";
import Blog2 from "@/assets/images/blogs/blg2.webp";
import Blog3 from "@/assets/images/blogs/blg3.webp";
import RightArrowOfWhite from "@/assets/images/icons/rightArrowOffwhite.png";
import { Link } from 'react-router-dom';
import { MoveRight } from "lucide-react";

export const BlogSection = () => {
  return (
    <div className="px-4 md:px-[40px] lg:px-[80px] bg-[#141414] ">
      <div className="py-12 lg:py-[57px] ">
        <p className="text-[29px] leading-[39px] lg:leading-[50px]  md:text-[40px] font-medium text-white">
          Latest News & Blogs
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-5 lg:gap-[81px] pb-[40px] lg:pb-[81px] w-full border-b" style={{ borderColor: "rgba(255, 255, 255, 0.55)" }}>
        <div className="w-full md:max-w-[500px]">
          <img src={Blog1} alt="" className="w-full md:max-w-[450px] object-cover "/>
        </div>
        <div className="flex flex-col justify-between">
          <div className="flex flex-col gap-3">
            <p className=" text-[29px] leading-[39px] lg:leading-[50px]  lg:text-[50px] font-[helvetica-medium] text-white ">
              What is SEO in Digital Marketing? How It Works and Why It’s Important
            </p>
            {/* <p className="text-[20px] lg:text-[24px] text-white/55 mb-10">Web Development & UI/UX</p> */}
          </div>
          <div>
            <p className="text-white/55 text-[20px] lg:text-[24px]">
           May 24, 2025
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row mt-[105px] gap-5 lg:gap-[81px] pb-[40px] lg:pb-[81px] w-full border-b" style={{ borderColor: "rgba(255, 255, 255, 0.55)" }}>
       <div className="w-full md:max-w-[500px]">
          <img src={Blog2} alt="" className="w-full md:max-w-[450px] object-cover "/>
        </div>
        <div className="flex flex-col justify-between">
          <div className="flex flex-col gap-3">
            <p className="text-[29px] leading-[39px] lg:leading-[50px] lg:text-[50px] font-[helvetica-medium] text-white ">
            SEO Content Writing: What It Is, How It Works & Why It Matters
            </p>
            {/* <p className="text-[20px] lg:text-[24px] text-white/55 mb-10">Web Development & UI/UX</p> */}
          </div>
          <div>
            <p className="text-white/55 text-[20px] lg:text-[24px]">
             May 24, 2025
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row mt-[105px] gap-5 lg:gap-[81px] pb-[40px] lg:pb-[81px] w-full " >
        <div className="w-full md:max-w-[500px]">
          <img src={Blog3} alt="" className="w-full md:max-w-[450px] object-cover "/>
        </div>
        <div className="flex flex-col justify-between">
          <div className="flex flex-col gap-3">
            <p className="text-[29px] leading-[39px] lg:leading-[50px] lg:text-[50px] font-[helvetica-medium] text-white ">
              How Digital Marketing is Transforming Real Estate
            </p>
            {/* <p className="text-[20px] lg:text-[24px] text-white/55 mb-10">Web Development & UI/UX</p> */}
          </div>
          <div>
            <p className="text-white/55 text-[20px] lg:text-[24px]">
            May 24, 2025
            </p>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center mt-[80px] pb-[80px]  h-full">
          <Link to="/clients" className="group flex gap-[11px] text-white/55 border-b border-white/55 pb-0.5 hover:text-white hover:border-white transition-all duration-300">
            <span
              
              className="text-[18px]  text-opacity-[55%] "
            >
              View All Testimonials
            </span>
            <MoveRight size={30}  className='text-white/55 transition-all duration-300 group-hover:text-white'strokeWidth={1.8}/>
{/* 
            <iclassName="w-full"mg
              src={RightArrowOfWhite}
              alt="Right arrow"
              className="w-[26px] font-[helvetica-medium] h-full object-contain"
            /> */}
          </Link>
        </div>
    </div>
  );
};
