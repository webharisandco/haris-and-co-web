import React, { useEffect, useState } from "react";
import icon from "@/assets/images/servicesSection/rightArrow.svg";
import { ArrowRight } from "lucide-react";

function ServiceSection({  currentService }) {
  const [visibleServices, setVisibleServices] = useState( currentService?.offerings);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleServices(currentService?.offerings?.slice(0, 3)); // Show only 3 items on small screens
      } else {
        setVisibleServices(currentService?.offerings); // Show all items on larger screens
      }
    };

    handleResize(); // Set initial state based on screen size
    window.addEventListener("resize", handleResize); // Update on resize

    return () => window.removeEventListener("resize", handleResize); // Cleanup
  }, [currentService?.offerings]);
  return (
    <div className="px-[16px] lg:px-[80px] my-[30px] lg:my-[79px]">
      <p className="text-[24px] lg:text-[40px] mb-[30px] lg:mb-[54px] font-[boldtext]">
        Services we provide
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-[20px]">
        {visibleServices?.map((service) => (
          <div className="px-[30px] py-[20px] flex flex-col gap-[30px] border border-black/50">
            <p className="text-[26px] font-[helvetica-medium]">
              {service?.title}
            </p>
            <p className="text-[16px] font-[Helvetica-Light]">
              {service?.description}
            </p>
            <div className="flex gap-[10px]">
              <p className="text-[20px] text-black/55 font-[helvetica-medium] hover:text-black transition-all duration-300  flex items-center gap-2 3xl:text-[24px]">
                Let’s talk
                <ArrowRight className="" size={25} />
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-[10px] items-center my-[50px]">
        <p className="text-[18px]  text-black/55 hover:text-black font-[thin]">
          Explore All Services
        </p>
        <ArrowRight
          className="text-black/55 hover:black transition-all duration-300"
          size={23}
        />
      </div>
    </div>
  );
}

export default ServiceSection;
