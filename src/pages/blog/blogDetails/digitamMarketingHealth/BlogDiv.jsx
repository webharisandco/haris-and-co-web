import React, { useState } from "react";

export default function BlogDiv() {
  const [show, setShow] = useState(false);
console.log(setShow)
  return (
    <div className="flex gap-5 md:gap-[30px] h-fit px-[16px] md:px-[80px] py-[50px] bg-white">
      <div className="lg:w-2/3 flex flex-col gap-5">
        {/* Intro Paragraph */}
        {/* <p className="font-[thin]">
          Now, let’s explore how digital marketing empowers healthcare
          providers.
        </p> */}

        {/* Expandable Content */}
        <div
          className={`flex flex-col gap-5 overflow-hidden transition-all duration-500 ease-in-out ${
            show ? "max-h-[6000px] opacity-100" : "max-h-0 opacity-0"
          } lg:max-h-none lg:opacity-100`}
        >
          <h6 className="text-[22px] mt-5">
           What’s the Difference?
          </h6>
          <p className="font-[thin]">
            <br />• <strong>Sustainable Marketing:</strong> Minimizing harm, reducing waste, meeting baseline expectations.
            <br />
            <br />• <strong>Regenerative Marketing:</strong> Actively making things better, enriching communities, supporting cultural growth. It’s not just avoiding harm, it’s creating value.
            <br />
            <br />
            <p>
              This shift is what resonates with today’s audiences.
            </p>
          <h6 className="text-[22px] mt-5">
           Why Brands Need the Glow-Up Now
          </h6>
            <br />• <strong>Consumer Expectations Are Higher:</strong> Today’s audiences, employees, and investors expect more than marketing fluff. They want brands that stand for something real and demonstrate tangible impact. Simply claiming sustainability isn’t enough; proof of meaningful action is what earns trust and loyalty.
            <br />
            <br />• <strong>Competitive Edge:</strong> Brands that actively regenerate communities, ecosystems, or culture naturally differentiate themselves from competitors who only meet the basics. Taking concrete action creates a stronger identity, making the brand memorable and respected in crowded markets.
            <br />
            <br />• <strong>Stronger Stories:</strong> Regenerative initiatives provide rich storytelling opportunities. Campaigns that highlight genuine impact are more likely to engage audiences, spark conversation, and be shared widely thus creating organic amplification that goes beyond traditional advertising.
             <br />



          <h6 className="text-[22px] mt-5">
          How Brands Can Go Regenerative in Marketing
          </h6>

            <br />• <strong>Align Actions With Messaging:</strong> Ensure every campaign reflects actual initiatives and impact. Authenticity comes from consistency between what a brand says and what it does.
            <br />
            <br />• <strong>Integrate Social and Community Initiatives:</strong> Partnerships, volunteer programs, or community support can become integral parts of campaigns, making marketing meaningful and grounded in real-world change.
            <br />
            <br />• <strong>Share Data and Proof:</strong> Transparent reporting, metrics, and milestones give credibility. Showing measurable outcomes strengthens audience trust and demonstrates accountability.
            <br />
           
            <br />• <strong>Tell the Journey, Not Just the Result:</strong> Highlight the process, challenges, and stories behind the impact. Audiences connect with the human side of campaigns, making regenerative marketing more tangible and memorable.
            <br />
            
          </p>
          <h6 className="text-[20px] mt-3">Case Example</h6>
          <p className="font-[thin]">
            Haris & Co’s Women’s Day campaign for Femisafe spotlighted the resilience of women. The creative showed a woman running her race while carrying her entire world: her wedding band, her parents’ expectations, and her child.
          </p>
          <p className="font-[thin]">
              The campaign avoided clichés and gave space to a conversation that felt genuine. Audiences connected with it because it reflected real challenges alongside strength. The result was stronger emotional ties with the brand, dialogue across social channels, and a Silver for Best Moment Marketing.
          </p>
          <p className="font-[thin]">
           Sustainable marketing is no longer enough. 2025 is about regeneration, proof, and impact. 
          </p>
         
          <p className="font-[thin]">
           Brands that evolve now will be the ones that earn trust, loyalty, and attention.
         </p>

          <p className="font-[thin]">
          Want to take your marketing from sustainable to truly regenerative? At Haris & Co, we create campaigns that do more than make claims. We build stories, actions, and connections that audiences trust. Let’s take your brand to the next level.
         </p>
         <br />
         
          
    
      
          

          {/* <h6 className="text-[18px] mt-3">Why SEO Matters in Healthcare</h6>
          <p className="font-[thin]">
            • Increased Visibility: Patients often start their healthcare
            journey online. A strong SEO strategy ensures that your healthcare
            services appear in their search results.
            <br />• Targeted Traffic: By optimising for specific keywords like
            "best paediatrician near me" or "emergency dental services,"
            healthcare providers can attract the right audience.
            <br />• Authority Building: High-quality, optimised content
            establishes trust. Blogs, FAQs, and informative videos help position
            healthcare providers as thought leaders.
          </p>

          <p className="italic text-gray-500">
            “Good SEO in healthcare ensures that the right patients connect with
            the right providers. It’s the key to staying visible, building
            trust, and making a real impact.” — Our Lead SEO Analyst, Arunima
          </p>

          <p className="font-[thin]">
            SEO has been transformative for one of our clients - a leading home
            care provider in Abu Dhabi. With Haris&Co’s targeted strategy, our
            client not only ranks higher in relevant search results, but also
            has a steady stream of qualified leads from patients searching for
            nursing, babysitting, and home care services.
          </p> */}

          {/* <p className="font-[thin]">
            <strong>Results:</strong>
            <br />• babysitter in Abu Dhabi - 1st Position
            <br />• home nursing services Abu Dhabi - 2nd Position
            <br />• home care services in Abu Dhabi - 3rd Position
          </p>

          <p className="font-[thin]">
            The results showcase how targeted SEO strategies can help healthcare
            providers connect with their audience, improve engagement, and
            become a reliable resource in their community.
          </p>

          <h6 className="text-[20px] mt-3">Social Media Marketing (SMM)</h6>
          <p className="font-[thin]">
            Social media has become an essential platform for healthcare brands
            to connect meaningfully with their audiences, building trust and
            fostering community engagement. According to ReferralMD, 41% of
            people said social media would affect their choice of a specific
            doctor, hospital, or medical facility.
          </p>

          <h6 className="text-[18px] mt-3">
            The Role of Social Media in Healthcare
          </h6>
          <p className="font-[thin]">
            • Patient Engagement: Platforms like Instagram, Facebook, and
            LinkedIn help foster direct communication with patients.
            <br />• Educational Content: Sharing tips on health management,
            awareness campaigns, and updates on services boosts credibility.
            <br />• Community Building: Social media allows organisations to
            create supportive communities, especially for chronic disease
            management or mental health awareness.
          </p> */}

          {/* <h6 className="text-[18px] mt-3">
            Best Practices for Healthcare Social Media
          </h6>
          <p className="font-[thin]">
            • Platform-Specific Strategies: Use Instagram for visual
            storytelling, LinkedIn for professional outreach, and Twitter for
            real-time updates.
            <br />• Compliance Awareness: Adhere to patient confidentiality and
            data privacy laws like HIPAA or GDPR while engaging online.
            <br />• Interactive Content: Host live Q&A sessions with doctors,
            post engaging reels, or share patient success stories to increase
            interaction.
          </p>

          <p className="font-[thin]">
            Our approach to social media marketing demonstrates how a
            well-thought-out strategy can transform a healthcare brand’s
            presence and impact. Example: A pharmacy chain in Qatar increased
            followers from 3,000 to 12,500 and boosted engagement from 10% to
            85% in just 18 months through reels, contests, influencers, and
            health awareness campaigns.
          </p>

          <h6 className="text-[20px] mt-3">Performance Marketing</h6>
          <p className="font-[thin]">
            Performance marketing, through paid campaigns, ensures that
            healthcare organisations reach their audience with precision.
          </p>

          <h6 className="text-[18px] mt-3">Why Performance Marketing Works</h6>
          <p className="font-[thin]">
            • Targeted Campaigns: Tools like Google Ads and social media ad
            platforms allow you to target demographics, behaviours, and
            geolocations effectively. */}
            {/* <br />• Cost Efficiency: Performance marketing operates on a
            pay-per-click (PPC) or pay-per-acquisition (PPA) basis, ensuring you
            pay only for measurable results.
            <br />• Real-Time Analytics: Detailed insights into ad performance
            enable quick optimisation for better outcomes.
          </p> */}

          {/* <p className="font-[thin]">
            <strong>Results:</strong>
            <br />
            Ad Spend: 16.7k AED
            <br />
            Sales: 236k AED
            <br />
            ROAS: 14x
          </p>

          <p className="font-[thin]">
            This demonstrates how performance marketing, when done right, can
            drive substantial revenue and provide an excellent return on ad
            spend.
          </p>

          <h6 className="text-[22px] mt-5">
            Measuring Success in Healthcare Digital Marketing */}
          {/* </h6>
          <p className="font-[thin]">
            We help healthcare providers track and measure their digital
            marketing success through:
            <br />• Patient engagement metrics
            <br />• Website traffic and conversion rates
            <br />• Appointment scheduling analytics
            <br />• Patient feedback and reviews
            <br />• Social media engagement rates
            <br />• Return on marketing investment
          </p>

          <h6 className="text-[22px] mt-5">
            The Future of Healthcare Digital Marketing
          </h6>
          <p className="font-[thin]">
            The healthcare digital marketing landscape continues to evolve with
            emerging technologies and changing patient expectations. Key trends
            include AI-powered patient communication tools, virtual reality
            facility tours, mobile-first healthcare platforms, personalised
            patient content, and telemedicine integration.
          </p>

          <p className="font-[thin] mt-3">
            <strong>Final Words:</strong> Digital marketing has become a
            cornerstone of modern healthcare delivery. The intersection of SEO,
            social media marketing, and performance marketing creates a robust
            framework for healthcare providers to thrive in the digital age. By
            investing in these strategies, healthcare providers can not only
            enhance their reach but also foster trust, educate patients, and
            ensure measurable growth.
          </p>

          <p className="font-[thin]">
            Do you want to take your healthcare marketing to the next level?
            Let’s embrace the digital revolution together with Haris&Co. - your
            partner in healthcare marketing success. Contact us to learn more
            about our services.
          </p> */}
        {/* </div> */}

        {/* Read More / Read Less Button */}
        {/* <p
          className="flex lg:hidden z-20 cursor-pointer text-blue-600 font-semibold"
          onClick={() => setShow(!show)}
        >
          {show ? "Read Less" : "Read More"}
        </p>
      </div> */}

      {/* Images Section */}
      {/* <div className="w-1/3 lg:flex flex-col gap-5 hidden">
        <img src={img2} alt="Healthcare Digital Marketing" />
        <img src={img3} alt="Healthcare Strategy" /> */}
      </div>
    </div>
    </div>
  );
}
