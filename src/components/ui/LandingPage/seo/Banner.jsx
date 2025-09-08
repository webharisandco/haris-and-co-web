import { useState } from "react";
import LandingButton from "../../common/LandingButton";
import hero from "@/assets/images/DigitalMarketing/visit.webp";
import thumb from "@/assets/images/DigitalMarketing/vedio-thumb.webp";
import seoad from "@/assets/images/DigitalMarketing/SEO-AD.mov";
import { ArrowUpRight } from "lucide-react";

function Banner({
  bannerImage,
  heading,
  description,
  smlHeading,
  performance = false,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <div className="px-[16px] md:px-[60px] lg:px-[80px] bg-black md:pt-[150px]">
      <div
        className={` grid lg:grid-cols-[1.4fr_1fr]  mt-[50px] md:mt-[75px] lg:mt-[100px] xl:mt-[50px] gap-[73px] md:gap-[100px] justify-between items-start poppins-regular 
        }`}
      >
        <div className="flex flex-col gap-[20px] w-fit">
          <p className="text-white">{smlHeading}</p>
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
          <p className="text-[16px] md:text-[15px] lg:text-[17px]  2xl:text-[17px] 3xl:text-[20px] text-white font-light w-full lg:w-5/6 ">
            {" "}
            {description}
          </p>
          <div className="flex mt-8 justify-center items-center md:justify-start pb-[40px] flex-col md:flex-row gap-[40px]">
            <LandingButton
              href={
                "https://harisandco.pipedrive.com/scheduler/Z6GZG1sd/meeting"
              }
              text={"GET A PROPASAL"}
            />
            <div className=" flex group gap-[10px]">
              <p className="text-white">View Our Result</p>
              <span>
                <ArrowUpRight
                  className="group-hover:rotate-45 text-white transition-all duration-300"
                  size={23}
                />
              </span>
            </div>
            {/* {performance && <LandingButton href={'https://harisandco.pipedrive.com/scheduler/Z6GZG1sd/meeting'} text={'Let’s Connect'} className={'bg-transparent hover:bg-transparent hover:text-white/70 text-white'} />} */}
          </div>
          <div className="w-full font-[Abrobold]">
            {/* Mobile layout */}
            <div className="block md:hidden">
              <div className="flex justify-between gap-4 mb-6">
                <div className="w-1/2 border-r border-[#cfcfcf] text-center px-2">
                  <h4 className="text-white text-[28px]">10,000+</h4>
                  <p className="text-white text-[16px] font-[Abrothin] leading-[1.2]">
                    Top 10 Keywords <br /> on Google
                  </p>
                </div>
                <div className="w-1/2 text-center px-2">
                  <h4 className="text-white text-[28px]">50,000+</h4>
                  <p className="text-white text-[16px] font-[Abrothin] leading-[1.2]">
                    Leads <br /> Generated
                  </p>
                </div>
              </div>
              <div className="text-center px-2">
                <h4 className="text-white text-[28px]">8 M+</h4>
                <p className="text-white text-[16px] font-[Abrothin] leading-[1.2]">
                  Total Website <br /> Clicks
                </p>
              </div>
            </div>

            {/* Desktop layout remains unchanged */}
            <div className="hidden md:grid md:grid-cols-4 md:gap-0">
              <div className=" border-r border-[#cfcfcf]">
                <h4 className="text-white text-[28px]">10,000+</h4>
                <p className="text-white text-[16px] font-[Abrothin] leading-[1.2]">
                  Top 10 Keywords <br /> on Google
                </p>
              </div>
              <div className="pl-6 md:border-r border-[#cfcfcf]">
                <h4 className="text-white text-[28px]">50,000+</h4>
                <p className="text-white text-[16px] font-[Abrothin] leading-[1.2]">
                  Leads <br />
                  Generated
                </p>
              </div>
              <div className="pl-6 mb-[30px] md:mb-0 col-span-2">
                <h4 className="text-white text-[28px]">8 M+</h4>
                <p className="text-white text-[16px] font-[Abrothin] leading-[1.2]">
                  Total Website <br />
                  Clicks
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid   max-w-4xl mx-auto p-4">
          {/* Image 1 */}
          <div className="rounded-xl overflow-hidden">
            <img
              src={hero}
              alt="Person 1"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Video with Play Button */}
          <div
            className="relative col-span-2 mt-[20px] rounded-xl overflow-hidden cursor-pointer"
            onClick={openModal}
          >
            <img
              src={thumb}
              alt="SEO Video"
              className="w-full h-full object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
              <div className="w-16 h-16 bg-white text-black flex items-center justify-center rounded-full text-3xl font-bold">
                ▶
              </div>
            </div>
          </div>

          {isModalOpen && (
            <div
              className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
              onClick={closeModal}
            >
              <div
                className="relative w-[300px] md:w-[360px] lg:w-[400px] aspect-[9/16] bg-black rounded-xl overflow-hidden shadow-xl"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  className="absolute top-2 right-2 bg-white text-black rounded-full px-2 text-xl z-10"
                  onClick={closeModal}
                >
                  ×
                </button>

                {/* Portrait Video */}
                <video
                  src={seoad}
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  playsInline
                  controls
                />

                {/* Traffic Card Overlay */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white p-4 rounded-lg shadow-lg text-center w-[85%]">
                  <p className="text-xs font-semibold text-gray-600">
                    ORGANIC MONTHLY TRAFFIC
                  </p>
                  <p className="text-2xl font-bold text-black">194,694</p>
                  <span className="mt-1 inline-block px-3 py-1 bg-green-100 text-green-600 text-sm rounded-full font-medium">
                    GREAT
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Banner;
