import { useAppSelector } from "../services/hooks/hooks";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

// Styles
import styles from "./constructor-page.module.css";

// Components
import BurgerIngredients from "../components/burger-ingredients/burger-ingredients";
import BurgerConstructor from "../components/burger-constructor/burger-constructor";

function ConstructorPage(): JSX.Element {
  const { error, status } = useAppSelector((store) => store.ingredients);
  return (
    <main className={`${styles.main}`}>
      {typeof error === "string" && status === "failed" ? (
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
