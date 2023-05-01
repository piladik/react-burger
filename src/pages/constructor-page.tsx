import { useSelector } from "react-redux";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { RootState } from "../services/reducers";

// Styles
import styles from "./constructor-page.module.css";

// Components
import BurgerIngredients from "../components/burger-ingredients/burger-ingredients";
import BurgerConstructor from "../components/burger-constructor/burger-constructor";

function ConstructorPage(): JSX.Element {
  const { error, status } = useSelector(
    (store: RootState) => store.ingredients
  );
  return (
    <main className={`${styles.main}`}>
      {status === "failed" ? (
        <h1>{error}</h1>
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
