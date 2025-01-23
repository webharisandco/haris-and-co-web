import React from "react";

function AchivementSection() {
  return (
    <div className="bg-black py-[100px]  px-[100px] min-h-[700px]">
      <div className="flex justify-start items-center ">
        <div className="w-11/12">
          <p className="text-white text-[60px] leading-none">
            Every innovation{" "}
            <span className="text-white/50">
              that happens here is out of a quest to get better at what we are
              already doing.{" "}
            </span>{" "}
            We deliver ideas that make a difference,{" "}
            <span className="text-white/50">
              create experiences that transform lives and build ecosystems that{" "}
            </span>{" "}
            foster progress.
          </p>
        </div>
      </div>

      <div className="mt-[112px] flex justify-between w-11/12">
        <div className="flex flex-col">
          <p className="text-[60px] text-white/50">500+</p>
          <p className="text-[36px] text-white/50">Clients</p>
        </div>
        <div className="flex flex-col">
          <p className="text-[60px] text-white/50">1000+</p>
          <p className="text-[36px] text-white/50">Projects Done</p>
        </div>
        <div className="flex flex-col">
          <p className="text-[60px] text-white/50">4.9</p>
          <p className="text-[36px] text-white/50">Rating on Google</p>
        </div>
      </div>
    </div>
  );
}

export default AchivementSection;
