import React from "react";

function AboutSection({
  bannerImage,
  heading,
  description,
  performance = false,
  datas,
}) {
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
              <h2 className="text-[30px] md:text-[48px] leading-none text-white font-medium font-[AbroBold]">
                {heading}
              </h2>
            </div>
            <div>
              <p className="text-[17px] text-white poppins-light">
                {" "}
                {description}
              </p>
            </div>
            <div className="flex gap-[54px] md:gap-0 text-center md:text-start md:justify-between font-[AbroBold]">
              {datas?.map((data) => (
                <div className="flex flex-col ">
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
              <h2 className="text-[48px] leading-none text-white font-medium font-[AbroBold]">
                {heading}
              </h2>
            </div>
            <div>
              <p className="text-[11px] md:text-[15px] lg:text-[14px]  2xl:text-[17px] text-white poppins-light leading-relaxed"> {description}</p>
            </div>
            <div className="flex justify-between font-[AbroBold]">
              <div className="flex flex-col ">
                <p className="text-[35px] text-white">150+</p>
                <p className="text-white text-[20px]">Projects Completed</p>
              </div>
              <div className="flex flex-col ">
                <p className="text-[35px] text-white"> 20+</p>
                <p className="text-white text-[20px]">Team Members</p>
              </div>
              <div className="flex flex-col ">
                <p className="text-[35px] text-white"> 360°</p>
                <p className="text-white text-[20px]">Paid Platforms</p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default AboutSection;
