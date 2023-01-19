import { useContext, useReducer, useEffect } from "react";

// Styles
import styles from "./burger-constructor.module.css";

// Components
import {
  DragIcon,
  ConstructorElement,
} from "@ya.praktikum/react-developer-burger-ui-components";
import BurgerConstructorConfirm from "./burger-constructor-confirm";

// Utils
import { IngredientsContext } from "../../utils/ingredients-context";
import { countTotal } from "../../utils/helpers";

function reducer(state, action) {
  switch (action.type) {
    case "add":
      return 0;
    case "delete":
      return 0;
    case "total":
      return { ...state, total: countTotal(state) };
    case "clear":
      return { bun: [], fillings: [], total: 0 };
    default:
      new Error(`Wrong type of action ${action.type}`);
  }
}

function BurgerConstructor() {
  const orderInitialState = { bun: [], fillings: [], total: 0 };
  const { ingredients } = useContext(IngredientsContext);
  orderInitialState["bun"] = ingredients.data.find((el) => el.type === "bun");
  orderInitialState["fillings"] = ingredients.data.filter(
    (el) => el.type !== "bun"
  );

  const [orderState, orderDetailsDispatcher] = useReducer(
    reducer,
    orderInitialState,
    undefined
  );

  useEffect(() => {
    orderDetailsDispatcher({ type: "total" });
  }, [orderDetailsDispatcher]);

  return (
    <section className={`mt-25 ${styles.constructor_section}`}>
      <div className={styles.constructor_container}>
        <div
          className={`${styles.constructor_item} ${styles.constructor_item_bun}`}
        >
          <ConstructorElement
            type="top"
            isLocked={true}
            text={`${orderState.bun.name} (верх)`}
            price={orderState.bun.price}
            thumbnail={orderState.bun.image}
          />
        </div>
        <div className={styles.scrollable_box}>
          {orderState.fillings.map((el) => (
            <div className={styles.constructor_item} key={el["_id"]}>
              <DragIcon type="primary" />
              <ConstructorElement
                text={el.name}
                price={el.price}
                thumbnail={el.image}
              />
            </div>
          ))}
        </div>
        <div
          className={`${styles.constructor_item} ${styles.constructor_item_bun}`}
        >
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text={`${orderState.bun.name} (низ)`}
            price={orderState.bun.price}
            thumbnail={orderState.bun.image}
          />
        </div>
      </div>
      <BurgerConstructorConfirm orderDetails={orderState} />
    </section>
  );
}

export default BurgerConstructor;
