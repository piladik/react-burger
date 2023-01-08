import PropTypes from "prop-types";

// Styles
import styles from "./burger-constructor.module.css"

// Components
import { DragIcon, ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import BurgerConstructorConfirm from "./burger-constructor-confirm";

// Utils
import { ingredientPropTypes } from "../../utils/prop-types";

function BurgerConstructor(props) {
    const bun = props.ingredients.find(el => el.type === "bun");
    const ingredients = props.ingredients.filter(el => el.type !== "bun");

    return (
        <section className={`mt-25 ${styles.constructor_section}`}>
            <div className={styles.constructor_container}>
                <div className={`${styles.constructor_item} ${styles.constructor_item_bun}`}>
                    <ConstructorElement
                        type="top"
                        isLocked={true}
                        text={`${bun.name} (верх)`}
                        price={200}
                        thumbnail={bun.image}
                    />
                </div>
                <div className={styles.scrollable_box}>
                    {ingredients.map(el => (
                        <div className={styles.constructor_item} key={el["_id"]}>
                            <DragIcon type="primary" />
                            <ConstructorElement
                                text={el.name}
                                price={el.price}
                                thumbnail={el.image}
                            />
                        </div>
                    ))}
                </div>
                <div className={`${styles.constructor_item} ${styles.constructor_item_bun}`}>
                    <ConstructorElement
                        type="bottom"
                        isLocked={true}
                        text={`${bun.name} (низ)`}
                        price={200}
                        thumbnail={bun.image}
                    />
                </div>
            </div>
            <BurgerConstructorConfirm />
        </section>
    )
}

BurgerConstructor.propTypes = {
  ingredients: PropTypes.arrayOf(ingredientPropTypes.isRequired)
};

export default BurgerConstructor