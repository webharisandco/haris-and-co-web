import { useEffect, useState } from "react";
import LandingButton from "../../common/LandingButton";
import OptimizedBanner from "../../common/OptimizedBanner";

function Banner({
  bannerImage,
  heading,
  description,
  imgClassName,
  tagline,
  performance = false,
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === bannerImage.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // change every 3 seconds

    return () => clearInterval(interval); // cleanup
  }, [bannerImage]);
  return (
    <div className="px-[16px] md:px-[60px] lg:px-[80px] bg-black md:pt-[150px]">
      <div
        className={` grid grid-cols-1  mt-[50px] md:mt-[75px] lg:mt-[100px] xl:mt-[50px] gap-[73px] md:gap-[100px] justify-between items-center poppins-regular ${
          performance ? "lg:grid-cols-[1.4fr_1fr]" : "lg:grid-cols-[1.6fr_1fr]"
        }`}
      >
        <div className="flex flex-col gap-[20px] w-fit">
          <h2 className="text-[37px]  xl:text-[43px] 2xl:text-[50px] text-white font-medium font-[AbroBold] leading-tight">
            <span className="block lg:hidden">{heading}</span>
            {!performance && (
              <span className="hidden lg:block">
                {/* Replace the space where you want a <br> with an actual line break */}
                {heading.split(" ").slice(0, 4).join(" ")} <br />{" "}
                {heading.split(" ").slice(4).join(" ")}
              </span>
            )}
            {performance && <span className="hidden lg:block">{heading}</span>}
          </h2>
          <p className="text-[16px] md:text-[15px] lg:text-[17px]  2xl:text-[17px] 3xl:text-[20px] text-white/70 font-light w-full lg:w-5/6 ">
            {" "}
            {description}
          </p>
          <div className="flex mt-8 justify-center md:justify-start pb-[85px] flex-col md:flex-row gap-[20px]">
            <LandingButton
              href={
                "https://harisandco.pipedrive.com/scheduler/Z6GZG1sd/meeting"
              }
              text={"GET A PROPASAL"}
            />
            {/* {performance && <LandingButton href={'https://harisandco.pipedrive.com/scheduler/Z6GZG1sd/meeting'} text={'Let’s Connect'} className={'bg-transparent hover:bg-transparent hover:text-white/70 text-white'} />} */}
          </div>
          <div className="w-full grid grid-cols-2 gap-[31px] md:gap-0 md:grid-cols-4 font-[Abrobold]">
            <div className="pl-2 border-r border-[#cfcfcf]">
              <h4 className="text-white text-[28px]">600M+</h4>
              <p className="text-white text-[16px] font-[Abrothin] leading-[1.2]">
                Revenue <br /> Generated
              </p>
            </div>
            <div className="pl-2 md:border-r border-[#cfcfcf]">
              <h4 className="text-white text-[28px]">150+</h4>
              <p className="text-white text-[16px] font-[Abrothin] leading-[1.2]">
                Clients
              </p>
            </div>
            <div className="pl-2 border-r mb-[30px] md:mb-0 border-[#cfcfcf]">
              <h4 className="text-white text-[28px]">500+</h4>
              <p className="text-white text-[16px] font-[Abrothin] leading-[1.2]">
                Projects
              </p>
            </div>
            <div className="pl-2">
              <h4 className="text-white text-[28px]">05</h4>
              <p className="text-white text-[16px] font-[Abrothin] leading-[1.2]">
                National-level <br /> Awards
              </p>
            </div>
          </div>
        </div>

        <div className="w-fit">
          <OptimizedBanner src={bannerImage[currentIndex]} alt="Banner Image" />
        </div>
      </div>
    </div>
  );
}

export default Banner;
