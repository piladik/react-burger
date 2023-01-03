import PropTypes from "prop-types";

// Styles
import styles from "./BurgerIngredients.module.css";

// Components
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
                            <IngredientsCard ingredient={bun} key={bun._id}/>
                        ))}
                    </div>
                <IngredientsSecondaryHeading text="Соусы"/>
                    <div className={`${styles.cards_container}`}>
                        {sauces.map(sauce => (
                            <IngredientsCard ingredient={sauce} key={sauce._id}/>
                        ))}
                    </div>
                <IngredientsSecondaryHeading text="Начинки"/>
                    <div className={`${styles.cards_container}`}>
                        {mains.map(main => (
                            <IngredientsCard ingredient={main} key={main._id}/>
                        ))}
                    </div>
            </div>
        </section>
    )
}

BurgerIngredients.propTypes = PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.oneOf(["bun, main, sauce"]).isRequired,
    proteins: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    carbohydrates: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string,
    image_mobile: PropTypes.string,
    image_large: PropTypes.string,
    __v: PropTypes.number
})

export default BurgerIngredients