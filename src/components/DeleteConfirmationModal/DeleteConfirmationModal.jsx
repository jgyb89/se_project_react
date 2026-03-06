import "./DeleteConfirmationModal.css";
import { useModalClose } from "../../hooks/useModalClose";

function DeleteConfirmationModal({
  activeModal,
  onClose,
  onConfirm,
  isLoading,
}) {
  const isOpen = activeModal === "confirm-delete";
  useModalClose(isOpen, onClose);

  return (
    <div className={`modal ${isOpen ? "modal_opened" : ""}`}>
      <div className="modal__content modal__content_type_confirm">
        <button
          onClick={onClose}
          type="button"
          className="modal__close"
        ></button>
        <div className="modal__confirm-content">
          <p className="modal__confirm-text">
            Are you sure you want to delete this item? <br />
            This action is irreversible.
          </p>
          <button className="modal__confirm-btn_delete" onClick={onConfirm}>
            {isLoading ? "Deleting..." : "Yes, delete item"}
          </button>
          <button className="modal__confirm-btn_cancel" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteConfirmationModal;
