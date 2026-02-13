export const getWeather = ({ latitude, longitude }, apiKey) => {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${apiKey}`,
  ).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Error: ${res.status}`);
    }
  });
};

export const filterWeatherData = (data) => {
  const result = {};
  result.city = data.name;
  result.temp = { F: Math.round(data.main.temp) };
  result.type = getWeatherType(result.temp.F);

  const condition = data.weather[0].main.toLowerCase();

  if (condition === "clouds") {
    result.condition = "cloudy";
  } else if (
    condition === "mist" ||
    condition === "fog" ||
    condition === "smoke" ||
    condition === "haze"
  ) {
    result.condition = "fog";
  } else if (condition === "drizzle") {
    result.condition = "rain";
  } else if (condition === "thunderstorm") {
    result.condition = "storm";
  } else {
    result.condition = condition;
  }

  result.isDay = isDay(data.sys, Date.now());
  return result;
};

const isDay = ({ sunrise, sunset }, now) => {
  return sunrise * 1000 < now && now < sunset * 1000;
};

const getWeatherType = (temperature) => {
  if (temperature > 86) {
    return "hot";
  } else if (temperature >= 66) {
    return "warm";
  } else {
    return "cold";
  }
};
