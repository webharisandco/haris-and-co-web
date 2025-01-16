import React from 'react'
import LandingHeader from '../../../components/layout/landing/LandingHeader'
import LandingFooter from '../../../components/layout/landing/LandingFooter'
import { Faq } from '../../../components/ui/LandingPage/Faq'
import ConsultBanner from '../../../components/ui/LandingPage/ConsultBanner'
import CaseStudy from '../../../components/ui/LandingPage/CaseStudy'
import Testimonial from '../../../components/ui/LandingPage/Testimonial'
import BrandPartnerSection from "@/components/ui/common/BrandPartnerSection";
import Banner from "@/components/ui/common/Banner";
import BannerImg from "@/assets/images/landing/BannerImg.svg";
import AboutImg from "@/assets/images/landing/AboutImg.png";
import AboutSection from "@/components/ui/common/AboutSection";
import WhatWeProvide from "@/components/ui/common/WhatWeProvide";
import ContactSection from "@/components/ui/common/ContactSection";
import OurLatestWorks from "@/components/ui/web/OurLatestWorks";

export const UIPerformance = () => {
  const faqList = [{ question: 'What kind of businesses benefit from performance marketing?', answer: "Performance marketing is ideal for businesses of all sizes and industries looking for measurable, results-driven campaigns. Whether in e-commerce, B2B, services, or tech, performance marketing can help you drive traffic, generate leads, and increase sales. Working with a Performance Marketing Agency in Dubai like Haris&Co. can help tailor campaigns to your specific goals, ensuring maximum ROI and efficiency across all digital channels." }, { question: 'What is the typical budget for a performance marketing campaign?', answer: "Performance marketing is ideal for businesses of all sizes and industries looking for measurable, results-driven campaigns. Whether in e-commerce, B2B, services, or tech, performance marketing can help you drive traffic, generate leads, and increase sales. Working with a Performance Marketing Agency in Dubai like Haris&Co. can help tailor campaigns to your specific goals, ensuring maximum ROI and efficiency across all digital channels." }, { question: 'How do I get started with performance marketing?', answer: "Performance marketing is ideal for businesses of all sizes and industries looking for measurable, results-driven campaigns. Whether in e-commerce, B2B, services, or tech, performance marketing can help you drive traffic, generate leads, and increase sales. Working with a Performance Marketing Agency in Dubai like Haris&Co. can help tailor campaigns to your specific goals, ensuring maximum ROI and efficiency across all digital channels." },]
  const heading = "Get Better Leads & Higher Sales With Targeted Ads";
  const description =
    "Our team delivers eye-catching ads that target sales-qualified prospects, that too by ensuring the budget is efficiently utilized.";
  const aboutHeading =
    "A Web Development Company in Dubai Trusted by 80+ Brands";
  const aboutDescription =
    "As a web design and development company in Dubai, we believe your website must be an all-rounder – one that’s fast, user-friendly, secure, engaging and optimised to turn visitors into customers. That’s what you can expect when you partner with us for website development. Whether you are a startup, a large business or an ecommerce brand, we can deliver a website that meets your expectations. To ensure maximum quality, we have experts in each department be it UI/UX design, development, content or conversion optimization. Also, you’ll have a dedicated project manager to keep you updated on the project.";
  const tagline = 'Expert Performance Marketing Agency in Dubai'
  return (
    <div className='bg-black'>
      <LandingHeader />
      <div className="px-[100px]">
        <Banner
          bannerImage={BannerImg}
          heading={heading}
          description={description}
          tagline={tagline}
        />
        <BrandPartnerSection />
      </div>
      <div className="px-[100px]">
        <AboutSection
          bannerImage={AboutImg}
          heading={aboutHeading}
          description={aboutDescription}
          performance
        />
        <WhatWeProvide />
      </div>
      <div className="bg-white">
        <ConsultBanner />
        <CaseStudy />
        <Testimonial />
      </div>
      <div className="">
        <ContactSection />
      </div>
      <div className="bg-white">
        <Faq faqList={faqList} />
      </div>
      <LandingFooter />
    </div>
  )
}
