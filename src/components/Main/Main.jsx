import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import "./Main.css";

function Main({ weatherData, handleCardClick, clothingItems }) {
  return (
    <main>
      <WeatherCard weatherData={weatherData} />
      <section className="cards">
        <p className="cards__text">
          Today is {weatherData.temp.F} / You may want to wear:
        </p>
        <ul className="cards__list">
          {clothingItems
            .filter((item) => {
              return item.weather === weatherData.type;
            })
            .map((item) => {
              return (
                <li key={item._id} className="cards__item">
                  <ItemCard item={item} onCardClick={handleCardClick} />
                </li>
              );
            })}
        </ul>
      </section>
    </main>
  );
}

export default Main;
