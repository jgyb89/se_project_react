import "./ItemModal.css";
import { useModalClose } from "../../hooks/useModalClose";

function ItemModal({ activeModal, card, onClose, onDeleteClick }) {
  const isOpen = activeModal === "preview";
  useModalClose(isOpen, onClose);

  return (
    <div className={`modal ${isOpen ? "modal_opened" : ""}`}>
      <div className="modal__content modal__content_type_image">
        <button
          onClick={onClose}
          type="button"
          className="modal__close"
        ></button>
        <img className="modal__image" src={card.imageUrl} alt={card.name} />
        <div className="modal__caption">
          <div>
            <h2 className="modal__caption-title">{card.name}</h2>
            <p className="modal__weather">Weather: {card.weather}</p>
          </div>
          <button className="modal__delete-btn" onClick={onDeleteClick}>
            Delete item
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
