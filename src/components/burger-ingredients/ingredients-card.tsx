import { useAppSelector } from "../../services/hooks/hooks";
import { useDrag } from "react-dnd";
import { Link, useLocation } from "react-router-dom";

// Styles
import styles from "./burger-ingredients.module.css";

// Components
import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";

// Utils
import { TIngredient } from "../../utils/types/ingredients-types";

function IngredientsCard({
  ingredient,
}: {
  ingredient: TIngredient;
}): JSX.Element {
  const location = useLocation();
  const item = useAppSelector((store) =>
    store.ingredients.ingredients.find((el) => el._id === ingredient._id)
  );

  const [, dragRef] = useDrag({
    type: ingredient.type,
    item: { ingredient },
  });

  return (
    <div className={`mt-6 mb-10 ml-4 ${styles.card}`} ref={dragRef}>
      {item && item.qty > 0 && (
        <Counter count={item.qty} size="default" extraClass="m-1" />
      )}
      <Link
        to={`/ingredients/${ingredient._id}`}
        state={{ background: location }}
      >
        <img
          className="ml-4 mr-4"
          src={ingredient.image}
          alt={ingredient.name}
        />
      </Link>
      <div className={`mt-1 mb-1 ${styles.currency_box}`}>
        <p className="text text_type_digits-default">{ingredient.price}</p>
        <CurrencyIcon type="primary" />
      </div>
      <div className={styles.name_box}>
        <p>{ingredient.name}</p>
      </div>
    </div>
  );
}

export default IngredientsCard;
