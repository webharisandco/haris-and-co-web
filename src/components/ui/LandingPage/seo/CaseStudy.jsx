import s1 from "@/assets/images/DigitalMarketing/SeoPage/kairali new case 1.webp";
import s2 from "@/assets/images/DigitalMarketing/SeoPage/seo casestudy bosq 1.svg";
import s3 from "@/assets/images/DigitalMarketing/SeoPage/seo casestudy skinbae 1.svg";
import { Clock } from "lucide-react";
import LandingButton from "../../common/LandingButton";

const CaseStudy = () => {

  return (
    <div className="px-[16px] md:px-[80px] lg:px-[80px] py-[50px]">
      <div className="flex justify-center items-center flex-col gap-3 mb-[40px] md:mb-[60px] lg:mb-[70px] text-center">
        <h3 className="font-[Abrobold] text-[30px] md:text-[40px] lg:text-[48px]">
          Our Case Studies
        </h3>
        <p className="text-[16px] md:text-[18px] lg:text-[20px] poppins-medium">
          Read in detail about our stories of victories.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row gap-5 poppins-regular">
        <div className="shadow-[6.91px_6.91px_20.74px_0px_#00000026] px-4 py-3 rounded-3xl lg:w-1/2 space-y-9">
          <img
            src={s1}
            className="h-[310px] lg:h-auto object-cover rounded-[14px] w-full"
            alt=""
          />
          <div className="flex flex-col gap-3 md:gap-5 lg:gap-7 px-2 lg:px-5">
            <h6 className="text-[25px] md:text-[30px] lg:text-[23px] poppins-semibold w-11/12 ">
             Website Visits Shot From 1K to a Massive 2 Lakhs+
            </h6>
            <div className="flex gap-3 text-[16px] md:text-[15px] lg:text-[14px]  2xl:text-[17px] items-center">
              <Clock color="#fff" fill="#888888" />
              <p className="text-black/60">March 8, 2024</p>
            </div>
            <p className="text-[16px] md:text-[15px] lg:text-[14px]  2xl:text-[17px] w-11/12 lg:w-10/12 mb-4 text-black/60">
             Read in detail the challenges Kairali TMT faced, what we did to address them and the results they achieved.
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:w-1/2 gap-7">
          <div className="shadow-[6.91px_6.91px_20.74px_0px_#00000026] px-2 md:px-4 py-4 rounded-3xl grid lg:grid-cols-[1fr_1.1fr] gap-10">
            <img
              src={s2}
              className="h-[310px] w-full lg:h-auto rounded-[14px] object-cover"
              alt=""
            />
            <div className=" flex flex-col gap-3 md:gap-1 justify-center px-2 lg:pr-5 ">
              <h6 className="text-[21px] font-[AbroRegular]">
               Generated 1M+ Revenue Organically Within 10 Months
              </h6>
              <div className="flex gap-3 text-[16px] md:text-[15px] lg:text-[14px]  2xl:text-[17px] items-center">
                <Clock color="#fff" fill="#888888" />
                <p className="text-black/60">March 8, 2024</p>
              </div>
              <p className="text-[16px] md:text-[15px] lg:text-[14px]  2xl:text-[17px] text-black/60 mt-5">
             Explore how we helped BOSQ increase revenue, organic lead generation, and website visits.
              </p>
            </div>
          </div>
          <div className="shadow-[6.91px_6.91px_20.74px_0px_#00000026] px-4 py-3 rounded-3xl hidden lg:grid grid-cols-[1fr_1.1fr] gap-10">
            <img src={s3} className="" alt="" />
            <div className="flex flex-col gap-3 justify-center ">
              <h6 className="text-[21px] font-[AbroRegular]">Ranked a Skin Care Brand Above Giants Like Nykaa, Amazon, and Macaron</h6>
              <div className="flex gap-3 text-[16px] md:text-[15px] lg:text-[14px]  2xl:text-[17px] items-center">
                <Clock color="#fff" fill="#888888" />
                <p className="text-black/60">March 8, 2024</p>
              </div>
              <p className="text-[16px] md:text-[15px] lg:text-[14px]  2xl:text-[17px] text-black/60">
               Read in detail the strategy we implemented to make Skin Bae stand out on Google.
              </p>
            </div>
          </div>
        </div>
      </div>

      <LandingButton text={"View More"} className={"mx-auto mt-[60px]"} />
    </div>
  );
};

export default CaseStudy;
