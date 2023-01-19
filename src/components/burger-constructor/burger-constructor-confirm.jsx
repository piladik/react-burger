import { useState, useEffect } from "react";

// Styles
import styles from "./burger-constructor.module.css";

// Components
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order.details";
import {
  CurrencyIcon,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";

// Utils
import { orderDetailsPropTypes } from "../../utils/prop-types";
import { getIngredientsId } from "../../utils/helpers";
import { postOrder } from "../../utils/burger-api";

function BurgerConstructorConfirm({ orderDetails }) {
  const [orderId, setOrderId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClose = () => {
    setIsModalOpen(false);
  };

  const handleOpen = () => {
    setIsModalOpen(true);
  };

  // Делаем запрос к API и получаем id, которое записываем в state orderId
  useEffect(() => {
    const ingredientsId = getIngredientsId(
      orderDetails.bun,
      orderDetails.fillings
    );
    postOrder(ingredientsId).then((res) =>
      setOrderId((currentState) => {
        const newState = { ...currentState, id: res.order.number };
        return newState;
      })
    );
  }, [orderDetails.bun, orderDetails.fillings]);

  return (
    <>
      <div className={`mt-10 ${styles.confirm_container}`}>
        <div className={`mr-10 ${styles.total_box}`}>
          <p className="text text_type_digits-medium">{orderDetails.total}</p>
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
        <Modal handleClose={handleClose}>
          <OrderDetails orderId={orderId} />
        </Modal>
      )}
    </>
  );
}

BurgerConstructorConfirm.propTypes = {
  orderDetails: orderDetailsPropTypes.isRequired,
};

export default BurgerConstructorConfirm;
