import React from "react";
import Banner from "./Banner";
import Header from "@/components/layout/Header";
import AchivementSection from "./AchivementSection";
import AdsSection from "./AdsSection";
import ServiceSection from "./ServiceSection";
import useWorks from "./useWorks";
import BlogSection from "./BlogSection"
import Footer from "@/components/layout/Footer";

function Works() {
  const {services,blogs}= useWorks()
  return (
    <div className="bg-white">
      <Header />
      <Banner />
      <AchivementSection/>
      <AdsSection/>
      <ServiceSection services={services}/>
      <BlogSection blogs={blogs}/>
      <Footer/>
    </div>
  );
}

export default Works;
