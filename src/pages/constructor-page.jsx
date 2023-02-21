import { useSelector } from "react-redux";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

// Styles
import styles from "./constructor-page.module.css";

// Components
import BurgerIngredients from "../components/burger-ingredients/burger-ingredients";
import BurgerConstructor from "../components/burger-constructor/burger-constructor";

function ConstructorPage() {
  const { errorMessage, ingredientsFailed } = useSelector(
    (store) => store.ingredients
  );
  return (
    <main className={`${styles.main}`}>
      {ingredientsFailed ? (
        <h1>{errorMessage}</h1>
      ) : (
        <DndProvider backend={HTML5Backend}>
          <BurgerIngredients />
          <BurgerConstructor />
        </DndProvider>
      )}
    </main>
  );
}

export { ConstructorPage };
