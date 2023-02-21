import PropTypes from "prop-types";

// Styles
import styles from "./modal.module.css";

function ModalOverlay({ handleModalClose }) {
  return (
    <div
      className={styles.modal_overlay}
      onClick={handleModalClose}
      id="modal-overlay"
    ></div>
  );
}

ModalOverlay.propTypes = {
  handleModalClose: PropTypes.func.isRequired,
};

export default ModalOverlay;
