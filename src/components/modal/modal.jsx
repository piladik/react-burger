import { useEffect } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";

// Styles
import styles from "./modal.module.css";

// Components
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import ModalOverlay from "./modal-overlay";

// Utils

function Modal({ handleClose, header, children }) {
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
            {header && <h1 className="text text_type_main-large">{header}</h1>}
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

Modal.propTypes = {
  handleClose: PropTypes.func.isRequired,
  header: PropTypes.string,
  children: PropTypes.element.isRequired,
};

export default Modal;
