import PropTypes from "prop-types";

// Styles
import styles from "./modal.module.css";

function ModalOverlay({ handleClose }) {
  return (
    <div
      className={styles.modal_overlay}
      onClick={handleClose}
      id="modal-overlay"
    ></div>
  );
}

ModalOverlay.propTypes = {
  handleClose: PropTypes.func.isRequired,
};

export default ModalOverlay;
