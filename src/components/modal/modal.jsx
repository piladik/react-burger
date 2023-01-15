import { useEffect } from "react";
import PropTypes from "prop-types";

// Styles
import styles from "./modal.module.css";

// Components
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { createPortal } from "react-dom";

// Utils

function Modal({ handleClose, modalDetails, children }) {
  useEffect(() => {
    const closeOnEscape = (e) => (e.key === "Escape" ? handleClose() : null);
    document.body.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.removeEventListener("keydown", closeOnEscape);
    };
  }, [handleClose]);
  return createPortal(
    <>
      <ModalOverlay handleClose={handleClose} />
      <div className={styles.modal_container}>
        <div className={styles.modal_box}>
          <div className={`mr-10 ml-10 mt-10 ${styles.modal_header}`}>
            {modalDetails.header && (
              <h1 className="text text_type_main-large">
                {modalDetails.header}
              </h1>
            )}
            <p
              onClick={handleClose}
              id="close-btn"
              className={styles.close_btn}
            >
              <CloseIcon />
            </p>
          </div>
          {children}
        </div>
      </div>
    </>,
    document.getElementById("modals")
  );
}

function ModalOverlay({ handleClose }) {
  return (
    <div
      className={styles.modal_overlay}
      onClick={handleClose}
      id="modal-overlay"
    ></div>
  );
}

Modal.propTypes = {
  handleClose: PropTypes.func.isRequired,
  modalDetails: PropTypes.shape({
    header: PropTypes.string,
    content: PropTypes.any,
  }).isRequired,
  children: PropTypes.element.isRequired,
};

ModalOverlay.propTypes = {
  handleClose: PropTypes.func.isRequired,
};

export default Modal;
