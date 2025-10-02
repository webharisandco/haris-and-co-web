import React from "react";
import BlogDiv from "./BlogDiv";

export default function BlogSection({ blogContent }) {
  // const [selectedBlog, setSelectedBlog] = useState(0);

  // If you want to enable filtering by blog types, uncomment and customize
  // const blogTypes = [
  //   "All Works",
  //   "Branding",
  //   "Web Development & UI/UX",
  //   "Creative",
  //   "Digital PR & Communication",
  //   "Performance Marketing",
  //   "Production",
  //   "SEO",
  //   "Social Media",
  // ];

  return (
    <div>
      {/* Filter bar */}
      <div className="bg-white flex justify-between flex-col lg:flex-row px-[16px] md:px-[50px] py-[40px] font-[Helvetica-Light]">
        {/* Uncomment below to show blog type filters */}
        {/* {blogTypes.map((blogType, index) => (
          <div
            key={index}
            className={`md:px-[16px] py-[10px] cursor-pointer text-[17px] hover:text-black ${
              selectedBlog === index ? "text-black" : "text-black/60"
            }`}
            onClick={() => setSelectedBlog(index)}
          >
            {blogType}
          </div>
        ))} */}
      </div>

      {/* Blog images grid */}
      <div className="bg-[#0E0E0E] w-full px-[16px] md:px-[80px] py-[30px] md:py-[80px]">
        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-8 gap-y-12">
          {blogContent.map((blog, idx) => (
            <BlogDiv
              key={idx}
              link={blog?.link}
              img={blog.img}
              title={blog.title}
              type={blog.type}
              date={blog.date}
              index={idx}
              className="col-span-1"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
