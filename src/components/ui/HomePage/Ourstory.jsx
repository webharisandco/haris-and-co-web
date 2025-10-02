import React from "react";
import { useNavigate } from "react-router-dom";
import GenAiImg from "../../../../src/assets/images/ourstorypage/ourstorybgimg.png";
import LogoImg from "../../../../src/assets/images/ourstorypage/hacaourstory.png";

export default function GenAIHero() {
  const navigate = useNavigate();

  const handleCta = () => {
    navigate("/about");
  };

  return (
    // <section
    //   className="relative w-full min-h-[60vh] bg-cover bg-center bg-no-repeat text-white px-4 sm:px-8 md:px-12 lg:pl-16 py-10 sm:py-12 md:py-16"
    //   style={{ backgroundImage: `url(${GenAiImg})` }}
    // >
    //   <img
    //     src={LogoImg}
    //     alt="Haris & Co. logo"
    //     className="absolute  z-10 pointer-events-none select-none block lg:block max-h-[120px] w-auto"
    //   />

    //   <div className="relative z-10 max-w-4xl w-full ">
    //     <h1 className="text-[28px] sm:text-[38px] md:text-[52px] lg:text-[64px] xl:text-[72px] leading-tight font-medium font-['Helvetica_Neue'] mb-4 sm:mb-6">
    //       Our Story
    //     </h1>

    //     <p className="text-white/95 text-sm sm:text-base md:text-lg lg:text-xl font-normal font-['Helvetica_Neue'] leading-relaxed mb-6 sm:mb-8 max-w-3xl">
    //       Every big journey begins with a small step, and ours began five years
    //       ago with just an idea and a handful of dreamers. From those early
    //       days of brainstorming and bold thinking, we’ve grown into a venture
    //       that’s crossing borders and breaking barriers. Today, we work with
    //       some of the most exciting brands and loyal clients. We have come a
    //       long way, but what remains constant is our urge to learn more and get
    //       better every single day. The spirit we started with, rooted in
    //       creativity, passion, and the drive to keep pushing boundaries, is
    //       still at the heart of everything we do. And with every step forward,
    //       our story is still being written.
    //     </p>

    //     <button
    //       onClick={handleCta}
    //       className="flex items-center gap-2 border border-white text-white px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-lg font-medium font-['Helvetica_Neue'] leading-snug bg-transparent hover:bg-white hover:text-black transition rounded-md"
    //     >
    //       <svg
    //         width="16"
    //         height="16"
    //         className="sm:w-[18px] sm:h-[18px]"
    //         viewBox="0 0 24 24"
    //         fill="none"
    //         aria-hidden
    //       >
    //         <path
    //           d="M5 12h14"
    //           stroke="currentColor"
    //           strokeWidth="1.6"
    //           strokeLinecap="round"
    //           strokeLinejoin="round"
    //         />
    //         <path
    //           d="M12 5l7 7-7 7"
    //           stroke="currentColor"
    //           strokeWidth="1.6"
    //           strokeLinecap="round"
    //           strokeLinejoin="round"
    //         />
    //       </svg>
    //       Learn More
    //     </button>
    //   </div>


    // </section>
    <section className="w-full min-h-[60vh] bg-cover bg-center bg-no-repeat text-white" style={{ backgroundImage: `url(${GenAiImg})` }}>
      <div className="px-4 sm:px-8 md:px-12 lg:pl-16 py-10 sm:py-12 md:py-16 flex flex-col lg:flex-row items-center lg:justify-between">

        <div>
          <h1 className="text-[28px] md:text-[38px]   leading-tight font-medium font-['Helvetica_Neue'] mb-4 tracking-wide sm:mb-6">Our Story</h1>
          <p className="text-white/95 text-sm md:text-base tracking-wide font-normal font-['Helvetica_Neue'] leading-relaxed mb-6 sm:mb-8 max-w-3xl">Every big journey begins with a small step, and ours began five years
          ago with just an idea and a handful of dreamers. From those early
           days of brainstorming and bold thinking, we’ve grown into a venture
           that’s crossing borders and breaking barriers. Today, we work with
           some of the most exciting brands and loyal clients. We have come a
           long way, but what remains constant is our urge to learn more and get
           better every single day. The spirit we started with, rooted in
           creativity, passion, and the drive to keep pushing boundaries, is
           still at the heart of everything we do. And with every step forward,
           our story is still being written.</p>
          <button
            onClick={handleCta}
            className="flex items-center gap-2 border border-white text-white px-4 sm:px-6 py-2 sm:py-3 text-sm tracking-wide font-medium font-['Helvetica_Neue'] leading-snug bg-transparent hover:bg-white hover:text-black transition rounded-md"
          >
            Learn More
            <svg
              width="16"
              height="16"
              className="sm:w-[18px] sm:h-[18px]"
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
            
          </button>
        </div>
        <img src={LogoImg} className="z-10 pointer-events-none lg:block max-h-[120px] w-auto" alt="img"/>
      </div>

    </section>
  );
}
