import React, { useEffect, useState } from "react";

const cities = [
  { name: "India", zone: "Asia/Kolkata" },
  { name: "Dubai", zone: "Asia/Dubai" },
  { name: "London", zone: "Europe/London" },
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
          hour: '2-digit',
          minute: '2-digit',
          hour12: true, // <-- This shows AM/PM!
        });
      });
      setTimes(newTimes);
    };

    updateTimes();
    const interval = setInterval(updateTimes, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center gap-6 py-8 bg-black text-white">
      {cities.map(city => (
        <div
          key={city.name}
          className="px-6 py-3 rounded-full border border-white text-xl"
        >
          <span className="font-medium">{city.name}:</span> {times[city.name]}
        </div>
      ))}
    </div>
  );
};

export default WorldClock;
