import React from "react";

function AchivementSection({ currentService }) {
  const formatDescription = (description) => {
    const words = description?.split(" ");

    return words?.map((word, index) => {
      const isBold = index < 5 || index >= words.length - 5;
      return (
        <span
          key={index}
          className={isBold ? "font-[boldtext]" : "font-[thin]"}
        >
          {word}{" "}
        </span>
      );
    });
  };

  return (
    <div className="mt-[30px] lg:mt-[85px] mb-[30px] lg:mb-[53px] w-full px-[16px]">
      {/* DESCRIPTION */}
      <div className="flex justify-center text-center">
        <p className="text-black text-[32px] xl:leading-[59px] lg:text-[40px] xl:text-[45px] 3xl:text-[48px] leading-none">
          {formatDescription(currentService?.description)}
        </p>
      </div>

      {/* COUNTERS */}
      <div className="mt-[36px] lg:mt-[112px] flex flex-col lg:flex-row justify-center gap-[30px] lg:gap-[120px]">
        {currentService?.counters?.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <p className="text-[36px] lg:text-[55px] 3xl:text-[64px] font-[boldtext]">
              {item.value}
            </p>

            <p className="text-[21px] font-[thin] text-center capitalize">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AchivementSection;
