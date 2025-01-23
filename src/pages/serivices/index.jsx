import React from "react";
import Header from "@/components/layout/Header";
import useServices from "./useServices";
import BrandingSection from "./BrandingSection";
import AchivementSection from "./AchivementSection";
import Footer from "../../components/layout/Footer";
import Banner from "./Banner";

function Services() {
  const { brandingContents } = useServices();

  return (
    <div className="">
      <Header />
      <Banner />
      <BrandingSection BrandingContents={brandingContents} />
      <AchivementSection />
      <Footer/>
    </div>
  );
}

export default Services;
