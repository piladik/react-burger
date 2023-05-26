import { useMemo, useEffect, useState } from "react";
import { useAppSelector } from "../../services/hooks/hooks";

// Styles
import styles from "./burger-ingredients.module.css";

// Components
import IngredientsTab from "./ingredients-tab";
import IngredientsCard from "./ingredients-card";
import { TIngredient } from "../../utils/types/ingredients-types";

function BurgerIngredients() {
  const [activeTab, setActiveTab] = useState({
    active: "one",
  });
  const { ingredients }: { ingredients: TIngredient[] } = useAppSelector(
    (store) => store.ingredients
  );

  // Отслеживает какой элемент попал в область видимости и присваивает нужный стейт
  // Затем стейт передается через пропсы в компонент <IngredientsTab>, где и меняется активный таб
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (let i = 0; i < entries.length; i++) {
          if (entries[i].target.id === "bun_tab_header") {
            setActiveTab({ active: "one" });
          } else if (entries[i].target.id === "sauce_tab_header") {
            setActiveTab({ active: "two" });
          } else if (entries[i].target.id === "main_tab_header") {
            setActiveTab({ active: "three" });
          }
        }
      },
      { root: document.getElementById("scrollable_box") }
    );
    observer.observe(document.getElementById("bun_tab_header") as HTMLElement);
    observer.observe(
      document.getElementById("sauce_tab_header") as HTMLElement
    );
    observer.observe(document.getElementById("main_tab_header") as HTMLElement);
  }, []);

  const buns = useMemo(
    () => ingredients.filter((el) => el.type === "bun"),
    [ingredients]
  );
  const sauces = useMemo(
    () => ingredients.filter((el) => el.type === "sauce"),
    [ingredients]
  );
  const mains = useMemo(
    () => ingredients.filter((el) => el.type === "main"),
    [ingredients]
  );

  return (
    <section
      className={`mt-10 ${styles.ingredients_section}`}
      data-test="ingredients"
    >
      <h1 className={`mb-5 text text_type_main-large ${styles.heading}`}>
        Соберите бургер
      </h1>
      <IngredientsTab activeTab={activeTab} />
      <div className={styles.scrollable_box} id="scrollable_box">
        <h1
          className={`text text_type_main-medium ${styles.heading}`}
          id="bun_tab_header"
        >
          Булки
        </h1>
        <div className={styles.cards_container} id="bun_tab" data-test="bun">
          {buns.map((bun) => (
            <IngredientsCard ingredient={bun} key={bun._id} />
          ))}
        </div>
        <h1
          className={`text text_type_main-medium ${styles.heading}`}
          id="sauce_tab_header"
        >
          Соусы
        </h1>
        <div
          className={styles.cards_container}
          id="sauce_tab"
          data-test="sauce"
        >
          {sauces.map((sauce) => (
            <IngredientsCard ingredient={sauce} key={sauce._id} />
          ))}
        </div>
        <h1
          className={`text text_type_main-medium ${styles.heading}`}
          id="main_tab_header"
        >
          Начинки
        </h1>
        <div className={styles.cards_container} id="main_tab" data-test="main">
          {mains.map((main) => (
            <IngredientsCard ingredient={main} key={main._id} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default BurgerIngredients;
