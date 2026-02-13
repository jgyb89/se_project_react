import "./ItemCard.css";

function ItemCard({ item, onCardClick }) {
  const handleCardClick = () => {
    onCardClick(item);
  };

  return (
    <div className="card">
      <img
        onClick={handleCardClick}
        className="card__img"
        src={item.link}
        alt={item.name}
      />
      <h2 className="card__title">{item.name}</h2>
    </div>
  );
}

export default ItemCard;
