import React from "react";
import GenAiImg from "../../../../src/assets/images/agencyofficeimg/agencyofficebg.jpg";
import UAEImg from "../../../../src/assets/images/agencyofficeimg/uaeoffice.jpg";
import IndiaImg from "../../../../src/assets/images/agencyofficeimg/indianoffice.jpg";

export default function GenAIHero({ title, subtitle, ctaText, onCta }) {
  const handleCta = () => {
    if (typeof onCta === "function") {
      onCta();
    } else {
      const el = document.getElementById("learn-more");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative px-0 pb-20 pt-20 text-white min-h-[400px] flex items-center"
        style={{
          backgroundImage: `url(${GenAiImg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        {/* Tagline overlay */}
        <div className="absolute top-0 right-0 pt-10 pr-5 z-20 max-w-xs w-[90%] md:w-80 text-right text-white">
          <p className="text-base md:text-xl leading-snug font-normal m-0 p-0">
            From India’s creative hub to the heart of
          </p>
          <p className="text-base md:text-xl leading-snug font-normal m-0 p-0">
            Dubai’s innovation district, our studios are
          </p>
          <p className="text-base md:text-xl leading-snug font-normal m-0 p-0">
            where ideas turn into impact.
          </p>
        </div>
        {/* Main titles center left */}
        <div className="relative z-10 w-full max-w-[1260px] mx-auto flex flex-col items-start px-4 md:px-10">
          <h1 className="text-[42px] sm:text-[64px] md:text-[90px] lg:text-[120px] leading-none font-bold mb-0 font-[Helvetica-Light]">
            Agency Across
            <br />
            Two Nations
          </h1>
        </div>
        <div
          id="learn-more"
          className="absolute left-0 bottom-0 w-full h-1 pointer-events-none"
        />
      </section>

      {/* Spacer */}
      <div className="bg-black-500 py-8 sm:py-24"></div>

      {/* Offices section */}
      <div className="w-full relative z-30 bg-[linear-gradient(to_bottom,black_50%,#0E0E0E_50%)]">
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-10 max-w-[1260px] mx-auto md:-mt-[220px] pb-8 sm:pb-16">
          {/* India Office */}
          <div
            className="group w-[95vw] max-w-[420px] sm:max-w-[520px] md:w-[400px] lg:w-[520px] h-[220px] sm:h-[300px] md:h-[400px] lg:h-[450px] relative overflow-hidden shadow-lg cursor-pointer rounded-md"
            style={{
              backgroundImage: `url(${IndiaImg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute left-0 bottom-0 z-20 p-4 sm:p-6 text-white">
              <h3 className="font-semibold text-base sm:text-lg mb-1">India Office</h3>
              <p className="text-xs sm:text-sm">Rooted In Creativity, Serving Clients Across The Nation.</p>
            </div>
          </div>

          {/* Dubai Office */}
          <div
            className="group w-[95vw] max-w-[420px] sm:max-w-[520px] md:w-[400px] lg:w-[520px] h-[220px] sm:h-[300px] md:h-[400px] lg:h-[450px] relative overflow-hidden shadow-lg cursor-pointer rounded-md"
            style={{
              backgroundImage: `url(${UAEImg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute left-0 bottom-0 z-20 p-4 sm:p-6 text-white">
              <h3 className="font-semibold text-base sm:text-lg mb-1">Dubai Office</h3>
              <p className="text-xs sm:text-sm">Rooted In Creativity, Serving Clients Across The Nation.</p>
            </div>
          </div>
        </div>
      </div>


    </>
  );
}
