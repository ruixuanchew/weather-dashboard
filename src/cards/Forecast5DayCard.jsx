function Forecast5DayCard({ forecast }) {
  // Display message if empty
  if (!forecast || !forecast.list) return <div className="card">Please enter a city above.</div>;

  const days = {};

  // Iterate through each forecast entry
  forecast.list.forEach((item) => {
    // Extract date portion of the datetime string
    const date = item.dt_txt.split(" ")[0];
    if (!days[date]) days[date] = [];

    // Push the forecast item into the correct date group
    days[date].push(item);
  });

  // Convert the grouped data into an array with summarized info for each day
  const dailyForecasts = Object.keys(days).map((date) => {
    const dayData = days[date];

    // Extract temperatures for the day
    const temps = dayData.map(d => d.main.temp);

    // Determine min and max temperatures for the day
    const minTemp = Math.min(...temps).toFixed(1);
    const maxTemp = Math.max(...temps).toFixed(1);

    // Get matching weather icon from API based on weather description (e.g. Sunny)
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