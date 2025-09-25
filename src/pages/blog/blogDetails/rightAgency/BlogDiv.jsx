import React, { useState } from "react";
import img2 from "@/assets/images/blogDetails/ChoosetheRight2.jpg";
import img3 from "@/assets/images/blogDetails/ChoosetheRight3.jpg";

export default function BlogDiv() {
  const [show, setShow] = useState(false);

  return (
    <div className="flex gap-5 md:gap-[30px] h-fit px-[16px] md:px-[80px] py-[50px] bg-white">
      <div className="lg:w-2/3 flex flex-col gap-5">
        {/* Intro Paragraph */}
        <p className="font-[thin]">
         Misty Mountain Plantation Resort, nestled in the tea and cardamom hills of Kuttikkanam, Kerala, is known for offering guests serene escapes and breathtaking views of the Western Ghats. While the resort had a loyal offline presence, its online visibility told a different story. Competing with aggregator giants like MakeMyTrip, TripAdvisor, and Agoda made it nearly invisible on search, and the existing website struggled to generate quality leads.
        </p>
         <p className="font-[thin]">
         The challenges, however, didn’t end there. The site was built on Framer, a design-first platform with limited SEO support. Unlike WordPress or other CMS platforms, Framer required extensive customization to ensure crawlability, indexing, and structured data integration. For Misty Mountain, standing out online meant overcoming both technical and competitive hurdles.
        </p>
         <p className="font-[thin]">
         <strong>That’s where Haris & Co stepped in, bringing clarity and structure to help the brand climb search rankings and unlock stronger visibility.</strong>
        </p>
        <p className="font-[thin]">
         We began by laying a strong technical foundation. Custom meta tags, XML sitemaps, and schema markups were set up to improve search performance. The homepage was restructured with keyword-focused content and better navigation, while site speed and mobile responsiveness were optimized to meet modern search standards.
        </p>
        <p className="font-[thin]">
          Content became the second pillar of strategy. Instead of generic copy, we created experience-led blogs and landing pages that captured what aggregators couldn’t: plantation walks, campfires, eco-stays, and the immersive charm of Kuttikkanam. These pages were internally linked to strengthen authority, while backlinks, an optimized Google Business Profile, and updated listings further boosted visibility.
        </p>
        <p className="font-[thin]">
          The results spoke for themselves. Within four months, organic traffic grew from 390 to over 2,700, clicks rose from 210 to 1,570, and impressions soared from 6,400 to 65,000. The resort broke into Google’s top three for high-intent keywords such as Best Resort in Kuttikkanam and Luxury Resorts in Kuttikkanam.
        </p>
        <p className="font-[thin]">
         From near invisibility to top search rankings, Misty Mountain’s website now mirrors the premium experience it offers in person. Haris & Co’s blend of technical SEO, content strategy, and authority-building turned challenges into measurable growth. The resort’s journey proves that even independent hospitality brands can stand out in competitive digital landscapes with the right strategy.
        </p>
        {/* Expandable Content */}
        {/* <div
          className={`flex flex-col gap-5 overflow-hidden transition-all duration-500 ease-in-out ${
            show ? "max-h-[6000px] opacity-100" : "max-h-0 opacity-0"
          } lg:max-h-none lg:opacity-100`}
        > */}
          {/* <h6 className="text-[22px] mt-5">Start With Your Goals</h6>
          <p className="font-[thin]">
            Before you even Google "top digital marketing agencies in India," get clear on what you're hoping to achieve. 
            Are you launching a new product and need buzz on social media? Is your website not showing up on Google? 
            Are you spending money on ads but seeing no real return? Having clear goals helps you filter agencies based on their expertise.
            <br /><br />
            As of 2024, digital media in India brought in advertising revenue worth 700 billion rupees. In the same year, the country’s total ad revenue crossed one trillion rupees. 
            That means more businesses are investing online and you need a partner who knows how to make that money count.
          </p>

          <h6 className="text-[22px] mt-5">Understand What Services You Actually Need</h6>
          <p className="font-[thin]">
            Not all digital agencies do everything equally well. Some are great at running performance campaigns on Google and Meta, 
            while others focus on long-term SEO or content marketing. If your business depends on high Google rankings, 
            you need someone with a strong track record in SEO, not just flashy Instagram reels.
            <br /><br />
            The Indian market is also seeing a rise in regional content marketing, influencer partnerships, and vernacular-SEO, 
            which involves optimising content in local languages, helping brands connect more deeply with regional audiences. 
            An agency that understands your audience and their language can help you build more authentic connections.
          </p>

          <h6 className="text-[22px] mt-5">Look At Their Past Work And Reputation</h6>
          <p className="font-[thin]">
            Don't just take their word for it. Ask for client examples, case studies, or references. 
            If they’ve worked with brands in your industry or solved problems similar to yours, that’s a strong plus. 
            Many agencies also showcase their work on their own websites. 
            It’s worth checking how specific their impact has been, like whether they helped double leads in three months 
            or reduced ad spend while increasing conversions.
            <br /><br />
            At Haris&Co, we’ve consistently attracted new clients through the strength of our portfolio, 
            which highlights real results across diverse industries, from boosting organic traffic 
            to driving measurable ROI through tailored campaigns.
          </p>

          <h6 className="text-[22px] mt-5">Evaluate Communication, Not Just Capability</h6>
          <p className="font-[thin]">
            One of the most overlooked aspects of choosing an agency is how well they communicate. 
            Do they listen to your business challenges? Are they transparent about what’s realistic and what’s not? 
            Do they explain technical things in plain language or just throw jargon at you?
            <br /><br />
            You want a team that works with you, not around you. Clear reporting, monthly check-ins, and flexibility in approach 
            are all signs of a strong agency-client relationship. A digital marketing campaign can’t succeed if your partner 
            doesn’t understand your market or talks to you only when invoices are due.
            <br /><br />
            At Haris&Co., we make it a point to keep clients in the loop with regular weekly or bi-weekly updates, 
            so you're never left wondering where things stand or what’s happening behind the scenes.
          </p>

          <h6 className="text-[22px] mt-5">Ask About Results And How They Measure Them</h6>
          <p className="font-[thin]">
            Any good agency should be comfortable talking numbers. Ask them how they measure success. 
            Do they focus on metrics like cost per lead, return on ad spend, or conversion rates? 
            Do they share monthly performance reports? Are they willing to explain what’s working and what’s not? 
            Measurable outcomes are the most important factor in selecting digital partners. Without data, 
            you’re basically flying blind. Make sure the agency is as invested in your ROI as you are.
          </p>

          <h6 className="text-[22px] mt-5">Don’t Get Trapped In Pricing Confusion</h6>
          <p className="font-[thin]">
            One of the biggest mistakes businesses make is choosing the cheapest agency. 
            You might be quoted ₹20,000 a month by one agency and ₹2 lakhs by another. 
            The difference lies in the depth of service, experience, tools used, and the size of the team working on your account.
            <br /><br />
            Instead of fixating on cost, focus on value. What are you getting in return? 
            How much are they investing in strategy versus just execution? 
            Cheap campaigns with no real plan often end up costing more in the long run because they don’t deliver.
          </p>

          <h6 className="text-[22px] mt-5">Think Long-Term, Not Short Fix</h6>
          <p className="font-[thin]">
            Digital marketing isn’t a one-time project. It’s an ongoing relationship. 
            If an agency is only interested in short-term wins or promises to get you on page one of Google in a week, be cautious. 
            A good partner will think about your business holistically, help you evolve your digital strategy, 
            and adapt as your brand grows.
            <br /><br />
            As per a report by Deloitte India, long-term partnerships between brands and agencies have led to 2x faster growth 
            in brand equity compared to those working with freelancers or hopping between agencies every year.
          </p>

          <h6 className="text-[22px] mt-5">Red Flags to Watch Out For</h6>
          <p className="font-[thin]">
            • Promises like "Rank #1 on Google in 7 days" <br />
            • No mention of data or KPIs <br />
            • Outsourcing everything without visibility <br />
            • Cookie-cutter strategies for all clients
          </p>

          <h6 className="text-[22px] mt-5">Choose Thoughtfully</h6>
          <p className="font-[thin]">
            The right digital marketing agency can help you unlock serious growth. 
            But only if you choose one that gets your business, communicates clearly, tracks performance with data, 
            and has the skills to execute campaigns that deliver.
            <br /><br />
            So take your time. Do the calls. Ask the questions. Look beyond pitch decks and look for impact.
            <br /><br />
            <strong>Ready to make that choice?</strong><br />
            If you’re looking for a digital marketing partner that combines strategic thinking with real-world performance, 
            look no further than Haris&Co. With a proven record of helping both Indian and global brands grow, 
            a sharp understanding of diverse markets, and a team that actually listens, Haris&Co. is built for brands that are ready to scale smartly.
            <br /><br />
            Want to chat about your goals and see how we can help? Get in touch. Let’s build something great together.
          </p> */}
        {/* </div> */}

        {/* Read More / Read Less Button */}
        {/* <p
          className="flex lg:hidden z-20 cursor-pointer text-blue-600 font-semibold"
          onClick={() => setShow(!show)}
        >
          {show ? "Read Less" : "Read More"}
        </p> */}
      </div>

      {/* Images Section */}
      <div className="w-1/3 lg:flex flex-col gap-5 hidden">
        <img src={img2} alt="Digital Marketing ROI" />
        <img src={img3} alt="ROI Strategy" />
      </div>
    </div>
  );
}