import { useContext } from "react";
import "./WeatherCard.css";
import { weatherOptions } from "../../utils/constants";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";

export const WeatherCard = ({ weatherData }) => {
  // Import context to get the value
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
        <p className="weather-card__temp">
          {weatherData.temp[currentTemperatureUnit]}&deg;{" "}
          {currentTemperatureUnit}
        </p>
      </div>
    </div>
  );
};

export default WeatherCard;
