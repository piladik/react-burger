import PropTypes from "prop-types";

// Styles
import styles from "./modal.module.css";

// Utils
import { ingredientPropTypes } from "../../utils/prop-types";

function IngredientDetails({ modalDetails }) {
  return (
    <div className={styles.modal_content}>
      <img
        src={modalDetails.content.image_large}
        alt={modalDetails.content.name}
        className={styles.image}
      />
      <p className="mt-4 mb-8 text text_type_main-medium">
        {modalDetails.content.name}
      </p>
      <div className={`mb-10 ${styles.composition}`}>
        <div className={`mr-5 ${styles.composition_item}`}>
          <p className="text text_type_main-default text_color_inactive">
            Калории, ккал
          </p>
          <p className="text text_type_digits-default text_color_inactive">
            {modalDetails.content.calories}
          </p>
        </div>
        <div className={`mr-5 ${styles.composition_item}`}>
          <p className="text text_type_main-default text_color_inactive">
            Белки, г
          </p>
          <p className="text text_type_digits-default text_color_inactive">
            {modalDetails.content.proteins}
          </p>
        </div>
        <div className={`mr-5 ${styles.composition_item}`}>
          <p className="text text_type_main-default text_color_inactive">
            Жиры, г
          </p>
          <p className="text text_type_digits-default text_color_inactive">
            {modalDetails.content.fat}
          </p>
        </div>
        <div className={styles.composition_item}>
          <p className="text text_type_main-default text_color_inactive">
            Углеводы, г
          </p>
          <p className="text text_type_digits-default text_color_inactive">
            {modalDetails.content.carbohydrates}
          </p>
        </div>
      </div>
    </div>
  );
}

IngredientDetails.propTypes = {
  modalDetails: PropTypes.shape({
    modalType: PropTypes.string.isRequired,
    header: PropTypes.string,
    content: ingredientPropTypes.isRequired,
  }).isRequired,
};

export default IngredientDetails;
