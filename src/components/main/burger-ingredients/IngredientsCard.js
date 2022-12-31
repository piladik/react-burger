import data from "../../../utils/data.js";
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from "./BurgerIngredients.module.css";

function IngredientsCard(props) {
    const imgUrl = data[0].image; 
    return (
        <div className={`mt-6 mb-10 ml-4 ${styles.card}`}>
            <img className={``} src={props.bun.image}></img>
            <div className={`mt-1 mb-1 ${styles.currency_box}`}>
                <p className="text text_type_digits-default">{props.bun.price}</p>
                <CurrencyIcon />
            </div>
            <div className={`${styles.name_box}`}>
                <p>{props.bun.name}</p>
            </div>
        </div>
    )
}

export default IngredientsCard