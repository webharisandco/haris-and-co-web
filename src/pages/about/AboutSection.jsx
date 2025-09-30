import React from "react";
import BannerImg from "@/assets/images/aboutPage/bnr.jpg";

export default function AboutSection() {
  return (
    <div className="bg-white px-[16px] md:px-[80px] pt-[50px] -mb-[70px] space-y-10 ">
      <img src={BannerImg} alt="" className="-translate-y-36 w-auto h-[232px] md:h-auto" />
      <div className=" flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap:14 3xl:gap-20 -translate-y-36">
        <h2 className="font-medium lg:w-1/2 text-[24px]  lg:text-[27px]  xl:text-[29px] 3xl:text-[40px] leading-none pe-4">
          Where Creativity Meets Strategy, Transforming Brands
        </h2>
        <div className=" lg:w-1/2 space-y-5  text-[20px] lg:text-[16px] 3xl:text-[20px] text-black/80">
          <p>
            We are an integrated marketing solutions provider that started off
            in 2020 with a tiny team of 6 members. Today we are 150+ members
            strong, providing 9 solutions, with a huge clientele. The work
            culture, client results, and client relations are at the core of who
            we are.
          </p>
          <p>
            Our services bring unique expertise to the table, ensuring that you
            get the right team for your project. From startups to established
            players, we have helped brands across industries to ignite their
            digital presence and drive revenue.
          </p>
        </div>
      </div>
    </div>
  );
}
