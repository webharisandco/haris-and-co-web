import React from "react";
import { Link } from "react-router-dom";
import { MoveRight } from "lucide-react";
import useBlogs from "../../../pages/blog/useBlogs";

export const BlogSection = () => {
  const { blogContent } = useBlogs();

  return (
    <div className="px-4 md:px-[40px] lg:px-[80px] bg-[#141414] ">
      <div className="py-12 lg:py-[57px] ">
        <p className="text-[29px] leading-[39px] md:text-[40px] lg:leading-[50px] font-medium text-white">
          Latest News & Blogs
        </p>
      </div>

      {/* Loop through first 3 blogs */}
      {blogContent.slice(0, 3).map((blog, index) => (
        <div
          key={index}
          className={`flex flex-col lg:flex-row ${
            index !== 0 ? "mt-[105px]" : ""
          } gap-5 lg:gap-[81px] pb-[40px] lg:pb-[81px] w-full ${
            index !== blogContent.slice(0, 3).length - 1 ? "border-b" : ""
          }`}
          style={{ borderColor: "rgba(255, 255, 255, 0.55)" }}
        >
          {/* Blog Image */}
          <div className="w-full md:max-w-[500px]">
            <Link to={`/blogs/${blog.link}`}>
              <img
                src={blog.img}
                alt={blog.title}
                className="w-full md:max-w-[450px] object-cover hover:opacity-90 transition duration-300"
              />
            </Link>
          </div>

          {/* Blog Details */}
          <div className="flex flex-col justify-between">
            <div className="flex flex-col gap-3">
              <p className="text-[29px] leading-[39px] lg:leading-[50px] lg:text-[50px] font-[helvetica-medium] text-white">
                {blog.title}
              </p>
              {/* Uncomment if you want blog type */}
              {/* <p className="text-[20px] lg:text-[24px] text-white/55 mb-10">
                {blog.type}
              </p> */}
            </div>
            <div>
              <p className="text-white/55 text-[20px] lg:text-[24px]">
                {blog.date}
              </p>
            </div>
          </div>
        </div>
      ))}

      {/* View All Blogs Link */}
      <div className="w-full flex justify-center mt-[80px] pb-[80px] h-full">
        <Link
          to="/blogs"
          className="group flex gap-[11px] text-white/55 border-b border-white/55 pb-0.5 hover:text-white hover:border-white transition-all duration-300"
        >
          <span className="text-[18px]">View All Blogs</span>
          <MoveRight
            size={30}
            className="text-white/55 transition-all duration-300 group-hover:text-white"
            strokeWidth={1.8}
          />
        </Link>
      </div>
    </div>
  );
};
