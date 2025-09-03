import React from "react";
import Banner from "./Banner";
import RelatedBlogs from "@/components/ui/blog/RelatedBlogs";
import blogs from "@/utils/data/blogData";
import BlogDiv from "./BlogDiv";

function BlogDetails() {


  return (
    <div className="bg-black">
      <Banner />
      <BlogDiv />
      <RelatedBlogs blogs={blogs} />
    </div>
  );
}

export default BlogDetails;
