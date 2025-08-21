function Forecast5DayCard({ forecast }) {
  if (!forecast || !forecast.list) return <div className="card">Please enter a city above.</div>;

  const days = {};
  forecast.list.forEach((item) => {
    const date = item.dt_txt.split(" ")[0];
    if (!days[date]) days[date] = [];
    days[date].push(item);
  });

  const dailyForecasts = Object.keys(days).map((date) => {
    const dayData = days[date];
    const temps = dayData.map(d => d.main.temp);
    const minTemp = Math.min(...temps).toFixed(1);
    const maxTemp = Math.max(...temps).toFixed(1);
    const weatherIcon = dayData[0].weather[0].icon;
    const description = dayData[0].weather[0].description;

    return { date, minTemp, maxTemp, weatherIcon, description };
  });

  return (
    <div className="card forecast-5day-card">
      <h3>5-Day Forecast</h3><br/>
      <div className="forecast-5day-container">
        {dailyForecasts.map((day) => (
          <div key={day.date} className="forecast-day">
            <p>{new Date(day.date).toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric' })}</p>
            <img
              src={`https://openweathermap.org/img/wn/${day.weatherIcon}@2x.png`}
              alt={day.description}
            />
            <p>{day.description}</p>
            <p>{day.minTemp}°C / {day.maxTemp}°C</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Forecast5DayCard;