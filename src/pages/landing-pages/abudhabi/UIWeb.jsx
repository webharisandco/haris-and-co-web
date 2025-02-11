import React from "react";
import Banner from "@/components/ui/LandingPage/Banner";
import BannerImages from "@/assets/images/landing/webHero.webp";
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
import AwardSection from "@/components/ui/LandingPage/AwardSection";
import { Faq } from "@/components/ui/LandingPage/Faq";
import AboutCompany from "@/components/ui/web/AboutCompany";
import webBrand1 from "@/assets/images/brandLogos/web/webBrands1.png";
import webBrand2 from "@/assets/images/brandLogos/web/webBrands2.png";
import webBrand3 from "@/assets/images/brandLogos/web/webBrands3.png";
import webBrand4 from "@/assets/images/brandLogos/web/webBrands4.png";
import webBrand5 from "@/assets/images/brandLogos/web/webBrands5.png";
import webBrand6 from "@/assets/images/brandLogos/web/webBrands6.png";
import webBrandSmall1 from "@/assets/images/brandLogos/web/small/webBrandsSmall1.png";
import webBrandSmall2 from "@/assets/images/brandLogos/web/small/webBrandsSmall2.png";
import webBrandSmall3 from "@/assets/images/brandLogos/web/small/webBrandsSmall3.png";
import webBrandSmall4 from "@/assets/images/brandLogos/web/small/webBrandsSmall4.png";
import webBrandSmall5 from "@/assets/images/brandLogos/web/small/webBrandsSmall5.png";
import webBrandSmall6 from "@/assets/images/brandLogos/web/small/webBrandsSmall6.png";
import webBrandSmall7 from "@/assets/images/brandLogos/web/small/webBrandsSmall7.png";
import webBrandSmall8 from "@/assets/images/brandLogos/web/small/webBrandsSmall8.png";
import webBrandSmall9 from "@/assets/images/brandLogos/web/small/webBrandsSmall9.png";
import webBrandSmall10 from "@/assets/images/brandLogos/web/small/webBrandsSmall10.png";
import webBrandSmall11 from "@/assets/images/brandLogos/web/small/webBrandsSmall11.png";
import { Helmet } from "react-helmet";

