import "./currentweather.css";

function CurrentWeather() {
  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">London</p>
          <p className="weatherdescr">Cloudy</p>
        </div>
        <img alt="weather" className="weather-icon" src="icons/04d.png"></img>
      </div>
      <div className="bottom">
        <p className="temperature">18°C </p>
        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label">Details</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Feels Like:</span>
            <span className="parameter-value">22°C</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Wind</span>
            <span className="parameter-value">3mph</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Humidity</span>
            <span className="parameter-value">10%</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Air Pressure</span>
            <span className="parameter-value"> hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CurrentWeather;
