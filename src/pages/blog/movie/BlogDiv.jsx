import React, { useState } from "react";
import img2 from "@/assets/images/blogDetails/AI-role2.jpg";
import img3 from "@/assets/images/blogDetails/AI-role3.jpg";

export default function BlogDiv() {
  const [show, setShow] = useState(false);
console.log(setShow)
  return (
    <div className="flex gap-5 md:gap-[30px] h-fit px-[16px] md:px-[80px] py-[50px] bg-white">
      <div className="lg:w-2/3 flex flex-col gap-5">
        {/* Intro Paragraph */}
        {/* <p className="font-[thin]">
          Artificial Intelligence (AI) is revolutionising industries worldwide,
          with digital marketing being no exception. A report by the National
          University reveals that 63% of organisations plan to adopt AI globally
          within the next three years. As consumer behaviours evolve and the
          demand for personalised experiences grows, AI has emerged as a
          powerful tool, enabling marketers to make data-driven decisions,
          optimise campaigns, and enhance customer engagement.
        </p> */}

        {/* Expandable Content */}
        <div
          className={`flex flex-col gap-5 overflow-hidden transition-all duration-500 ease-in-out ${
            show ? "max-h-[6000px] opacity-100" : "max-h-0 opacity-0"
          } lg:max-h-none lg:opacity-100`}
        >
          <h6 className="text-[22px] mt-5">
          When Movies take over the Feed!
          </h6>
          <p className="font-[thin]">
           Why does this work so well? Because people instantly get it. They know the lines, the quirks, the style. Seeing a dramatic character in an everyday scenario makes your brain go “wait, what?!” and keeps you watching.
          </p>
          <p className="font-[thin]">
           Familiar faces, instant attention – Recognition sparks curiosity.
          </p>
          <p className="font-[thin]">
           Drama in the mundane – Big characters dealing with small problems equals comedy gold.
          </p>
          <p className="font-[thin]">
           Tag, share, repeat – Funny, relatable, or surprising moments get passed along like wildfire.
          </p>
          <p className="font-[thin]">
           Pop culture points – Trending films and shows show you speak the same language as your audience.
          </p>

          <p> <strong>Scene Tricks to Get Your Content on the Ranks</strong></p>
          <p className="font-[thin]">
           Want to make your content filmy and unforgettable? Think like a director:
          </p>
          <p className="font-[thin]">
           Pick your superstar – Trending films, iconic characters, or viral dialogues instantly hook viewers.
          </p>
           <p className="font-[thin]">
          Flip the script – Take the epic and drop it into everyday life. A villain flossing? A hero ordering coffee? Instant relatability.
          </p>
           <p className="font-[thin]">
          Play with the frame – Props, expressions, and small exaggerations make even short clips feel like a scene straight out of a movie.
          </p>
           <p className="font-[thin]">
          Strike while it is hot – Trends fade fast. Catch them at peak hype, not after the credits roll.
          </p>
           <p className="font-[thin]">
         In 2025, storytelling does not stay in theaters. It lives on feeds, in reels, and in memes. Brands that understand the thrill of pop culture, the drama of cinematic storytelling, and the power of relatable, playful content stand out.
So next time you plan content, think like a director. Give your audience a plot twist, a dramatic zoom, or even just a villain flossing.
          </p>
          <p className="font-[thin]">
          The right course, the right mentors, and hands-on guidance in digital marketing can take your creativity further than words on a page ever could. With the right guidance, you can turn trends into strategy, ideas into campaigns, and scroll-stopping content into real results.
          </p>
          <p className="font-[thin]">
          In a world of endless scrolling, a little drama, humor, and filmy flair can turn your story into a hit.
          </p>
         


          <p className="font-[thin]">
           Flip the script – Take the epic and drop it into everyday life. A villain flossing? A hero ordering coffee? Instant relatability.
Play with the frame – Props, expressions, and small exaggerations make even short clips feel like a scene straight out of a 
          </p>


          {/* <h6 className="text-[22px] mt-5">
            Key Applications of AI in Digital Marketing
          </h6>
          <p className="font-[thin]">
            • <strong>Personalisation at Scale:</strong> AI analyses browsing
            behaviour, purchase history, and preferences to deliver
            hyper-personalised recommendations and campaigns. <br />
            Example: Platforms like Amazon and Netflix use AI to suggest
            products and shows based on user behaviour.
            <br />• <strong>Chatbots and Virtual Assistants:</strong> AI-powered
            chatbots provide real-time support, answering queries 24/7. <br />
            Example: Sephora's chatbot offers makeup tips and recommendations.
            <br />• <strong>Predictive Analytics:</strong> Analyse historical
            data to forecast trends, identify leads, and optimise strategies.{" "}
            <br />
            Example: Google Analytics 4 predicts user behaviour.
            <br />• <strong>Programmatic Advertising:</strong> Automates ad
            buying and placement to maximise ROI. <br />
            Example: Google Ads and Facebook Ads optimise delivery.
            <br />• <strong>Content Creation & Optimisation:</strong> Tools like
            ChatGPT and Claude generate and optimise content. <br />
            Example: BuzzFeed uses AI for personalised content.
          </p> */}

          {/* <h6 className="text-[22px] mt-5">
            Key Domains of Digital Marketing and How AI is Shaping Them
          </h6>

          <h6 className="text-[20px] mt-3">
            1. Search Engine Optimisation (SEO)
          </h6>
          <p className="font-[thin]">
            AI enhances SEO by analysing large datasets, predicting search
            intent, and optimising websites. <br />
            Tools: Surfer SEO, SEMRush, MarketMuse, ChatGPT, Claude, Perplexity.
          </p> */}

          {/* <h6 className="text-[20px] mt-3">2. Social Media Marketing (SMM)</h6>
          <p className="font-[thin]">
            AI transforms social media with engagement analysis, automated
            scheduling, and chatbots. <br />
            Tools: ChatGPT, Claude, Sora, HeyGen, Sprout Social, Freepik,
            MidJourney.
          </p>

          <h6 className="text-[20px] mt-3">3. Performance Marketing</h6>
          <p className="font-[thin]">
            AI improves ad targeting, bidding, and performance tracking. <br />
            Tools: Google Ads (Smart Bidding), AdRoll, Facebook Ads Manager
            Advantage+.
          </p>

          <h6 className="text-[20px] mt-3">4. Email Marketing</h6>
          <p className="font-[thin]">
            AI powers hyper-personalisation in email campaigns. <br />
            Tools: Mailchimp AI, Sendinblue, Persado.
          </p>

          <h6 className="text-[20px] mt-3">
            5. Customer Relationship Management (CRM)
          </h6>
          <p className="font-[thin]">
            AI enhances CRM by analysing past interactions and predicting
            customer needs. <br />
            Tools: Salesforce Einstein, HubSpot CRM, Zoho CRM.
          </p>

          <h6 className="text-[22px] mt-5">
            Benefits of AI in Digital Marketing
          </h6>
          <p className="font-[thin]">
            • Enhanced Efficiency: Automates repetitive tasks, saving time.
            <br />• Improved Accuracy: Ensures precise targeting.
            <br />• Better Experiences: Personalisation builds loyalty.
            <br />• Cost Savings: Reduces wasted ad spend.
          </p>

          <h6 className="text-[22px] mt-5">
            Challenges and Ethical Considerations
          </h6>
          <p className="font-[thin]">
            • Data Privacy: Must comply with GDPR and other laws.
            <br />• Bias in Algorithms: Training data can cause unfair outcomes.
            <br />• Over-reliance on Automation: Creativity and human input
            remain essential.
          </p>

          <h6 className="text-[22px] mt-5">
            Future Trends in AI-Driven Marketing
          </h6>
          <p className="font-[thin]">
            • <strong> Voice Search Optimisation with Alexa and Siri.</strong>   With the rise of
            voice assistants like Alexa and Siri, marketers will focus on
            optimising content for voice search.
            <br />•  <strong> AI-Powered Visual Search (Google Lens).</strong>  Tools like Google
            Lens enable users to search using images, reshaping e-commerce
            strategies.
            <br />• <strong>AR Integration for immersive shopping.</strong>  AI combined with AR
            will create immersive shopping experiences, allowing users to
            visualise products before purchase.
            <br />• <strong>Predictive Personalisation for proactive solutions.</strong>  AI will
            predict customer needs with greater accuracy, enabling brands to
            offer proactive solutions.
          </p> */}

          {/* <p className="font-[thin] mt-3">
            <strong>Wrapping Up:</strong> AI has become a cornerstone of modern
            digital marketing, bridging the gap between data and meaningful
            customer interactions. As technology evolves, embracing AI-driven
            tools and strategies will be essential for businesses to stay
            competitive and deliver value in an increasingly digital world. By
            leveraging AI responsibly and creatively, marketers can transform
            challenges into opportunities, crafting campaigns that resonate with
            their audiences and drive lasting impact. AI is revolutionising
            digital marketing by automating processes, enhancing
            personalisation, and providing valuable insights, allowing marketers
            to create more effective campaigns. Here's how AI plays a role in
            key aspects of digital marketing, along with tools used in each
            area:
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
        <img src={img2} alt="AI in Digital Marketing" />
        <img src={img3} alt="AI Strategy" />
      </div>
    </div>
  );
}
