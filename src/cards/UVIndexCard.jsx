function UVIndexCard({ uv }) {
  // Display message if empty
  if (!uv || !uv.value) return <div className="card">Please enter a city above.</div>;

  const uvValue = uv.value;
  let uvCategory = "";
  
  // Determine the UV index category based on the value
  if (uvValue < 3) uvCategory = "Low";
  else if (uvValue < 6) uvCategory = "Moderate";
  else if (uvValue < 8) uvCategory = "High";
  else if (uvValue < 11) uvCategory = "Very High";
  else uvCategory = "Extreme";

  return (
    <div className="card uv-index-card">
      <h3>UV Index</h3>
      <p><strong>Value:</strong> {uvValue.toFixed(1)} ({uvCategory})</p>
      <p><strong>Date:</strong> {new Date(uv.date * 1000).toLocaleDateString()}</p>
    </div>
  );
}

export default UVIndexCard;
