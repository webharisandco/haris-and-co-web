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
          The Limits of Machine-Made Creativity
          </h6>
          <p className="font-[thin]">
            AI can produce at scale, but it cannot create from emotion. It follows data, not instinct. That is why AI-generated work often looks refined but feels empty. It can capture tone and structure, but not intention or depth.
          </p>
          <p className="font-[thin]">
          <strong>Think of it this way:</strong> a machine can write a catchy tune, but it cannot move you. It can design a logo, but it does not understand what your brand truly means to the people who see it.
          </p>
          <br />
          <h6 className="text-[22px] mt-5">
           The Temptation of Easy Answers
          </h6>
          <p className="font-[thin]">
            It is easy to turn to tools that promise speed and precision. But the problem is that AI does not actually understand what it is saying. It references patterns, not meaning. It repeats what already exists instead of imagining what could be new.
            You can see this everywhere, from people asking AI for medical advice to brands using it to write marketing campaigns. The outcome might look convincing, but it often misses the real point. The facts may be correct, but the feeling is not.
          </p>
          <br />
          <h6 className="text-[22px] mt-5">
         The Role of Humans in the Age of AI
          </h6>
          <p className="font-[thin]">
           So where do people fit in now? Right at the centre of it all. Creativity still begins with curiosity, empathy, and imagination, qualities that belong only to humans
           </p>
           <p className="font-[thin]">
            We bring emotional understanding, cultural awareness, and the ability to challenge what feels too familiar. We know when to break a pattern, when to pause, and when silence can say more than words ever could. Machines do not know that.
           </p>
            <br />
          <h6 className="text-[22px] mt-5">
         Finding Balance Between the Two
          </h6>
          <p className="font-[thin]">
           When used wisely, AI can strengthen creative work instead of replacing it. It can take care of structure, research, and repetitive tasks, giving people more time to focus on the part that matters most: ideas, storytelling, and human connection.
           </p>
           <p className="font-[thin]">
            The balance lies in collaboration, with humans guiding the process and technology supporting it. That is where innovation feels real and purposeful.
           </p>
            <br />
          <h6 className="text-[22px] mt-5">
         Creativity Is Not Replaced, It Evolves
          </h6>
          <p className="font-[thin]">
           AI will continue to grow smarter and faster. But the ideas that change how people think or feel will still come from the human imagination.
           </p>
           <p className="font-[thin]">
          The future of marketing is not a contest between humans and machines. It is about what can happen when both work together to build something meaningful, something that feels alive.
           </p>
            <br />
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
