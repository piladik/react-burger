// Styles
import styles from "./ingredient-details.module.css";
// Utils
import { ingredientPropTypes } from "../../utils/prop-types";

function IngredientDetails({ content }) {
  return (
    <div className={styles.modal_content}>
      <img
        src={content.image_large}
        alt={content.name}
        className={styles.image}
      />
      <p className="mt-4 mb-8 text text_type_main-medium">{content.name}</p>
      <div className={`mb-10 ${styles.composition}`}>
        <div className={`mr-5 ${styles.composition_item}`}>
          <p className="text text_type_main-default text_color_inactive">
            Калории, ккал
          </p>
          <p className="text text_type_digits-default text_color_inactive">
            {content.calories}
          </p>
        </div>
        <div className={`mr-5 ${styles.composition_item}`}>
          <p className="text text_type_main-default text_color_inactive">
            Белки, г
          </p>
          <p className="text text_type_digits-default text_color_inactive">
            {content.proteins}
          </p>
        </div>
        <div className={`mr-5 ${styles.composition_item}`}>
          <p className="text text_type_main-default text_color_inactive">
            Жиры, г
          </p>
          <p className="text text_type_digits-default text_color_inactive">
            {content.fat}
          </p>
        </div>
        <div className={styles.composition_item}>
          <p className="text text_type_main-default text_color_inactive">
            Углеводы, г
          </p>
          <p className="text text_type_digits-default text_color_inactive">
            {content.carbohydrates}
          </p>
        </div>
      </div>
    </div>
  );
}

IngredientDetails.propTypes = {
  content: ingredientPropTypes.isRequired,
};

export default IngredientDetails;
