import React from "react";
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
import ContentSection from "../../../../components/ui/LandingPage/marketing/ContentSection";
import WhatsAppButton from "../../../../components/ui/LandingPage/seo/WhatsAppButton";

function Abudhabi() {
  const location = {
    lat: 25.270889,
    lng: 55.3314523,
  };
  const fearlessHeading = "Fearless & Authentic Digital Marketing Since Birth.";
  const fearlessDescription =
    "We are a Digital Marketing agency in Abu Dhabi that provides everything Digital Marketing to let your brand multiply revenue and conquer the competition. We started operating in India in 2020 serving top brands over the years. Having analysed the GCC landscape, we have expanded to Abu Dhabi with our committed team and a broad portfolio that explains our capability.";

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
        "Do you provide digital marketing for D2C businesses in Abu Dhabi?",
      answer:
        "Of course, we have various clients from the D2C sector that have driven successful results with us. We also provide our digital marketing services in Abu Dhabi to B2B and B2C companies as well. Contact us to learn how we can help your business thrive.",
    },
    {
      question: "Where are most of your clients from?",
      answer:
        "Most of our clients are based in the UAE, Saudi and India. Our clientele also has businesses from Bahrain, Qatar, Kuwait and Oman as well. We’ve been serving UAE-based since our commencement. In fact, a few of our first clients were from the UAE.",
    },
    {
      question:
        "How do I know if my digital marketing campaigns are successful?",
      answer:
        "Website traffic, lead generation, conversions (sales), engagement on social media, and return on investment (ROI) are some common metrics you can check to measure success. However, with Haris&Co., you need not worry about this part. We send detailed reports periodically to help you get an outline of how our marketing efforts are panning out.",
    },
    {
      question:
        "What digital marketing technique would be the best for my business?",
      answer:
        "There is no definite answer for this. The mode of marketing depends on the type of your business, your industry, your current brand awareness and your business goals. In some instances, just Social Media should suffice. In some cases, you will have to integrate Performance Marketing as well to boost the results. It’s better to consult with us before so that we can provide the right recommendations.",
    },
    {
      question: "Will there be instant results?",
      answer:
        "Some aspects of digital marketing, like performance marketing (digital ads), may deliver relatively quick results. However, SEO and content marketing take time to build authority and organic traffic. We'll set realistic expectations and track your progress towards your goals.",
    },
    {
      question: "What industries do you serve?",
      answer:
        "Over the years, we have worked with brands from the following industries: Architecture, Automobile, Construction, Consultancy, Ed-tech, FMCG, Footwear, Furniture, Healthcare, Hotel, Jewellery, Kidswear, Landscaping, Logistics, Packaging, Petroleum, Pharmaceutical, Plywood, SaaS, Skincare, Technology",
    },
    {
      question: "Is Digital Marketing in demand in Abu Dhabi?",
      answer: `Indeed, Digital Marketing is highly sought-after in Abu Dhabi due to the increased number of internet users, social media and search engines. Here are some statistics from DataReportal that show the significance of Digital Marketing in Abu Dhabi:
<ul>
  <li>9.5 million individuals use the internet in the UAE</li>
  <li>96% of internet users own a smartphone</li>
  <li>95% of the internet users use social media</li>
  <li>On average, people spend 8 hours and 11 minutes daily on the internet</li>
  <li>Social media and search engines are top-visited sites with 99% of the internet users visiting the former and 88% visiting the latter</li>
  <li>51% of internet users use Social networks to research brands and products</li>
  <li>64% of internet users purchase a product each week</li>
  <li>Search engines (33% of users) and social media (34% of users) are the top sources of brand discovery</li>
</ul>`,
    },
    {
      question: "Is it worth paying for Digital Marketing in Abu Dhabi?",
      answer:
        "The digital landscape of Abu Dhabi is thriving with 9.5 million internet users. With many companies already investing in Digital Marketing, it’s a must to pay for Digital Marketing in Abu Dhabi to stay ahead of the competition.",
    },
    {
      question: "Is it worth hiring a Digital Marketing agency in Abu Dhabi?",
      answer:
        "Yes! To get the best out of your Digital Marketing efforts, you need strategies backed by data and proper market study. And for that, you need experts. When you hire a Digital Marketing agency like Haris&Co., you get a team that has proven experience and expertise in the field.",
    },
  ];


