import styles from "./BurgerIngredients.module.css";

function IngredientsMainHeading() {
    return (
        <div className={`mb-5 ${styles.heading}`}>
            <h1 className={`text text_type_main-large ${styles.heading_main}`}>Соберите бургер</h1>
        </div>
    )
}

export default IngredientsMainHeading