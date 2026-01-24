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
          That was the problem Amend Dental faced. The clinic was known for advanced treatments and trusted care in Calicut, but online it was a different story. Their Instagram was active, their posts reached people, yet when enquiries came pouring into the DMs, most of them slipped away unanswered. Patients were left hanging, appointments were missed, and revenue stalled at around ₹3 lakhs a month.
        </p>
        <p className="font-[thin]">
          At Haris&Co, we knew the solution wasn’t just “more posts” or “better captions.” The real problem was speed. Patients needed answers right away, and the clinic needed a system that could keep up.
        </p>
        <p><strong>Step 1: Instant Replies that Book Appointments</strong></p>
        <p className="font-[thin]">We built a system that never left a DM unread. The moment someone messaged, they got a reply. Details like name, age, and concern were collected automatically, synced straight into the clinic’s CRM, and slots were offered on the spot. Even those quick “price?” comments on posts were redirected into private conversations that ended in bookings.</p>
         <p className="font-[thin]">Result? Zero missed enquiries and a steady stream of qualified leads.</p>
          <p><strong>Step 2: A Smarter Way to Check Your Smile</strong></p>
          <p className="font-[thin]">We then launched a landing page where people could upload three images of their teeth. Within minutes, they received a simple health report. If the scan flagged issues, the report nudged them to book an appointment right away. It was quick, personal, and built instant trust.</p>
          <p className="font-[thin]">In just three months, Amend’s social presence exploded from 800 followers to over 11,000, while monthly revenue leapt from ₹3 lakhs to ₹55 lakhs. What once took hours in response time was now instant, with every lead arriving fully detailed and ready for follow-up. Appointments could be booked around the clock without delays, and patient satisfaction rose to its highest levels yet.</p>
          <p className="font-[thin]">Amend went from missing calls in the DMs to becoming Calicut’s most responsive, tech-forward dental clinic. And for their patients, that meant faster replies, easier bookings, and no more waiting with a toothache.</p>
        
        {/* Expandable Content */}
        {/* <div
          className={`flex flex-col gap-5 overflow-hidden transition-all duration-500 ease-in-out ${
            show ? "max-h-[6000px] opacity-100" : "max-h-0 opacity-0"
          } lg:max-h-none lg:opacity-100`}
        >
          <h6 className="text-[22px] mt-5">What is Traditional Marketing?</h6>
          <p className="font-[thin]">
            Traditional marketing refers to conventional methods of promoting products or services through offline channels. These include:
            <br /><br />
            <strong>Print Media:</strong> Newspapers, magazines, brochures, and flyers.
            <br />
            <strong>Broadcast Media:</strong> Television and radio advertisements.
            <br />
            <strong>Outdoor Advertising:</strong> Billboards, posters, and transit ads.
            <br />
            <strong>Direct Mail:</strong> Physical mailers and catalogs.
            <br /><br />
            Traditional marketing has long been a cornerstone of advertising, providing broad reach and familiarity. Today, businesses often combine these strategies with digital marketing to enhance precision, measurability, and engagement.
          </p>

          <h6 className="text-[22px] mt-5">What is Digital Marketing?</h6>
          <p className="font-[thin]">
            Digital marketing encompasses all marketing efforts that use the internet or electronic devices. It includes:
            <br /><br />
            <strong>Search Engine Optimisation (SEO):</strong> Optimizing websites to rank higher on search engines like Google.
            <br />
            <strong>Social Media Marketing:</strong> Promoting products on platforms like Facebook, Instagram, and LinkedIn.
            <br />
            <strong>Pay-Per-Click (PPC) Advertising:</strong> Paid ads on search engines and social media.
            <br />
            <strong>Content Marketing:</strong> Creating valuable content to attract and engage audiences.
            <br />
            <strong>Email Marketing:</strong> Sending targeted emails to nurture leads and retain customers.
            <br />
            <strong>Influencer Marketing:</strong> Partnering with influencers to promote products.
            <br /><br />
            Digital marketing is highly targeted, measurable, and adaptable, making it a favorite among businesses of all sizes.
          </p>

          <h6 className="text-[22px] mt-5">Key Differences Between Digital and Traditional Marketing</h6>
          <p className="font-[thin]">
            <strong>Reach and Targeting:</strong> Traditional marketing reaches a broad audience but lacks precision. Digital marketing allows hyper-targeting based on demographics, interests, behaviors, and location.
            <br /><br />
            <strong>Measurability and Analytics:</strong> Traditional marketing is difficult to measure, while digital provides real-time data through tools like Google Analytics.
            <br /><br />
            <strong>Engagement and Interaction:</strong> Traditional marketing is one-way communication. Digital enables two-way interaction through comments, messages, and live chats.
            <br /><br />
            <strong>Flexibility and Adaptability:</strong> Traditional campaigns are fixed once launched. Digital campaigns can be adjusted in real-time.
            <br /><br />
            <strong>Global Reach:</strong> Traditional is limited by geography, while digital breaks geographical barriers.
            <br /><br />
            <strong>Customer Journey Tracking:</strong> Traditional makes tracking difficult, while digital maps the entire journey from awareness to conversion.
          </p>

          <h6 className="text-[22px] mt-5">Why is Digital Marketing Dominating?</h6>
          <p className="font-[thin]">
            <strong>Rising Internet and Smartphone Usage:</strong> With over 5.56 billion internet users worldwide (67.9% of the population), digital is the most effective way to reach consumers.
            <br /><br />
            <strong>Shift in Consumer Behavior:</strong> 81% of shoppers conduct online research before making purchases.
            <br /><br />
            <strong>Cost-Effectiveness for Small Businesses:</strong> Digital levels the playing field, allowing small businesses to compete with larger brands affordably.
            <br /><br />
            <strong>Real-Time Results and Adaptability:</strong> Digital allows immediate measurement and optimisation, giving it an edge over traditional methods.
          </p>

          <h6 className="text-[22px] mt-5">Final Thoughts</h6>
          <p className="font-[thin]">
            While digital marketing has transformed how businesses engage with their audience, traditional marketing still holds significant value. The most effective approach is a blend of both—leveraging the broad reach of traditional methods with the precision and data-driven advantages of digital strategies.
            <br /><br />
            <strong>Ready to elevate your digital marketing game?</strong> Haris&amp;Co. is here to help! From strategy to execution, we craft tailored digital marketing solutions to drive real results for your business.
            <br /><br />
            Contact us today and let’s grow your brand together!
          </p>
        </div> */}

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
        <img src={img2} alt="Marketing Strategy" />
        <img src={img3} alt="Marketing Comparison" />
      </div>
    </div>
  );
}