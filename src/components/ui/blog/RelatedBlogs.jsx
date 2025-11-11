import React from 'react'
import { Link } from 'react-router-dom'
import useBlogs from '../../../pages/blog/useBlogs';

export default function RelatedBlogs({ blogs }) {
    const { blogContent } = useBlogs();
    return (
        <div className="bg-black px-[16px] md:px-[80px] py-[30px] lg:py-[55px]">
            <p className="text-white text-[32px] lg:text-[38px] mb-[44px]">Latest blogs and news</p>
            {/* <div className="grid grid-cols-1 lg:grid-cols-3 gap-[35px]">
                {blogs.map((blog) => (
                    <Link to={'/blogs/' + blog?.link} className="flex flex-col gap-[30px]">
                        <img className="w-[400px] h-[350px] object-contain" src={blog.img} alt="" />
                        <p className="text-[20px] hidden lg:block text-white/50">{blog.title}</p>
                        <p className="text-[24px] lg:text-[28px] text-white lg:leading-[36px]">{blog.heading}</p>
                        <p className="text-[20px] lg:text-[22px] block lg:hidden text-white/50">{blog.titile}</p>
                    </Link>
                ))}
            </div> */}

              <div className="bg-black grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[40px] gap-y-[60px]">
                {blogContent.map((blog, index) => (
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
        </div>
    )
}
