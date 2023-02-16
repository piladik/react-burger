import { useMemo, useEffect, useState } from "react";
import { useSelector } from "react-redux";
// Styles
import styles from "./burger-ingredients.module.css";

// Components
import IngredientsTab from "./ingredients-tab";
import IngredientsCard from "./ingredients-card";

// Utils

// ACTIONS-REDUCERS
// import {
//   POPULATE_MODAL,
//   CLEAR_MODAL,
// } from "../../services/actions/currentIngredient";

function BurgerIngredients() {
  const [activeTab, setActiveTab] = useState({
    active: "one",
  });
  const { ingredients } = useSelector((store) => store.ingredients);

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
    observer.observe(document.getElementById("bun_tab_header"));
    observer.observe(document.getElementById("sauce_tab_header"));
    observer.observe(document.getElementById("main_tab_header"));
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

  // const handleModalOpen = (ingredient) => {
  //   setIngredientModal(ingredient);
  //   dispatch({ type: POPULATE_MODAL, ingredient });
  // };

  // const handleModalClose = () => {
  //   setIngredientModal(null);
  //   dispatch({ type: CLEAR_MODAL });
  // };
  return (
    <section className={`mt-10 ${styles.ingredients_section}`}>
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
        <div className={styles.cards_container} id="bun_tab">
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
        <div className={styles.cards_container} id="sauce_tab">
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
        <div className={styles.cards_container} id="main_tab">
          {mains.map((main) => (
            <IngredientsCard ingredient={main} key={main._id} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default BurgerIngredients;
