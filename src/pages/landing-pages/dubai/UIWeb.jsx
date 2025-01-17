import React from "react";
import Banner from "@/components/ui/common/Banner";
import BannerImages from "@/assets/images/web/images/banner-Image.png";
import Banner2 from "@/assets/images/web/images/banner2.png";
import BrandPartnerSection from "@/components/ui/common/BrandPartnerSection";
import AboutSection from "@/components/ui/common/AboutSection";
import WhatWeProvide from "@/components/ui/common/WhatWeProvide";
import ContactSection from "@/components/ui/common/ContactSection";
import OurLatestWorks from "@/components/ui/web/OurLatestWorks";
import LandingHeader from "@/components/layout/landing/LandingHeader";
import LandingFooter from "@/components/layout/landing/LandingFooter";
import CaseStudy from "@/components/ui/LandingPage/CaseStudy";
import ConsultBanner from "@/components/ui/LandingPage/ConsultBanner";
import Testimonial from "@/components/ui/LandingPage/Testimonial";
import { Faq } from "../../../components/ui/LandingPage/Faq";

export const UIWeb = () => {
  const faqList = [{ question: 'What kind of businesses benefit from performance marketing?', answer: "Performance marketing is ideal for businesses of all sizes and industries looking for measurable, results-driven campaigns. Whether in e-commerce, B2B, services, or tech, performance marketing can help you drive traffic, generate leads, and increase sales. Working with a Performance Marketing Agency in Dubai like Haris&Co. can help tailor campaigns to your specific goals, ensuring maximum ROI and efficiency across all digital channels." }, { question: 'What is the typical budget for a performance marketing campaign?', answer: "Performance marketing is ideal for businesses of all sizes and industries looking for measurable, results-driven campaigns. Whether in e-commerce, B2B, services, or tech, performance marketing can help you drive traffic, generate leads, and increase sales. Working with a Performance Marketing Agency in Dubai like Haris&Co. can help tailor campaigns to your specific goals, ensuring maximum ROI and efficiency across all digital channels." }, { question: 'How do I get started with performance marketing?', answer: "Performance marketing is ideal for businesses of all sizes and industries looking for measurable, results-driven campaigns. Whether in e-commerce, B2B, services, or tech, performance marketing can help you drive traffic, generate leads, and increase sales. Working with a Performance Marketing Agency in Dubai like Haris&Co. can help tailor campaigns to your specific goals, ensuring maximum ROI and efficiency across all digital channels." },]
  const heading = "Get a Website That Gets You More Leads & Sales";
  const description =
    "Delivering websites that are fast, secure, engaging and user-friendly. Wanna know the best part? Our conversion optimization makes navigation easier for your visitors from the 1st click to the final conversion.";
  const aboutHeading =
    "A Web Development Company in Dubai Trusted by 80+ Brands";
  const aboutDescription =
    "As a web design and development company in Dubai, we believe your website must be an all-rounder – one that’s fast, user-friendly, secure, engaging and optimised to turn visitors into customers. That’s what you can expect when you partner with us for website development. Whether you are a startup, a large business or an ecommerce brand, we can deliver a website that meets your expectations. To ensure maximum quality, we have experts in each department be it UI/UX design, development, content or conversion optimization. Also, you’ll have a dedicated project manager to keep you updated on the project.";
    const tagline = 'Conversion-focused Website Development Company in Dubai'
  return (
    <div className="bg-black">
         <LandingHeader />
      <div className="px-[100px]">
        <Banner
          bannerImage={BannerImages}
          heading={heading}
          description={description}
          tagline={tagline}
        />
        <BrandPartnerSection text={'Brands we’ve powered with our web solutions. '}/>
      </div>
      <div className="pr-[100px]">
        <AboutSection
          bannerImage={Banner2}
          heading={aboutHeading}
          description={aboutDescription}
        />
      </div>
      <div className="px-[100px]">
        <OurLatestWorks/>
      </div>
      <div className="px-[100px]">
        <WhatWeProvide />
      </div>
      <div className="bg-white">
      <ConsultBanner/>
      <CaseStudy />
      <Testimonial/>
      </div>
      <div className="">
        <ContactSection />
      </div>
      <div className="bg-white">
         <Faq faqList={faqList} />
      </div>
      <LandingFooter />
    </div>
  );
};
