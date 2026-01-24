import { Helmet } from "react-helmet";

import LandingHeader from "@/components/layout/landing/LandingHeader";
import BrandPartnerSection from "@/components/ui/LandingPage/seo/BrandPartnerSection";
import cl1 from "@/assets/images/DigitalMarketing/mobile-clients.svg";
import cl2 from "@/assets/images/DigitalMarketing/mobile-clients2.svg";
import cl3 from "@/assets/images/DigitalMarketing/mobile-clients3.svg";
import clients from "@/assets/images/DigitalMarketing/Clients.svg";
import clients2 from "@/assets/images/DigitalMarketing/clients-pending.svg";
import Banner from "@/components/ui/LandingPage/seo/Banner";
import SeoCompanySection from "@/components/ui/LandingPage/seo/SeoCompanySection";
import WhatWeHaveForYou from "@/components/ui/LandingPage/seo/WhatWeHaveForYou";
import BelieveUs from "@/components/ui/LandingPage/seo/BelieveUs";
import FreeSeoAudit from "@/components/ui/LandingPage/seo/FreeSeoAudit";
import CaseStudy from "@/components/ui/LandingPage/seo/CaseStudy";
import ClientReviews from "@/components/ui/LandingPage/seo/ClientReviews";
import ContactSection from "@/components/ui/LandingPage/ContactSection";
import { Faq } from "@/components/ui/LandingPage/Faq";
import LandingFooter from "@/components/layout/landing/LandingFooter";
import ContentSection from "../../../../components/ui/LandingPage/seo/ContentSection";
import WhatsAppButton from "../../../../components/ui/LandingPage/seo/WhatsAppButton";

