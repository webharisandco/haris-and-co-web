import React from "react";
import Banner from "./Banner";
import RelatedBlogs from "@/components/ui/blog/RelatedBlogs";
import useBlogDetails from "./useBlogDetails";
import BlogDiv from "./BlogDiv";

function BlogDetails() {

  const { blogs,blogContent } = useBlogDetails()

  return (
    <div className="bg-black">
      <Banner />
      <BlogDiv blogContent={blogContent}/>
      <RelatedBlogs blogs={blogs} />
    </div>
  );
}

export default BlogDetails;
