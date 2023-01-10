import { useEffect, useState } from "react";
import ModalOverlay from "../modal/modal-overlay";
import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { ingredientPropTypes } from "../../utils/prop-types";
import styles from "./burger-ingredients.module.css";

function IngredientsCard(props) {
  const [modalDetails, setModalDetails] = useState({
    modalType: "ingredientDetail",
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

  const toggleModal = (e) => {
    console.log(e);
    setIsModalOpen(!isModalOpen);
    console.log(`I was clicked from ingrediens card: ${isModalOpen}`);
  };

  return (
    <div className={`mt-6 mb-10 ml-4 ${styles.card}`} onClick={toggleModal}>
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
      <ModalOverlay
        handleClose={toggleModal}
        isModalOpen={isModalOpen}
        modalDetails={modalDetails}
      >
        This is Modal Content
      </ModalOverlay>
    </div>
  );
}

IngredientsCard.propTypes = {
  ingredient: ingredientPropTypes,
};

export default IngredientsCard;
