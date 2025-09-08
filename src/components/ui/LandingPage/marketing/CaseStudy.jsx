import React, { useState } from "react";
import case1 from "@/assets/images/DigitalMarketing/case1.png";
import case2 from "@/assets/images/DigitalMarketing/case2.png";
import case3 from "@/assets/images/DigitalMarketing/case3.png";
import s1 from "@/assets/images/DigitalMarketing/SeoPage/kairali new case 1.svg";
import s2 from "@/assets/images/DigitalMarketing/SeoPage/seo casestudy bosq 1.svg";
import s3 from "@/assets/images/DigitalMarketing/SeoPage/seo casestudy skinbae 1.svg";
import p1 from "@/assets/images/DigitalMarketing/p1.webp";
import p2 from "@/assets/images/DigitalMarketing/p2.webp";
import p3 from "@/assets/images/DigitalMarketing/p3.webp";
import sm1 from "@/assets/images/DigitalMarketing/sm1.webp";
import sm2 from "@/assets/images/DigitalMarketing/sm2.webp";
import sm3 from "@/assets/images/DigitalMarketing/sm3.webp";
import br1 from "@/assets/images/DigitalMarketing/br1.webp";
import br2 from "@/assets/images/DigitalMarketing/br2.webp";
import br3 from "@/assets/images/DigitalMarketing/br3.webp";
import cr1 from "@/assets/images/DigitalMarketing/cr1.webp";
import cr2 from "@/assets/images/DigitalMarketing/cr2.webp";
import cr3 from "@/assets/images/DigitalMarketing/cr3.webp";
import w1 from "@/assets/images/DigitalMarketing/w1.webp";
import w2 from "@/assets/images/DigitalMarketing/w2.webp";
import w3 from "@/assets/images/DigitalMarketing/w3.webp";
import { Clock } from "lucide-react";
import LandingButton from "../../common/LandingButton";

