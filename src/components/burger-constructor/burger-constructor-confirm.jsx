import {
  CurrencyIcon,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-constructor.module.css";
import { useEffect, useState } from "react";
import ModalOverlay from "../modal/modal-overlay";
import Modal from "../modal/modal";

function BurgerConstructorConfirm(props) {
  const [modalDetails, setModalDetails] = useState({
    modalType: "orderDetails",
    content: null,
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setModalDetails({
      ...modalDetails,
      content: {
        orderId: 345360,
      },
    });
    // eslint-disable-next-line
  }, [props.orderDetails]);

  const handleClose = (e) => {
    // this handles if escape is pressed
    if (!e) {
      return setIsModalOpen(false);
      // this handles if modal-overlay div or close btn svg is pressed
    } else if (
      e.target.id === "modal-overlay" ||
      e.target.localName === "svg"
    ) {
      return setIsModalOpen(false);
    } else {
      return null;
    }
  };

  const handleOpen = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <div className={`mt-10 ${styles.confirm_container}`}>
        <div className={`mr-10 ${styles.total_box}`}>
          <p className="text text_type_digits-medium">610</p>
          <CurrencyIcon type="primary" className={styles.icon} />
        </div>
        <Button
          htmlType="button"
          type="primary"
          size="large"
          onClick={handleOpen}
        >
          Оформить заказ
        </Button>
      </div>
      {isModalOpen && (
        <ModalOverlay handleClose={handleClose}>
          <Modal
            handleClose={handleClose}
            modalDetails={modalDetails}
            isModalOpen={isModalOpen}
          />
        </ModalOverlay>
      )}
    </>
  );
}

export default BurgerConstructorConfirm;
