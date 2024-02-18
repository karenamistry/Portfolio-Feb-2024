import React, { useState, useEffect } from "react";

function WeatherWidget() {
  const [weather, setWeather] = useState(null);
  const [isCelsius, setIsCelsius] = useState(true); // State to toggle between Celsius and Fahrenheit

  useEffect(function fetchWeather() {
    const apiKey = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;
    const ottawaCoords = { lat: 45.4215, lon: -75.6972 }; // Ottawa, Ontario coordinates
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${ottawaCoords.lat}&lon=${ottawaCoords.lon}&appid=${apiKey}&units=metric`;

    fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setWeather(data);
      })
      .catch(function (error) {
        console.error("Failed to load weather data:", error);
      });
  }, []);

  // Function to toggle the temperature unit
  function toggleTemperatureUnit() {
    setIsCelsius(!isCelsius);
  }

  if (!weather) return <div>Loading weather...</div>;

  // Calculate Fahrenheit
  const tempInFahrenheit = (weather.main.temp * 9) / 5 + 32;

  return (
    <div onClick={toggleTemperatureUnit} style={{ cursor: "pointer" }}>
      <p className="text-xs">
        {isCelsius
          ? `${weather.main.temp}°C`
          : `${tempInFahrenheit.toFixed(2)}°F`}
      </p>
      {/* <p className="text-xs">{weather.weather[0].description}</p> */}
    </div>
  );
}

export default WeatherWidget;
