import React from "react";
import Button from "../../components/ui/common/Button";

export default function JobCard({ className, jobName }) {
  return (
    <div
      className={
        "bg-white shadow-md p-6  flex flex-col justify-between gap-0 md:gap-10 3xl:gap-24 " +
        className
      }
    >
      <div className="">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
          <div>
            <h6 className="text-[25px] 3xl:text-[36px] font-[helvetica-medium] ">
              {jobName}
            </h6>
            <p className="text-black/50 block lg:hidden font-[thin] 3xl:text-[20px]">
              Kozhikode, Kerala
            </p>
          </div>
          <div className="pt-[30px] pb-[40px] lg:pb-0 lg:pt-0 ">
            <p className="3xl:text-[20px] font-[Helvetica-medium]">Onsite</p>
          </div>
        </div>
        <p className="text-black/50 hidden lg:block font-[thin] 3xl:text-[20px]">
          Kozhikode, Kerala
        </p>
      </div>
   
        <Button href="/contact" text="Apply" className="text-black" />

    </div>
  );
}
