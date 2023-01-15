import { useEffect, useState } from "react";
import PropTypes from "prop-types";
// import PropTypes from "prop-types";

// Styles
import styles from "./burger-constructor.module.css";

// Components
import Modal from "../modal/modal";
import OrderDetails from "../modal/order-details";
import {
  CurrencyIcon,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";

function BurgerConstructorConfirm({ orderId }) {
  const [modalDetails, setModalDetails] = useState({
    content: null,
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setModalDetails({
      ...modalDetails,
      content: {
        orderId: orderId,
      },
    });
    // eslint-disable-next-line
  }, [orderId]);

  const handleClose = () => {
    setIsModalOpen(false);
  };

  const handleOpen = () => {
    setIsModalOpen(true);
  };

  const { content } = modalDetails;

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
        <Modal
          handleClose={handleClose}
          modalDetails={modalDetails}
          isModalOpen={isModalOpen}
        >
          <OrderDetails content={content} />
        </Modal>
      )}
    </>
  );
}

BurgerConstructorConfirm.propTypes = {
  orderId: PropTypes.number.isRequired,
};

export default BurgerConstructorConfirm;
