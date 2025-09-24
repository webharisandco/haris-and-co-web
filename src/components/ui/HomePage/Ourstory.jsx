import React from "react";
import GenAiImg from "../../../../src/assets/images/ourstorypage/ourstorybgimg.png";
import LogoImg from "../../../../src/assets/images/ourstorypage/hacaourstory.png"

export default function GenAIHero() {
  const handleCta = () => {
    const el = document.getElementById("learn-more");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative text-white flex items-end"
      style={{
        backgroundImage: `url(${GenAiImg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "550px",
      }}
    >
      
      

      {/* Right side PNG logo */}
      <img
        src={LogoImg}
        alt="Haris & Co. logo"
        className="absolute right-0 top-1/2 transform -translate-y-1/2 pr-8 z-10 pointer-events-none select-none"
        style={{ height: "140px", width: "auto" }} // adjust height as needed
      />

      {/* Left content */}
      <div className="relative z-10 max-w-2xl pl-16 pb-16">
        {/* Title */}
        <h1 className="text-white text-4xl leading-[61px] font-medium font-['Helvetica_Neue'] mb-6">
          Our Story
        </h1>
        {/* Subtitle / Paragraph */}
        <p className="text-white/95 text-2xl font-normal font-['Helvetica_Neue'] leading-7 mb-10 mt-2">
          We fuel the growth of purpose driven brands through strategy activation, design empowerment, and market adoption.
          From cultivating new ideas to connecting the dots for customers or users, these are our core principles.
          We fuel the growth of purpose driven brands through strategy activation, design empowerment, and market adoption.
          From cultivating new ideas to connecting the dots for customers or users, these are our core principles.
        </p>
        <button
          onClick={handleCta}
          className="flex items-center gap-2 border border-white text-white px-6 py-3 text-lg font-medium font-['Helvetica_Neue'] leading-snug bg-transparent hover:bg-white hover:text-black transition"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden
          >
            <path
              d="M5 12h14"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 5l7 7-7 7"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Learn More
        </button>
      </div>

      {/* Scroll Target */}
      <div
        id="learn-more"
        className="absolute left-0 bottom-0 -mb-2 w-full h-1 pointer-events-none"
      />
    </section>
  );
}
