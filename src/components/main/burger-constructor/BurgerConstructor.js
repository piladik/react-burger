import styles from "./BurgerConstructor.module.css"
import { DragIcon, ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import data from "../../../utils/data.js";
import BurgerConstructorConfirm from "./BurgerConstructorConfirm";

function BurgerConstructor(props) {
    const buns = props.ingredients.filter(el => el.type === "bun");
    const sauces = props.ingredients.filter(el => el.type === "sauce");
    const mains = props.ingredients.filter(el => el.type === "main");
    return (
        <section className={`mt-25 ${styles.constructor_section}`}>
            <div className={`${styles.constructor_container}`}>
                <div className={`${styles.constructor_item} ${styles.constructor_item_bun}`}>
                    <ConstructorElement
                        type="top"
                        isLocked={true}
                        text={buns[0].name}
                        price={200}
                        thumbnail={buns[0].image}
                    />
                </div>
                <div className={`${styles.scrollable_box}`}>
                    <div className={`${styles.constructor_item}`}>
                        <DragIcon type="primary" />
                        <ConstructorElement
                            text={mains[0].name}
                            price={50}
                            thumbnail={mains[0].image}
                        />
                    </div>
                    <div className={`${styles.constructor_item}`}>
                        <DragIcon type="primary" />
                        <ConstructorElement
                            text={sauces[0].name}
                            price={50}
                            thumbnail={sauces[0].image}
                        />
                    </div>
                    <div className={`${styles.constructor_item}`}>
                        <DragIcon type="primary" />
                        <ConstructorElement
                            text={mains[1].name}
                            price={50}
                            thumbnail={mains[1].image}
                        />
                    </div>
                    <div className={`${styles.constructor_item}`}>
                        <DragIcon type="primary" />
                        <ConstructorElement
                            text={sauces[1].name}
                            price={50}
                            thumbnail={sauces[1].image}
                        />
                    </div>
                </div>
                <div className={`${styles.constructor_item} ${styles.constructor_item_bun}`}>
                    <ConstructorElement
                        type="bottom"
                        isLocked={true}
                        text={buns[0].name}
                        price={200}
                        thumbnail={buns[0].image}
                    />
                </div>
            </div>
            <BurgerConstructorConfirm />
        </section>
    )
}

export default BurgerConstructor