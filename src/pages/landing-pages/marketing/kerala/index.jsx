import React from "react";
import LandingHeader from "@/components/layout/landing/LandingHeader";
import Banner from "@/components/ui/LandingPage/seo/Banner";
import founder from "@/assets/images/DigitalMarketing/hh.webp";
import aw3 from "@/assets/images/DigitalMarketing/sl.webp";
import aw2 from "@/assets/images/DigitalMarketing/sll.webp";
import clients from "@/assets/images/DigitalMarketing/Clients.svg";
import clients2 from "@/assets/images/DigitalMarketing/clients-pending.svg";
import BrandPartnerSection from "@/components/ui/LandingPage/seo/BrandPartnerSection";
import cl1 from "@/assets/images/DigitalMarketing/mobile-clients.svg";
import cl2 from "@/assets/images/DigitalMarketing/mobile-clients2.svg";
import cl3 from "@/assets/images/DigitalMarketing/mobile-clients3.svg";
import FearlessSection from "../../../../components/ui/LandingPage/seo/FearlessSection";
import WallOfFame from "@/components/ui/LandingPage/seo/WallOfFrame";
import { Helmet } from "react-helmet";
import WhatWeHaveForYou from "@/components/ui/LandingPage/seo/WhatWeHaveForYou";
import HeadlinesSection from "@/components/ui/LandingPage/seo/HeadlinesSection";
import ConsultBanner from "@/components/ui/LandingPage/seo/ConsultBanner";
import CaseStudy from "@/components/ui/LandingPage/seo/CaseStudy";
import ClientReviews from "@/components/ui/LandingPage/seo/ClientReviews";
import ContactSection from "@/components/ui/LandingPage/ContactSection";
import { Faq } from "@/components/ui/LandingPage/Faq";
import LandingFooter from "@/components/layout/landing/LandingFooter";

function kerala() {
  const location = {
    lat: 25.270889,
    lng: 55.3314523,
  };
  const fearlessHeading = "Fearless & Authentic Digital Marketing Since Birth.";
  const fearlessDescription =
    "We've come a long way ever since we started our journey in 2020 as a digital marketing agency in kerala with just 6 members and a handful of clients. Today, we're 100+ members strong, organised into 8 departments, with a huge (and satisfied) clientele. The work culture, results and innovation are at the core of who we are.";

  const images = [founder, aw2, aw3];
  const webBrands = [
    {
      id: 1,
      image: clients,
    },
    {
      id: 2,
      image: clients2,
    },
  ];
  const webBrandSmalls = [
    { id: 1, image: cl1 },
    { id: 2, image: cl2 },
    { id: 3, image: cl3 },
    { id: 4, image: cl1 },
    { id: 4, image: cl2 },
  ];
const faqList = [
  {
    question: "What are the types of businesses for which you provide digital marketing services?",
    answer:
      "We focus mainly on D2C, B2B and B2C companies. Get in touch with us to learn how we can help your business thrive.",
  },
  {
    question: "Where are most of your clients from?",
    answer:
      "Our clients are majorly based in India, Bahrain, Kuwait, Oman, Qatar, Saudi Arabia and the UAE. And, yes we have plans to expand our presence. Reach us for digital marketing consulting from any corner of the world and our team will be at your service!",
  },
  {
    question: "How can I measure the success of my digital marketing campaigns?",
    answer:
      "Some common metrics that help you measure success include website traffic, lead generation, conversions (sales), engagement on social media, and return on investment (ROI). At Haris&Co., we help you track your results and make adjustments to your campaigns as needed.",
  },
  {
    question: "What type of marketing will I need for my business?",
    answer:
      "The digital marketing strategy for your business can vary according to the type of your business, industry and current brand awareness. You may not need every service. Sometimes, just Social Media Marketing would do and at times you might want to invest in SEO as well. In short, it all depends. We recommend consulting with us before you make a decision.",
  },
  {
    question: "Can I see results quickly with digital marketing?",
    answer:
      "Some aspects of digital marketing, like performance marketing (digital ads), can deliver relatively quick results. However, SEO and content marketing take time to build authority and organic traffic. We'll set realistic expectations and track your progress towards your goals.",
  },
  {
    question: "What are the industries you have experience in working with?",
    answer:
      "Over the years, we have worked with brands from the following industries: Architecture, Landscaping, Vacation Rental, Footwear, Furniture, Automobile, Petroleum, Technology, Consultancy, Ed-tech, Kidswear, FMCG, Skincare, Packaging, Healthcare, Hotel, Logistics, Plywood, Construction, Jewellery",
  },
];
  const heading = (
    <>
      An <span className="text-[#7744D5]">Award-winning</span> Digital Marketing
      Agency in Kerala
    </>
  );
  const description =
    "A digital marketing company that’s on the course of powering up brands with the power of marketing, design and tech.";
  return (
    <div>
      <Helmet>
        <title>
          Revenue Focused Digital Marketing Agency in Kerala | Haris&Co
        </title>
        <meta
          name="description"
          content="Grow your business with the best digital marketing agency in Kerala. We, at Haris&Co.offer all the essential digital marketing services to boost your business revenue."
        />
        <link
          rel="canonical"
          href="https://harisand.co/digital-marketing-agency-in-kerala"
        />
      </Helmet>
      <LandingHeader btnTxt="GET A PROPOSAL" />
      <div className=" bg-black">
        <Banner
          bannerImage={images}
          heading={heading}
          description={description}
          performance
        />
        <BrandPartnerSection
          text={"Brands we’ve powered with our web solutions."}
          barandLogos={webBrands}
          brandLogosSmall={webBrandSmalls}
        />
        <FearlessSection
          heading={fearlessHeading}
          description={fearlessDescription}
        />
        <WallOfFame />
        <WhatWeHaveForYou />
      </div>
      <HeadlinesSection />
      <ConsultBanner />
      <CaseStudy />
      <ClientReviews />
      <div className="mt-[120px]">
        <ContactSection address={"2nd floor, 4 WING Avenue, Panniyankara, 673003 Kozhikode, Kerala"} kerala={true} location={location} />
      </div>
      <div className="bg-white">
        <Faq faqList={faqList} />
      </div>
      <LandingFooter />
    </div>
  );
}

export default kerala;
