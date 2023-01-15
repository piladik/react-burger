import { useEffect, useState } from "react";

// Styles
import styles from "./burger-ingredients.module.css";

// Components
import Modal from "../modal/modal";
import IngredientDetails from "../modal/ingredient-details";
import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";

// Utils
import { ingredientPropTypes } from "../../utils/prop-types";

function IngredientsCard(props) {
  const [modalDetails, setModalDetails] = useState({
    header: "Детали ингредиента",
    content: null,
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setModalDetails({
      ...modalDetails,
      content: props.ingredient,
    });
    // eslint-disable-next-line
  }, [props.ingredient]);

  const handleClose = () => {
    setIsModalOpen(false);
  };

  const handleOpen = () => {
    setIsModalOpen(true);
  };

  const { content } = modalDetails;
  return (
    <>
      <div className={`mt-6 mb-10 ml-4 ${styles.card}`} onClick={handleOpen}>
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
      {isModalOpen && (
        <Modal
          handleClose={handleClose}
          modalDetails={modalDetails}
          isModalOpen={isModalOpen}
        >
          <IngredientDetails content={content} />
        </Modal>
      )}
    </>
  );
}

IngredientsCard.propTypes = {
  ingredient: ingredientPropTypes,
};

export default IngredientsCard;
