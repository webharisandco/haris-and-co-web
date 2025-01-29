import React from "react";

function BlogSection({ blogs }) {
  return (
    <div className="bg-black px-[16px] lg:px-[80px] py-[30px] lg:py-[55px]">
      <p className="text-white text-[32px] lg:text-[40px] mb-[44px]">Latest blogs and news</p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-[35px]">
        {blogs.map((blog) => (
          <div className="flex flex-col gap-[30px]">
            <img className="w-fit h-fit" src={blog.img} alt="" />
            <p className="text-[22px] hidden lg:block text-white/50">{blog.titile}</p>
            <p className="text-[24px] lg:text-[30px] text-white">{blog.heading}</p>
            <p className="text-[20px] lg:text-[22px] block lg:hidden text-white/50">{blog.titile}</p>
            <p className="text-[22px] hidden lg:block text-white/50">{blog.date}</p>
            <div className="flex justify-between  lg:hidden">
              <p className="text-[20px] text-white/50">November 07, 2024   . </p>
              <p className="text-[20px] text-white/50"> 6  min read</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogSection;
