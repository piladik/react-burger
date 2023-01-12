import React from "react";

// Styles
import styles from "./burger-ingredients.module.css";

// Components
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";

function IngredientsTab() {
  const [current, setCurrent] = React.useState("one");
  return (
    <div className={`mb-10 ${styles.tab_container}`}>
      <Tab value="one" active={current === "one"} onClick={setCurrent}>
        Булки
      </Tab>
      <Tab value="two" active={current === "two"} onClick={setCurrent}>
        Соусы
      </Tab>
      <Tab value="three" active={current === "three"} onClick={setCurrent}>
        Начинки
      </Tab>
    </div>
  );
}

export default IngredientsTab;