const contentData = [
  {
    heading: "Best Digital Marketing Agency in Abu Dhabi Focused on Revenue Generation",
    headingClass: "text-3xl",
    paragraphs: [
      "Likes, shares, traffic and all are great. But, what matters for a business is revenue, right? Well, that’s what our strategies also focus on.",
      "The Digital marketing services in Dubai we offer at Haris&Co. may be the same as other digital marketing companies in Dubai offer, but the key difference is our approach where our tactics are optimized with a laser focus on boosting your return on investment.",
      "Thus far, we have driven more than ₹600 Million for our clients including top brands such as Visa Guy, Walkaroo, Skin Bae, BOSQ, Afyun Plywood, Femisafe, Milliondots, Algate, Francis Alukkas and many more.",
    ],
  },
  {
    heading: "Why Opt for Us As Your Digital Marketing Company in Abu Dhabi",
    headingClass: "text-2xl",
    listItems: [
      {
        type: "text",
        content:
          "A Compelling Portfolio: Our works and results explain what we are and what we are capable of. Regardless of the type, size or industry, we have lent a hand to businesses to grow to the next level with data-oriented digital marketing strategies. Check out the portfolio to see the results for yourself.",
      },
      {
        type: "text",
        content:
          "Experienced Team: Our team is comprised of passionate and experienced digital marketing experts. We stay ahead of the curve with the latest trends and technologies to ensure your campaigns are innovative and effective.",
      },
      {
        type: "text",
        content:
          "ROI-focused Approach: As one of the best digital marketing agencies in Abu Dhabi we believe in transparency and accountability. That's why we focus on measurable results that directly impact your bottom line. We'll work closely with you to define your goals and develop a customised strategy that delivers a strong ROI.",
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
      "Haris&co. isn't just another digital marketing agency in Abu Dhabi. We do everything passionately, be it SEO activities, Social Media campaigns or Performance Marketing campaigns. Over the years, we have delivered a shedload of projects to our clients and we have won awards for our work. Here is the list of awards we have won thus far:",
    ],
    listItems: [
      {
        type: "text",
        content: "afaqs! Startup Brands Award - Best Use of Video on Social Media",
      },
      {
        type: "text",
        content: "afaqs! Startup Brands Award - Best Branded Content",
      },
      {
        type: "text",
        content: "afaqs! Startup Brands Award - Best Moment Marketing",
      },
      {
        type: "text",
        content: "afaqs! Startup Brands Award - Best Social Media Campaign",
      },
      {
        type: "text",
        content: "Pepper Awards - Best Single Online Video",
      },
      {
        type: "text",
        content: "afaqs! Brand Storyz Award - Best Lead Generation Campaign",
      },
    ],
    locations: [
      { name: "Digital marketing agency in Kerala", url: "/digital-marketing-agency-kerala" },
      { name: "Digital marketing agency in Dubai", url: "/digital-marketing-agency-dubai" },
      { name: "Digital marketing agency in Sharjah", url: "/digital-marketing-agency-sharjah" },
      { name: "SEO company in Kerala", url: "/seo-company-kerala" },
      { name: "SEO company in Dubai", url: "/seo-company-dubai" },
      { name: "SEO company in Sharjah", url: "/seo-company-sharjah" },
      { name: "SEO company in Abu Dhabi", url: "/seo-company-abu-dhabi" },
    ],
    hasReadMore: true,
  },
];

  const heading = (
    <>
      An <span className="text-[#7744D5]">Award-winning</span> Digital Marketing
      Agency in Abu Dhabi
    </>
  );
  const description =
    "A digital marketing company that’s on the course of powering up brands with the power of marketing, design and tech.";
  return (
    <div>
      <Helmet>
        <title>
          {" "}
          ROI-focused Digital Marketing Agency in Abu Dhabi | Haris&Co
        </title>
      </Helmet>
      <meta
        name="description"
        content="Haris&Co. is an award-winning digital marketing agency in Abu Dhabi that considers revenue generation first, and everything else second."
        data-rh="true"
      />
      <link
        rel="canonical"
        href="https://harisand.co/ae/services/performance-marketing-agency-in-dubai"
      />
      <meta
        property="og:title"
        content=" ROI-focused Digital Marketing Agency in Abu Dhabi | Haris&Co"
      />
      <meta
        property="og:description"
        content="Haris&Co. is an award-winning digital marketing agency in Abu Dhabi that considers revenue generation first, and everything else second."
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
            "Abdulla Kamber Business Center, Room No 103, First Floor, Abu Baker Al Siddique St, Deira - Dubai"
          }
          location={location}
        />
      </div>
      <div className="bg-white">
        <Faq faqList={faqList} />
         <ContentSection contentData={contentData}/>
      </div>
      <WhatsAppButton />
      <LandingFooter serviceType='digital' />
    </div>
  );
}

export default Abudhabi;
