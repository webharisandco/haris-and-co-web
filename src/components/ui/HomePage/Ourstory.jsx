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
        <h1 className="text-white text-6xl leading-[61px] font-medium font-['Helvetica_Neue'] mb-6">
          Our Story
        </h1>
        {/* Subtitle / Paragraph */}
        <p className="text-white/95 text-xl font-normal font-['Helvetica_Neue'] leading-7 mb-10 mt-2">
         Every big journey begins with a small step, and ours began five years ago with just an idea and a handful of dreamers. From those early days of brainstorming and bold thinking, we’ve grown into a venture that’s crossing borders and breaking barriers. Today, we work with some of the most exciting brands and loyal clients. We have come a long way, but what remains constant is our urge to learn more and get better every single day. The spirit we started with, rooted in creativity, passion, and the drive to keep pushing boundaries, is still at the heart of everything we do. And with every step forward, our story is still being written.
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
