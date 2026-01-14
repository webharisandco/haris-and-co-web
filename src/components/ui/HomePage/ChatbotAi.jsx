import React, { useEffect, useState } from "react";

const Chatbot = () => {
  const [isDarkSection, setIsDarkSection] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const whatsappNumber = "918590629387";
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  useEffect(() => {
    const sections = document.querySelectorAll(".bg-black, .bg-white");

    const handleScroll = () => {
      let dark = false;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();

        // check if section is in viewport center
        if (rect.top < window.innerHeight && rect.bottom > window.innerHeight) {
          dark = section.classList.contains("bg-black");
        }
      });

      setIsDarkSection(dark);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="fixed right-4 bottom-8 z-50"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      onTouchStart={() => setShowTooltip(true)}
    >
      {/* Tooltip */}
      <div
        className={`mb-2 rounded-md px-3 py-1 text-sm shadow-lg transition-all duration-300 ${
          showTooltip ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2"
        } ${isDarkSection ? "bg-white text-black" : "bg-black text-white"}`}
      >
        Let’s connect
      </div>

      {/* Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`flex h-14 w-14 items-center justify-center rounded-full shadow-md transition-colors duration-300 ${
          isDarkSection ? "bg-white text-black" : "bg-black text-white"
        }`}
        aria-label="Chat on WhatsApp"
      >
        <svg
        xmlns="http://www.w3.org/2000/svg"
        width={30}
        height={30}
        viewBox="0 0 32 32"
        fill="currentColor"
      >
        <path d="M16 3C9.373 3 4 8.373 4 15c0 2.673.969 5.134 2.584 7.1L4 29l7.165-2.54A12.947 12.947 0 0 0 16 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22c-2.047 0-3.975-.617-5.585-1.677l-.397-.264-4.266 1.509 1.421-4.166-.29-.416A9.968 9.968 0 0 1 6 15c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10zm5.586-7.542c-.303-.151-1.793-.885-2.071-.985-.278-.101-.481-.151-.684.152-.202.303-.784.984-.961 1.187-.177.202-.354.227-.656.076-.303-.151-1.277-.47-2.435-1.499-.901-.802-1.51-1.791-1.688-2.094-.177-.303-.018-.466.133-.617.136-.135.303-.354.455-.531.151-.177.202-.303.303-.505.101-.202.051-.379-.025-.53-.076-.152-.684-1.65-.937-2.264-.246-.591-.497-.509-.684-.518a.941.941 0 0 0-.646.026c-.202.079-.53.203-.808.506-.277.303-1.055 1.031-1.055 2.502 0 1.472 1.08 2.899 1.23 3.099.151.202 2.129 3.25 5.166 4.426.723.248 1.287.396 1.729.506.726.183 1.388.157 1.909.095.582-.07 1.793-.731 2.047-1.438.253-.708.253-1.316.177-1.438-.076-.121-.276-.197-.58-.349z" />
      </svg>
      </a>
    </div>
  );
};

export default Chatbot;
