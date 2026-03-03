import { useContext } from "react";
import "./WeatherCard.css";
import { weatherOptions } from "../../utils/constants";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";

export const WeatherCard = ({ weatherData }) => {
  // Import context to get the value [cite: 55]
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);

  const filteredOptions = weatherOptions.filter((option) => {
    return (
      option.day === weatherData.isDay &&
      option.condition === weatherData.condition
    );
  });

  const weatherOption = filteredOptions[0];

  return (
    <div
      className="weather-card"
      style={
        weatherOption ? { backgroundImage: `url(${weatherOption.url})` } : {}
      }
    >
      <div>
        {/* Display the value using bracket notation [cite: 58, 59] */}
        <p className="weather-card__temp">
          {weatherData.temp[currentTemperatureUnit]}&deg;{" "}
          {currentTemperatureUnit}
        </p>
      </div>
    </div>
  );
};

export default WeatherCard;
