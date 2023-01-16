import { useState } from "react";

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

function IngredientsCard({ ingredient }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClose = () => {
    setIsModalOpen(false);
  };

  const handleOpen = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <div className={`mt-6 mb-10 ml-4 ${styles.card}`} onClick={handleOpen}>
        <Counter count={1} size="default" extraClass="m-1" />
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
