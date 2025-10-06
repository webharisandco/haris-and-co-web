import React from "react";
import blogImg from "@/assets/images/blogDetails/aiblog.jpg";



function Banner() {
  return (
    <div className=" px-[16px] md:px-[80px] pt-[180px] pb-[180px] min-h-[700px flex items-center  lg:min-h-[632px] bg-[#0E0E0E]">
      <div className=" flex flex-col gap-[35px]">
        <h1 className="text-[32px] text-96px text-white">
        AI + Creativity: Machines Help, Humans Shine
        </h1>
        <p className="text-white text-[20px] md:text-[30px] font-[thin] w-4/5">
          In the past few years, AI has shifted from being a buzzword to becoming part of everyday work. It writes, analyses, edits, and even designs. In marketing, it touches almost every corner, powering ad campaigns, improving targeting, and producing content faster than ever before.
        </p>
         <p className="text-white text-[20px] md:text-[30px] font-[thin] w-4/5">
         Yet with all that convenience comes a quiet trade-off. The more automated things become, the more creativity risks losing its edge. The line between efficiency and originality is starting to fade.
        </p>
         {/* <p className="text-white text-[20px] md:text-[30px] font-[thin] w-4/5">
          Your cousin or a friend could design logos, obviously. Cohesive branding, a clear visual identity, and strategy are overrated. Who needs that consistency anyway?
        </p>
        <p className="text-white text-[20px] md:text-[30px] font-[thin] w-4/5">
          Analytics and metrics are optional. Tracking clicks, conversions, or ROI is unnecessary. You could just throw content into the void and hope for magic.
        </p>
        <p className="text-white text-[20px] md:text-[30px] font-[thin] w-4/5">
          Managing multiple campaigns across channels yourself builds character. Nothing like spreadsheets, social calendars, and ad managers keeping you on your toes.
        </p>
        <p className="text-white text-[20px] md:text-[30px] font-[thin] w-4/5">
          It is exhausting to think about and maybe that is the point.
        </p> */}
        
        <img src={blogImg} alt="" />
      </div>
    </div>
  );
}

export default Banner;


