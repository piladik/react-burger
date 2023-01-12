import PropTypes from "prop-types";

// Styles
import styles from "./modal.module.css";

// Components
import ReactPortal from "../portal/react-portal";

function ModalOverlay({ children, handleClose }) {
  return (
    <ReactPortal wrapperId="react-modals">
      <div
        className={styles.modal_overlay}
        onClick={handleClose}
        id="modal-overlay"
      >
        {children}
      </div>
    </ReactPortal>
  );
}

ModalOverlay.propTypes = {
  handleClose: PropTypes.func.isRequired,
};

export default ModalOverlay;
