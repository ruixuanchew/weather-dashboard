function WeatherCard({ weather }) {
  if (!weather) return <div className="card">Please enter a city above.</div>;

  return (
    <div className="card current-forecast-card dashboard-card">
      <div className="forecast-header">
        <div className="main-info">
          <h2>{weather.name}</h2>
          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
            alt={weather.weather[0].description}
          />
          <h1>{weather.main.temp}°C</h1>
          <p className="description">{weather.weather[0].description}</p>
          <p>Feels like: {weather.main.feels_like}°C</p>
        </div>
      </div>

      <div className="forecast-metrics dashboard-metrics">
        <div className="metric">
          <strong>Humidity:</strong> {weather.main.humidity}%
        </div>
        <div className="metric">
          <strong>Wind:</strong> {weather.wind.speed} km/h
        </div>
        <div className="metric">
          <strong>Clouds:</strong> {weather.clouds.all}%
        </div>
        <div className="metric">
          <strong>Visibility:</strong> {weather.visibility / 1000} km
        </div>
        <div className="metric">
          <strong>Sunrise:</strong> {new Date(weather.sys.sunrise * 1000).toLocaleTimeString()}
        </div>
        <div className="metric">
          <strong>Sunset:</strong> {new Date(weather.sys.sunset * 1000).toLocaleTimeString()}
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;