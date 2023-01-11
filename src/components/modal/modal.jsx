import styles from "./modal.module.css";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import IngredientDetails from "./ingredient-details";
import OrederDetails from "./order-details";
import { useEffect } from "react";

function Modal({ handleClose, modalDetails, isModalOpen }) {
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
    <div className={styles.modal_container}>
      <div className={styles.modal_box}>
        <div className={`mr-10 ml-10 mt-10 ${styles.modal_header}`}>
          {modalDetails.header && (
            <h1 className="text text_type_main-large">{modalDetails.header}</h1>
          )}
          <p onClick={() => handleClose()} className={styles.close_btn}>
            <CloseIcon />
          </p>
        </div>
        {modalDetails.modalType === "ingredientDetail" ? (
          <IngredientDetails modalDetails={modalDetails} />
        ) : (
          <OrederDetails modalDetails={modalDetails} />
        )}
      </div>
    </div>
  );
}

export default Modal;
