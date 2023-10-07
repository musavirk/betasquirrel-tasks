import "./App.css";
import CurrentWeather from "./components/CurrentWeather";
import DailyForecast from "./components/DailyForecast";
import HourlyForecast from "./components/HourlyForecast";
import SearchBar from "./components/Search";
import axios from "axios";
import { useState, useEffect } from "react";
import TemperatureConverter from "./components/TemperatureConverter";

const API_KEY = "f06cefb176c9dcfdd72eed3f30449200";
function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [hourlyData, setHourlyData] = useState(null);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [dailyData, setDailyData] = useState([]);

  const getWeatherData = async (city) => {
    try {
      // Fetch current weather data
      const currentWeatherResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );

      // Fetch full hourly forecast data
      const hourlyForecastResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
      );

      // Fetch daily forecast data
      // const dailyForecastResponse = await axios.get(
      //   `https://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&appid=${API_KEY}&units=metric&cnt=7`
      // );
      setWeatherData(currentWeatherResponse.data);

      //  next 5 hours based on the current time
      // const next5Hours = hourlyForecastResponse.data.list.slice(0, 5);
      // setHourlyData(next5Hours);
      setHourlyData(hourlyForecastResponse.data.list);

      // setDailyData(dailyForecastResponse.data.list);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  useEffect(() => {
    getWeatherData("New York"); // Default city

    // Update current time every minute
    // const timer = setInterval(() => {
    //   setCurrentTime(new Date());
    // }, 60000);

    // return () => {
    //   clearInterval(timer);
    // };
  }, []);

  return (
    <div className="App">
      <SearchBar onSearch={getWeatherData} />

      <CurrentWeather weatherData={weatherData} />
      <HourlyForecast hourlyData={hourlyData} />
      {/* <DailyForecast dailyData={dailyData} /> */}
    </div>
  );
}

export default App;
