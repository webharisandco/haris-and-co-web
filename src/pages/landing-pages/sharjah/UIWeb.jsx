import React from "react";
import Banner from "@/components/ui/LandingPage/Banner";
import BannerImages from "@/assets/images/web/images/banner-Image.png";
import Banner2 from "@/assets/images/web/images/banner2.png";
import BrandPartnerSection from "@/components/ui/LandingPage/BrandPartnerSection";
import AboutSection from "@/components/ui/LandingPage/AboutSection";
import WhatWeProvide from "@/components/ui/LandingPage/WhatWeProvide";
import ContactSection from "@/components/ui/LandingPage/ContactSection";
import OurLatestWorks from "@/components/ui/web/OurLatestWorks";
import LandingHeader from "@/components/layout/landing/LandingHeader";
import LandingFooter from "@/components/layout/landing/LandingFooter";
import CaseStudy from "@/components/ui/LandingPage/CaseStudy";
import ConsultBanner from "@/components/ui/LandingPage/ConsultBanner";
import Testimonial from "@/components/ui/LandingPage/Testimonial";
import { Faq } from "@/components/ui/LandingPage/Faq";
import AboutCompany from "@/components/ui/web/AboutCompany";

export default function UIWeb() {
  const faqList = [
    {
      question: "Within how many days you can deliver the project?",
      answer:
        "The project delivery time depends on its complexity and requirements. As a web development agency, we aim to deliver projects efficiently while maintaining quality. We'll provide an estimated timeline after understanding your needs.",
    },
    {
      question:
        "As a web design & development agency in Dubai, do you help with revamping a website?",
      answer:
        "Yes, we specialize in revamping websites to align with modern design trends, improve user experience, and ensure better functionality tailored to your business needs.",
    },
    {
      question: "Can I update the website myself once it’s built?",
      answer:
        "Absolutely! We build user-friendly websites with content management systems like WordPress or custom solutions that allow you to update content easily without needing technical expertise.",
    },
    {
      question: "Will my website be SEO-friendly?",
      answer:
        "Yes, we ensure all websites we build follow SEO best practices, including fast loading times, mobile responsiveness, and proper structuring, to enhance search engine visibility.",
    },
    {
      question: "What platforms do you use for web development?",
      answer:
        "We use a variety of platforms such as WordPress, Shopify, and custom frameworks like React and Node.js, depending on your project requirements and goals.",
    },
    {
      question: "How do you ensure website security?",
      answer:
        "We prioritize security by implementing SSL certificates, firewalls, regular updates, and secure coding practices to protect your website from potential vulnerabilities.",
    },
    {
      question: "Can you integrate third-party tools into my website?",
      answer:
        "Yes, we can integrate third-party tools such as payment gateways, CRMs, analytics platforms, and more to enhance your website's functionality and performance.",
    },
    {
      question: "Do you provide content for my website?",
      answer:
        "Yes, we offer content creation services, including copywriting and graphic design, to ensure your website communicates effectively with your audience.",
    },
    {
      question:
        "Is it necessary to have a face-to-face discussion before the start of the project?",
      answer:
        "While face-to-face discussions are not mandatory, we are open to virtual meetings or calls to discuss project requirements and ensure clear communication.",
    },
    {
      question: "What platform do you suggest for Ecommerce?",
      answer:
        "We recommend platforms like Shopify or WooCommerce for small to medium businesses and custom solutions for larger enterprises, depending on your specific needs and scalability requirements.",
    },
  ];
  const heading = "Get a Website That Gets You More Leads & Sales";
  const description =
    "Delivering websites that are fast, secure, engaging and user-friendly. Wanna know the best part? Our conversion optimization makes navigation easier for your visitors from the 1st click to the final conversion.";
  const aboutHeading =
    "A Web Development Company in Dubai Trusted by 80+ Brands";
  const aboutDescription =
    "As a web design and development company in Dubai, we believe your website must be an all-rounder – one that’s fast, user-friendly, secure, engaging and optimised to turn visitors into customers. That’s what you can expect when you partner with us for website development. Whether you are a startup, a large business or an ecommerce brand, we can deliver a website that meets your expectations. To ensure maximum quality, we have experts in each department be it UI/UX design, development, content or conversion optimization. Also, you’ll have a dedicated project manager to keep you updated on the project.";
  const tagline = "Conversion-focused Website Development Company in Dubai";
  return (
    <>
   
    <div className="bg-black">
      <LandingHeader />
      <Banner
        bannerImage={BannerImages}
        heading={heading}
        description={description}
        tagline={tagline}
      />
      <BrandPartnerSection />

      <div className="px-[18px] md:px-0 md:pr-[100px]">
        <AboutSection
          bannerImage={Banner2}
          heading={aboutHeading}
          description={aboutDescription}
        />
      </div>
      <OurLatestWorks />

      <WhatWeProvide />

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
        </div>
        <div className="bg-white">

        <AboutCompany/>
        </div>
      <LandingFooter />
      </>
  );
};
