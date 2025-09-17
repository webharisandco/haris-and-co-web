import React from "react";
import { Link } from "react-router-dom";
import { MoveRight } from "lucide-react";
import useBlogs from "../../../pages/blog/useBlogs";

export const BlogSection = () => {
  const { blogContent } = useBlogs();

  return (
   <div className="px-4 md:px-[40px] lg:px-[80px] bg-[black]">
  <div className="py-12 lg:py-[57px]">
    <p className="text-[26px] leading-[36px] md:text-[34px] lg:leading-[46px] font-medium text-white">
      Latest News & Blogs
    </p>
  </div>

  {/* Blog Grid */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[40px] gap-y-[60px]">
    {blogContent.slice(0, 3).map((blog, index) => (
      <div
        key={index}
        className="flex flex-col gap-5 bg-transparent"
      >
        {/* Blog Image */}
        <div className="w-full">
          <Link to={`/blogs/${blog.link}`}>
            <img
              src={blog.img}
              alt={blog.title}
              className="w-full h-[250px] object-cover hover:opacity-90 transition duration-300"
            />
          </Link>
        </div>

        {/* Blog Details */}
        <div className="w-full md:max-w-[450px] flex flex-col text-left mt-3">
          <p className="text-[16px] md:text-[18px] lg:text-[20px] font-[helvetica-medium] text-white leading-snug">
            {blog.title}
          </p>
          <p className="text-white/55 text-[12px] md:text-[13px] lg:text-[14px] mt-1">
            {blog.date}
          </p>
        </div>
      </div>
    ))}
  </div>

  {/* View All Blogs Link */}
  <div className="w-full flex justify-center mt-[80px] pb-[80px] h-full">
    <Link
      to="/blogs"
      className="group flex gap-[11px] text-white/55 border-b border-white/55 pb-0.5 hover:text-white hover:border-white transition-all duration-300"
    >
      <span className="text-[16px]">View All Blogs</span>
      <MoveRight
        size={28}
        className="text-white/55 transition-all duration-300 group-hover:text-white"
        strokeWidth={1.8}
      />
    </Link>
  </div>
</div>


  );
};
