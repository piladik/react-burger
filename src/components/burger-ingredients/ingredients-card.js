import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from "./burger-ingredients.module.css";

function IngredientsCard(props) {
    if ( props.ingredient.name == "Краторная булка N-200i" ||
         props.ingredient.name == "Говяжий метеорит (отбивная)" ||
         props.ingredient.name == "Биокотлета из марсианской Магнолии" ||
         props.ingredient.name == "Соус Spicy-X" ||
         props.ingredient.name == "Соус традиционный галактический"
         ) {
            return (
                <div className={`mt-6 mb-10 ml-4 ${styles.card}`}>
                    <Counter count={1} size="default" extraClass="m-1" />
                    <img className={`ml-4 mr-4`} src={props.ingredient.image}></img>
                    <div className={`mt-1 mb-1 ${styles.currency_box}`}>
                        <p className="text text_type_digits-default">{props.ingredient.price}</p>
                        <CurrencyIcon />
                    </div>
                    <div className={`${styles.name_box}`}>
                        <p>{props.ingredient.name}</p>
                    </div>
                </div>
            )
         } else {
            return (
                <div className={`mt-6 mb-10 ml-4 ${styles.card}`}>
                    <img className={`ml-4 mr-4`} src={props.ingredient.image}></img>
                    <div className={`mt-1 mb-1 ${styles.currency_box}`}>
                        <p className="text text_type_digits-default">{props.ingredient.price}</p>
                        <CurrencyIcon />
                    </div>
                    <div className={`${styles.name_box}`}>
                        <p>{props.ingredient.name}</p>
                    </div>
                </div>
            )
         }
}

export default IngredientsCard