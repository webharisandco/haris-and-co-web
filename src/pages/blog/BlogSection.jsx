import React, { useState } from 'react'

export default function BlogSection() {
    const [selectedBlog, setSelectedBlog] = useState(null);
    const blogTypes = ['All Works', 'Branding', 'Web Development & UI/UX', 'Creative', "Digital PR & Communication", "Performance Marketing", "Production", "SEO", "Social Media"];
    return (
        <div>
            <div className="bg-white">
                {blogTypes.map((blogType, index) => (
                    <div
                        key={index}
                        className={`px-[20px] py-[10px] cursor-pointer ${selectedBlog === index ? ' text-black' : 'text-black/60'}`}
                        onClick={() => setSelectedBlog(index)}
                    >
                        {blogType}
                    </div>
                ))}
            </div>
            <div className="bg-[#0E0E0E]"></div>
        </div>
    )
}
