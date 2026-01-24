import React, { useState } from "react";
import img2 from "@/assets/images/blogDetails/dig-m2.jpg";
import img3 from "@/assets/images/blogDetails/dig-m3.jpg";

export default function BlogDiv() {
  const [show, setShow] = useState(false);

  return (
    <div className="flex gap-5 md:gap-[30px] h-fit px-[16px] md:px-[80px] py-[50px] bg-white">
      <div className="lg:w-2/3 flex flex-col gap-5">
        {/* Intro Paragraph */}
        <p className="font-[thin]">
          Now, let’s explore how digital marketing empowers healthcare providers.
          Building trust through digital channels has become crucial since healthcare
          decisions are inherently personal and trust-based. With carefully crafted
          strategies, providers can connect better, educate patients, and build long-term
          credibility.
        </p>

        {/* Expandable Content with Smooth Transition */}
        <div
          className={`flex flex-col gap-5 overflow-hidden transition-all duration-500 ease-in-out ${
            show ? "max-h-[6000px] opacity-100" : "max-h-0 opacity-0"
          } lg:max-h-none lg:opacity-100`}
        >
          {/* Section 1 */}
          <h6 className="text-[22px] mt-5">Building Trust Through Digital Channels</h6>
          <p className="font-[thin]">
            Digital marketing gives healthcare organisations powerful tools to build and
            maintain trust:
            <br />• Engage patients with reliable, scientifically supported content
            <br />• Highlight medical expertise and patient success stories
            <br />• Provide transparent treatment information
            <br />• Address common health concerns
            <br />• Offer virtual facility tours
            <br />• Enable online appointment booking & telemedicine
          </p>

          {/* Section 2 */}
          <h6 className="text-[22px] mt-5">Strategic Digital Marketing Tools in Healthcare</h6>
          <p className="font-[thin]">
            From SEO to Social Media Marketing (SMM) and Performance Marketing, providers
            can reach and engage their audience effectively. Let’s break it down:
          </p>

          <h6 className="text-[20px] mt-3">Search Engine Optimisation (SEO)</h6>
          <p className="font-[thin]">
            SEO helps patients find the right care at the right time. Optimised blogs,
            FAQs, and video content build authority while improving search rankings.
          </p>
          <p className="italic text-gray-500">
            “Good SEO in healthcare ensures that the right patients connect with the right
            providers. It’s the key to staying visible, building trust, and making a real
            impact.” — Arunima, Lead SEO Analyst
          </p>

          <h6 className="text-[20px] mt-3">Social Media Marketing (SMM)</h6>
          <p className="font-[thin]">
            Social platforms like Instagram, Facebook, and LinkedIn let providers educate,
            engage, and build communities. Example: a pharmacy chain in Qatar grew their
            followers from 3,000 to 12,500 and boosted engagement from 10% to 85% in just
            18 months through reels, contests, influencers, and health awareness
            campaigns.
          </p>

          <h6 className="text-[20px] mt-3">Performance Marketing</h6>
          <p className="font-[thin]">
            Paid ads enable precise targeting and measurable ROI. For one healthcare
            client, Haris&Co achieved:
            <br />• Ad Spend: 16.7k AED
            <br />• Sales: 236k AED
            <br />• ROAS: 14x
          </p>

          {/* Section 3 */}
          <h6 className="text-[22px] mt-5">Measuring Success</h6>
          <p className="font-[thin]">
            Key metrics include website traffic, conversion rates, appointment bookings,
            patient engagement, reviews, and return on marketing investment.
          </p>

          {/* Section 4 */}
          <h6 className="text-[22px] mt-5">The Future of Healthcare Digital Marketing</h6>
          <p className="font-[thin]">
            Trends like AI-powered patient communication, virtual reality facility tours,
            mobile-first healthcare, and telemedicine are shaping the future. Providers
            that embrace these will thrive.
          </p>

          <p className="font-[thin] mt-3">
            <strong>Final Words:</strong> Digital marketing is now a cornerstone of modern
            healthcare delivery. By combining SEO, SMM, and performance marketing,
            providers can foster trust, educate patients, and ensure measurable growth.
          </p>
        </div>

        {/* Read More / Read Less Button (Only visible on small screens) */}
        <p
          className="flex lg:hidden z-20 cursor-pointer text-blue-600 font-semibold"
          onClick={() => setShow(!show)}
        >
          {show ? "Read Less" : "Read More"}
        </p>
      </div>

      {/* Images Section (Hidden on small screens) */}
      <div className="w-1/3 lg:flex flex-col gap-5 hidden">
        <img src={img2} alt="Healthcare Digital Marketing" />
        <img src={img3} alt="Healthcare Strategy" />
      </div>
    </div>
  );
}