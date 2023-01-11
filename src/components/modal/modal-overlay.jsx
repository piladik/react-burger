import ReactPortal from "../portal/react-portal";
import styles from "./modal.module.css";

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

export default ModalOverlay;
