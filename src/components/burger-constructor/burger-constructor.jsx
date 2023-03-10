import { useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useDrop } from "react-dnd";

// Styles
import styles from "./burger-constructor.module.css";

// Components
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import BurgerConstructorConfirm from "./burger-constructor-confirm";
import FillingsContainer from "./fillings-container";

// Utils
import { checkBun } from "../../utils/helpers";

// ACTIONS-REDUCERS
import { ADD_FILLING, ADD_BUN } from "../../services/actions/constructor";
import {
  INGREDIENTS_COUNTER_INCREASE,
  CHANGE_BUN,
} from "../../services/actions/ingredients";

function BurgerConstructor() {
  const { ingredients } = useSelector((store) => store.constructorBurger);
  const dispatch = useDispatch();

  const isEmptyBun = useMemo(() => checkBun(ingredients), [ingredients]);

  const [, dropTarget] = useDrop({
    accept: ["bun", "main", "sauce"],
    drop(data) {
      if (data.ingredient.type === "bun") {
        dispatch({
          type: CHANGE_BUN,
          id: data.ingredient._id,
        });
        dispatch({
          type: ADD_BUN,
          ingredient: data.ingredient,
        });
        dispatch({
          type: INGREDIENTS_COUNTER_INCREASE,
          id: data.ingredient._id,
        });
      } else {
        dispatch({
          type: ADD_FILLING,
          ingredient: data.ingredient,
        });
        dispatch({
          type: INGREDIENTS_COUNTER_INCREASE,
          id: data.ingredient._id,
        });
      }
    },
  });

  return (
    <section className={`mt-25 ${styles.constructor_section}`}>
      <div className={styles.constructor_container} ref={dropTarget}>
        {!isEmptyBun ? (
          <div
            className={`${styles.constructor_item} ${styles.constructor_item_bun}`}
          >
            <ConstructorElement
              type="top"
              isLocked={true}
              text={`${ingredients.bun.name} (верх)`}
              price={ingredients.bun.price}
              thumbnail={ingredients.bun.image}
            />
          </div>
        ) : (
          <div className={`${styles.constructor_empty_item} ${styles.bun_top}`}>
            Выберите булку
          </div>
        )}
        <FillingsContainer />
        {!isEmptyBun ? (
          <div
            className={`${styles.constructor_item} ${styles.constructor_item_bun}`}
          >
            <ConstructorElement
              type="bottom"
              isLocked={true}
              text={`${ingredients.bun.name} (низ)`}
              price={ingredients.bun.price}
              thumbnail={ingredients.bun.image}
            />
          </div>
        ) : (
          <>
            <div
              className={`${styles.constructor_empty_item} ${styles.bun_bottom}`}
            >
              Выберите булку
            </div>
          </>
        )}
      </div>
      <BurgerConstructorConfirm isEmptyBun={isEmptyBun} />
    </section>
  );
}

export default BurgerConstructor;
