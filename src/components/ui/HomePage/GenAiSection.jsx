import React from "react";
import GenAiImg from "../../../../src/assets/images/genAiSection/genAibgimg.jpg";

export default function GenAIHero({
  title = "Unlock the power of Gen AI",
  subtitle = "Go beyond limits with Generative AI to unlock efficiency, spark creativity, and boost performance for a competitive edge.",
  ctaText = "Learn More",
  onCta = null,
  className = "",
}) {
  const handleCta = () => {
    if (typeof onCta === "function") onCta();
    else {
      const el = document.getElementById("learn-more");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="relative py-60 px-4 text-white"
      style={{
        backgroundImage: `url(${GenAiImg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/10"></div>

      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        {/* Heading */}
        <h1 className="lg:text-5xl sm:text-3xl md:text-4xl font-normal mb-4 font-[Helvetica-Light]" >
          {title}
        </h1>

        {/* Subtitle */}
        <p className="text-base md:text-lg text-white/70 mb-6 max-w-xl">
          {subtitle}
        </p>

        {/* CTA Button */}
        <button
  onClick={handleCta}
  className="flex items-center gap-2 border border-white text-white px-4 py-2 text-sm font-medium bg-transparent hover:bg-white hover:text-black transition"
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
  {ctaText}
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
