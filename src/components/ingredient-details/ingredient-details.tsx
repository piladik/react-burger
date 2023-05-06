import { useParams } from "react-router-dom";
import { useAppSelector } from "../../services/hooks/hooks";

// Styles
import styles from "./ingredient-details.module.css";

function IngredientDetails(): JSX.Element {
  const { id } = useParams();
  const { ingredients } = useAppSelector((store) => store.ingredients);

  const ingredient = ingredients.find((el) => el._id === id);
  return (
    <div className={styles.modal_content}>
      {ingredient && (
        <>
          <img
            src={ingredient.image}
            alt={ingredient.name}
            className={styles.image}
          />
          <p className="mt-4 mb-8 text text_type_main-medium">
            {ingredient.name}
          </p>
          <div className={`mb-10 ${styles.composition}`}>
            <div className={`mr-5 ${styles.composition_item}`}>
              <p className="text text_type_main-default text_color_inactive">
                Калории, ккал
              </p>
              <p className="text text_type_digits-default text_color_inactive">
                {ingredient.calories}
              </p>
            </div>
            <div className={`mr-5 ${styles.composition_item}`}>
              <p className="text text_type_main-default text_color_inactive">
                Белки, г
              </p>
              <p className="text text_type_digits-default text_color_inactive">
                {ingredient.proteins}
              </p>
            </div>
            <div className={`mr-5 ${styles.composition_item}`}>
              <p className="text text_type_main-default text_color_inactive">
                Жиры, г
              </p>
              <p className="text text_type_digits-default text_color_inactive">
                {ingredient.fat}
              </p>
            </div>
            <div className={styles.composition_item}>
              <p className="text text_type_main-default text_color_inactive">
                Углеводы, г
              </p>
              <p className="text text_type_digits-default text_color_inactive">
                {ingredient.carbohydrates}
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default IngredientDetails;
