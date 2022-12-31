import styles from "./BurgerIngredients.module.css";

function IngredientsSecondaryHeading(props) {
    return (
        <div className={`${styles.heading}`}>
            <h1 className={`text text_type_main-medium ${styles.heading_main}`}>{props.text}</h1>
        </div>
    )
}

export default IngredientsSecondaryHeading