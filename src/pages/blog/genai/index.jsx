import React from "react";
import RelatedBlogs from "@/components/ui/blog/RelatedBlogs";
import blogs from "@/utils/data/blogData";
import BlogDiv from "./BlogDiv";
import Banner from "./Banner";

function GenAIBlogDetails() {


  return (
    <div className="bg-black">
      <Banner />
      <BlogDiv />
      <RelatedBlogs blogs={blogs} />
    </div>
  );
}

export default GenAIBlogDetails;