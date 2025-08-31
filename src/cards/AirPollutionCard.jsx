// Air Pollution Card
function AirPollutionCard({ pollution }) {
  // Display message if empty
  if (!pollution || !pollution.list) return <div className="card">Please enter a city above.</div>;
  
  // Define AQI levels corresponding to numeric values (1 to 5)
  const aqiLevels = ["Good", "Fair", "Moderate", "Poor", "Very Poor"];
  const data = pollution.list[0];

  return (
    <div className="card air-pollution-card">
      <h3>Air Quality Index</h3>
      <p><strong>AQI:</strong> {aqiLevels[data.main.aqi - 1]} ({data.main.aqi})</p>
      <div className="forecast-metrics dashboard-metrics">
        <div className="metric"><strong>CO:</strong> {data.components.co} μg/m³</div>
        <div className="metric"><strong>NO₂:</strong> {data.components.no2} μg/m³</div>
        <div className="metric"><strong>O₃:</strong> {data.components.o3} μg/m³</div>
        <div className="metric"><strong>SO₂:</strong> {data.components.so2} μg/m³</div>
        <div className="metric"><strong>PM2.5:</strong> {data.components.pm2_5} μg/m³</div>
        <div className="metric"><strong>PM10:</strong> {data.components.pm10} μg/m³</div>
        <div className="metric"><strong>NH₃:</strong> {data.components.nh3} μg/m³</div>
      </div>
    </div>
  );
}

export default AirPollutionCard;