import "./WeatherCard.css";
import { weatherOptions } from "../../utils/constants";

export const WeatherCard = ({ weatherData }) => {
  const filteredOptions = weatherOptions.filter((option) => {
    return (
      option.day === weatherData.isDay &&
      option.condition === weatherData.condition
    );
  });

  // 1. Grab the first matching option (if it exists)
  const weatherOption = filteredOptions[0];

  return (
    <div
      className="weather-card"
      style={
        weatherOption ? { backgroundImage: `url(${weatherOption.url})` } : {}
      }
    >
      {/* 2. Apply the dynamic background image here */}
      <div>
        <p className="weather-card__temp">{weatherData.temp.F} &deg; F</p>
      </div>
    </div>
  );
};

export default WeatherCard;
