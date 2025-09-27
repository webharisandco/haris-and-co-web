import React from "react";

export default function GenAIHero({ className = "" }) {
  return (
    <section className={`relative w-full h-[600px] ${className}`}>
      {/* Background Video from public folder */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/Video/H&C Web.mp4" // Note: path starts from public folder
        autoPlay
        muted
        loop
      />

      {/* Optional Overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Removed all texts and buttons */}
    </section>
  );
}
