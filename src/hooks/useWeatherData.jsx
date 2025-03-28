import { useEffect, useState } from "react";

const useWeatherData = () => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const savedApiKey = localStorage.getItem("weatherApiKey");
        const savedLocation = localStorage.getItem("weatherLocation");
        const lastFetchTime = localStorage.getItem("lastFetchTime");

        const weatherApiKeys = [
          "8c5cf30a7eb74a4db77184553252803",
          "db0392b338114f208ee135134240312",
          "de5f7396db034fa2bf3140033240312",
          "c64591e716064800992140217240312",
          "9b3204c5201b4b4d8a2140330240312",
        ];
        const defaultApiKey =
          savedApiKey ||
          weatherApiKeys[Math.floor(Math.random() * weatherApiKeys.length)];

        const currentTime = new Date().getTime();

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
        localStorage.setItem("weatherData", JSON.stringify(data));
        localStorage.setItem("lastFetchTime", currentTime.toString());
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchWeatherData();
    const interval = setInterval(fetchWeatherData, 60 * 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  return { weatherData };
};

export default useWeatherData;
