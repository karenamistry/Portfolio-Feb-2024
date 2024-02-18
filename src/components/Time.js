import React, { useState, useEffect } from "react";

function CurrentTimeEST() {
  const [time, setTime] = useState(new Date());
  const [is24Hour, setIs24Hour] = useState(false);

  useEffect(function () {
    const intervalId = setInterval(function () {
      setTime(new Date());
    }, 1000);
    return function cleanup() {
      clearInterval(intervalId);
    };
  }, []);

  function toggleFormat() {
    setIs24Hour(!is24Hour);
  }

  const timeFormat = is24Hour ? "HH:mm" : "hh:mm A";
  const estTime = time.toLocaleTimeString("en-US", {
    timeZone: "America/New_York",
    hour12: !is24Hour,
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div onClick={toggleFormat} style={{ cursor: "pointer" }}>
      {estTime}
    </div>
  );
}

export default CurrentTimeEST;
