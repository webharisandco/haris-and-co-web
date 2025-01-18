import React from 'react'
import LandingHeader from '@/components/layout/landing/LandingHeader'
import LandingFooter from '@/components/layout/landing/LandingFooter'
import { Faq } from '@/components/ui/LandingPage/Faq'
import ConsultBanner from '@/components/ui/LandingPage/ConsultBanner'
import CaseStudy from '@/components/ui/LandingPage/CaseStudy'
import Testimonial from '@/components/ui/LandingPage/Testimonial'
import BrandPartnerSection from "@/components/ui/LandingPage/BrandPartnerSection";
import Banner from "@/components/ui/LandingPage/Banner";
import BannerImg from "@/assets/images/landing/BannerImg.svg";
import AboutImg from "@/assets/images/landing/AboutImg.png";
import AboutSection from "@/components/ui/LandingPage/AboutSection";
import WhatWeProvide from "@/components/ui/LandingPage/WhatWeProvide";
import ContactSection from "@/components/ui/LandingPage/ContactSection";
import ResultSection from '@/components/ui/LandingPage/ResultSection'
import ToolsAndPlatform from '@/components/ui/LandingPage/ToolsAndPlatform'


export default function UIPerformance() {
  const faqList = [{ question: 'What kind of businesses benefit from performance marketing?', answer: "Performance marketing is ideal for businesses of all sizes and industries looking for measurable, results-driven campaigns. Whether in e-commerce, B2B, services, or tech, performance marketing can help you drive traffic, generate leads, and increase sales.Working with a Performance Marketing Agency in Dubai like Haris&Co. can help tailor campaigns to your specific goals, ensuring maximum ROI and efficiency across all digital channels." }, { question: 'What is the typical budget for a performance marketing campaign?', answer: "The budget for a performance marketing campaign depends on your goals, industry, and target audience. We work with businesses of all sizes and create customised plans that maximise your return on investment. Whether you have a small or large budget, we’ll optimise your campaigns to get the best results." }, { question: 'How do I get started with performance marketing?', answer: "Getting started is easy! Simply reach out to our team for a consultation. We'll discuss your goals, understand your target audience, and craft a tailored performance marketing strategy that fits your business needs and budget." }, { question: 'What makes Haris&Co’s performance marketing services different from others?', answer: "At Haris & Co's performance marketing agency in Dubai like Haris&Co., we focus on data-driven results and continuous optimisation. We don’t just run ads - we strategically manage and fine-tune every aspect of your campaigns to ensure maximum ROI. Our approach is transparent, collaborative, and tailored to your business goals." }, { question: 'Can performance marketing work for both B2B and B2C companies?', answer: "Yes, performance marketing works for Business-to-Consumer (B2C) and Business-to-Business (B2B) companies. We tailor our campaigns and targeting strategies depending on your audience. Whether you need to drive sales, leads, or brand awareness, we have the tools and experience to deliver results for both B2B and B2C clients." },]
  const heading = "Get Better Leads & Higher Sales With Targeted Ads";
  const description =
    "Our team delivers eye-catching ads that target sales-qualified prospects, that too by ensuring the budget is efficiently utilized.";
  const aboutHeading =
    "We Deliver Ads That Deliver Sales";
  const aboutDescription =
    "At Haris&Co., our performance marketing team in Dubai transforms raw data into strategies that boost your bottom line. From planning and developing creatives to campaign execution & optimisation, we do everything. With us, you can rest assured that the creatives will have the quality to convey your message and the ads will be displayed to the exact audience, ensuring you get the best results without overspending. We also have experience in being the growth partner of 10+ emerging brands, helping them scale from scratch.";
  const tagline = 'Expert Performance Marketing Agency in Dubai'
  return (
    <div className='bg-black'>
      <LandingHeader />
      <div className="">
        <Banner
          bannerImage={BannerImg}
          heading={heading}
          description={description}
          tagline={tagline}
          performance
        />
        <BrandPartnerSection text={'Brands that have scaled with our Performance Marketing.'} />
      </div>
      <div className="px-[16px] md:px-[60px] lg:px-[100px]">
        <AboutSection
          bannerImage={AboutImg}
          heading={aboutHeading}
          description={aboutDescription}
          performance
        />
      </div>
      <WhatWeProvide performance/>
      <ResultSection />
      <ToolsAndPlatform />
      <div className="bg-white py-[50px]">
        <ConsultBanner performance/>
        <CaseStudy />
        <Testimonial />
      </div>
      <div className="">
        <ContactSection />
      </div>
      <div className="bg-white">
        <Faq faqList={faqList} />
        <div className="px-[16px] md:px-[60px] lg:px-[100px] py-[40px] flex flex-col gap-14">
          <div className="flex flex-col gap-6">
            <h4 className='font-[Abrobold] text-[13px] md:text-[22px] lg:text-[36px]'>What is Performance Marketing?</h4>
            <p className='poppins-regular text-[11px] md:text-[15px] lg:text-lg'>Performance marketing is a digital marketing strategy where you pay only for the results you get - whether that’s a click, lead, sale, or other desired action. Unlike traditional advertising models, where you pay upfront for exposure (e.g., impressions or views), performance marketing is focused on measurable outcomes. This model ensures that your advertising spend is tied directly to the success of your campaign, providing a more result-driven and cost-effective approach to achieving business goals.
              Working with a Performance Marketing Agency in Dubai like Haris&Co. allows you to take advantage of this results-driven approach. They help you set clear goals, track outcomes, and continuously optimise your campaigns to ensure that every penny spent is delivering value.
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <h4 className='font-[Abrobold] text-[13px] md:text-[22px] lg:text-[36px]'>Benefits of Performance Marketing</h4>
            <div className='poppins-regular text-[11px] md:text-[15px] lg:text-lg'>
              <ul type='dot' className='list-disc ps-5	gap-5 grid'>
                <li>
                  <span className='poppins-semibold'>Measurable Results : </span>
                  <span className='poppins-regular'>Performance marketing focuses on actions such as clicks, leads, or sales, making it easy to track and measure results. With a Performance Marketing Agency in Dubai like Haris&Co., you can assess campaign performance in real-time, ensuring your marketing budget is spent effectively and delivering tangible ROI.</span>
                </li>
                <li>
                  <span className='poppins-semibold'>Cost-Effective : </span>
                  <span className='poppins-regular'>Performance marketing allows you to pay only for specific outcomes. This pay-for-performance model ensures you're investing in results, not just exposure. </span>
                </li>
                <li>
                  <span className='poppins-semibold'>Highly Targeted : </span>
                  <span className='poppins-regular'>Performance marketing campaigns can be finely tuned to target specific demographics, interests, or behaviours. By working with a Performance Marketing Agency in Dubai like Haris&Co., you can ensure that your campaigns reach the right audience, increasing the likelihood of conversions and maximising your ad spend.</span>
                </li>
                <li>
                  <span className='poppins-semibold'>Real-Time Optimization : </span>
                  <span className='poppins-regular'>With performance marketing, campaigns can be adjusted in real-time based on data insights. A Performance Marketing Agency in Dubai like Haris&Co. leverages this flexibility to fine-tune ad creatives, targeting, and budgets, ensuring optimal performance and faster responses to market changes.</span>
                </li>
                <li>
                  <span className='poppins-semibold'>Scalability : </span>
                  <span className='poppins-regular'>Performance marketing is easily scalable. As your business grows, Performance Marketing can help expand your campaigns, allocating more resources to the best-performing channels, allowing for controlled and sustained growth.</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-6 mb-5">
            <h4 className='font-[Abrobold] text-[13px] md:text-[22px] lg:text-[36px]'>Our Process</h4>
            <div className='poppins-regular text-[11px] md:text-[15px] lg:text-lg'>
              <ol className='gap-5 grid mb-6'>
                <li>
                  <span className='poppins-semibold'>1) Campaign Strategy : </span>
                  <span className='poppins-regular'>We begin by developing a tailored, data-driven plan to align with your business goals and target audience.</span>
                </li>
                <li>
                  <span className='poppins-semibold'>2) Creative Development : </span>
                  <span className='poppins-regular'>Our team creates compelling ad creatives designed to engage and convert your ideal customers.</span>
                </li>
                <li>
                  <span className='poppins-semibold'>3) Execution : </span>
                  <span className='poppins-regular'>We launch the campaign across the right platforms, ensuring smooth implementation and maximum reach.</span>
                </li>
                <li>
                  <span className='poppins-semibold'>4) Optimisation : </span>
                  <span className='poppins-regular'>We continually monitor performance and make adjustments to improve results and maximise ROI.</span>
                </li>
                <li>
                  <span className='poppins-semibold'>5) A/B Testing : </span>
                  <span className='poppins-regular'>We test different variations to identify the most effective strategies and enhance campaign performance.</span>
                </li>
                <li>
                  <span className='poppins-semibold'>6) Scaling : </span>
                  <span className='poppins-regular'>Once we find what works, we scale the campaign to reach a larger audience and drive sustainable growth.</span>
                </li>
              </ol>
              <p>This structured approach ensures your campaigns are not only launched effectively but also optimised and scaled for ongoing success.</p>
            </div>
          </div>
        </div>
      </div>
      <LandingFooter />
    </div>
  )
}
