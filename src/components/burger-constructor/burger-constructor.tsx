import { useMemo } from "react";
import { useAppDispatch, useAppSelector } from "../../services/hooks/hooks";
import { useDrop } from "react-dnd";
import { TIngredient } from "../../utils/types/ingredients-types";
import { nanoid } from "nanoid";

// Styles
import styles from "./burger-constructor.module.css";

// Components
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import BurgerConstructorConfirm from "./burger-constructor-confirm";
import FillingsContainer from "./fillings-container";

// Utils
import { checkBun } from "../../utils/helpers";

// ACTIONS-REDUCERS
import { counterIncrease, changeBun } from "../../services/slices/ingredients";
import { addBun, addFilling } from "../../services/slices/constructor";

function BurgerConstructor(): JSX.Element {
  const { ingredients } = useAppSelector((store) => store.constructorBurger);
  const dispatch = useAppDispatch();

  const isEmptyBun = useMemo(() => checkBun(ingredients), [ingredients]);

  const [, dropTarget] = useDrop({
    accept: ["bun", "main", "sauce"],
    drop({ ingredient }: { ingredient: TIngredient }) {
      if (ingredient.type === "bun") {
        dispatch(changeBun());
        dispatch(addBun(ingredient));
        dispatch(counterIncrease(ingredient._id));
      } else {
        dispatch(addFilling({ ingredient, nanoid: nanoid() }));
        dispatch(counterIncrease(ingredient._id));
      }
    },
  });

  return (
    <section className={`mt-25 ${styles.constructor_section}`}>
      <div
        className={styles.constructor_container}
        ref={dropTarget}
        data-test="drop-area"
      >
        {!isEmptyBun ? (
          <div
            className={`${styles.constructor_item} ${styles.constructor_item_bun}`}
            data-test="top-bun"
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
            data-test="bottom-bun"
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
