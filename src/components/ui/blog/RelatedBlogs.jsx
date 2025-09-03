import React from 'react'
import { Link } from 'react-router-dom'

export default function RelatedBlogs({ blogs }) {
    return (
        <div className="bg-black px-[16px] md:px-[80px] py-[30px] lg:py-[55px]">
            <p className="text-white text-[32px] lg:text-[38px] mb-[44px]">Latest blogs and news</p>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-[35px]">
                {blogs.map((blog) => (
                    <Link to={'/blogs/' + blog?.link} className="flex flex-col gap-[30px]">
                        <img className="w-[400px] h-[350px] object-cover" src={blog.img} alt="" />
                        <p className="text-[20px] hidden lg:block text-white/50">{blog.title}</p>
                        <p className="text-[24px] lg:text-[28px] text-white lg:leading-[36px]">{blog.heading}</p>
                        <p className="text-[20px] lg:text-[22px] block lg:hidden text-white/50">{blog.titile}</p>
                        {/* <p className="text-[20px] hidden lg:block text-white/50">{blog.date}</p> */}
                    </Link>
                ))}
            </div>
        </div>
    )
}
