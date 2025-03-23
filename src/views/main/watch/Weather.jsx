import React, { useEffect, useState } from "react";

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [unit, setUnit] = useState("C");

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const savedApiKey = localStorage.getItem("weatherApiKey");
        const savedLocation = localStorage.getItem("weatherLocation");
        const lastFetchTime = localStorage.getItem("lastFetchTime");

        const weatherApiKeys = [
          "db0392b338114f208ee135134240312",
          "de5f7396db034fa2bf3140033240312",
          "c64591e716064800992140217240312",
          "9b3204c5201b4b4d8a2140330240312",
        ];
        const defaultApiKey =
          savedApiKey ||
          weatherApiKeys[Math.floor(Math.random() * weatherApiKeys.length)];

        const currentTime = new Date().getTime();

        // If cached data exists and was fetched less than 1 hour ago, use it
        if (lastFetchTime && currentTime - lastFetchTime < 60 * 60 * 1000) {
          const cachedData = localStorage.getItem("weatherData");
          if (cachedData) {
            setWeatherData(JSON.parse(cachedData));
            return;
          }
        }

        let currentUserLocation = savedLocation;
        if (!currentUserLocation) {
          const locationResponse = await fetch("https://ipinfo.io/json/");
          const locationData = await locationResponse.json();
          currentUserLocation = locationData.loc || "auto:ip";
          localStorage.setItem("weatherLocation", currentUserLocation);
        }

        const weatherApi = `https://api.weatherapi.com/v1/current.json?key=${defaultApiKey}&q=${currentUserLocation}&aqi=no`;
        const response = await fetch(weatherApi);
        const data = await response.json();

        setWeatherData(data);

        // Save data and timestamp in localStorage
        localStorage.setItem("weatherData", JSON.stringify(data));
        localStorage.setItem("lastFetchTime", currentTime.toString());
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchWeatherData();

    // Set interval to fetch new data every hour
    const interval = setInterval(fetchWeatherData, 60 * 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="topDiv">
      <div className="lrectangle">
        <div
          className="wInfo flex"
          style={{ gap: "20px", position: "relative" }}
        >
          <div
            id="temp"
            onClick={() => setUnit(unit === "C" ? "F" : "C")}
            style={{ cursor: "pointer" }}
          >
            {unit === "C"
              ? Math.round(weatherData?.current?.temp_c)
              : Math.round(weatherData?.current?.temp_f)}
            <span className="tempUnit">°{unit}</span>
          </div>
          <div
            className="weatherImage text-center flex justify-center items-center"
            style={{ gap: "20px" }}
          >
            <img
              alt="weatherIcon"
              id="wIcon"
              src={weatherData?.current?.condition?.icon.replace(
                "//cdn",
                "https://cdn"
              )}
            />
            <div id="conditionText" style={{ color: "#ffffff" }}>
              {/* {weatherData?.current?.condition?.text} */}
            </div>
          </div>
        </div>
        <div className="cconnt">
          <div className="humidityBar">
            {/* <div className="thinLine"></div> */}
            <div
              className="slider"
              id="slider"
              // style={{ width: `${weatherData?.current?.humidity}%` }}
            >
              <div id="humidityLevel">
                Humidity {weatherData?.current?.humidity}%
              </div>
            </div>{" "}
            <div
              className="slider"
              id="sliders"
              style={{ width: `${weatherData?.current?.humidity}%` }}
            >
              <span id="humidityLevel">
                Feels{" "}
                {unit === "C"
                  ? weatherData?.current?.feelslike_c
                  : weatherData?.current?.feelslike_f}
                °{unit}
              </span>
            </div>
          </div>
          <div className="tilesContainer">
            <div className="tiles">
              <div className="icon">🌡</div>
              <span id="feelsLike">
                Feels{" "}
                {unit === "C"
                  ? weatherData?.current?.feelslike_c
                  : weatherData?.current?.feelslike_f}
                °{unit}
              </span>
            </div>
            <div className="tiles location">
              <div className="icon">📍</div>
              <span className="location_spn" id="location">
                {weatherData?.location?.name}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