const CaseStudy = () => {
  const [activeTab, setActiveTab] = useState("Performance Marketing");

  const CASE_STUDIES = [
    {
      category: "Performance Marketing",
      cases: [
        {
          type: "main",
          img: case1,
          title: "From 0 to ₹6 Million Revenue per month (4+ ROAS)",
          date: "March 8, 2024",
          description:
            "Explore how we transformed Bluetyga into a revenue-generating company from scratch.",
        },
        {
          img: case2,
          title: "Generated a Massive ₹10 Million in 6 Months",
          date: "March 8, 2024",
          description:
            "Dive in to learn how we improved the online sales rate of Walkaroo - one of India's leading footwear brands.",
          descriptionClass: "grey-clr-fg",
        },
        {
          img: case3,
          title: "Boosted the Sales by 2x in Just 1 Month!",
          date: "March 8, 2024",
          description:
            "Here is the detailed story of how we helped Strabo hurdle the challenges and increase their revenue.",
          descriptionClass: "grey-clr-fg",
        },
      ],
    },
    {
      category: "SEO",
      cases: [
        {
          type: "main",
          img: s1,
          title: "Website Visits Shot From 1K to a Massive 2 Lakhs+",
          date: "March 8, 2024",
          description:
            "Read in detail the challenges Kairali TMT faced, what we did to address them and the results they achieved.",
        },
        {
          img: s2,
          title: "Generated 1M+ Revenue Organically Within 10 Months",
          date: "March 8, 2024",
          description:
            "Explore how we helped BOSQ increase revenue, organic lead generation, and website visits.",
          descriptionClass: "grey-clr-fg",
        },
        {
          img: s3,
          title:
            "Ranked a Skin Care Brand Above Giants Like Nykaa, Amazon, and Macaron",
          date: "March 8, 2024",
          description:
            "Read in detail the strategy we implemented to make Skin Bae stand out on Google.",
          descriptionClass: "grey-clr-fg",
        },
      ],
    },
    {
      category: "PR & Communication",
      cases: [
        {
          title: "1 Campaign - 1.8 Million Views and 157000+ Likes!",
          description:
            "This campaign's case study shows how enormous the results can be with influencer marketing.",
          img: p1,
          date: "March 8, 2024",
        },
        {
          title: "Garnered 6M Views for JBL’s Vishu Campaign",
          description:
            "This case study about the Vishu campaign for JBL shows the power of influencer marketing.",
          img: p3,
          date: "March 8, 2024",
        },
        {
          title: "Influencer Campaign Brought 364K+ Views for Reliance Trends",
          description:
            "Learn how we ideated a perfect campaign for Reliance Trends and drove 1000s of views.",
          img: p2,
          date: "March 8, 2024",
        },
      ],
    },
    {
      category: "Social Media",
      cases: [
        {
          title: "Hit 41K Views for Reels Within 5 Days",
          description:
            "See how the inauguration campaign of Care n Cure drove brand awareness.",
          img: sm1,
          date: "March 8, 2024",
        },
        {
          title: "17,000 to 59,900 Followers in Just 60 Days",
          description:
            "Learn the way KiddieBus cracked the followers-winning formula with our strategy.",
          img: sm2,
          date: "March 8, 2024",
        },
        {
          title: "100,000 Impressions and 100,000 Engagements Within One Week",
          description:
            "Here is how Care n Cure found a way with us to skyrocket their impressions and engagements.",
          img: sm3,
          date: "March 8, 2024",
        },
      ],
    },
    {
      category: "Branding",
      cases: [
        {
          title: "Automate My Biz",
          description:
            "Logo, Website UI, ID Card design, and Banners. We gave them all to create a face.",
          img: br1,
          date: "March 8, 2024",
        },
        {
          title: "Quarter Plate",
          description:
            "Witness what our branding team ideated and developed for this restaurant.",
          img: br2,
          date: "March 8, 2024",
        },
        {
          title: "Heal Bev",
          description:
            "Explore everything we developed from an elegant logo to an eye-catching package design for this beverage brand.",
          img: br3,
          date: "March 8, 2024",
        },
      ],
    },
    {
      category: "Creative Strategy",
      cases: [
        {
          title: "Scaled Revenue by 110%+ in Just 4 Months",
          description:
            "Learn how we scaled Skin Bae - a Korean skincare brand, from 900,000 to 20,00,000.",
          img: cr1,
          date: "March 8, 2024",
        },
        {
          title: "Fetched 147 Registrations for a Workshop in Just 14 Days",
          description:
            "This case study shows how Million Dots found their lead generation campaign successful.",
          img: cr2,
          date: "March 8, 2024",
        },
        {
          title: "1 Video - 3+ ROAS & 380,000+ Impressions",
          description:
            "Learn how creativity paved the way for Blue Tyga to increase sales and brand awareness.",
          img: cr3,
          date: "March 8, 2024",
        },
      ],
    },
    {
      category: "Web Development",
      cases: [
        {
          title: "Revamped Online Experience for FashionKart",
          description:
            "We redesigned their entire shopping interface, improving conversions by 35%.",
          img: w1,
          date: "March 8, 2024",
        },
        {
          title: "Custom CRM Development for HealthCarePro",
          description:
            "Delivered a tailor-made CRM platform helping the client scale to 10k+ patients.",
          img: w2,
          date: "March 8, 2024",
        },
        {
          title: "Portfolio Site for Digital Artist",
          description:
            "An elegant portfolio site showcasing digital art with animations and galleries.",
          img: w3,
          date: "March 8, 2024",
        },
      ],
    },
  ];

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const activeData = CASE_STUDIES.find(
    (item) => item.category === activeTab || item.tab === activeTab
  );
  return (
    <div className="px-[16px] md:px-[80px] lg:px-[100px] py-[50px] font-[Abrobold]">
      <div className="flex justify-center items-center flex-col gap-3 mb-[40px] md:mb-[60px] lg:mb-[70px] text-center">
        <h3 className="font-[Abrobold] text-[30px] md:text-[40px] lg:text-[48px]">
          Our Case Studies
        </h3>
        <p className="text-[16px] md:text-[18px] lg:text-[20px] ">
          Read in detail about our stories of victories.
        </p>
      </div>
      <div className="flex justify-between whitespace-nowrap overflow-x-auto scrollbar-thin mb-[30px]">
        {[
          "Performance Marketing",
          "SEO",
          "PR & Communication",
          "Social Media",
          "Branding",
          "Creative Strategy",
          "Web Development",
        ].map((item) => (
          <p
            key={item}
            onClick={() => handleTabClick(item)}
            className={`text-[17px] px-[20px] cursor-pointer font-[Abrobold] ${
              activeTab === item ? "text-black" : "text-[#888888]"
            }`}
          >
            {item}
          </p>
        ))}
      </div>
      {activeData && (
        <div className="flex flex-col lg:flex-row gap-5 poppins-regular">
          {/* Left Side (main case if exists) */}
          {activeData.cases?.[0] || activeData.items?.[0] ? (
            <div className="shadow-[6.91px_6.91px_20.74px_0px_#00000026] px-4 py-3 rounded-3xl lg:w-1/2 space-y-9">
              <img
                src={activeData.cases?.[0]?.img || activeData.items?.[0]?.image}
                className="h-[310px] lg:h-auto object-cover rounded-[14px] w-full"
                alt=""
              />
              <div className="flex flex-col gap-3 md:gap-5 lg:gap-7 px-2 lg:px-5">
                <h6 className="text-[25px] md:text-[30px] lg:text-[23px] poppins-semibold w-11/12 lg:w-3/4">
                  {activeData.cases?.[0]?.title || activeData.items?.[0]?.title}
                </h6>
                <div className="flex gap-3 text-[16px] md:text-[15px] lg:text-[14px] 2xl:text-[17px] items-center">
                  <Clock color="#fff" fill="#888888" />
                  <p className="text-black/60">
                    {activeData.cases?.[0]?.date || activeData.items?.[0]?.date}
                  </p>
                </div>
                <p className="text-[16px] md:text-[15px] lg:text-[16px] 2xl:text-[17px] w-11/12 lg:w-10/12 mb-4 text-black/60">
                  {activeData.cases?.[0]?.description ||
                    activeData.items?.[0]?.description}
                </p>
              </div>
            </div>
          ) : null}

          {/* Right Side (remaining cases) */}
          <div className="flex flex-col lg:w-1/2 gap-7">
            {(activeData.cases?.slice(1) || activeData.items?.slice(1)).map(
              (item, idx) => (
                <div
                  key={idx}
                  className="shadow-[6.91px_6.91px_20.74px_0px_#00000026] px-2 md:px-4 py-4 rounded-3xl grid lg:grid-cols-[1fr_1.1fr] gap-10"
                >
                  <img
                    src={item.img }
                    className="h-[310px] w-full lg:h-auto rounded-[14px] object-cover"
                    alt=""
                  />
                  <div className="flex flex-col gap-3 md:gap-5 justify-center px-2 lg:pr-5">
                    <h6 className="text-[21px] ">{item.title}</h6>
                    <div className="flex gap-3 text-[16px] md:text-[15px] lg:text-[16px] 2xl:text-[17px] items-center">
                      <Clock color="#fff" fill="#888888" />
                      <p className="text-black/60">{item.date}</p>
                    </div>
                    <p className="text-[16px] md:text-[15px] lg:text-[14px] 2xl:text-[17px] text-black/60 mt-5">
                      {item.description}
                    </p>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      )}

      <LandingButton text={"View More"} className={"mx-auto mt-[60px] w-[100px]"} />
    </div>
  );
};

export default CaseStudy;
