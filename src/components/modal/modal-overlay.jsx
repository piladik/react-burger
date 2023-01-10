import { useEffect } from "react";
import ReactPortal from "../portal/react-portal";
import styles from "./modal.module.css";
import Modal from "./modal";

function ModalOverlay({ isModalOpen, handleClose, modalDetails }) {
  useEffect(() => {
    const closeOnEscape = (e) => (e.key === "Escape" ? handleClose() : null);
    document.body.addEventListener("keydown", closeOnEscape);
    console.log("Eevent listener mounted");
    return () => {
      console.log("Eevent listener unmounted");
      document.body.removeEventListener("keydown", closeOnEscape);
    };
  }, [handleClose]);
  if (!isModalOpen) return null;

  return (
    <ReactPortal wrapperId="react-modals">
      <div className={styles.modal_overlay}>
        <Modal handleClose={handleClose} modalDetails={modalDetails} />
      </div>
    </ReactPortal>
  );
}

export default ModalOverlay;
