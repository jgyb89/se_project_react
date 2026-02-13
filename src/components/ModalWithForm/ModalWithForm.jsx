import "./ModalWithForm.css";

function ModalWithForm({ children, buttonText, title, isOpen, onClose, name }) {
  return (
    <div className={`modal modal_type_${name} ${isOpen ? "modal_opened" : ""}`}>
      <div className="modal__content">
        <div className="modal__header">
          <h2 className="modal__title">{title}</h2>
          <button
            onClick={onClose}
            type="button"
            className="modal__close"
          ></button>
        </div>
        <form className="modal__form" name={name}>
          {children}
          <button className="modal__submit" type="submit">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
