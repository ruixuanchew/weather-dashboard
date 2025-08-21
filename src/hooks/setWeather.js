import { useState } from "react";
import {
  fetchCurrentWeather,
  fetchForecast,
  fetchAirPollution,
  fetchUVIndex
} from "../services/weatherService";
import { dummyWeather, dummyForecast, dummyPollution, dummyUv } from "../data/dummydata";

export function setWeather() {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [pollution, setPollution] = useState(null);
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
