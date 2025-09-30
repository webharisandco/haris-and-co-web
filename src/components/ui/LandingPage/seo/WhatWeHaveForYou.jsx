import  { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import logos from "@/assets/images/DigitalMarketing/SeoPage/seo1 1.png";
import logo2 from "@/assets/images/DigitalMarketing/SeoPage/technical-support1 1.png";
import logo3 from "@/assets/images/DigitalMarketing/SeoPage/uiux-icon.png";
import logo4 from "@/assets/images/DigitalMarketing/SeoPage/off-page.png";
import logo5 from "@/assets/images/DigitalMarketing/SeoPage/cro-icon.png";
import logo55 from "@/assets/images/DigitalMarketing/SeoPage/content-icon.png";
import o1 from "@/assets/images/DigitalMarketing/SeoPage/on page.png";
import team2 from "@/assets/images/DigitalMarketing/SeoPage/off page.png";
import team3 from "@/assets/images/DigitalMarketing/SeoPage/technical seo.png";
import team4 from "@/assets/images/DigitalMarketing/SeoPage/ui-ux-illu.png";
import team5 from "@/assets/images/DigitalMarketing/SeoPage/c.png";
import team6 from "@/assets/images/DigitalMarketing/SeoPage/content.png";
import grid from "@/assets/images/DigitalMarketing/grid.png";

// Example service data (replace with your actual data)
const services = [
  {
    name: "On-Page SEO",
    logo: logos,
    description:
      "Our team expertly shortlists the right keywords, optimises the URLs, corrects the title tags, and optimises other elements on the website to tidy up in total.",
  },
  {
    name: "Off-Page SEO",
    logo: logo4,
    description:
      "We post blogs on PR sites, list on directories, list on business listing sites and more to build your website reputation online.",
  },
  {
    name: "Technical SEO",
    logo: logo2,
    description:
      "Our specialists audit & sort technical aspects of your website such as the load speed, security, server performance, website architecture and more to ensure optimal performance. ",
  },
  {
    name: "UI/UX Design",
    logo: logo3,
    description:
      "Following a detailed analysis, our design team develops fonts, colours and layouts to make your website attractive and easy to navigate.",
  },
  {
    name: "Conversion Rate Optimisation",
    logo: logo5,
    description:
      "Our CRO experts examine the UI/UX, identifying the gaps and optimising the elements to increase the chance of converting visitors to customers. ",
  },
  {
    name: "Content Development",
    logo: logo55,
    description:
      "Our content team creates awesome content that informs, entertains, engages and ultimately converts your visitors to customers., set a new standard and stand out from the crowd. ",
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
      case "On-Page SEO":
        return o1;
      case "Off-Page SEO":
        return team2;
      case "Technical SEO":
        return team3;
      case "UI/UX Design":
        return team4;
      case "Conversion Rate Optimisation":
        return team5;
      case "Content Development":
        return team6;
      default:
        return o1;
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
                Our SEO Toolkit
              </h3>
              <div className="flex cursor-pointer">
                {/* Left: Services List */}
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
                        <h4 className="text-white text-[24px] font-medium">
                          {service.name}
                        </h4>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Right: Image + Description */}
                <div className="w-1/2">
                  <img
                    src={getTeamImage(selectedService)}
                    alt={`${selectedService} Team`}
                    className="w-full"
                  />

                  {/* Description rendered using selectedService */}
                  <div className="w-full flex justify-center">

                  <p className="text-white text-[16px]  font-normal mt-4">
                    {
                      services.find((s) => s.name === selectedService)
                        ?.description
                    }
                  </p>
                  </div>
                </div>
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
