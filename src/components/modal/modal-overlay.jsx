import ReactPortal from "../portal/react-portal";
import styles from "./modal.module.css";

function ModalOverlay({ children }) {
  return (
    <ReactPortal wrapperId="react-modals">
      <div className={styles.modal_overlay}>{children}</div>
    </ReactPortal>
  );
}

export default ModalOverlay;
