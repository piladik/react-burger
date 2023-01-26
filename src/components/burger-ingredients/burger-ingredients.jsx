import { useContext, useMemo } from "react";
// Styles
import styles from "./burger-ingredients.module.css";

// Components
import IngredientsTab from "./ingredients-tab";
import IngredientsCard from "./ingredients-card";

// Utils
import { IngredientsContext } from "../../utils/ingredients-context";

function BurgerIngredients() {
  const { ingredients } = useContext(IngredientsContext);
  const buns = useMemo(
    () => ingredients.data.filter((el) => el.type === "bun"),
    [ingredients.data]
  );
  const sauces = useMemo(
    () => ingredients.data.filter((el) => el.type === "sauce"),
    [ingredients.data]
  );
  const mains = useMemo(
    () => ingredients.data.filter((el) => el.type === "main"),
    [ingredients.data]
  );
  return (
    <section className={`mt-10 ${styles.ingredients_section}`}>
      <h1 className={`mb-5 text text_type_main-large ${styles.heading}`}>
        Соберите бургер
      </h1>
      <IngredientsTab />
      <div className={styles.scrollable_box}>
        <h1 className={`text text_type_main-medium ${styles.heading}`}>
          Булки
        </h1>
        <div className={styles.cards_container}>
          {buns.map((bun) => (
            <IngredientsCard ingredient={bun} key={bun._id} />
          ))}
        </div>
        <h1 className={`text text_type_main-medium ${styles.heading}`}>
          Соусы
        </h1>
        <div className={styles.cards_container}>
          {sauces.map((sauce) => (
            <IngredientsCard ingredient={sauce} key={sauce._id} />
          ))}
        </div>
        <h1 className={`text text_type_main-medium ${styles.heading}`}>
          Начинки
        </h1>
        <div className={styles.cards_container}>
          {mains.map((main) => (
            <IngredientsCard ingredient={main} key={main._id} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default BurgerIngredients;
