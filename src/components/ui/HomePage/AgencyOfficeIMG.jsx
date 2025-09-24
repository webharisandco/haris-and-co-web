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
        className="relative px-0 pb-40 pt-28 text-white"
        style={{
          backgroundImage: `url(${GenAiImg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          minHeight: "400px"
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Right top tagline overlay */}
<div className="absolute top-0 right-0 pt-16 pr-14 z-20 max-w-xs w-full text-right text-white">
  <p className="text-xl leading-snug font-normal m-0 p-0">
    From India’s creative hub to the heart of
  </p>
  <p className="text-xl leading-snug font-normal m-0 p-0">
    Dubai’s innovation district, our studios are
  </p>
  <p className="text-xl leading-snug font-normal m-0 p-0">
    where ideas turn into impact.
  </p>
</div>
        
        {/* Main titles center left */}
        <div
          className="relative z-10 max-w-[1260px] mx-auto flex flex-row items-end px-10"
          style={{minHeight: "340px"}}
        >
          <div className="flex-1 pt-10 ">
            <h1 className="text-[120px] leading-none font-bold mb-0 font-[Helvetica-Light]">
              Agency Across<br />
              Two Nations
            </h1>
          </div>
        </div>
        <div
          id="learn-more"
          className="absolute left-0 bottom-0 -mb-2 w-full h-1 pointer-events-none"
        />
      </section>
  <div className="bg-black-500 py-16 sm:py-20 md:py-28 lg:py-36 xl:py-44"></div>

       
      {/* Offices section */}
      <div className="w-full relative -mt-40 z-30">
        <div className="flex flex-row justify-center max-w-[1260px] mx-auto -mt-[470px] gap-10 pb-16">
          {/* India Office */}
          <div
            className="group w-[650px] h-[450px] relative overflow-hidden shadow-lg cursor-pointer rounded-md"
            style={{
              backgroundImage: `url(${IndiaImg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute left-0 bottom-0 z-20 p-6 text-white">
              <h3 className="font-semibold text-lg mb-1">India Office</h3>
              <p className="text-sm">Rooted In Creativity, Serving Clients Across The Nation.</p>
            </div>
          </div>
          
          {/* Dubai Office */}
          <div
            className="group w-[650px] h-[450px] relative overflow-hidden shadow-lg cursor-pointer rounded-md"
            style={{
              backgroundImage: `url(${UAEImg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute left-0 bottom-0 z-20 p-6 text-white">
              <h3 className="font-semibold text-lg mb-1">Dubai Office</h3>
              <p className="text-sm">Rooted In Creativity, Serving Clients Across The Nation.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
