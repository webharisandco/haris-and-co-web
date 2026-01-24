import React from "react";

export default function GenAIHero({ className = "" }) {
  return (
    <section
      className={`relative flex justify-center items-center w-full h-[30vh]  md:h-screen overflow-hidden bg-black ${className}`}
    >
      {/* Background Video from public folder */}
      <video
        className="absolute top-0 left-0 w-full h-full object-center lg:object-cover"
        src="/Video/H&CWeb3.mp4" // Path from public folder
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Overlay for better contrast */}
      <div className="absolute inset-0 bg-black/40"></div>
    </section>
  );
}
