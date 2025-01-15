import React from "react";
import Banner from "@/components/ui/common/Banner";
import BannerImages from "@/assets/images/web/images/banner-Image.png";
import Banner2 from "@/assets/images/web/images/banner2.png";
import BrandPartnerSection from "@/components/ui/common/BrandPartnerSection";
import AboutSection from "../../../components/ui/common/AboutSection";

export const UIWeb = () => {
  const heading = "Get a Website That Gets You More Leads & Sales";
  const description =
    "Delivering websites that are fast, secure, engaging and user-friendly. Wanna know the best part? Our conversion optimization makes navigation easier for your visitors from the 1st click to the final conversion.";
  const aboutHeading =
    "A Web Development Company in Dubai Trusted by 80+ Brands";
  const aboutDescription =
    "As a web design and development company in Dubai, we believe your website must be an all-rounder – one that’s fast, user-friendly, secure, engaging and optimised to turn visitors into customers. That’s what you can expect when you partner with us for website development. Whether you are a startup, a large business or an ecommerce brand, we can deliver a website that meets your expectations. To ensure maximum quality, we have experts in each department be it UI/UX design, development, content or conversion optimization. Also, you’ll have a dedicated project manager to keep you updated on the project.";
  return (
    <div>
      <div className="px-[100px] ">
        <Banner
          bannerImage={BannerImages}
          heading={heading}
          description={description}
        />
        <BrandPartnerSection />
      </div>
      <div className="pr-[100px]">
        <AboutSection
          bannerImage={Banner2}
          heading={aboutHeading}
          description={aboutDescription}
        />
      </div>
    </div>
  );
};
