import React from "react";
import blogImg from "@/assets/images/blogDetails/AI-role1.jpg";



function Banner() {
  return (
    <div className=" px-[16px] md:px-[80px] pt-[180px] pb-[180px] min-h-[700px flex items-center  lg:min-h-[632px] bg-[#0E0E0E]">
      <div className=" flex flex-col gap-[35px]">
        <h1 className="text-[32px] text-96px text-white">
         Why You Should Never Hire a Digital Marketing Agency
         Don’t do it. Seriously. Agencies are overrated.
        </h1>
        <p className="text-white text-[20px] md:text-[30px] font-[thin] w-4/5">
          After all, why would you hand over your brand to professionals when you could spend your evenings juggling dashboards, creative files, and endless strategy calls? Marketing can be a thrilling maze of hunches if you enjoy that kind of chaos.
        </p>
         <p className="text-white text-[20px] md:text-[30px] font-[thin] w-4/5">
          Late nights tweaking ads are fun, right? Forget sleep. There is something special about staring at campaigns at 2 AM, hoping an algorithm behaves itself.
        </p>
         <p className="text-white text-[20px] md:text-[30px] font-[thin] w-4/5">
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
        </p>
        
        <img src={blogImg} alt="" />
      </div>
    </div>
  );
}

export default Banner;


