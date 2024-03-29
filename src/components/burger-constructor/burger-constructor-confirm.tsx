import { useState, useMemo, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../../services/hooks/hooks";
import { useNavigate, useLocation } from "react-router-dom";

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
import { setOrderId } from "../../services/slices/order";

function BurgerConstructorConfirm({
  isEmptyBun,
}: {
  isEmptyBun: boolean;
}): JSX.Element {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { ingredients } = useAppSelector((store) => store.constructorBurger);
  const { isLoggedIn } = useAppSelector((store) => store.auth);
  const memoizedTotal = useMemo(() => countTotal(ingredients), [ingredients]);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  // Сюда сохраняем старый список айди ингредиентов, чтобы сравнивать при нажатии на кнопку "Оформить заказ"
  // Если список не изменился, то новый запрос не делается
  const prevIngredientsId = useRef<string[] | null>(null);

  // Получаем id всех ингредиентов, находящихся в конструкторе
  const ingredientsId = useMemo(
    () => getIngredientsId(ingredients.bun, ingredients.fillings),
    [ingredients.bun, ingredients.fillings]
  );

  const makeOrder = () => {
    if (
      !isEmptyBun &&
      prevIngredientsId.current !== ingredientsId &&
      isLoggedIn
    ) {
      // Если есть булка и список ингредиентов обновился,
      // то делаем запрос к api, получаем orderId и записываем его в глобальное состояние store.order.orderId
      dispatch(setOrderId(ingredientsId));
    } else if (!isLoggedIn) {
      navigate("/login", { state: { from: location } });
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
      <div
        className={`mt-10 ${styles.confirm_container}`}
        data-test="confirm-container"
      >
        <div className={`mr-10 ${styles.total_box}`}>
          <p className="text text_type_digits-medium">{memoizedTotal}</p>
          <CurrencyIcon type="primary" />
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
        <Modal
          handleModalClose={handleClose}
          showId={false}
          isProfileOrder={false}
        >
          <OrderDetails />
        </Modal>
      )}
    </>
  );
}
export default BurgerConstructorConfirm;
