import React from "react";
import Banner from "./Banner";
import BlogSection from "./BlogSection";
import useBlogs from "./useBlogs";

function Blog() {
   const { blogContent } = useBlogs()

  return (
    <div className="bg-black">
      <Banner />
      <BlogSection blogContent={blogContent} />
    </div>
  );
}

export default Blog;
