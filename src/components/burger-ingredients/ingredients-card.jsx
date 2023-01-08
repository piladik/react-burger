import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { ingredientPropTypes } from "../../utils/prop-types";
import styles from "./burger-ingredients.module.css";

function IngredientsCard(props) {
  return (
    <div className={`mt-6 mb-10 ml-4 ${styles.card}`}>
      <Counter count={1} size="default" extraClass="m-1" />
      <img
        className="ml-4 mr-4"
        src={props.ingredient.image}
        alt={props.ingredient.name}
      />
      <div className={`mt-1 mb-1 ${styles.currency_box}`}>
        <p className="text text_type_digits-default">
          {props.ingredient.price}
        </p>
        <CurrencyIcon />
      </div>
      <div className={styles.name_box}>
        <p>{props.ingredient.name}</p>
      </div>
    </div>
  );
}

IngredientsCard.propTypes = {
  ingredient: ingredientPropTypes,
};

export default IngredientsCard;
