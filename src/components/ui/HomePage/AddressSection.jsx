import React from "react";
import Logo from "@/assets/images/Haris&Co-black.svg";

function AddressSection() {
  return (
    <div className="px-[16px] md:px-[32px] lg:px-[60px] bg-white my-[25px] md:my-[50px] lg:my-[70px]">
      <div>
        <p className="text-[24px] md:text-[28px] lg:text-[30px] font-medium text-black">
          Regions We Operate
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 mt-[40px] md:mt-[60px] lg:mt-[70px] md:w-11/12 lg:w-10/12 mx-auto divide-y lg:divide-x lg:divide-y-0 divide-black">
        {/* Kerala Office */}
        <div className="flex flex-col gap-[12px] md:gap-[16px] lg:gap-[20px] h-full lg:pr-[50px] pb-[28px]">
          <div>
            <img className="w-[200px] lg:w-[240px]" src={Logo} alt="Haris&Co-logo" />
          </div>
          <div className="mt-[30px] flex w-full gap-3 items-start">
            <div className="w-1/5 lg:w-2/5 xl:w-1/4">
              <p className="text-sm md:text-lg font-medium text-black text-nowrap">Address :</p>
            </div>
            <div className="w-4/5 lg:w-3/5 xl:w-3/4">
              <p className="text-sm md:text-lg text-black text-start font-[thin] leading-snug">
                4, 6QGR+7PW WING Avenue, Panniyankara, Kozhikode, Kerala, India 673003
              </p>
            </div>
          </div>

          <div className="flex w-full gap-3 items-start">
            <div className="w-1/5 lg:w-2/5 xl:w-1/4">
              <p className="text-sm md:text-lg font-medium text-black text-nowrap">Phone :</p>
            </div>
            <div className="w-4/5 lg:w-3/5 xl:w-3/4">
              <a href="tel:+918075040330" className="text-sm md:text-lg text-black text-start font-[thin] hover:underline">
                +91 80750 40330
              </a>
            </div>
          </div>

          <div className="flex w-full gap-3 items-start">
            <div className="w-1/5 lg:w-2/5 xl:w-1/4">
              <p className="text-sm md:text-lg font-medium text-black text-nowrap">Hours :</p>
            </div>
            <div className="w-4/5 lg:w-3/5 xl:w-3/4">
              <p className="text-sm md:text-lg text-black text-start font-[thin]">
                09:30 AM - 06:30 PM
              </p>
            </div>
          </div>
        </div>

        {/* Dubai Office */}
        <div className="flex pt-[36px] lg:pt-0 flex-col gap-[12px] md:gap-[16px] lg:gap-[20px] h-full lg:pl-[50px] pb-[28px]">
          <div>
            <img className="w-[200px] lg:w-[240px]" src={Logo} alt="Haris&Co-logo" />
          </div>
          <div className="mt-[30px] flex w-full gap-3 items-start">
            <div className="w-1/5 lg:w-2/5 xl:w-1/4">
              <p className="text-sm md:text-lg font-medium text-black text-nowrap">Address :</p>
            </div>
            <div className="w-4/5 lg:w-3/5 xl:w-3/4">
              <p className="text-sm md:text-lg text-black text-start font-[thin] leading-snug">
                Abdulla Kamber Business Center - Room No 103, First Floor - Abu Baker Al Siddique St - Deira - UAE - United Arab Emirates
              </p>
            </div>
          </div>

          <div className="flex w-full gap-3 items-start">
            <div className="w-1/5 lg:w-2/5 xl:w-1/4">
              <p className="text-sm md:text-lg font-medium text-black text-nowrap">Phone :</p>
            </div>
            <div className="w-4/5 lg:w-3/5 xl:w-3/4">
              <a href="tel:+971588486733" className="text-sm md:text-lg text-black text-start font-[thin] hover:underline">
                +971 58 848 6733
              </a>
            </div>
          </div>

          <div className="flex w-full gap-3 items-start">
            <div className="w-1/5 lg:w-2/5 xl:w-1/4">
              <p className="text-sm md:text-lg font-medium text-black text-nowrap">Hours :</p>
            </div>
            <div className="w-4/5 lg:w-3/5 xl:w-3/4">
              <p className="text-sm md:text-lg text-black text-start font-[thin]">
                09:30 AM - 06:30 PM
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddressSection;
