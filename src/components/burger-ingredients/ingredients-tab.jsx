import React, { useEffect } from "react";

// Styles
import styles from "./burger-ingredients.module.css";

// Components
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";

function IngredientsTab({ activeTab }) {
  const [current, setCurrent] = React.useState("one");

  useEffect(() => {
    setCurrent(activeTab.active);
  }, [activeTab.active]);

  const clickHandler = (id) => {
    const hiddenElement = document.getElementById(id);
    hiddenElement.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className={`mb-10 ${styles.tab_container}`}>
      <Tab
        value="one"
        active={current === "one"}
        onClick={() => {
          setCurrent("one");
          clickHandler("bun_tab");
        }}
      >
        Булки
      </Tab>
      <Tab
        value="two"
        active={current === "two"}
        onClick={() => {
          setCurrent("two");
          clickHandler("sauce_tab");
        }}
      >
        Соусы
      </Tab>
      <Tab
        value="three"
        active={current === "three"}
        onClick={() => {
          setCurrent("three");
          clickHandler("main_tab");
        }}
      >
        Начинки
      </Tab>
    </div>
  );
}

export default IngredientsTab;
