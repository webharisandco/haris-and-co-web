import React from "react";
import icon from "../../assets/images/servicesSection/rightArrow.svg";

function ServiceSection({ services }) {
  return (
    <div className="px-[80px] my-[79px]">
      <p className="text-[40px] mb-[54px]">Services we provide</p>

      <div className="grid grid-cols-3 gap-[20px]">
        {services.map((service) => (
          <div className="px-[30px] py-[20px] flex flex-col gap-[30px] border border-black/50">
            <p className="text-[26px]">{service.titile}</p>
            <p className="text-[16px]">{service.description}</p>
            <div className="flex gap-[10px]">
              <p className="text-[20px]">Let’s talk</p>
              <img src={icon} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServiceSection;
