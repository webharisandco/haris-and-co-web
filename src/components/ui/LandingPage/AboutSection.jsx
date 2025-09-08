import React, { useState } from "react";

function AboutSection({
  bannerImage,
  heading,
  description,
  performance = false,
  datas,
}) {
  const [expanded, setExpanded] = useState(false);
  function getShortText(text) {
    const sentences = text.split(".");
    if (sentences.length > 2) {
      return sentences.slice(0, 2).join(".") + "."; // Get first two sentences
    }
    return text; // Return full text if less than two sentences
  }

  return (
    <div className="flex  gap-[100px] justify-center lg:justify-between items-center mt-[60px] md:mt-[92px] flex-col-reverse lg:flex-row">
      {!performance ? (
        <>
          <div className=" hidden lg:block md:w-4/12">
            <img className="w-full h-full " src={bannerImage} alt="" />
          </div>
          <div className="flex flex-col gap-[20px] md:w-8/12">
            <div>
              {" "}
              <h2 className="text-[30px] md:text-[36px] md:leading-[51px]  text-white font-medium font-[AbroBold]">
                {heading}
              </h2>
            </div>
            <div>
              <p className="text-[16px] md:text-[15px] lg:text-[14px] hidden md:block  2xl:text-[17px] text-white poppins-light leading-relaxed"> {description}</p>
              <p className="text-[16px] md:hidden 2xl:text-[17px] text-white poppins-light leading-relaxed">
                {expanded ? description : getShortText(description)}
                {description.split(".").length > 2 && !expanded && (
                  <span
                    className="text-blue-400 cursor-pointer ml-1"
                    onClick={() => setExpanded(true)}
                  >
                    Read more
                  </span>
                )}
                {expanded && (
                  <span
                    className="text-blue-400 cursor-pointer ml-1"
                    onClick={() => setExpanded(false)}
                  >
                    Read less
                  </span>
                )}
              </p>
            </div>
            <div className="flex gap-[40px] md:gap-0 text-center md:text-start md:justify-between font-[AbroBold]">
              {datas?.map((data) => (
                <div className="flex flex-col">
                  <p className=" text-[20px] md:text-[35px] text-white"> {data.number}</p>
                  <p className="text-white text-[16px] md:text-[18px]">
                    {data.heading}
                  </p>
                </div>
              ))}

            </div>
          </div>
        </>
      ) : (
        <>
          <div className="lg:w-6/12">
            <img className="w-full h-full" src={bannerImage} alt="" />
          </div>
          <div className="flex flex-col gap-[20px] lg:w-6/12">
            <div>
              {" "}
              <h2 className="text-[30px] md:text-[36px] md:leading-[51px] text-white font-medium font-[AbroBold]">
                {heading}
              </h2>
            </div>
            <div>
              <p className="text-[16px] md:text-[15px] lg:text-[14px] hidden md:block  2xl:text-[17px] text-white poppins-light leading-relaxed"> {description}</p>
              <p className="text-[16px] md:hidden 2xl:text-[17px] text-white poppins-light leading-relaxed">
                {expanded ? description : getShortText(description)}
                {description.split(".").length > 2 && !expanded && (
                  <span
                    className="text-blue-400 cursor-pointer ml-1"
                    onClick={() => setExpanded(true)}
                  >
                    Read more
                  </span>
                )}
              </p>
            </div>
            <div className="flex justify-between font-[AbroBold]">
              <div className="flex flex-col ">
                <p className="text-[20px] md:text-[35px] text-white">150+</p>
                <p className="text-white text-[16px] md:text-[18px]">Projects Completed</p>
              </div>
              <div className="flex flex-col ">
                <p className="text-[20px] md:text-[35px] text-white"> 20+</p>
                <p className="text-white text-[16px] md:text-[18px]">Team Members</p>
              </div>
              <div className="flex flex-col ">
                <p className="text-[20px] md:text-[35px] text-white"> 360°</p>
                <p className="text-white text-[16px] md:text-[18px]">Paid Platforms</p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default AboutSection;
