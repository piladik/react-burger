import { useState } from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

// Styles
import styles from "./burger-constructor.module.css";

// Components
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order.details";
import {
  CurrencyIcon,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";

function BurgerConstructorConfirm({ isEmptyBun }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { total } = useSelector((store) => store.constructorBurger);

  const handleClose = () => {
    setIsModalOpen(false);
  };

  const handleOpen = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <div className={`mt-10 ${styles.confirm_container}`}>
        <div className={`mr-10 ${styles.total_box}`}>
          <p className="text text_type_digits-medium">{total}</p>
          <CurrencyIcon type="primary" className={styles.icon} />
        </div>
        <Button
          htmlType="button"
          type="primary"
          size="large"
          onClick={handleOpen}
          disabled={isEmptyBun ? true : false}
        >
          Оформить заказ
        </Button>
      </div>
      {isModalOpen && (
        <Modal handleClose={handleClose}>
          <OrderDetails />
        </Modal>
      )}
    </>
  );
}

BurgerConstructorConfirm.propTypes = {
  isEmptyBun: PropTypes.bool.isRequired,
};
export default BurgerConstructorConfirm;
