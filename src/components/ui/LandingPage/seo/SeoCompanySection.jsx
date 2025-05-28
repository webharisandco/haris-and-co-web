import React from 'react';
import seoteam from '@/assets/images/SeoCompony/SeoTeam.webp' // Adjust path as needed

const SeoCompanySection = ({seoDescription}) => {
  return (
    <div className="pb-[80px] mt-[80px] lg:pb-[100px] md:pb-0">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          {/* Desktop Title */}
          <div className="w-full lg:w-7/12 px-4 hidden md:block">
            <div>
              <h2 className="text-white text-[40px] font-bold font-['Abrobold']">
                The SEO Company That
              </h2>
              <h2 className="text-white text-[40px] font-bold font-['Abrobold']">
                Drives Leads, Sales and
              </h2>
              <h2 className="text-white text-[40px] font-bold font-['Abrobold']">
                Revenue for Your Business
              </h2>
            </div>
          </div>

          {/* Mobile Title */}
          <div className="w-full lg:w-7/12 px-4 block md:hidden pt-6">
            <div>
              <h2 className="text-white text-[31px] font-bold font-['Abrobold']">
                The SEO Company
              </h2>
              <h2 className="text-white text-[31px] font-bold font-['Abrobold']">
                That Drives Leads,
              </h2>
              <h2 className="text-white text-[31px] font-bold font-['Abrobold']">
                Sales and Revenue
              </h2>
              <h2 className="text-white text-[31px] font-bold font-['Abrobold']">
                for Your Business
              </h2>
            </div>
          </div>

          {/* Description */}
          <div className="w-full lg:w-5/12 px-4">
            <div className="block w-full">
              <p className="text-white  md:text-[17px] text-[18px]  sm:w-[98%] ml-auto md:ml-0 pt-0 md:pt-[15px] font-[AbroRegular]">
             {seoDescription}
              </p>
            </div>
          </div>

          {/* Banner Image */}
          <div className="w-full px-4">
            <div className="mt-[50px]">
              <img loading="lazy" src={seoteam} alt="SEO Team" className="w-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeoCompanySection;