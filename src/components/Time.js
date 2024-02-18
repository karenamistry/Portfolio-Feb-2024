import React, { useState, useEffect } from "react";

const CurrentTimeEST = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const eastern =
        new Intl.DateTimeFormat("en-US", {
          timeZone: "America/New_York",
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        }).format(new Date()) + " EST"; // Append 'EST' to the formatted string

      setTime(eastern);
    }, 1000); // Update time every second

    return () => clearInterval(interval);
  }, []);

  return <div>{time}</div>;
};

export default CurrentTimeEST;
