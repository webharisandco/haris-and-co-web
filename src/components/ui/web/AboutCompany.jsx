import React, { useState } from "react";

function AboutCompany({
  seoHeading,
  seoDescription,
  seoHeading2,
  seoHeading3,
  webDevelopmentServices,
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded((prevState) => !prevState);
  };

  const websiteBenefits = [
    {
      title:
        "A website works 24/7, generating leads and sales even when you're sleeping.",
    },
    {
      title:
        "It's your most cost-effective marketing tool, working round-the-clock.",
    },
    {
      title:
        "Build credibility instantly - customers trust businesses with professional websites.",
    },
    {
      title:
        "92% of business owners believe that having a website is the most effective digital marketing.",
    },
    {
      title:
        "Showcase your products/services to a global audience without geographical limits.",
    },
    {
      title:
        "First impressions happen online - control how people perceive your brand.",
    },
    { title: "Stay accessible to your customers anytime, anywhere." },
    {
      title:
        "Convert casual browsers into loyal customers with a strategic online presence.",
    },
    {
      title:
        "Share business updates, news, and offers instantly with your audience.",
    },
    {
      title:
        "Collect valuable customer data to improve your products and services.",
    },
  ];

  const websiteProcess = [
    {
      title: "Brand Understanding",
      description:
        "We start by deeply understanding your brand story, values, and goals to ensure your website truly reflects your business identity. Normally, we connect on Google Meet where our whole team will be present in the meeting.",
    },
    {
      title: "Collecting Requirements",
      description:
        "We analyse your needs, from technical specifications to business objectives, helping us create a strategic roadmap for your website.",
    },
    {
      title: "Wireframing",
      description:
        "Next, our team creates the blueprint of your website with clear user journeys and information architecture that guides visitors toward conversion.",
    },
    {
      title: "UI/UX Design",
      description:
        "Our UI/UX designer transforms wireframes into visually stunning, user-friendly designs that engage your audience and strengthen your brand presence.",
    },
    {
      title: "Content Writing",
      description:
        "Our writer crafts compelling content that speaks to your audience and drives action while maintaining your brand voice.",
    },
    {
      title: "Website Development",
      description:
        "The foundation is now ready. We now build your website with clean, efficient code and advanced functionality that ensures speed, security, and seamless performance.",
    },
    {
      title: "Website Delivery",
      description:
        "Once we test thoroughly, we launch your website upon your approval.",
    },
    {
      title: "Ongoing Support/Maintenance",
      description:
        "We don’t stop there! After the delivery, we provide technical support to ensure your website stays smooth and continues to evolve with your business needs.",
    },
  ];

  return (
    <div className="bg-white mb-[70px] md:mb-[72px] mt-[14px] md:my-[114px] px-[18px] md:px-[100px]">
      <div className="flex flex-col gap-[13px] md:gap-[36px]">
        <p className="text-black text-[16px] md:text-[36px] font-[AbroBold]">
          {!seoHeading
            ? "Web Design and Development Services in Dubai Focused on Conversion"
            : seoHeading}
        </p>
        <p className="text-black text-[11px] md:text-[15px] lg:text-[14px]  2xl:text-[17px] leading-relaxed poppins-regular">
          {!seoDescription
            ? `Haris&Co. has been serving web development services in Dubai for the last 5 years, empowering 80+ brands. Whenever a client approaches, we keep the conversion aspect of a website on top of our mind because we believe that a website isn’t just a showcase, it should act as a shop for a business. This is why we have conversion rate optimisers on the team to ensure that website visitors turn into customers. This doesn’t mean we disregard other aspects such as aesthetics, content, and technicalities.`
            : seoDescription}
        </p>

        {!isExpanded ? (
          <>
            <button
              style={{ fontWeight: "bold" }}
              onClick={toggleExpand}
              className="poppins-semibold mt-[20px] text-[13px] lg:text-[20px] text-black flex font-extrabold cursor-pointer"
            >
              {"Read More"}
            </button>
          </>
        ) : (
          ""
        )}
        {isExpanded ? (
          <>
            <div className=" gap-[13px] mt-[31px] md:mt-[52px]">
              <p className="text-black text-[16px] md:text-[36px] font-[AbroBold]">
                {seoHeading2}
              </p>
              {webDevelopmentServices.map((service) => (
                <div className="mt-[23px] md:mt-[60px] flex-col gap-[13px] md:gap-[25px]">
                  <p className="text-[11px] md:text-[20px] font-medium text-black  mb-[13px] md:mb-[25px] poppins-medium">
                    {service.title}
                  </p>
                  <p className="text-[11px] md:text-[15px] lg:text-[14px]  2xl:text-[17px] poppins-regular">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>

            <div className=" gap-[13px] mt-[31px] md:mt-[52px]">
              <p className="text-black text-[16px] md:text-[36px] font-[AbroBold]">
                Why You Must Have a Website?
              </p>
              <div className="mt-[21px] md:mt-[47px]"></div>
              <ul className="ml-[8px] md:ml-[20px]">
                {websiteBenefits.map((service, index) => (
                  <li
                    key={index}
                    className="text-[11px] md:text-[20px] poppins-semibold text-black mt-[20px] list-disc ml-[20px]"
                  >
                    {service.title}
                  </li>
                ))}
              </ul>
              <div className="mt-[20px] md:mt-[47px]">
                <p className="text-black text-[11px] md:text-[20px] poppins-regular">
                  So, skip the wait and partner with Haris&Co.–the emerging web
                  development company in Dubai.
                </p>
              </div>
            </div>

            <div className=" gap-[13px] mt-[31px] md:mt-[52px]">
              <p className="text-black text-[16px] md:text-[36px] font-[AbroBold]">
                {seoHeading3}
              </p>
              {websiteProcess.map((service) => (
                <div className="mt-[23px] md:mt-[60px] flex-col gap-[13px] md:gap-[25px]">
                  <p className="text-[11px] md:text-[20px] font-medium text-black  mb-[13px] md:mb-[25px] poppins-medium">
                    {service.title}
                  </p>
                  <p className="text-[11px] md:text-[15px] lg:text-[14px]  2xl:text-[17px] poppins-regular">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default AboutCompany;
