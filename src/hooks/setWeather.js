import { useState } from "react";
import {
  fetchCurrentWeather,
  fetchForecast,
  fetchAirPollution,
  fetchUVIndex
} from "../services/weatherService";
import { dummyWeather, dummyForecast, dummyPollution, dummyUv } from "../data/dummydata";

export function setWeather() {
  // State for current weather data
  const [weather, setWeather] = useState(null);

  // State for 5-day forecast data
  const [forecast, setForecast] = useState(null);

  // State for air pollution data
  const [pollution, setPollution] = useState(null);
  
  // State for UV index data
  const [uv, setUv] = useState(null);

  async function loadWeather(city, useDummy = false) {
    if (useDummy) {
    // Use dummy data instead of calling APIs
    setWeather(dummyWeather);
    setForecast(dummyForecast);
    setPollution(dummyPollution);
    setUv(dummyUv);
    return;
  }
  
  // If no city is provided, clear all state
  if (!city) {
    setWeather(null);
    setForecast(null);
    setPollution(null);
    setUv(null);
    return;
  }
    const data = await fetchCurrentWeather(city);
    setWeather(data);

    const forecastData = await fetchForecast(city);
    setForecast(forecastData);

    if (data.coord) {
      setPollution(await fetchAirPollution(data.coord.lat, data.coord.lon));
      setUv(await fetchUVIndex(data.coord.lat, data.coord.lon));
    }
  }

  return { weather, forecast, pollution, uv, loadWeather };
}
