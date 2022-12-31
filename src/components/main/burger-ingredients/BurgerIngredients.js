import React from "react";

import styles from "./BurgerIngredients.module.css";

import IngredientsTab from "./IngredientsTab";
import IngredientsMainHeading from "./IngredientsMainHeading";
import IngredientsSecondaryHeading from "./IngredientsSecondaryHeading";
import IngredientsCard from "./IngredientsCard.js";
import data from "../../../utils/data.js";

function BurgerIngredients() {
    const buns = data.filter(el => el.type === "bun");
    const sauces = data.filter(el => el.type === "sauce");
    const mains = data.filter(el => el.type === "main");
    return (
        <section className={`mt-10 ${styles.ingredients_section}`}>
            <IngredientsMainHeading />
            <IngredientsTab />
            <IngredientsSecondaryHeading text="Булки"/>
            <div className="cards_container">
                {buns.map(bun => (
                    <IngredientsCard bun={bun} key={bun._id}/>
                ))}
            </div>
            <IngredientsSecondaryHeading text="Соусы"/>
            <div className="cards_container">
                {sauces.map(sauce => (
                    <IngredientsCard bun={sauce} key={sauce._id}/>
                ))}
            </div>
            <IngredientsSecondaryHeading text="Начинки"/>
            <div className="cards_container">
                {mains.map(main => (
                    <IngredientsCard bun={main} key={main._id}/>
                ))}
            </div>
        </section>
    )
}

export default BurgerIngredients