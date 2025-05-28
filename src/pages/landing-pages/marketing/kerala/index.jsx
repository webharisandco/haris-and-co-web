import LandingHeader from "@/components/layout/landing/LandingHeader";
import Banner from "@/components/ui/LandingPage/marketing/Banner";
import founder from "@/assets/images/DigitalMarketing/hh.webp";
import aw3 from "@/assets/images/DigitalMarketing/sl.webp";
import aw2 from "@/assets/images/DigitalMarketing/sll.webp";
import clients from "@/assets/images/DigitalMarketing/Clients.svg";
import clients2 from "@/assets/images/DigitalMarketing/clients-pending.svg";
import BrandPartnerSection from "@/components/ui/LandingPage/marketing/BrandPartnerSection";
import cl1 from "@/assets/images/DigitalMarketing/mobile-clients.svg";
import cl2 from "@/assets/images/DigitalMarketing/mobile-clients2.svg";
import cl3 from "@/assets/images/DigitalMarketing/mobile-clients3.svg";
import FearlessSection from "@/components/ui/LandingPage/marketing/FearlessSection";
import WallOfFame from "@/components/ui/LandingPage/marketing/WallOfFrame";
import { Helmet } from "react-helmet";
import WhatWeHaveForYou from "@/components/ui/LandingPage/marketing/WhatWeHaveForYou";
import HeadlinesSection from "@/components/ui/LandingPage/marketing/HeadlinesSection";
import ConsultBanner from "@/components/ui/LandingPage/marketing/ConsultBanner";
import CaseStudy from "@/components/ui/LandingPage/marketing/CaseStudy";
import ClientReviews from "@/components/ui/LandingPage/marketing/ClientReviews";
import ContactSection from "@/components/ui/LandingPage/ContactSection";
import { Faq } from "@/components/ui/LandingPage/Faq";
import LandingFooter from "@/components/layout/landing/LandingFooter";
import ContentSection from "@/components/ui/LandingPage/marketing/ContentSection";

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
      question:
        "What are the types of businesses for which you provide digital marketing services?",
      answer:
        "We focus mainly on D2C, B2B and B2C companies. Get in touch with us to learn how we can help your business thrive.",
    },
    {
      question: "Where are most of your clients from?",
      answer:
        "Our clients are majorly based in India, Bahrain, Kuwait, Oman, Qatar, Saudi Arabia and the UAE. And, yes we have plans to expand our presence. Reach us for digital marketing consulting from any corner of the world and our team will be at your service!",
    },
    {
      question:
        "How can I measure the success of my digital marketing campaigns?",
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

  const contentData = [
  {
    heading: "A Leading Revenue-focused Digital Marketing Agency in Kerala",
    headingClass: "text-3xl",
    paragraphs: [
      "We understand that getting likes and shares is great, but at Haris&Co , our focus is on driving real results for your business – increased revenue.",
      "We achieve this by offering all the comprehensive digital marketing services you'd expect from a leading digital marketing company in Kerala but with a key difference: a laser focus on maximising your return on investment (ROI).",
      "To date, we have generated more than ₹600 Million for our clients including top brands such as Walkaroo, Skin Bae, BOSQ, Afyun Plywood, Femisafe, Million Dots, Algate, Visa Guy, Francis Alukkas and many more.",
    ],
  },
  {
    heading: "Why Us As Your Digital Marketing Company",
    headingClass: "text-2xl",
    listItems: [
      {
        type: "text",
        content:
          "A Compelling Portfolio: Our proven track record speaks for itself. We've helped businesses of all sizes and industries achieve significant growth through our data-driven marketing strategies. Check out our portfolio to see real-world examples of our success.",
      },
      {
        type: "text",
        content:
          "Experienced Team: Our team is comprised of passionate and experienced digital marketing experts. We stay ahead of the curve with the latest trends and technologies to ensure your campaigns are cutting-edge and effective.",
      },
      {
        type: "text",
        content:
          "ROI-focused Approach: As a digital marketing company in Kerala, we believe in transparency and accountability. That's why we focus on measurable results that directly impact your bottom line. We'll work closely with you to define your goals and develop a customised strategy that delivers a strong ROI.",
      },
      {
        type: "text",
        content:
          "Client-Centric: We take the time to understand your unique business needs and target audience. This ensures our campaigns are tailored to resonate with your ideal customers and achieve your specific goals.",
      },
      {
        type: "text",
        content:
          "Data-Driven Decisions: We are not fans of guesswork. Every decision we make is backed by data and analytics, allowing us to constantly optimise your campaigns for maximum impact.",
      },
      {
        type: "text",
        content:
          "Long-Term Partnerships: We believe in building long-term partnerships with our clients. We're here to help you achieve sustainable growth, not just a quick fix.",
      },
    ],
  },
  {
    heading: "Bagging Awards On the Way",
    headingClass: "text-2xl",
    paragraphs: [
      "Haris&co. isn't just another digital marketing agency in Kerala. We put our heart into everything we do, be it SEO activities, Social Media campaigns or Performance Marketing campaigns. Over the years, we have delivered a shedload of projects to our clients and we have won awards for many of our works. Here is the list of awards we have won thus far:",
    ],
    listItems: [
      {
        type: "text",
        content:
          "A Compelling Portfolio: Our proven track record speaks for itself. We've helped businesses of all sizes and industries achieve significant growth through our data-driven marketing strategies. Check out our portfolio to see real-world examples of our success.",
      },
      {
        type: "text",
        content:
          "Experienced Team: Our team is comprised of passionate and experienced digital marketing experts. We stay ahead of the curve with the latest trends and technologies to ensure your campaigns are cutting-edge and effective.",
      },
      {
        type: "text",
        content:
          "ROI-focused Approach: As a digital marketing company in Kerala, we believe in transparency and accountability. That's why we focus on measurable results that directly impact your bottom line. We'll work closely with you to define your goals and develop a customised strategy that delivers a strong ROI.",
      },
      {
        type: "text",
        content:
          "Client-Centric: We take the time to understand your unique business needs and target audience. This ensures our campaigns are tailored to resonate with your ideal customers and achieve your specific goals.",
      },
      {
        type: "text",
        content:
          "Data-Driven Decisions: We are not fans of guesswork. Every decision we make is backed by data and analytics, allowing us to constantly optimise your campaigns for maximum impact.",
      },
      {
        type: "text",
        content:
          "Long-Term Partnerships: We believe in building long-term partnerships with our clients. We're here to help you achieve sustainable growth, not just a quick fix.",
      },
    ],
    locations: [
      { name: "Digital marketing agency in Dubai", url: "/digital-marketing-agency-in-dubai" },
      { name: "Digital marketing agency in Sharjah", url: "/digital-marketing-agency-in-sharjah" },
      { name: "Digital marketing agency in Abu Dhabi", url: "/digital-marketing-agency-in-abudhabi" },
      { name: "SEO company in Kerala", url: "/seo-company-in-kerala" },
      { name: "SEO company in Dubai", url: "/seo-company-in-dubai" },
      { name: "SEO company in Sharjah", url: "/seo-company-in-sharjah" },
      { name: "SEO company in Abu Dhabi", url: "/seo-company-in-abudhabi" },
    ],
    hasReadMore: true,
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
          {" "}
          Revenue Focused Digital Marketing Agency in Kerala | Haris&Co
        </title>
      </Helmet>
      <meta
        name="description"
        content="Grow your business with the best digital marketing agency in Kerala. We, at Haris&Co.offer all the essential digital marketing services to boost your business revenue."
        data-rh="true"
      />
      <link
        rel="canonical"
        href="https://harisand.co/ae/services/performance-marketing-agency-in-dubai"
      />
      <meta
        property="og:title"
        content=" Revenue Focused Digital Marketing Agency in Kerala | Haris&Co"
      />
      <meta
        property="og:description"
        content="Grow your business with the best digital marketing agency in Kerala. We, at Haris&Co.offer all the essential digital marketing services to boost your business revenue."
      />

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
        <ContactSection
          address={
            "2nd floor, 4 WING Avenue, Panniyankara, 673003 Kozhikode, Kerala"
          }
          kerala={true}
          location={location}
        />
      </div>
      <div className="bg-white">
        <Faq faqList={faqList} />
    <ContentSection contentData={contentData}/>
      </div>
      <LandingFooter serviceType='digital' address="2nd floor, 4 WING Avenue, Panniyankara, 673003 Kozhikode, Kerala" />
    </div>
  );
}

export default kerala;
