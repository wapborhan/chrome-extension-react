import React, { useState } from "react";
import useWeatherData from "../../../hooks/useWeatherData";

const Weather = () => {
  const { weatherData } = useWeatherData();
  const [unit, setUnit] = useState("C");

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
          </div>
          <div
            id="conditionText"
            className="humidityBar"
            style={{ color: "#ffffff" }}
          >
            <div className="slider" id="slider">
              <div id="humidityLevel">{weatherData?.location?.name}</div>
            </div>{" "}
          </div>
        </div>
        <div className="cconnt">
          <div className="humidityBar">
            <div className="slider" id="slider">
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
              <span id="feelsLike">Suhoor 00:00 am</span>
            </div>{" "}
            <div className="tiles">
              <div className="icon">🌡</div>
              <span id="feelsLike">Iftar 00:00 am</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
