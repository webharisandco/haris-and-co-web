import React, { useState } from "react";
import img2 from "@/assets/images/blogDetails/guide2.jpg";
import img3 from "@/assets/images/blogDetails/guide3.jpg";

export default function BlogDiv() {
  const [show, setShow] = useState(false);

  return (
    <div className="flex gap-5 md:gap-[30px] h-fit px-[16px] md:px-[80px] py-[50px] bg-white">
      <div className="lg:w-2/3 flex flex-col gap-5">
        {/* Intro Paragraph */}
        <p className="font-[thin]">
          Digital marketing encompasses all marketing efforts that utilise electronic devices or the internet. Businesses leverage digital channels such as search engines, social media, email, and websites to connect with current and prospective customers. Unlike traditional marketing, digital marketing offers real-time data, personalised content, and interactive platforms, enabling businesses to engage with their audience more effectively.
        </p>

        {/* Expandable Content */}
        <div
          className={`flex flex-col gap-5 overflow-hidden transition-all duration-500 ease-in-out ${
            show ? "max-h-[6000px] opacity-100" : "max-h-0 opacity-0"
          } lg:max-h-none lg:opacity-100`}
        >
          <h6 className="text-[22px] mt-5">Core Components of Digital Marketing</h6>

          <h6 className="text-[20px] mt-5">1. Search Engine Optimisation (SEO)</h6>
          <p className="font-[thin]">
            SEO is the process of improving a website to rank higher in search engine results, increasing visibility and attracting organic traffic. It includes on-page SEO (content optimisation, keywords, meta tags), off-page SEO (backlinks, social mentions), and technical SEO (site speed, mobile optimisation, crawlability). SEO is a long-term investment that builds credibility and drives sustainable growth.
          </p>

          <h6 className="text-[20px] mt-5">2. Content Marketing</h6>
          <p className="font-[thin]">
            Content marketing focuses on creating and distributing valuable, relevant, and consistent content to attract and retain a clearly defined audience. Forms include blog posts, e-books, infographics, and videos. Effective content marketing builds trust, establishes authority, and drives conversions.
          </p>

          <h6 className="text-[20px] mt-5">3. Social Media Marketing</h6>
          <p className="font-[thin]">
            Social media marketing uses platforms like Instagram, Facebook, LinkedIn, and X to build brand awareness, engage with audiences, and drive actions. It involves platform selection, tailored content strategies, active community engagement, and paid advertising. With over 5 billion active social media user identities globally, it’s an essential part of modern marketing.
          </p>

          <h6 className="text-[20px] mt-5">4. Production</h6>
          <p className="font-[thin]">
            Production brings creative ideas to life through high-quality visuals and audio. This includes video creation, podcasts, product shoots, and post-production workflows. Strong production enhances storytelling, captures attention, and sustains engagement in today’s fast-paced digital landscape.
          </p>

          <h6 className="text-[20px] mt-5">5. Email Marketing</h6>
          <p className="font-[thin]">
            Email marketing provides a direct and personal way to communicate with audiences, nurture leads, and build loyalty. Key elements include segmentation, personalisation, automation, and analytics. When done thoughtfully, email marketing builds trust and drives measurable results.
          </p>

          <h6 className="text-[20px] mt-5">6. Performance Marketing</h6>
          <p className="font-[thin]">
            Also known as PPC, performance marketing focuses on paying only for specific actions like clicks, leads, or sales. It involves keyword research, creative ad development, budget optimisation, and ROI tracking. Platforms like Google Ads and Meta Ads enable targeted, measurable campaigns.
          </p>

          <h6 className="text-[20px] mt-5">7. Digital PR and Communication</h6>
          <p className="font-[thin]">
            Digital PR manages how a brand is perceived online. It includes building media relationships, thought leadership, online reputation management, and coordinated storytelling. Digital PR strengthens reputation, boosts SEO, and builds long-term trust.
          </p>

          <h6 className="text-[20px] mt-5">8. Web Development and UI/UX</h6>
          <p className="font-[thin]">
            A website is a brand’s storefront and conversion hub. Strong web development ensures mobile-first responsive design, seamless user journeys, fast load speeds, and accessibility. Effective websites combine aesthetics with functionality to attract and convert users.
          </p>

          <h6 className="text-[20px] mt-5">9. Influencer Marketing</h6>
          <p className="font-[thin]">
            Influencer marketing leverages trusted voices with dedicated communities. It involves strategic influencer selection, authentic collaborations, campaign management, performance tracking, and compliance. Done right, it builds credibility, community, and meaningful engagement.
          </p>

          <h6 className="text-[20px] mt-5">10. Branding</h6>
          <p className="font-[thin]">
            Branding goes beyond logos—it defines a company’s identity and how people perceive it. Elements include visual identity, voice and tone, visual consistency, and strategic positioning. Strong branding builds trust, fosters loyalty, and drives long-term growth.
          </p>

          <h6 className="text-[22px] mt-5">Emerging Trends in Digital Marketing</h6>
          <p className="font-[thin]">
            <strong>Artificial Intelligence & Machine Learning:</strong> Enables predictive analytics, chatbots, automated content generation, and personalised experiences. <br />
            <strong>Voice Search & Smart Devices:</strong> Requires optimising for conversational queries, structured data, and local SEO. <br />
            <strong>Augmented Reality (AR) & Virtual Reality (VR):</strong> Creates immersive experiences, virtual try-ons, and interactive brand storytelling. <br />
            <strong>Personalisation & Customer Experience:</strong> Involves dynamic content, customised recommendations, and behavioural triggers to improve satisfaction and loyalty.
          </p>

          <h6 className="text-[22px] mt-5">Time to Go Digital - The Right Way</h6>
          <p className="font-[thin]">
            Digital marketing isn’t just a buzzword—it’s the backbone of business growth today. From SEO to social media, content to conversions, understanding the digital ecosystem helps you stay ahead. But mastering every channel isn’t easy. That’s where we come in.
            <br /><br />
            <strong>Let Haris&Co. Help You Win Online.</strong>
            <br />
            From data-driven campaigns to brand storytelling that converts, our team of digital specialists has your back. Book a free consultation with our experts today.
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
        <img src={img2} alt="Digital Marketing" />
        <img src={img3} alt="Marketing Strategy" />
      </div>
    </div>
  );
}