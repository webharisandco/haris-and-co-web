import BannerVideo from "@/assets/videos/banner.mp4";
import React, { useState } from 'react';

export default function VideoBanner() {
  const [isMuted, setIsMuted] = useState(true);

  return (
    <div className="bg-white w-full flex justify-center items-center relative overflow-hidden">
      <video
        src={BannerVideo}
        playsInline
        webkit-playsinline="true"
        controls={false}
        autoPlay
        loop
        muted={isMuted}
        className="w-full h-[50vh] md:h-[70vh] lg:h-[90vh] object-cover"
      />
      {/* Optional mute/unmute button */}
      {/* <button
        className="absolute right-4 bottom-4 bg-black/50 text-white px-3 py-1 rounded-lg text-sm"
        onClick={() => setIsMuted(!isMuted)}
      >
        {isMuted ? "Unmute" : "Mute"}
      </button> */}
    </div>
  );
}
