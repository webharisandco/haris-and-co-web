import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import "swiper/css";
import arroww from "@/assets/images/DigitalMarketing/arroww.svg";
import logos from "@/assets/images/DigitalMarketing/logo1.png";
import logo2 from "@/assets/images/DigitalMarketing/logo2.png";
import logo3 from "@/assets/images/DigitalMarketing/logo3.png";
import logo4 from "@/assets/images/DigitalMarketing/logo4.png";
import logo5 from "@/assets/images/DigitalMarketing/logo5.png";
import o1 from "@/assets/images/DigitalMarketing/1.webp";
import team2 from "@/assets/images/DigitalMarketing/pt.webp";
import team3 from "@/assets/images/DigitalMarketing/socialt.webp";
import team4 from "@/assets/images/DigitalMarketing/webt.webp";
import team5 from "@/assets/images/DigitalMarketing/bt.webp";
import grid from "@/assets/images/DigitalMarketing/grid.png";
import award3 from "@/assets/images/DigitalMarketing/brand storyz.png";

// Example service data (replace with your actual data)
const services = [
  {
    name: "SEO",
    logo: logos,
    description:
      "To appear on top of Google search results and get more website visitors, leads and revenue.",
  },
  {
    name: "Performance Marketing",
    logo: logo4,
    description:
      "To gain measurable results that drive conversions and maximise your ROI with Digital Ads.",
  },
  {
    name: "Social Media",
    logo: logo2,
    description:
      "To build brand awareness, retain customers, and generate more leads on Social Media.",
  },
  {
    name: "Web Development",
    logo: logo3,
    description:
      "For a website that combines engaging UI, scroll-stopping content and user-friendliness. .",
  },
  {
    name: "Branding",
    logo: logo5,
    description:
      "To help you change the face of your brand, set a new standard and stand out from the crowd. ",
  },
];

// Placeholder function to return image based on selected service

// Swiper settings
// const settingsWhatwedo = {
//   spaceBetween: 20,
//   slidesPerView: 1,
//   loop: true,
// };

const WhatWeHaveForYou = () => {
  const [selectedService, setSelectedService] = useState(services[0].name);

  const getTeamImage = (serviceName) => {
    switch (serviceName) {
      case "SEO":
        return o1;
      case "Performance Marketing":
        return team2;
      case "Social Media":
        return team3;
      case "Web Development":
        return team4;
      case "Branding":
        return team5;
      default:
        return award3;
    }
  };

  return (
    <>
      <div className="bg-black pb-[40px] md:pb-0">
        {/* Desktop Version */}

        <div className="pb-[70px] hidden lg:block font-[Abrobold]">
          <div className="max-w-7xl mx-auto px-4">
            <div
              className="bg-cover bg-no-repeat rounded-[30px] p-10"
              style={{ backgroundImage: `url(${grid})` }}
            >
              <h3 className="text-white text-[40px] font-bold mb-6">
                What We Have for You
              </h3>
              <div className="flex cursor-pointer">
                <div className="w-1/2 pt-8">
                  {services.map((service) => (
                    <div
                      key={service.name}
                      className="flex pb-9"
                      onClick={() => setSelectedService(service.name)}
                    >
                      <img
                        src={service.logo}
                        alt={service.name}
                        className="w-[25px] h-[25px]"
                      />
                      <div className="pl-7">
                        <h4 className="text-white text-[27px] font-medium">
                          {service.name}
                        </h4>
                        {selectedService === service.name && (
                          <p className="text-gray-400 text-[16px] w-[75%] font-normal">
                            {service.description}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="w-1/2">
                  <img
                    src={getTeamImage(selectedService)}
                    alt={`${selectedService} Team`}
                    className="w-full"
                  />
                </div>
              </div>
              <div className="inline-flex items-center mt-6  transition-all duration-300 group">
                <Link
                  to="/services"
                  className="bg-[#7744D5] text-white px-5 py-3 rounded-md font-medium flex items-center"
                >
                  View More
                  <img
                    src={arroww}
                    alt="Icon"
                    className="w-[13px] ml-2 transition-transform duration-300 group-hover:rotate-[30deg]"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Version */}
        <div
          style={{ backgroundImage: `url(${grid})` }}
          className="block lg:hidden   font-[Abrobold] m-[10px] pt-[40px] rounded-[30px]"
        >
          <div className="max-w-7xl mx-auto  text-center">
            <h3 className="text-white text-[29px] font-bold py-8">
              What We Have for You
            </h3>
            <Swiper
              modules={[Autoplay, Pagination, Navigation]}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              loop={true}
              pagination={{ clickable: true }}
              navigation={false}
            >
              {services.map((service, index) => (
                <SwiperSlide key={index}>
                  <div className="text-center px-4">
                    <img
                      src={getTeamImage(service.name)}
                      alt={service.name}
                      className="w-full rounded-md"
                    />
                    <h3 className="text-white text-[29px] font-bold pt-12">
                      {service.name}
                    </h3>
                    <p className="text-[#bbbbbb] text-[18px] mt-5 mb-10 font-light leading-snug px-2">
                      {service.description}
                    </p>
                    <div className="flex justify-center transition-all duration-300 group">
                      <Link
                        to="/services"
                        className="bg-[#7744D5] text-white px-5 py-3 rounded-md font-medium flex items-center"
                      >
                        View More
                        <img
                          src={arroww}
                          alt="Icon"
                          className="w-[13px] ml-2 transition-transform duration-300 group-hover:rotate-[30deg]"
                        />
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatWeHaveForYou;
