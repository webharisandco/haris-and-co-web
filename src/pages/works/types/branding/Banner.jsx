import React from "react";
import Branding1 from "@/assets/images/branding/Branding1.svg";
import { useLocation } from "react-router-dom";

function Banner({ services }) {
  const location = useLocation();
  const serviceSlug = location.pathname.split("/").pop(); // Get the last part of the URL
  console.log(serviceSlug, "serveisee");
  // Find the service details based on the slug
  const service = services.find((s) => s.url === serviceSlug);

  // Default fallback if service isn't found
  if (!service) {
    return <div className="text-white text-center">Service not found</div>;
  }
  return (
    <div className=" px-[16px] lg:px-[80px] pt-[120px] lg:pt-[200px] ">
      <div className=" flex flex-col gap-[20px] lg:gap-[35px]">
        <p className="text-white/50 text-[20px] font-[thin]">
          {service.title}{" "}
        </p>
        <p className="text-[32px] leading-[60px] lg:text-[55px] 2xl:text-[64px] text-white font-[helvetica-medium]">
          {service.heading}
        </p>
        <p className="text-white/50  text-[24px] lg:text-[38px] font-[HelveticaNeue] ">
          {service.subHeading}
        </p>
      </div>
      <div className="w-full flex justify-center mt-[100px]">
        <img
          className="w-full lg:w-fit h-[252px] object-cover lg:h-fit"
          src={Branding1}
          alt=""
        />
      </div>
      <div className="flex flex-col pt-[45px] lg:flex-row lg:justify-between w-full lg:items-center ">
        <div className="lg:w-8/12 pb-[38px] lg:pb-0 lg:my-[70px]   lg:pr-[80px] border-b lg:border-b-0 lg:border-r border-white">
          <p className="text-[16px] leading-[38px] font-[HelveticaNeue] tracking-[-1px] lg:text-[26px] 2xl:text-[32px] text-white ">
            {service.details}
          </p>
        </div>

        <div className="lg:w-3/12 my-[40px] lg:my-0">
          <ul className="text-white flex flex-col gap-[20px] text-[22px]">
            {service.bullets && service.bullets.length > 0 ? (
              service.bullets.map((bullet, idx) => <li key={idx}>{bullet}</li>)
            ) : (
              <>
                <li>Dummy Bullet 1</li>
                <li>Dummy Bullet 2</li>
                <li>Dummy Bullet 3</li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Banner;
