import React, { useState } from "react";
import img2 from "@/assets/images/blogDetails/awardwinning2.jpg";
import img3 from "@/assets/images/blogDetails/smlbsnss3.jpg";

export default function BlogDiv() {
  const [show, setShow] = useState(false);

  return (
    <div className="flex gap-5 md:gap-[30px] h-fit px-[16px] md:px-[80px] py-[50px] bg-white">
      <div className="lg:w-2/3 flex flex-col gap-5">
        {/* Intro Paragraph */}
        <p className="font-[thin]">
          Let’s explore the top digital marketing agencies in Dubai and what makes them stand out.
        </p>

        {/* Expandable Content */}
        <div
          className={`flex flex-col gap-5 overflow-hidden transition-all duration-500 ease-in-out ${
            show ? "max-h-[6000px] opacity-100" : "max-h-0 opacity-0"
          } lg:max-h-none lg:opacity-100`}
        >
          <h6 className="text-[22px] mt-5">1. Haris&amp;Co.</h6>
          <p className="font-[thin]">
            Founded by Haris Aboobacker, Haris&amp;Co. has rapidly grown in the digital marketing arena. Originating from India, the agency has expanded to Dubai, bringing a revenue-focused approach to the UAE market.
            <br /><br />
            With a team of over 150 professionals, Haris&amp;Co. specializes in performance marketing, creative production, branding, SEO, web development, and digital PR. Their data-driven strategies have generated over AED 900 million in revenue for clients.
            <br /><br />
            Recognitions include the Best Lead Generation Campaign at the Brand Storyz Awards by Afaqs and honors from the Pepper Awards.
            <br /><br />
            <strong>Visit the Website</strong>
          </p>

          <h6 className="text-[22px] mt-5">2. Igloo</h6>
          <p className="font-[thin]">
            Igloo is a full-service agency in Dubai offering social media marketing, SEO, PPC, marketing automation, branding, influencer marketing, and web development.
            <br /><br />
            Awards include the 2023 Dubai Lynx Awards for Best Social Media Campaign and the 2022 MENA Search Awards for Best Small SEO Agency.
          </p>

          <h6 className="text-[22px] mt-5">3. TIDAL Digital</h6>
          <p className="font-[thin]">
            TIDAL Digital is known for its data-driven PPC and multi-channel integration. Their accolades include Best Use of Search – Finance (PPC), Best Use of Social Media, and Best Small Integrated Agency.
          </p>

          <h6 className="text-[22px] mt-5">4. Home of Performance</h6>
          <p className="font-[thin]">
            Specializing in ROI-driven PPC campaigns with innovative targeting strategies, Home of Performance has won awards like Best Large PPC Agency and Best PPC Campaign at the MENA Search Awards.
          </p>

          <h6 className="text-[22px] mt-5">5. NEXA</h6>
          <p className="font-[thin]">
            NEXA is a full-service agency recognized for B2B campaigns and cost-effective strategies. Awards include Best Use of Search – B2B (PPC) and Best Low-Budget Campaign (SEO and PPC).
          </p>

          <h6 className="text-[22px] mt-5">6. Assembly</h6>
          <p className="font-[thin]">
            Assembly focuses on scaling retail and eCommerce businesses through SEO and PPC. Their recognition includes Best Use of Search – Retail and Best PPC Campaign.
          </p>

          <h6 className="text-[22px] mt-5">7. Chain Reaction</h6>
          <p className="font-[thin]">
            Chain Reaction excels in Arabic search and local SEO, making them a top choice in the MENA region. Awards include Best Local Campaign and Most Innovative Campaign.
          </p>

          <h6 className="text-[22px] mt-5">8. A Studio</h6>
          <p className="font-[thin]">
            Established in 2001, A Studio is a leading digital and social media marketing agency across the UAE, Saudi Arabia, and GCC. They have delivered strong results for luxury brands and lifestyle-focused government entities.
          </p>

          <h6 className="text-[22px] mt-5">9. Absolute Digital</h6>
          <p className="font-[thin]">
            Absolute Digital provides bespoke digital solutions including PPC, PR, web design, and SEO. Awards include Ecommerce Agency of the Year, Best Company Culture, and Best Use of Search.
          </p>

          <h6 className="text-[22px] mt-5">10. Traffic Digital</h6>
          <p className="font-[thin]">
            Traffic Digital is the region’s largest independent agency, specializing in communication and storytelling to unlock true marketing value for brands.
          </p>

          <h6 className="text-[22px] mt-5">Partner with the Best</h6>
          <p className="font-[thin]">
            Dubai’s digital marketing space is buzzing with talent, but if you're looking for an agency that combines creativity, performance, and proven results, Haris&amp;Co. should be your first call.
            <br /><br />
            Their award-winning campaigns, data-driven strategies, and revenue-focused approach have helped brands scale rapidly—not just in the UAE, but globally.
            <br /><br />
            <strong>Ready to take your digital marketing to the next level?</strong>
            <br />
            Get in touch with Haris&amp;Co. today and see what a truly results-oriented partner can do for your brand.
            <br /><br />
            Let the numbers speak. Let Haris&amp;Co. lead.
          </p>
        </div>

        {/* Read More / Read Less Button */}
        <p
          className="flex lg:hidden z-20 cursor-pointer text-blue-600 font-semibold"
          onClick={() => setShow(!show)}
        >
          {show ? "Read Less" : "Read More"}
        </p>
      </div>

      {/* Images Section */}
      <div className="w-1/3 lg:flex flex-col gap-5 hidden">
        <img src={img2} alt="Digital Marketing Agencies" />
        <img src={img3} alt="Dubai Marketing" />
      </div>
    </div>
  );
}