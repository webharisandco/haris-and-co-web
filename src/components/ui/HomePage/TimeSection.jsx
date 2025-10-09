import React, { useEffect, useState } from "react";

const cities = [
  { name: "India", zone: "Asia/Kolkata" },
  { name: "Dubai", zone: "Asia/Dubai" },
];

const WorldClock = () => {
  const [times, setTimes] = useState({});

  useEffect(() => {
    const updateTimes = () => {
      const newTimes = {};
      cities.forEach(city => {
        const now = new Date();
        newTimes[city.name] = now.toLocaleTimeString("en-US", {
          timeZone: city.zone,
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        });
      });
      setTimes(newTimes);
    };

    updateTimes();
    const interval = setInterval(updateTimes, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 py-6 sm:py-8 bg-black">
      {cities.map(city => (
        <div
          key={city.name}
          className="
            flex items-center justify-center 
            px-4 sm:px-6 md:px-8 lg:px-5 
            py-2 sm:py-3 md:py-4 
            rounded-full border-2 border-white text-white
            text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl
            min-w-[150px] sm:min-w-[180px] md:min-w-[200px] lg:min-w-[230px]
            text-center
          "
        >
          <span className="mr-2 font-bold font-[helvetica-medium] tracking-wider">{city.name}:</span>
          <span className="font-medium">{times[city.name]}</span>
        </div>
      ))}
    </div>
  );
};

export default WorldClock;
