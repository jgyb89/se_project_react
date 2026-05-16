import "./LoginModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useFormAndValidation } from "../../hooks/useFormAndValidation";

const LoginModal = ({
  isOpen,
  onLogin,
  onCloseModal,
  handleRegisterClick,
  isLoading,
}) => {
  const { values, handleChange, errors, isValid } = useFormAndValidation({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      onLogin(values);
    }
  };

  return (
    <ModalWithForm
      title="Log In"
      buttonText={isLoading ? "Logging in..." : "Log In"}
      onClose={onCloseModal}
      isOpen={isOpen}
      onSubmit={handleSubmit}
      name="login"
      isValid={isValid}
    >
      <label className="modal__label">
        Email
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
        Password
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

      <button
        type="button"
        className="modal__secondary-btn"
        onClick={handleRegisterClick}
      >
        or Register
      </button>
    </ModalWithForm>
  );
};

export default LoginModal;
