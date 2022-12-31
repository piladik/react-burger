import React from "react";

import styles from "./BurgerIngredients.module.css";

import IngredientsTab from "./IngredientsTab";
import IngredientsMainHeading from "./IngredientsMainHeading";
import IngredientsSecondaryHeading from "./IngredientsSecondaryHeading";
import IngredientsCard from "./IngredientsCard.js";

function BurgerIngredients(props) {
    const buns = props.ingredients.filter(el => el.type === "bun");
    const sauces = props.ingredients.filter(el => el.type === "sauce");
    const mains = props.ingredients.filter(el => el.type === "main");
    return (
        <section className={`mt-10 ${styles.ingredients_section}`}>
            <IngredientsMainHeading />
            <IngredientsTab />
            <div className={`${styles.scrollable_box}`}>
                <IngredientsSecondaryHeading text="Булки"/>
                    <div className={`${styles.cards_container}`}>
                        {buns.map(bun => (
                            <IngredientsCard bun={bun} key={bun._id}/>
                        ))}
                    </div>
                <IngredientsSecondaryHeading text="Соусы"/>
                    <div className={`${styles.cards_container}`}>
                        {sauces.map(sauce => (
                            <IngredientsCard bun={sauce} key={sauce._id}/>
                        ))}
                    </div>
                <IngredientsSecondaryHeading text="Начинки"/>
                    <div className={`${styles.cards_container}`}>
                        {mains.map(main => (
                            <IngredientsCard bun={main} key={main._id}/>
                        ))}
                    </div>
            </div>
        </section>
    )
}

export default BurgerIngredients