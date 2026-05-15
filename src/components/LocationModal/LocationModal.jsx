import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useFormAndValidation } from "../../hooks/useFormAndValidation";

const LocationModal = ({
  isOpen,
  onLocationChange,
  onCloseModal,
  isLoading,
}) => {
  const { values, handleChange, errors, isValid, resetForm } =
    useFormAndValidation({
      city: "",
    });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      onLocationChange(values.city, () => resetForm());
    }
  };

  return (
    <ModalWithForm
      title="Change location"
      buttonText={isLoading ? "Saving..." : "Change Location"}
      name="change-location"
      onClose={onCloseModal}
      isOpen={isOpen}
      onSubmit={handleSubmit}
      isValid={isValid}
    >
      <label htmlFor="city" className="modal__label">
        City{" "}
        <input
          type="text"
          className={`modal__input ${errors.city ? "modal__input_type_error" : ""}`}
          id="city"
          name="city"
          placeholder="City"
          value={values.city || ""}
          onChange={handleChange}
          required
        />
        <span className="modal__error">{errors.city}</span>
      </label>
    </ModalWithForm>
  );
};

export default LocationModal;
