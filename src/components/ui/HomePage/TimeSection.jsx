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
    <div className="flex justify-center items-center py-8 bg-black">
      {cities.map(city => (
        <div
          key={city.name}
          className="px-10 py-4 mx-4 rounded-full border-2 border-white text-white text-2xl flex items-center justify-center"
          style={{
            minWidth: "230px",
            textAlign: "center",
          }}
        >
          <span
            className="mr-2"
            style={{ fontFamily: "HelveticaNeueBold, sans-serif" }}
          >
            {city.name}:
          </span>
          <span
            style={{ fontFamily: "HelveticaNeueMedium, sans-serif" }}
          >
            {times[city.name]}
          </span>
        </div>
      ))}
    </div>
  );
};

export default WorldClock;
