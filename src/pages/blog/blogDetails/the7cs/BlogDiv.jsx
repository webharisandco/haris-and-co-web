import React, { useState } from "react";
import img2 from "@/assets/images/blogDetails/The7cs2.jpg";
import img3 from "@/assets/images/blogDetails/The7cs3.jpg";

export default function BlogDiv() {
  const [show, setShow] = useState(false);

  return (
    <div className="flex gap-5 md:gap-[30px] h-fit px-[16px] md:px-[80px] py-[50px] bg-white">
      <div className="lg:w-2/3 flex flex-col gap-5">
        {/* Intro Paragraph */}
        <p className="font-[thin]">
          Onam in Kerala is more than a festival. It is a season that transforms the state. Streets are busier, homes are brighter, and families gather over pookalams, sadhyas, and stories that have been told for generations. It is tradition, celebration, and joy all at once.
        </p>
        <p className="font-[thin]">
          For brands, Onam is also a marketing moment. When done right, a campaign during this season does more than promote. It becomes part of the celebration. Digital marketing, outdoor media, and creative storytelling can come together to make that happen.
        </p>
         <p className="font-[thin]">
          This year Wonderla wanted to light up Onam across Kerala. And we at Haris & Co were ready to make it happen.
        </p>
        <p className="font-[thin]">
          The idea was simple. Celebrate Onam, celebrate families, and celebrate the fun that Wonderla stands for. We wanted the campaign to feel festive, not forced. That is how Turning It ONAM came to life, a playful idea that carried both the energy of the season and the excitement of Wonderla.
        </p>
        <p className="font-[thin]">
          It was more than a tagline. It became the thread that tied together every creative, billboard, and post, reminding people that joy, togetherness, and a trip to Wonderla belong in the same story.
        </p>
        <p className="font-[thin]">
          Festive creatives rolled out across social platforms, filled with the colors and nostalgia of Onam. Each piece was designed to stop the scroll and spark celebration while putting Wonderla right at the center of it.
        </p>
        <p className="font-[thin]">
          In Calicut, Kochi, Malappuram and Trivandrum, Wonderla billboards took over key spots. Bright, bold and impossible to miss, they turned cityscapes into reminders of festive fun.
        </p>
        <p className="font-[thin]">
          By blending the digital and outdoor worlds, the campaign made sure Wonderla was everywhere. On your screen when you were planning the holidays and on the road while shopping or traveling with family.
        </p>
        {/* Expandable Content */}
        <div
          className={`flex flex-col gap-5 overflow-hidden transition-all duration-500 ease-in-out ${
            show ? "max-h-[6000px] opacity-100" : "max-h-0 opacity-0"
          } lg:max-h-none lg:opacity-100`}
        >
          <h6 className="text-[22px] mt-5">Why It Worked</h6>
           <p className="font-[thin]">
           The campaign clicked because it captured the festive spirit Malayalis were already living. It did not shout offers or push tickets. It celebrated the mood of the season. Families saw Wonderla as part of their Onam story, not just another ad.
           </p>
            <p className="font-[thin]">
           For us, that is the sweet spot of festive marketing. It is not about being louder. It is about being in sync with what people are already feeling.
            </p>
             <p className="font-[thin]">
           The Wonderla Onam campaign showed how cultural moments can bring brands closer to people. With the right mix of digital reach, outdoor presence and storytelling, marketing can move from simply selling to belonging.
             </p>
              <p className="font-[thin]">
           This Onam, we did not just run a campaign. We turned it <strong>ON-AM.</strong>
              </p>






















{/* 

          <p className="font-[thin]">
            Content is the foundation of any digital marketing strategy. Whether through blog posts, social media updates, videos, or infographics, high-quality content attracts and engages audiences. The key is to provide value, whether by educating, entertaining, or inspiring—while subtly reinforcing your brand message.
            <br />
            <strong>Tip:</strong> Focus on storytelling and interactive formats like quizzes, polls, and live videos to boost engagement. On the other hand, SEO content should be informative and answer users' questions in a simple way.
          </p> */}

          {/* <h6 className="text-[22px] mt-5">2. Context</h6>
          <p className="font-[thin]">
            Even the best content will not be effective if it lacks relevance. Context ensures that your message reaches the right audience at the right time. Personalisation is crucial here—understanding user intent and behaviour allows brands to tailor their messaging effectively.
            <br />
            <strong>Tip:</strong> Use data analytics and AI-driven insights to deliver content that aligns with audience preferences and search intent.
          </p> */}
{/* 
          <h6 className="text-[22px] mt-5">3. Community</h6>
          <p className="font-[thin]">
            According to Tintup, 81.6% of consumers are more likely to try new product varieties because of an online brand community. A strong digital community turns casual followers into loyal customers and brand advocates. Engaging through social media, forums, and customer support builds trust and lasting relationships, while user-generated content further strengthens this connection.
            <br />
            <strong>Tip:</strong> Create online groups or forums where customers can engage, share experiences, and connect with your brand.
          </p> */}

          {/* <h6 className="text-[22px] mt-5">4. Connection</h6>
          <p className="font-[thin]">
            Digital marketing is not just about broadcasting messages; it is about fostering meaningful interactions. Building strong connections means responding to comments, addressing concerns, and engaging in conversations with your audience.
            <br />
            <strong>Tip:</strong> Leverage chatbots, email marketing, and real-time interactions to enhance engagement and personalisation.
          </p>

          <h6 className="text-[22px] mt-5">5. Commerce</h6> */}
          {/* <p className="font-[thin]">
            While engagement is important, the ultimate goal is to drive sales. A seamless user experience, clear calls to action (CTAs), and an optimised checkout process play a key role in improving conversions.
            <br />
            <strong>Tip:</strong> Conduct A/B testing to refine landing pages and CTAs for better results.
          </p>

          <h6 className="text-[22px] mt-5">6. Customer</h6>
          <p className="font-[thin]">
            Every successful marketing strategy is built around the customer. Understanding their needs, preferences, and challenges allows brands to craft campaigns that truly resonate. Customer feedback and data-driven insights are essential for refining and improving marketing efforts.
            <br />
            <strong>Tip:</strong> Use CRM tools to track customer interactions and personalise their experience. */}
          {/* </p>

          <h6 className="text-[22px] mt-5">7. Consistency</h6>
          <p className="font-[thin]">
            A strong digital presence requires consistency across all platforms, including social media, email marketing, websites, and advertisements. Maintaining uniformity in brand voice, messaging, and visual identity enhances credibility and trust.
            <br />
            <strong>Tip:</strong> Develop a content calendar and maintain a steady posting schedule to keep your audience engaged.
          </p> */}
{/* 
          <h6 className="text-[22px] mt-5">Final Thoughts</h6>
          <p className="font-[thin]">
            Mastering the 7 C’s of Digital Marketing—Content, Context, Community, Connection, Commerce, Customer, and Consistency can help businesses build effective marketing strategies. By focusing on these pillars, brands can create meaningful relationships, enhance engagement, and drive long-term success in the digital space.
          </p>

          <p className="font-[thin]">
            <strong>Ready to Elevate Your Digital Marketing Strategy?</strong>
            <br />
            Check out Haris&Co. today to take your digital marketing to the next level!
          </p> */}
        </div>

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
        <img src={img2} alt="Digital Marketing" />
        <img src={img3} alt="Marketing Strategy" />
      </div>
    </div>
  );
}