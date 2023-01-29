import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useDrag } from "react-dnd";

// Styles
import styles from "./burger-ingredients.module.css";

// Components
import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";
import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";

// Utils
import { ingredientPropTypes } from "../../utils/prop-types";

// ACTIONS-REDUCERS
import {
  CLEAR_MODAL,
  POPULATE_MODAL,
} from "../../services/actions/currentIngredient";

function IngredientsCard({ ingredient }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const item = useSelector((store) =>
    store.ingredients.ingredients.filter((el) => el._id === ingredient._id)
  );

  const dispatch = useDispatch();
  const [, dragRef] = useDrag({
    type: ingredient.type,
    item: { ingredient },
  });

  const handleClose = () => {
    setIsModalOpen(false);
    dispatch({ type: CLEAR_MODAL });
  };

  const handleOpen = () => {
    setIsModalOpen(true);
    dispatch({ type: POPULATE_MODAL, ingredient });
  };

  return (
    <>
      <div
        className={`mt-6 mb-10 ml-4 ${styles.card}`}
        onClick={handleOpen}
        ref={dragRef}
      >
        {item[0].qty > 0 && (
          <Counter count={item[0].qty} size="default" extraClass="m-1" />
        )}
        <img
          className="ml-4 mr-4"
          src={ingredient.image}
          alt={ingredient.name}
        />
        <div className={`mt-1 mb-1 ${styles.currency_box}`}>
          <p className="text text_type_digits-default">{ingredient.price}</p>
          <CurrencyIcon />
        </div>
        <div className={styles.name_box}>
          <p>{ingredient.name}</p>
        </div>
      </div>
      {isModalOpen && (
        <Modal handleClose={handleClose} header={"Детали ингредиента"}>
          <IngredientDetails content={ingredient} />
        </Modal>
      )}
    </>
  );
}

IngredientsCard.propTypes = {
  ingredient: ingredientPropTypes,
};

export default IngredientsCard;
