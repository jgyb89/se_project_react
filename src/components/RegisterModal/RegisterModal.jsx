import "./RegisterModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useFormAndValidation } from "../../hooks/useFormAndValidation";

const RegisterModal = ({
  isOpen,
  onRegister,
  onCloseModal,
  handleLoginClick,
  isLoading,
}) => {
  const { values, handleChange, errors, isValid } = useFormAndValidation({
    email: "",
    password: "",
    name: "",
    avatar: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      onRegister(values);
    }
  };

  return (
    <ModalWithForm
      title="Sign Up"
      buttonText={isLoading ? "Registering..." : "Next"}
      activeModal={isOpen ? "register" : ""}
      onClose={onCloseModal}
      isOpen={isOpen}
      onSubmit={handleSubmit}
      name="register"
      isValid={isValid}
    >
      <label className="modal__label">
        Email*
        <input
          type="email"
          name="email"
          placeholder="Email"
          className={`modal__input ${errors.email ? "modal__input_type_error" : ""}`}
          value={values.email || ""}
          onChange={handleChange}
          required
        />
        <span className="modal__error">{errors.email}</span>
      </label>
      <label className="modal__label">
        Password*
        <input
          type="password"
          name="password"
          placeholder="Password"
          className={`modal__input ${errors.password ? "modal__input_type_error" : ""}`}
          value={values.password || ""}
          onChange={handleChange}
          required
        />
        <span className="modal__error">{errors.password}</span>
      </label>
      <label className="modal__label">
        Name
        <input
          type="text"
          name="name"
          placeholder="Name"
          className={`modal__input ${errors.name ? "modal__input_type_error" : ""}`}
          value={values.name || ""}
          onChange={handleChange}
          required
        />
        <span className="modal__error">{errors.name}</span>
      </label>
      <label className="modal__label">
        Avatar URL
        <input
          type="url"
          name="avatar"
          placeholder="Avatar URL"
          className={`modal__input ${errors.avatar ? "modal__input_type_error" : ""}`}
          value={values.avatar || ""}
          onChange={handleChange}
          required
        />
        <span className="modal__error">{errors.avatar}</span>
      </label>
      <button
        type="button"
        className="modal__secondary-btn"
        onClick={handleLoginClick}
      >
        or Log In
      </button>
    </ModalWithForm>
  );
};

export default RegisterModal;
