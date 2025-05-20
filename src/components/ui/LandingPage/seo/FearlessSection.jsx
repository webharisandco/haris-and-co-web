import { Link } from "react-router-dom";
import arroww from "@/assets/images/DigitalMarketing/arroww.svg";; // update with actual path

export default function FearlessSection({heading, description}) {
  return (
    <div className="px-[20px] md:px-[100px] md:mt-[100px] font-[AbroBold] bg-black">
      <div className="  ">
        <div className="flex flex-col lg:flex-row lg:justify-between">
          {/* Left Column */}
          <div className="lg:w-2/3">
            <div className="pt-[50px] lg:pt-0">
              <h3 className="text-white text-[33px] sm:text-[41px] leading-snug font-bold pb-6">
                {heading}
              </h3>
              <p className="text-[#C0C0C0] text-[16px]  font-normal">
               {description}
              </p>

              {/* Desktop Button */}
              <div className="pt-[30px] pb-[30px] hidden lg:inline-flex items-center transition-all duration-300 group">
                <Link
                  to="/about"
                  className="bg-[#7744D5] text-white px-5 py-[14px] rounded-md inline-flex items-center font-medium"
                >
                  Learn More About Us
                  <img
                    src={arroww}
                    alt="Icon"
                    className="w-[13px] ml-2 transition-transform duration-300 group-hover:rotate-[30deg]"
                  />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className=" flex flex-col justify-between">
            <div className="grid grid-cols-1 gap-4 my-[55px] lg:mt-0">
              <div>
                <h3 className="text-white text-[40px] font-bold">2020</h3>
                <p className="text-white text-[18px]">Established Year</p>
              </div>
              <div>
                <h3 className="text-white text-[40px] font-bold">150+</h3>
                <p className="text-white text-[18px]">Employees</p>
              </div>
              <div>
                <h3 className="text-white text-[40px] font-bold">08</h3>
                <p className="text-white text-[18px]">Departments</p>
              </div>
            </div>

            {/* Mobile Button */}
            <div className="block lg:hidden w-full ">
              <Link
                to="/about"
                className="bg-[#7744D5] text-white w-full text-center px-5 py-[14px] rounded-md inline-flex justify-center items-center font-medium transition-all duration-300 group"
              >
                Learn More About Us
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
    </div>
  );
}