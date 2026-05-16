import React, { useContext, useEffect } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useFormAndValidation } from "../../hooks/useFormAndValidation";
import CurrentUserContext from "../../contexts/CurrentUserContext";

const EditProfileModal = ({ isOpen, onUpdateUser, onCloseModal, isLoading }) => {
  const { currentUser } = useContext(CurrentUserContext);
  const { values, handleChange, errors, isValid, resetForm } = useFormAndValidation({
    name: "",
    avatar: "",
  });

  useEffect(() => {
    if (isOpen && currentUser) {
      resetForm({
        name: currentUser.name || "",
        avatar: currentUser.avatar || "",
      }, {}, true);
    }
  }, [isOpen, currentUser, resetForm]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      onUpdateUser(values);
    }
  };

  return (
    <ModalWithForm
      title="Change profile data"
      buttonText={isLoading ? "Saving..." : "Save changes"}
      onClose={onCloseModal}
      isOpen={isOpen}
      onSubmit={handleSubmit}
      name="edit-profile"
      isValid={isValid}
    >
      <label className="modal__label">
        Name*
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
        Avatar URL*
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
    </ModalWithForm>
  );
};

export default EditProfileModal;
