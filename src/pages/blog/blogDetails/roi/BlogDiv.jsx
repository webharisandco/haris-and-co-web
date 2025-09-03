import React, { useState } from "react";
import img2 from "@/assets/images/blogDetails/roi2.jpg";
import img3 from "@/assets/images/blogDetails/roi3.jpg";

export default function BlogDiv() {
  const [show, setShow] = useState(false);

  return (
    <div className="flex gap-5 md:gap-[30px] h-fit px-[16px] md:px-[80px] py-[50px] bg-white">
      <div className="lg:w-2/3 flex flex-col gap-5">
        {/* Intro Paragraph */}
        <p className="font-[thin]">
          Let’s explore how to calculate ROI in digital marketing and why it matters.
        </p>

        {/* Expandable Content */}
        <div
          className={`flex flex-col gap-5 overflow-hidden transition-all duration-500 ease-in-out ${
            show ? "max-h-[6000px] opacity-100" : "max-h-0 opacity-0"
          } lg:max-h-none lg:opacity-100`}
        >
          <h6 className="text-[22px] mt-5">How to Calculate ROI in Digital Marketing</h6>
          <p className="font-[thin]">
            The formula for calculating ROI is straightforward:
            <br />
            <strong>ROI = (Net Profit / Total Investment) x 100</strong>
          </p>

          <p className="font-[thin]">
            <strong>Net Profit:</strong> Subtract the total cost of your campaign from the revenue it generated. <br />
            ie; Net Profit = Revenue − Total Investment
            <br /><br />
            <strong>Total Investment:</strong> Include all costs associated with the campaign, such as ad spend, software tools, agency fees, and employee time.
            <br /><br />
            <strong>Multiply by 100:</strong> This converts the ratio into a percentage.
          </p>

          <h6 className="text-[20px] mt-3">Example</h6>
          <p className="font-[thin]">
            If you spent ₹2000 on a Facebook ad campaign and generated ₹8,000 in revenue, your net profit would be ₹6,000. Now, let's plug this into the formula:
            <br />
            ROI = (6000/2000) x 100 = 300%
            <br />
            This means you earned ₹3 for every ₹1 you spent.
          </p>

          <h6 className="text-[22px] mt-5">Why ROI Matters in Digital Marketing</h6>
          <p className="font-[thin]">
            • <strong>Budget Allocation:</strong> Helps in deciding where to allocate marketing budgets for maximum effect.
            <br />• <strong>Performance Measurement:</strong> Enables marketers to assess which campaigns are performing well and which are not.
            <br />• <strong>Strategic Decisions:</strong> Provides data to make informed decisions for future marketing strategies.
          </p>

          <h6 className="text-[22px] mt-5">Statistics Highlighting ROI in Digital Marketing</h6>
          <p className="font-[thin]">
            • <strong>Email Marketing:</strong> According to Shopify, Email marketing campaigns have an average ROI of 36 times.
            <br />• <strong>Social Media:</strong> According to Horizon Grand View Research, the Indian social media analytics market generated approximately ₹3,070 crore in revenue in 2023 and is projected to reach ₹35,650 crore by 2030.
            <br />• <strong>Search Engine Optimization (SEO):</strong> According to Sagapixel, a well-executed SEO campaign can deliver an impressive average ROI of 748%.
          </p>

          <h6 className="text-[22px] mt-5">How to Improve ROI in Digital Marketing</h6>
          <p className="font-[thin]">
            • <strong>Data-Driven Decisions:</strong> Use analytics to understand which channels bring the most value.
            <br />• <strong>A/B Testing:</strong> Continuously test elements of your campaigns to optimize performance.
            <br />• <strong>Customer Lifetime Value (CLV):</strong> Focus on strategies that increase CLV, not just immediate sales.
            <br />• <strong>Content Marketing:</strong> Invest in quality content that drives engagement and conversions.
            <br />• <strong>Automation and AI:</strong> Use technology to personalize experiences at scale, reducing costs while improving effectiveness.
          </p>

          <h6 className="text-[22px] mt-5">Challenges in Measuring ROI</h6>
          <p className="font-[thin]">
            • <strong>Attribution:</strong> Determining which part of the marketing funnel led to the sale can be complex in multi-channel campaigns.
            <br />• <strong>Short vs. Long Term:</strong> Some marketing activities (like brand awareness) might not show immediate ROI but are crucial for long-term success.
            <br />• <strong>Data Quality:</strong> Inaccurate or incomplete data can lead to misinterpretation of ROI.
          </p>

          <h6 className="text-[22px] mt-5">Final Thoughts</h6>
          <p className="font-[thin]">
            Understanding and optimizing ROI in digital marketing is not just about numbers; it's about strategic insight and continuous improvement. By focusing on data-driven marketing, testing, and leveraging technology, businesses can significantly enhance their marketing ROI.
          </p>

          <p className="font-[thin]">
            <strong>Ready to Maximise Your ROI?</strong>
            <br />Partner with Haris&Co. today and watch your digital marketing investments deliver unbeatable returns!
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
        <img src={img2} alt="Digital Marketing ROI" />
        <img src={img3} alt="ROI Strategy" />
      </div>
    </div>
  );
}