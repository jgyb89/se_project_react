import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useFormAndValidation } from "../../hooks/useFormAndValidation";

const AddItemModal = ({ isOpen, onAddItem, onCloseModal, isLoading }) => {
  const { values, handleChange, errors, isValid, resetForm } =
    useFormAndValidation({
      name: "",
      imageUrl: "",
      weather: "",
    });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      onAddItem(values, () => resetForm());
    }
  };

  return (
    <ModalWithForm
      title="New garment"
      buttonText={isLoading ? "Saving..." : "Add Garment"}
      activeModal={isOpen ? "add-garment" : ""}
      onClose={onCloseModal}
      isOpen={isOpen}
      onSubmit={handleSubmit}
      isValid={isValid}
    >
      <label htmlFor="name" className="modal__label">
        Name{" "}
        <input
          type="text"
          className={`modal__input ${errors.name ? "modal__input_type_error" : ""}`}
          id="name"
          name="name"
          placeholder="Name"
          value={values.name || ""}
          onChange={handleChange}
          required
        />
        <span className="modal__error">{errors.name}</span>
      </label>
      <label htmlFor="imageUrl" className="modal__label">
        Image URL{" "}
        <input
          type="url"
          className={`modal__input ${errors.imageUrl ? "modal__input_type_error" : ""}`}
          id="imageUrl"
          name="imageUrl"
          placeholder="Image URL"
          value={values.imageUrl || ""}
          onChange={handleChange}
          required
        />
        <span className="modal__error">{errors.imageUrl}</span>
      </label>
      <fieldset className="modal__radio-buttons">
        <legend className="modal__legend">Select the weather type</legend>
        <label htmlFor="hot" className="modal__label_type_radio">
          <input
            type="radio"
            className="modal__radio-input"
            id="hot"
            name="weather"
            value="hot"
            checked={values.weather === "hot"}
            onChange={handleChange}
            required
          />
          Hot
        </label>
        <label htmlFor="warm" className="modal__label_type_radio">
          <input
            type="radio"
            className="modal__radio-input"
            id="warm"
            name="weather"
            value="warm"
            checked={values.weather === "warm"}
            onChange={handleChange}
            required
          />
          Warm
        </label>
        <label htmlFor="cold" className="modal__label_type_radio">
          <input
            type="radio"
            className="modal__radio-input"
            id="cold"
            name="weather"
            value="cold"
            checked={values.weather === "cold"}
            onChange={handleChange}
            required
          />
          Cold
        </label>
        <span className="modal__error">{errors.weather}</span>
      </fieldset>
    </ModalWithForm>
  );
};

export default AddItemModal;
