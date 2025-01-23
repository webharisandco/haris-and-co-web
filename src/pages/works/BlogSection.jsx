import React from "react";

function BlogSection({ blogs }) {
  return (
    <div className="bg-black px-[80px] py-[55px]">
      <p className="text-white text-[40px] mb-[44px]">Latest blogs and news</p>
      <div className="grid grid-cols-3 gap-[35px]">
        {blogs.map((blog) => (
          <div className="flex flex-col gap-[30px]">
            <img className="w-fit h-fit" src={blog.img} alt="" />
            <p className="text-[22px] text-white/50">{blog.titile}</p>
            <p className="text-[30px] text-white">{blog.heading}</p>
            <p className="text-[22px] text-white/50">{blog.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogSection;
