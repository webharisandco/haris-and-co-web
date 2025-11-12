import React from "react";
// import img2 from "@/assets/images/blogDetails/smlbsnss2.jpg";
// import img3 from "@/assets/images/blogDetails/smlbsnss3.jpg";

export default function BlogDiv() {
  // const [show, setShow] = useState(false);

  return (
    <div className="flex gap-5 md:gap-[30px] h-fit px-[16px] md:px-[80px] py-[50px] bg-white">
      <div className="lg:w-2/3 flex flex-col gap-5">
        {/* Intro Paragraph */}
        <p className="font-[thin]">
        When it comes to building websites that perform, design is only half the story. The real difference lies in how well your site works with search engines, and that is where WordPress proves its weight. With flexible architecture, SEO-ready features, and room to grow, it is the platform built not just for looks but for measurable results.
        </p>
         <p className="font-[thin]">
        Danube Sports World needed exactly that. As Dubai’s premier indoor sports destination, it is home to padel, cricket, basketball, football, tennis, badminton, and more. Families, professionals, and visiting athletes walk through its doors every day, making it one of the busiest sporting hubs in the region. Offline, the brand had scale and recognition. Online, it was a different game. The old website lacked structure, visibility, and the power to convert interest into action.
        </p>
         <p className="font-[thin]">
          Our web team at Haris & Co moved Danube onto WordPress with a vision to design a site that keeps up with the brand. The transformation included:

        </p>
        <ul className="list-disc list-inside  font-[thin]">
          <li>A redesigned interface with clear navigation and user-first layouts.</li>
          <li>SEO-friendly structures that search engines could read and reward.</li>
          <li> No-code development so the Danube team could manage updates with ease.</li>
          <li> A simplified dashboard that made running the site as effortless as playing on it.</li>
        </ul>


         <p className="font-[thin]">
         The numbers told the story. In the first month alone, the site generated more than 1,000 qualified leads. And the growth
         kept climbing.
        </p>
        <p className="font-[thin]">
        WordPress turned Danube’s website from a sideline player into a lead machine. For a brand built on world-class courts, it finally had a digital presence strong enough to match its game.
        </p>


        {/* Expandable Content */}
        {/* <div
          className={`flex flex-col gap-5 overflow-hidden transition-all duration-500 ease-in-out ${
            show ? "max-h-[6000px] opacity-100" : "max-h-0 opacity-0"
          } lg:max-h-none lg:opacity-100`}
        > */}
          {/* <h6 className="text-[22px] mt-5">1. Build a Strong Online Presence with a Professional Website</h6>
          <p className="font-[thin]">
            Your website is the foundation of your digital marketing efforts. 75% of users judge a company’s credibility based on its website design.
            It’s often the first point of contact between your business and potential customers, so it needs to make a great impression.
            <br /><br />
            <strong>Tips:</strong>
            <br />• Ensure your website is mobile-friendly, as 62.54% of all website traffic comes from mobile devices (Statista).
            <br />• Use clear calls-to-action (CTAs) to guide visitors toward desired actions.
            <br />• Optimize your website for speed; 53% of mobile users abandon sites that take longer than 3 seconds to load.
          </p> */}

          {/* <h6 className="text-[22px] mt-5">2. Leverage Social Media Marketing</h6>
          <p className="font-[thin]">
            Social media platforms are powerful tools for small businesses to connect with their audience, build brand awareness, and drive engagement.
            54% of social media users research products on social platforms.
            <br /><br />
            <strong>Tips:</strong>
            <br />• Focus on platforms where your target audience is most active.
            <br />• Post consistently and use a mix of videos, images, and infographics.
            <br />• Engage with your audience by responding to comments and messages promptly.
          </p> */}

          {/* <h6 className="text-[22px] mt-5">3. Invest in Search Engine Optimization (SEO)</h6>
          <p className="font-[thin]">
            SEO is essential for improving your website’s visibility on search engines like Google, helping you attract organic traffic without paying for ads.
            68% of online experiences begin with a search engine.
            <br /><br />
            <strong>Tips:</strong>
            <br />• Conduct keyword research to identify terms your audience is searching for.
            <br />• Optimize your meta titles, descriptions, and headers.
            <br />• Create high-quality, informative content that addresses your audience’s needs.
          </p>

          <h6 className="text-[22px] mt-5">4. Utilize Email Marketing</h6>
          <p className="font-[thin]">
            Email marketing remains one of the most cost-effective strategies, offering a high ROI. 81% of small businesses rely on email as their
            primary customer acquisition channel.
            <br /><br />
            <strong>Tips:</strong>
            <br />• Build an email list by offering incentives such as discounts or free resources.
            <br />• Segment your list to send personalized messages.
            <br />• Use eye-catching subject lines and clear CTAs to improve open and click rates.
          </p>

          <h6 className="text-[22px] mt-5">5. Run Targeted Paid Advertising Campaigns</h6>
          <p className="font-[thin]">
            While organic strategies are important, paid advertising can help you reach a larger audience quickly.
            71% of small businesses use paid social media ads to reach their target audience.
            <br /><br />
            <strong>Tips:</strong>
            <br />• Start with Google Ads or Facebook Ads with flexible budgets.
            <br />• Use precise targeting to reach your ideal audience.
            <br />• Monitor and optimize campaigns regularly for best results.
          </p> */}

          {/* <h6 className="text-[22px] mt-5">6. Create Valuable Content</h6>
          <p className="font-[thin]">
            Content marketing is a powerful way to establish authority in your industry and build trust.
            <br /><br />
            <strong>Tips:</strong>
            <br />• Start a blog to publish articles addressing your audience’s pain points.
            <br />• Use video content—82% of all internet traffic comes from video (Cisco).
            <br />• Repurpose blog posts into social media posts, infographics, or short videos.
          </p>

          <h6 className="text-[22px] mt-5">7. Monitor and Analyze Your Performance</h6>
          <p className="font-[thin]">
            Tracking your efforts is crucial to understanding what’s working and where to improve.
            Companies using data-driven marketing are 6 times more likely to be profitable year-over-year.
            <br /><br />
            <strong>Tips:</strong>
            <br />• Use Google Analytics to track traffic, behavior, and conversions.
            <br />• Monitor social media engagement rates and follower growth.
            <br />• Regularly review campaigns and refine strategies based on results.
          </p>

          <h6 className="text-[22px] mt-5">Final Thoughts</h6>
          <p className="font-[thin]">
            Digital marketing is no longer optional—it’s a necessity for small businesses. By building a strong online presence, leveraging social media,
            investing in SEO, and utilizing email marketing, you can effectively engage your audience and grow your business.
            <br /><br />
            <strong>The key is consistency and adaptability.</strong> Start implementing these tips today and watch your business thrive.
          </p>

          <p className="font-[thin]">
            <strong>Ready to grow your small business?</strong>
            <br />
            Partner with Haris&Co. and unlock the full potential of digital marketing!
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
      {/* <div className="w-1/3 lg:flex flex-col gap-5 hidden">
        <img src={img2} alt="Digital Marketing Tips" />
        <img src={img3} alt="Small Business Growth" />
      </div> */}
    </div>
  );
}