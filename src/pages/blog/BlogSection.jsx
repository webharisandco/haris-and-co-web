import React, { useState } from "react";
import useBlogs from "./useBlogs";
import BlogDiv from "./BlogDiv";

export default function BlogSection({ blogContent }) {
  const [selectedBlog, setSelectedBlog] = useState(0);
  const blogTypes = [
    "All Works",
    "Branding",
    "Web Development & UI/UX",
    "Creative",
    "Digital PR & Communication",
    "Performance Marketing",
    "Production",
    "SEO",
    "Social Media",
  ];
  return (
    <div>
      <div className="bg-white flex justify-between flex-col lg:flex-row px-[16px] md:px-[50px] py-[40px] font-[Helvetica-Light]">
        {blogTypes.map((blogType, index) => (
          <div
            key={index}
            className={` md:px-[16px] py-[10px] cursor-pointer text-[17px] hover:text-black ${
              selectedBlog === index ? " text-black" : "text-black/60"
            }`}
            onClick={() => setSelectedBlog(index)}
          >
            {blogType}
          </div>
        ))}
      </div>
      <div className="bg-[#0E0E0E]  w-full px-[16px] md:px-[80px] py-[30px] md:py-[80px]">
        <div className="grid grid-rows-2 grid-cols-6 gap-8 gap-y-16">
          {blogContent.map((blog, idx) => (
            <BlogDiv
              key={idx}
              link={blog?.link}
              img={blog.img}
              title={blog.title}
              type={blog.type}
              date={blog.date}
              index={idx} // 👈 pass index here
              className={`${
                idx === 0
                  ? "hidden md:flex md:col-span-3 md:mr-6"
                  : idx === 1
                  ? "hidden md:flex md:col-span-3 md:ms-6"
                  : "col-span-6 md:col-span-2"
              }`}
            />
          ))}
        </div>
        <div className="border-b border-gray-600 w-fit mx-auto">
          <p className="text-gray-600">View All Blogs</p>
        </div>
      </div>
    </div>
  );
}