export default function UIWeb() {
  const location = {
    lat: 25.270889,
    lng: 55.3314523,
  };
  const webDevelopmentServices = [
    {
      title: "Dedicated Project Manager",
      description:
        "We have an in-house brand solutions team for our web development in Abu Dhabi. This means your project gets personal attention from our dedicated project manager who ensures clear communication and timely delivery.",
    },
    {
      title: "Specialists at Every Step",
      description:
        "From UI/UX designers to developers, content writers to conversion rate optimizers – we have specialists who take care of each aspect of your website project. Their collaboration helps us to ensure maximum quality.",
    },
    {
      title: "End-to-End Digital Excellence",
      description:
        "We handle everything from strategy to launch, including design, development, content, and optimization – no need to coordinate with multiple agencies.",
    },
    {
      title: "Data-Driven Decision Making",
      description:
        "Our solutions are backed by research, user behaviour analysis, and industry best practices to ensure maximum impact.",
    },
    {
      title: "Results-Focused Approach",
      description:
        "We don't just build websites. We are a web development company in Abu Dhabi that creates digital assets that drive business growth through strategic design and conversion optimization.",
    },
    {
      title: "Proven Development Process",
      description:
        "Our structured web development methodology ensures transparency, timely delivery, and consistent quality across all projects.",
    },
    {
      title: "Post-Launch Support",
      description:
        "Just because we are a web development company in Abu Dhabi, our relationship doesn't end after developing and launching the website. We provide ongoing support to ensure your website continues to perform and evolve with your business.",
    },
    {
      title: "Technical Excellence",
      description:
        "We use cutting-edge technologies and follow best practices in security, performance, and SEO to future-proof your digital presence.",
    },
  ];
  const webBrandSmalls = [
    { id: 1, image: webBrandSmall1 },
    { id: 2, image: webBrandSmall2 },
    { id: 3, image: webBrandSmall3 },
    { id: 4, image: webBrandSmall4 },
    { id: 5, image: webBrandSmall5 },
    { id: 6, image: webBrandSmall6 },
    { id: 7, image: webBrandSmall7 },
    { id: 8, image: webBrandSmall8 },
    { id: 9, image: webBrandSmall9 },
    { id: 10, image: webBrandSmall10 },
    { id: 11, image: webBrandSmall11 },
  ];
  const webBrands = [
    {
      id: 1,
      image: webBrand1,
    },
    {
      id: 2,
      image: webBrand2,
    },
    {
      id: 3,
      image: webBrand3,
    },
    {
      id: 4,
      image: webBrand4,
    },
    {
      id: 5,
      image: webBrand5,
    },
    {
      id: 6,
      image: webBrand6,
    },
  ];
  const tagline = "Conversion-focused Website Development Company in Abu Dhabi";
  const heading = "Get a Website That Gets You More Leads & Sales";
  const description =
    "Delivering websites that are fast, secure, engaging and user-friendly. Wanna know the best part? Our conversion optimization makes navigation easier for your visitors from the 1st click to the final conversion.";
  const aboutHeading =
    "A Web Development Company in Abu Dhabi Trusted by 80+ Brands";
  const aboutDescription =
    "As a web design and development company in Abu Dhabi, we believe your website must be an all-rounder – one that’s fast, user-friendly, secure, engaging and optimised to turn visitors into customers. That’s what you can expect when you partner with us for website development. Whether you are a startup, a large business or an ecommerce brand, we can deliver a website that meets your expectations. To ensure maximum quality, we have experts in each department be it UI/UX design, development, content or conversion optimization. Also, you’ll have a dedicated project manager to keep you updated on the project.";
  const clientsMetrix = [
    {
      number: "80+",
      heading: "Clients Served",
    },
    {
      number: "10+",
      heading: "Members in the Team",
    },
    {
      number: "15+",
      heading: "Industries Served",
    },
  ];
  const faqList = [
    {
      question: "Do you provide website maintenance?",
      answer:
        "Yes, we provide ongoing support to keep your website high-performing and secure. We are always just a call away.",
    },
    {
      question: "Within how many days can you deliver the project?",
      answer:
        "Usually, we deliver the project within 45 days if approvals are given on time. However, this may vary depending on the size and complexity of your website. We could give an estimated timeline after the brand understanding meeting and input collection.",
    },
    {
      question:
        "As a web design & development agency in Abu Dhabi, do you help with revamping a website?",
      answer:
        "Yes sure. In fact, we have helped various top brands such as Walkaroo, Katara Limousine, Teens, and more to revamp their existing website. So, if you want a new look for your current website, feel free to contact us.",
    },
    {
      question: "Can I update the website myself once it’s built?",
      answer:
        "Sure. If you want to make any edits or updates, feel free to reach out to us. We will help you.",
    },
    {
      question: "Will my website be SEO-friendly?",
      answer:
        "Yes. We carry out practices such as mobile optimization, internal linking, image optimization, and more to ensure mobile-friendliness.",
    },
    {
      question: "What platforms do you use for web development?",
      answer:
        "We use WordPress or custom development (React JS or HTML) for developing normal websites. For eCommerce businesses, we opt for Shopify.",
    },
    {
      question: "How do you ensure website security?",
      answer:
        "One way we do this is by securing an SSL certificate for our website. Secondly, we use some tools like Wordfence to enhance the security.",
    },
    {
      question: "Can you integrate third-party tools into my website?",
      answer:
        "Yes. If you want any tools to be integrated, please let us know. We will get it done.",
    },
    {
      question: "Do you provide content for my website?",
      answer:
        "Of course. We have Content Writers who specifically work in the Web development team. All you have to do is provide the input and we’ll prepare the content.",
    },
    {
      question:
        "Is it necessary to have a face-to-face discussion before the start of the project?",
      answer:
        "No need for that. We usually connect with our clients via Google Meet. If you prefer a face-to-face interview, we could do that as well.",
    },
    {
      question: "What platform do you suggest for Ecommerce?",
      answer:
        "We recommend Shopify as the ideal eCommerce platform due to its user-friendly interface that allows for quick setup without technical expertise, robust features including inventory management and payment processing, and excellent mobile responsiveness. It’s also scalable and offers an extensive app ecosystem for added functionality. Furthermore, it also has strong security measures and 24/7 customer support.",
    },
  ];

  const seoHeading =
    "Web Development Company in Abu Dhabi Focused on Conversion";
  const seoDescription =
    "Haris&Co. has been serving web development services in Abu Dhabi for the last 5 years, empowering 80+ brands. Whenever a client approaches, we keep the conversion aspect of a website on top of our mind because we believe that a website isn’t just a showcase, it should act as a shop for a business. This is why we have conversion rate optimisers on the team to ensure that website visitors turn into customers. This doesn’t mean we disregard other aspects such as aesthetics, content and technicalities.";
  const seoHeading2 =
    "Why You Should Choose Us As Your Web Development Company in Abu Dhabi";
  const seoHeading3 = "How Our Web Development In Abu Dhabi Works";
  return (
    <>
      <div className="bg-black">
        <Helmet>
          <title>Trusted Web Development Company in Abu Dhabi</title>
        </Helmet>
        <meta
          name="description"
          content="We're a web development company in Abu Dhabi that delivers fast, secure, engaging, user-friendly and conversion-optimized websites."
        />
        <link
          rel="canonical"
          href="https://harisand.co/ae/services/web-development-company-in-abudhabi"
        />
        <meta
          property="og:title"
          content="Trusted Web Development Company in Abu Dhabi"
        />
        <meta
          property="og:description"
          content="We're a web development company in Abu Dhabi that delivers fast, secure, engaging, user-friendly and conversion-optimized websites."
        />
        <LandingHeader />
        <Banner
          bannerImage={BannerImages}
          heading={heading}
          description={description}
          tagline={tagline}
        />
        <BrandPartnerSection
          text={"Brands we’ve powered with our web solutions."}
          barandLogos={webBrands}
          brandLogosSmall={webBrandSmalls}
        />

        <div className="px-[18px] md:px-0 md:pr-[100px]">
          <AboutSection
            bannerImage={Banner2}
            heading={aboutHeading}
            description={aboutDescription}
            datas={clientsMetrix}
          />
        </div>
        <OurLatestWorks
          text={
            "These are a few of the many websites we have developed thus far. This portfolio includes projects ranging from dynamic e-commerce platforms to engaging corporate websites that adhere to the respective brand guidelines and drive results in various industries."
          }
        />

        <WhatWeProvide />

        <div className="bg-white">
          <ConsultBanner />
          <CaseStudy web={true} />
          <Testimonial />
        </div>
        <div className="">
          <ContactSection location={location} />
        </div>
        <div className="bg-white">
          <Faq faqList={faqList} />
        </div>
      </div>
      <div className="bg-white">
        <AboutCompany
          seoHeading={seoHeading}
          seoDescription={seoDescription}
          seoHeading2={seoHeading2}
          seoHeading3={seoHeading3}
          webDevelopmentServices={webDevelopmentServices}
        />
      </div>
      <LandingFooter />
    </>
  );
}
