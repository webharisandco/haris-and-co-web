import React from "react";
import useServices from "./useServices";
import BrandingSection from "./BrandingSection";
import AchivementSection from "./AchivementSection";
import Banner from "./Banner";

function Services() {
  const { brandingContents } = useServices();

  return (
    <div className="">
      <Banner />
      <BrandingSection BrandingContents={brandingContents} />
      <AchivementSection />
    </div>
  );
}

export default Services;
