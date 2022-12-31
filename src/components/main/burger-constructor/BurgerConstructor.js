import styles from "./BurgerConstructor.module.css"
import { DragIcon, ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import data from "../../../utils/data.js";
import BurgerConstructorConfirm from "./BurgerConstructorConfirm";

function BurgerConstructor() {
    return (
        <section className={`mt-25 ${styles.constructor_section}`}>
            <div className={`${styles.constructor_container}`}>
                <div className={`${styles.constructor_item}`}>
                    <ConstructorElement
                        type="top"
                        isLocked={true}
                        text="Краторная булка N-200i (верх)"
                        price={200}
                        thumbnail={data[0].image}
                    />
                </div>
                <div className={`${styles.constructor_item}`}>
                    <DragIcon type="primary" />
                    <ConstructorElement
                        text="Краторная булка N-200i (верх)"
                        price={50}
                        thumbnail={data[0].image}
                    />
                </div>
                <div className={`${styles.constructor_item}`}>
                    <ConstructorElement
                        type="bottom"
                        isLocked={true}
                        text="Краторная булка N-200i (низ)"
                        price={200}
                        thumbnail={data[0].image}
                    />
                </div>
            </div>
            <BurgerConstructorConfirm />
        </section>
    )
}

export default BurgerConstructor