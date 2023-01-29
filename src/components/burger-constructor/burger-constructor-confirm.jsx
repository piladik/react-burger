import { useState, useMemo, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
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

// Utils
import { getIngredientsId, countTotal } from "../../utils/helpers";

// ACTIONS-REDUCERS
import { setOrderId } from "../../services/actions/order";

function BurgerConstructorConfirm({ isEmptyBun }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { ingredients } = useSelector((store) => store.constructorBurger);
  const memoizedTotal = useMemo(() => countTotal(ingredients), [ingredients]);
  const dispatch = useDispatch();

  // Сюда сохраняем старый список айди ингредиентов, чтобы сравнивать при нажатии на кнопку "Оформить заказ"
  // Если список не изменился, то новый запрос не делается
  const prevIngredientsId = useRef(null);

  // Получаем id всех ингредиентов, находящихся в конструкторе
  const ingredientsId = useMemo(
    () => getIngredientsId(ingredients.bun, ingredients.fillings),
    [ingredients.bun, ingredients.fillings]
  );

  const makeOrder = () => {
    if (!isEmptyBun && prevIngredientsId.current !== ingredientsId) {
      // Если есть булка и список ингредиентов обновился,
      // то делаем запрос к api, получаем orderId и записываем его в глобальное состояние store.order.orderId
      dispatch(setOrderId(ingredientsId));
    }
    prevIngredientsId.current = ingredientsId;
  };

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
          <p className="text text_type_digits-medium">{memoizedTotal}</p>
          <CurrencyIcon type="primary" className={styles.icon} />
        </div>
        <Button
          htmlType="button"
          type="primary"
          size="large"
          onClick={() => {
            makeOrder();
            handleOpen();
          }}
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