function Dubai() {
  const faqs = [
    {
      question: "What is SEO?",
      answer:
        "SEO is the technique by which you can make your website appear on top of the search engine results when someone makes a search. Consequently, this can lead to an increase in website visitors and lead generation.",
    },
    {
      question: "Why is SEO important for my business?",
      answer:
        "DataReportal's study states that nearly 50% of internet users use search engines to learn more about brands. So, being there on the top when they search is truly important. They can potentially become your next customer.",
    },
    {
      question: "How long does SEO take to show results?",
      answer:
        "SEO is an ongoing and organic process, but you can expect to see initial results within 3-6 months with consistent effort. Long-term SEO strategy yields sustainable results.",
    },
    {
      question: "How will you measure the success of your SEO strategy?",
      answer:
        "We use tools like Google Search Console, SEMrush and Ubersuggest to track website traffic keyword ranking, leads generated, and conversions. Apart from that, we use tools like Microsoft Clarity and Hotjar to analyse how the users are scrolling through your website, where they are clicking and how much content they are reading. This helps us to tweak the UX and the content if required.",
    },
    {
      question: "How can my website speed affect SEO?",
      answer:
        "Basically, when your website is slow to load, the visitor will bounce off. This can increase the bounce rate, which is something Google doesn't encourage. Hence, this can affect your SEO efforts adversely. This is the reason why we do Technical SEO and sort every technical issue at the initial stage of our SEO projects.",
    },
    {
      question:
        "Why should I hire an SEO agency in Dubai? Can’t I do it myself?",
      answer:
        "You can certainly do SEO yourself, but it's like managing your own investments – time-consuming and requiring constant learning. However, when you have an expert Search Engine Optimisation company that stays on top of the latest algorithms, you can worry less about the SEO part and concentrate more on your business.",
    },
    {
      question:
        "How will you maintain the results of your Search Engine Optimisation services in Dubai?",
      answer:
        "SEO is an ongoing process. Once you stop it, you can lose your ranks. Hence, in order to maintain the results, we consistently keep our work rolling and tweak the strategies to make good results great over time.",
    },
  ];
  const seoDescription =
    "As a result-oriented SEO agency in Dubai, we help you rise to the forefront of the search results and bring more sales-qualified visitors to your website. The best part is that we have dedicated experts for everything SEO.";
  const smlHeading = "A Rapidly Growing SEO Company in Dubai";
  const heading = "Rank. Reach. Revenue";
  const description =
    "99% of SEO companies give you ranks. Just 1% brings you revenue-inspiring results. We fall in the second category.";
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

  const contentData = [
    {
      heading: "An SEO Company in Dubai That Focus on Boosting Revenue",
      headingClass: "text-3xl",
      paragraphs: [
        "Ranks and traffic are good but what matters the most is generating leads and boosting revenue.",
        "As an ROI-focused SEO agency in Dubai, we formulate strategies based on your specific audience and industry. We combine in-depth keyword research, strategic on-page optimisation, well-thought-out content strategy and effective link building to get your website noticed by the right people.",
        "Though we excel in boosting website traffic, we mainly focus on generating sales-qualified leads for your website through SEO. In other words, you rank for keywords that matter to your business from a sales perspective.",
        "Stop waiting for customers to find you. Get our best SEO services in Dubai and generate leads.",
      ],
    },
    {
      heading: "Why You Should Invest in Our SEO",
      headingClass: "text-2xl",
      listItems: [
        {
          type: "text",
          content:
            "Reach more interested customers: We bring people who are already searching for what you offer. They're high-quality leads compared to those seeing a random ad.",
        },
        {
          type: "text",
          content:
            "Boost website traffic: As a Search Engine Optimisation company in Dubai, we help your website rank higher in search results, meaning more people will find you naturally.",
        },
        {
          type: "text",
          content:
            "Improve brand awareness: Higher rankings and organic traffic lead to more brand recognition and establish you as an authority.",
        },
        {
          type: "text",
          content:
            "Get a better return on investment: Our SEO is a cost-effective way to generate leads and sales since our strategy ultimately focuses on bringing you better ROI.",
        },
        {
          type: "text",
          content:
            "Long-term benefits: Unlike ads, SEO results are long-lasting. Once you rank well, you'll continue to see traffic for months or even years and we will make sure by tweaking the strategies if needed.",
        },
      ],
    },
    {
      heading: "A Streamlined SEO Company in Dubai",
      headingClass: "text-2xl",
      listItems: [
        {
          type: "subSection",
          title: "Our Proven SEO Process",
          subList: [
            {
              label: "1. Brand Understanding",
              text: "Our SEO team start by getting to know your brand, its goals, target audience, and unique selling proposition (USP).",
            },
            {
              label: "2. Industry & Competitor Research",
              text: "We study your industry, analyse your competitors' SEO strategies, and identify potential opportunities for your website.",
            },
            {
              label: "3. Website Audit",
              text: "We conduct a comprehensive technical audit of your website to identify any SEO roadblocks and areas for improvement.",
            },
            {
              label: "4. Keyword Research",
              text: "We research relevant keywords with high search volume and low competition to attract qualified traffic.",
            },
            {
              label: "5. Creating the SEO Plan",
              text: "Based on our findings, we craft a customised SEO plan outlining specific strategies, timelines, and deliverables.",
            },
            {
              label: "6. Executing the Plan",
              text: "We implement the SEO plan, including on-page optimisation, off-page activities, content creation, link building, and technical SEO improvements.",
            },
            {
              label: "7. Tracking the Results",
              text: "We closely monitor website traffic, keyword rankings, and other key metrics to measure progress.",
            },
            {
              label: "8. Reporting to the Client",
              text: "We provide regular reports with clear visualisations, keeping you informed of the campaign's performance.",
            },
            {
              label: "9. Tweaking the Plan",
              text: "SEO is an ongoing process. We continuously analyse data and adjust the plan as needed to optimise for search engine algorithms.",
            },
            {
              label: "10. Maintaining the Results",
              text: "We focus on long-term SEO strategies to ensure your website maintains its high ranking and organic visibility.",
            },
          ],
          locations: [
            {
              name: "SEO company in Kerala",
              url: "/kerala/services/seo-company-in-kerala",
            },
            {
              name: "SEO company in Sharjah",
              url: "/ae/services/seo-company-in-sharjah",
            },
            {
              name: "SEO company in Abu Dhabi",
              url: "/ae/services/seo-company-in-abudhabi",
            },
            {
              name: "Digital marketing agency in Kerala",
              url: "/digital-marketing-agency-in-kerala",
            },
            {
              name: "Digital marketing agency in Dubai",
              url: "/digital-marketing-agency-in-dubai",
            },
            {
              name: "Digital marketing agency in Sharjah",
              url: "/digital-marketing-agency-in-sharjah",
            },
            {
              name: "Digital marketing agency in Abu Dhabi",
              url: "/digital-marketing-agency-in-abudhabi",
            },
          ],
        },
      ],
      hasReadMore: true,
    },
  ];

  const webBrandSmalls = [
    { id: 1, image: cl1 },
    { id: 2, image: cl2 },
    { id: 3, image: cl3 },
    { id: 4, image: cl1 },
    { id: 4, image: cl2 },
  ];

  return (
    <div>
      <Helmet>
        <title>ROI-focused SEO Company in Dubai | Haris&Co</title>
      </Helmet>
      <meta
        name="description"
        content="We are an SEO company in Dubai that prioritises lead generation over ranks, and website visitors."
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
        content="We are an SEO company in Dubai that prioritises lead generation over ranks, and website visitors."
      />

      <LandingHeader btnTxt="GET A PROPOSAL" />
      <div className="bg-black">
        <Banner
          // bannerImage={images}
          heading={heading}
          description={description}
          smlHeading={smlHeading}
        />
        <BrandPartnerSection
          text={"Brands we’ve powered with our web solutions."}
          barandLogos={webBrands}
          brandLogosSmall={webBrandSmalls}
        />
        <SeoCompanySection seoDescription={seoDescription} />
        <WhatWeHaveForYou />
        <BelieveUs />
      </div>
      <div className="bg-white px-[80px]">
        <FreeSeoAudit />
      </div>
      <div className="bg-white">
        <CaseStudy />
        <ClientReviews />
        <ContactSection kerala={false} />
        <Faq faqList={faqs} />
        <ContentSection contentData={contentData} />
      </div>
      <WhatsAppButton/>
      <LandingFooter serviceType='seo' />
    </div>
  );
}

export default Dubai;
