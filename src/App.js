import "./App.css";
import Search from "./components/search/search";
import CurrentWeather from "./components/current-weather/current-weather";
import Forecast from "./components/forecast/forecast";
//import { WEATHER_API_URL, WEATHER_API_KEY } from "./api";
import { useState } from "react";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const weatherurl = process.env.REACT_APP_WEATHER_API_URL;
  const weatherkey = process.env.REACT_APP_WEATHER_API_KEY;

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(
      `${weatherurl}/weather?lat=${lat}&lon=${lon}&appid=${weatherkey}&units=metric`
    );

    const forecastWeatherFetch = fetch(
      `${weatherurl}/forecast?lat=${lat}&lon=${lon}&appid=${weatherkey}&units=metric`
    );
    Promise.all([currentWeatherFetch, forecastWeatherFetch])
      .then(async (responses) => {
        const [weatherResponse, forecastResponse] = await Promise.all(
          responses.map((response) => response.json())
        );

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forecastResponse });
      })
      .catch((err) => console.error("Error fetching weather data:", err));
  };

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
      {currentWeather && <CurrentWeather data={currentWeather} />}
      {forecast && <Forecast data={forecast} />}
    </div>
  );
}

export default App;
