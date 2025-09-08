import { useEffect, useState } from "react";
import k from "@/assets/images/DigitalMarketing/kevin.png";
import s from "@/assets/images/DigitalMarketing/siva.png";
import sw from "@/assets/images/DigitalMarketing/sw.png";
import userimg from "@/assets/images/DigitalMarketing/skillbuss.svg";
import review from "@/assets/images/DigitalMarketing/rev.png";

function ClientReviews() {

    const reviews = [
    {
      title: "Natya hit the great milestone",
      subtitle:
        "We achieved 10 lakh revenue in the last month. Really happy to work with Haris aboobacker, Adarsh and team, really happy to work with you dear. We should fly together more heights,Thankfully",
      username: "Kalamandalam Sivaprasad",
      userdesignation: "Founder of Natya Arts Learning App",
      userimg: s,
    },
    {
      title: " ",
      subtitle:
        "The professionalism, attention to detail, and the quality of service you have demonstrated have been instrumental in our success. It is a pleasure to work with this team that consistently goes above and beyond expectations,Thank you the exceptional work. We look forward to continuing our partnership and achieving even better results.",
      username: "Kevin Mohan",
      userdesignation: "Marketing Head of Katara limousine",
      userimg: k,
    },
    {
      title: "Hi team,",
      subtitle:
        "Last 2 days we collected almost 2 lakhs from admission and we are spending just 15k per day,Great work team Haris&Co",
      username: "Shijas",
      userdesignation: "SkillBuss",
      userimg: userimg,
    },
    {
      title: "I’m in aww struck love with your creative team,",
      subtitle:
        "Kudos and keep the great good work up..I can see a rising stars soon to get hit for awards..Just merge and look forward for adding a spark of innovation and you are there my friends.",
      username: "Swetha",
      userdesignation: "Care n Cure",
      userimg: sw,
    },
  ];

    const [currentIndex, setCurrentIndex] = useState(0);
const [fadeClass, setFadeClass] = useState("dgfade-in");

useEffect(() => {
  const interval = setInterval(() => {
    setFadeClass("dgfade-out");
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
      setFadeClass("dgfade-in");
    }, 500);
  }, 5000);

  return () => clearInterval(interval);
}, []);
  return (
   <div className="py-16 my-16 min-h-[419px] font-['Abrobold'] shadow-[rgba(14,30,37,0.12)_0px_2px_4px_0px,_rgba(14,30,37,0.32)_0px_2px_16px_0px]">
  <div className="max-w-7xl mx-auto px-4">
    <div className="flex flex-col lg:flex-row">
      
      {/* Left Column */}
      <div className="lg:w-5/12">
        <div>
          <h3 className=" pt-10  font-['Abrobold'] text-[34px] md:text-[40px]">Client Reviews</h3>
          <p className="text-[15px] pb-2  font-[AbroRegular]">
            Here is what our clients have to say about our service
          </p>
          <img
            src={review}
            className="w-[170px] pb-12 lg:pb-0"
            alt="Review Icon"
          />
        </div>
      </div>

      {/* Right Column */}
      <div className="lg:w-7/12">
        <div className="bg-black rounded-2xl p-6 sm:p-8">
          <div className={`transition-opacity duration-500 ${fadeClass === 'dgfade-in' ? 'opacity-100' : 'opacity-0'}`}>
            <h3 className="text-white text-[16px] font-bold font-['Abrobold']">
              {reviews[currentIndex].title}
            </h3>
            <p className="text-white pt-5 pb-4 text-[15px]  font-[AbroRegular]">
              {reviews[currentIndex].subtitle}
            </p>
            <div className="flex items-center">
              <img
                src={reviews[currentIndex].userimg}
                className="w-[50px] h-[50px] rounded-full"
                alt={reviews[currentIndex].username}
              />
              <div className="pl-4">
                <h4 className="text-white text-[16px] font-bold  font-['Abrobold'] m-0">
                  {reviews[currentIndex].username}
                </h4>
                <p className="text-white text-[15px]  font-[AbroRegular] m-0">
                  {reviews[currentIndex].userdesignation}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</div>
  )
}

export default ClientReviews