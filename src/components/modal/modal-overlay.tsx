// Styles
import styles from "./modal.module.css";

function ModalOverlay({ handleModalClose }: { handleModalClose: () => void }) {
  return (
    <div
      className={styles.modal_overlay}
      onClick={handleModalClose}
      id="modal-overlay"
      data-test="modal-overlay"
    ></div>
  );
}

export default ModalOverlay;
