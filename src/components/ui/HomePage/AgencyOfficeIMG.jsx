import React from "react";
import GenAiImg from "../../../../src/assets/images/agencyofficeimg/agencyofficebg.jpg";
import UAEImg from "../../../../src/assets/images/agencyofficeimg/dubai.JPG";
import IndiaImg from "../../../../src/assets/images/agencyofficeimg/officejpg.jpg";

export default function GenAIHero({ title, subtitle, ctaText, onCta }) {
  // const handleCta = () => {
  //   if (typeof onCta === "function") {
  //     onCta();
  //   } else {
  //     const el = document.getElementById("learn-more");
  //     if (el) {
  //       el.scrollIntoView({ behavior: "smooth" });
  //     }
  //   }
  // };

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative px-4 md:px-10 lg:px-20 py-16 md:py-20 text-white min-h-[400px] flex items-center"
        style={{
          backgroundImage: `url(${GenAiImg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 w-full flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Main Title */}
          {/* <div className="max-w-full">
            <p className="text-[36px] sm:text-[52px] md:text-[72px] lg:text-[96px] leading-tight font-semibold font-normal font-['Helvetica_Neue'] leading-relaxed">
              Agency Across
              <br />
              Two Nations
            </p>
          </div> */}
          <h1 className="text-[36px] sm:text-[52px] md:text-[72px] lg:text-[120px] leading-tight
           text-center">Agency Across <br /> Two Nations</h1>

          {/* Tagline */}
          <div className="w-full md:w-[30%]">
            <p className=" text-sm sm:text-base md:text-lg lg:text-xl leading-snug font-normal">
              From India’s creative hub to the heart of Dubai’s innovation district,
              our studios are where ideas turn into impact.
            </p>
          </div>
        </div>

        {/* Smooth scroll anchor */}
        <div
          id="learn-more"
          className="absolute left-0 bottom-0 w-full h-1 pointer-events-none"
        />
      </section>

      {/* Spacer */}
      <div className="bg-black-500 md:py-24"></div>

      {/* Offices section */}
      <div className="w-full relative z-30 "style={{
    background: "linear-gradient(to bottom, black 30%, #0e0e0e 30%)",
  }}>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-10  md:-mt-[220px] pb-8 sm:pb-16 ">

          {/* India Office */}
          <div
              className="group w-[95vw] sm:max-w-[600px] md:w-[500px] lg:w-[600px] h-[220px] sm:h-[300px] md:h-[400px] lg:h-[450px] relative overflow-hidden cursor-pointer"
              style={{
                backgroundImage: `url(${IndiaImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition duration-500"></div>

            {/* Text */}
            <div className="absolute left-0 bottom-0 z-20 p-4 sm:p-6 text-white">
              <h3 className="font-semibold text-base sm:text-lg mb-1 font-[helvetica-medium] tracking-wider">India Office</h3>
              <p className="text-xs sm:text-sm">
                Rooted In Creativity, Serving Clients Across The Nation.
              </p>
            </div>
          </div>

          {/* Dubai Office */}
          <div
            className="group w-[95vw] sm:max-w-[600px] md:w-[500px] lg:w-[600px] h-[220px] sm:h-[300px] md:h-[400px] lg:h-[450px] relative overflow-hidden cursor-pointer"
            style={{
              backgroundImage: `url(${UAEImg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition duration-500"></div>

            {/* Text */}
            <div className="absolute left-0 bottom-0 z-20 p-4 sm:p-6 text-white">
              <h3 className="font-semibold text-base sm:text-lg mb-1 font-[helvetica-medium] tracking-wider">Dubai Office</h3>
              <p className="text-xs sm:text-sm">
                Rooted In Creativity, Serving Clients Across The Nation.
              </p>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
