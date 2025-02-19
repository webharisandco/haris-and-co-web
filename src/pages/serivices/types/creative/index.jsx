import React from "react";
import Banner from "./Banner";
import AchivementSection from "./AchivementSection";
import AdsSection from "./AdsSection";
import ServiceSection from "./ServiceSection";
import useWorks from "./useWorks";
import BlogSection from "./BlogSection"

function Works() {
  const {services,blogs}= useWorks()
  return (
    <div className="bg-white">
      <Banner />
      <AchivementSection/>
      <AdsSection/>
      <ServiceSection services={services}/>
      <BlogSection blogs={blogs}/>
    </div>
  );
}

export default Works;
