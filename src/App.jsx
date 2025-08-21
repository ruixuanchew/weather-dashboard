import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import "./App.css";
import bgImage from "./assets/lake-forest.jpg";
import { setWeather } from "./hooks/setWeather";

import WeatherCard from "./cards/WeatherCard";
import Forecast5DayCard from "./cards/Forecast5DayCard";
import AirPollutionCard from "./cards/AirPollutionCard";
import UVIndexCard from "./cards/UVIndexCard";

function App() {
  const [useDummy, setUseDummy] = useState(false);
  const [city, setCity] = useState("");
  const [currentCard, setCurrentCard] = useState(0);

  const { weather, forecast, pollution, uv, loadWeather } = setWeather();

  useEffect(() => {
  if (useDummy) {
    loadWeather(null, true); // load dummy data
    } else {
      loadWeather(null, false);
    }
  }, [useDummy]);

  const cards = [
    <WeatherCard key="weather" weather={weather} />,
    <Forecast5DayCard key="forecast5day" forecast={forecast} />,
    <AirPollutionCard key="pollution" pollution={pollution} />,
    <UVIndexCard key="uv" uv={uv} />
  ];

  const cardTitles = [
    "Current Forecast",
    "5-Day Forecast",
    "Air Quality",
    "UV Index"
  ];

  return (
    <div>
      <Navbar />
      <section
        className="background-section"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <h1 id="heading-text">Welcome to My Weather Dashboard</h1>
        <hr className="heading-divider" />
        <div className="search-container">
          <input
            type="text"
            placeholder="Enter city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            id="weather-search"
            disabled={useDummy}
          />
          <button onClick={() => loadWeather(city, useDummy)} disabled={useDummy}>Get Weather</button>
        </div>
        <div className="toggle-container">
          <label className="dummy-checkbox-label">
            <input
              type="checkbox"
              className="dummy-checkbox"
              checked={useDummy}
              onChange={(e) => setUseDummy(e.target.checked)}
            />
            Use Dummy Data</label>
        </div>
      </section>

      <div className="app-container">
        <div className="forecast-section">
          <h1 className="section-title">{cardTitles[currentCard]}</h1>

          <div className="carousel-container">
            <button
              className="carousel-btn left"
              onClick={() =>
                setCurrentCard(currentCard === 0 ? cards.length - 1 : currentCard - 1)
              }
            >
              &#8592;
            </button>

            <div className="carousel-card">{cards[currentCard]}</div>

            <button
              className="carousel-btn right"
              onClick={() =>
                setCurrentCard(currentCard === cards.length - 1 ? 0 : currentCard + 1)
              }
            >
              &#8594;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
