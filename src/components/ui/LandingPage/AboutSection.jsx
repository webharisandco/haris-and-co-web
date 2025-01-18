import React from "react";

function AboutSection({ bannerImage, heading, description, performance = false }) {
    return (
      <div className="flex  gap-[100px] justify-center lg:justify-between items-center mt-[60px] md:mt-[92px]">
        {!performance ?
          (
            <>
              <div className=" hidden lg:block md:w-4/12">
                <img className="w-full h-full " src={bannerImage} alt="" />
              </div>
              <div className="flex flex-col gap-[20px] md:w-8/12">
                <div>
                  {" "}
                  <p className="text-[30px] md:text-[48px] leading-none text-white font-medium">
                    {heading}
                  </p>
                </div>
                <div>
                  <p className="text-[16px] md:text-[20px] text-white"> {description}</p>
                </div>
                <div className="flex text-center md:text-start md:justify-between">
                  <div className="flex flex-col ">
                    <p className=" text-[28px] md:text-[48px] text-white"> 80+</p>
                    <p className="text-white text-[16px] md:text-[20px]">Clients Served</p>
                  </div>
                  <div className="flex flex-col ">
                    <p className=" text-[28px] md:text-[48px] text-white"> 10+</p>
                    <p className="text-white text-[16px] md:text-[20px]">Members in the team</p>
                  </div>
                  <div className="flex flex-col ">
                    <p className=" text-[28px] md:text-[48px] text-white"> 15+</p>
                    <p className="text-white text-[16px] md:text-[20px]">Industries Served</p>
                  </div>
                </div>
              </div>
            </>
          ) :
          (
            <>
              <div className="w-6/12">
                <img className="w-full h-full" src={bannerImage} alt="" />
              </div>
              <div className="flex flex-col gap-[20px] w-6/12">
                <div>
                  {" "}
                  <p className="text-[48px] leading-none text-white font-medium">
                    {heading}
                  </p>
                </div>
                <div>
                  <p className="text-[20px] text-white"> {description}</p>
                </div>
                <div className="flex justify-between">
                  <div className="flex flex-col ">
                    <p className="text-[48px] text-white"> 80+</p>
                    <p className="text-white text-[20px]">Clients Served</p>
                  </div>
                  <div className="flex flex-col ">
                    <p className="text-[48px] text-white"> 10+</p>
                    <p className="text-white text-[20px]">Members in the team</p>
                  </div>
                  <div className="flex flex-col ">
                    <p className="text-[48px] text-white"> 15+</p>
                    <p className="text-white text-[20px]">Industries Served</p>
                  </div>
                </div>
              </div>
            </>
          )
        }
      </div>
    );
}

export default AboutSection;
