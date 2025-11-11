import React from "react";
import blogImg from "@/assets/images/blogDetails/Misty-Mountains.jpg";



function Banner() {
  return (
    <div className=" px-[16px] md:px-[80px] pt-[180px] pb-[180px] min-h-[700px flex items-center  lg:min-h-[632px] bg-[#0E0E0E]">
      <div className=" flex flex-col gap-[35px]">
        <h1 className=" text-4xl lg:text-6xl text-white">
        Misty Mountain: Winning SEO Battles Against Giants

        </h1>
        <p className="text-white text-[20px] md:text-[25px] font-[thin]">
        Misty Mountain Plantation Resort, nestled in the tea and cardamom hills of Kuttikkanam, Kerala, is known for offering guests serene escapes and breathtaking views of the Western Ghats. While the resort had a loyal offline presence, its online visibility told a different story. Competing with aggregator giants like MakeMyTrip, TripAdvisor, and Agoda made it nearly invisible on search, and the existing website struggled to generate quality leads.
        </p>
         <p className="text-white text-[20px] md:text-[25px] font-[thin] ">
        The challenges, however, didn’t end there. The site was built on Framer, a design-first platform with limited SEO support. Unlike WordPress or other CMS platforms, Framer required extensive customization to ensure crawlability, indexing, and structured data integration. For Misty Mountain, standing out online meant overcoming both technical and competitive hurdles.
        </p>


        <p className="text-white text-[20px] md:text-[25px]">
        <span>That’s where Haris & Co stepped in, bringing clarity and structure to help the brand climb search rankings and unlock stronger visibility.</span>
        </p>
         <p className="text-white text-[20px] md:text-[25px] font-[thin] ">
        We began by laying a strong technical foundation. Custom meta tags, XML sitemaps, and schema markups were set up to improve search performance. The homepage was restructured with keyword-focused content and better navigation, while site speed and mobile responsiveness were optimized to meet modern search standards.
        </p>
         <p className="text-white text-[20px] md:text-[25px] font-[thin] ">
          Content became the second pillar of strategy. Instead of generic copy, we created experience-led blogs and landing pages that captured what aggregators couldn’t: plantation walks, campfires, eco-stays, and the immersive charm of Kuttikkanam. These pages were internally linked to strengthen authority, while backlinks, an optimized Google Business Profile, and updated listings further boosted visibility.
        </p>
         {/* <p className="text-white text-[20px] md:text-[30px] font-[thin] w-4/5">
          Your cousin or a friend could design logos, obviously. Cohesive branding, a clear visual identity, and strategy are overrated. Who needs that consistency anyway?
        </p>
        <p className="text-white text-[20px] md:text-[30px] font-[thin] w-4/5">
          Analytics and metrics are optional. Tracking clicks, conversions, or ROI is unnecessary. You could just throw content into the void and hope for magic.
        </p>
        <p className="text-white text-[20px] md:text-[30px] font-[thin] w-4/5">
          Managing multiple campaigns across channels yourself builds character. Nothing like spreadsheets, social calendars, and ad managers keeping you on your toes.
        </p>
        <p className="text-white text-[20px] md:text-[30px] font-[thin] w-4/5">
          It is exhausting to think about and maybe that is the point.
        </p> */}
        
        <img src={blogImg} alt="" />
      </div>
    </div>
  );
}

export default Banner;


