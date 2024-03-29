import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../../services/hooks/hooks";

// Styles
import styles from "./modal.module.css";

// Components
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import ModalOverlay from "./modal-overlay";

// Utils

function Modal({
  handleModalClose,
  header,
  showId = false,
  isProfileOrder,
  children,
}: {
  handleModalClose: () => void;
  header?: string;
  showId: boolean;
  isProfileOrder: boolean;
  children: React.ReactNode;
}) {
  const { id } = useParams();
  const orderNumber = useAppSelector(
    !isProfileOrder
      ? (store) => store.wsFeed.orders.find((el) => el._id === id)
      : (store) => store.wsProfile.orders.find((el) => el._id === id)
  )?.number;
  useEffect(() => {
    const closeOnEscape = (e: KeyboardEvent | React.KeyboardEvent) =>
      e.key === "Escape" ? handleModalClose() : null;
    document.body.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.removeEventListener("keydown", closeOnEscape);
    };
  }, [handleModalClose]);
  return createPortal(
    <>
      <ModalOverlay handleModalClose={handleModalClose} />
      <div className={styles.modal_container}>
        <div className={styles.modal_box}>
          <div
            className={`mr-10 ml-10 mt-10 ${styles.modal_header}`}
            data-test="modal-header"
          >
            {header && <h1 className="text text_type_main-large">{header}</h1>}
            {showId && (
              <h1 className="text text_type_digits-default">#{orderNumber}</h1>
            )}
            <p
              onClick={handleModalClose}
              id="close-btn"
              className={styles.close_btn}
            >
              <CloseIcon type="primary" />
            </p>
          </div>
          {children}
        </div>
      </div>
    </>,
    document.getElementById("modals") as HTMLElement
  );
}

export default Modal;
