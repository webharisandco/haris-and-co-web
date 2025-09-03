import React from "react";
import blogImg from "@/assets/images/blogDetails/dig-m1.jpg";

function Banner() {
  return (
    <div className=" px-[16px] md:px-[80px] pt-[180px] pb-[180px] min-h-[700px flex items-center  lg:min-h-[632px] bg-[#0E0E0E]">
      <div className=" flex flex-col gap-[35px]">
        <h1 className="text-[32px] text-96px text-white">
          How is Digital Marketing Different from Traditional Marketing?
        </h1>
        <p className="text-white text-[20px] md:text-[30px] font-[thin] w-4/5">
          Marketing has undergone a dramatic transformation with the rise of
          technology. Businesses no longer depend solely on billboards, TV ads,
          and print media to connect with their audience. The rise of the
          internet and digital technologies has given birth to digital
          marketing, a dynamic and data-driven approach that has transformed how
          brands connect with consumers. But how exactly is digital marketing
          different from traditional marketing? In this blog, we’ll explore the
          key differences to help you understand why digital marketing is
          dominating the modern marketing landscape.
        </p>
        <img src={blogImg} alt="" />
      </div>
    </div>
  );
}

export default Banner;
