import "./WeatherCard.css";

export const WeatherCard = ({ weatherData }) => {
  return (
    <div className="weather-card">
      <p className="weather-card__temp">{weatherData.temp.F} &deg; F</p>
    </div>
  );
};

export default WeatherCard;
