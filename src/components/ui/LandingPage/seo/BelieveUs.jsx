import React from "react";
import { Link } from "react-router-dom";
import believeimg from "@/assets/images/DigitalMarketing/SeoPage/beieve.webp";
import arroww from "@/assets/images/DigitalMarketing/arroww.svg";

const BelieveUs = () => {
  return (
    <div className="bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <div className="py-8">
          {/* Title */}
          <div className="pb-16 pt-8 text-center">
            <h2 className="text-white text-[40px] font-bold leading-tight font-[Abrobold] max-sm:text-[33px]">
              Don't Believe Us? 
            </h2>
            <h2 className="text-white text-[40px] font-bold leading-tight font-[Abrobold] max-sm:text-[32px]">
              You Can Believe Our Results
            </h2>
          </div>

          {/* Image */}
          <div className="pb-16 flex justify-center">
            <img
              loading="lazy"
              src={believeimg}
              alt="Believe Results"
              className="w-full "
            />
          </div>

          {/* Button */}
          <div className="flex justify-end pb-[70px]">
            <Link
              to="/works"
              className="text-white font-[Abrobold] no-underline ml-[50px] max-md:ml-0"
            >
              <div className=" group inline-flex items-center transition-all duration-300 hover:[&>img]:rotate-[30deg]">
                Check Out Our Case Studies
                <img
                  src={arroww}
                  alt="Icon"
                  className="w-[13px] ml-2 transition-transform duration-300 group-hover:rotate-[30deg]"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BelieveUs;
