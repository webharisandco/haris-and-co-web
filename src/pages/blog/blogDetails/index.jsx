import React from "react";
import Banner from "./Banner";
import RelatedBlogs from "./RelatedBlogs";
import useBlogDetails from "./useBlogDetails";
import BlogDiv from "./BlogDiv";

function BlogDetails() {

  const { blogs } = useBlogDetails()

  return (
    <div className="bg-black">
      <Banner />
      <BlogDiv />
      <RelatedBlogs blogs={blogs} />
    </div>
  );
}

export default BlogDetails;
