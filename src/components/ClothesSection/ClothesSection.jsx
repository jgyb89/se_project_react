import { useContext } from "react";
import ItemCard from "../ItemCard/ItemCard";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import "./ClothesSection.css";

function ClothesSection({
  clothingItems,
  handleCardClick,
  handleAddClick,
  onCardLike,
}) {
  const { currentUser } = useContext(CurrentUserContext);

  return (
    <div className="clothes-section">
      <div className="clothes-section__header">
        <p className="clothes-section__title">Your items</p>
        <button className="clothes-section__add-btn" onClick={handleAddClick}>
          + Add new
        </button>
      </div>
      <ul className="clothes-section__list">
        {clothingItems
          .filter((item) => {
            return item.owner === currentUser?._id;
          })
          .map((item) => {
            return (
              <li key={item._id} className="clothes-section__item">
                <ItemCard
                  item={item}
                  onCardClick={handleCardClick}
                  onCardLike={onCardLike}
                />
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default ClothesSection;
