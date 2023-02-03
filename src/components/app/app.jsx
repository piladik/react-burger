import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

// Styles
import styles from "./app.module.css";

// Components
import Header from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";

// Utils

// ACTIONS-REDUCERS
import { getIngredients } from "../../services/actions/ingredients";

function App() {
  const { errorMessage, ingredientsFailed } = useSelector(
    (store) => store.ingredients
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch]);

  return (
    <div className={`${styles.App} text text_type_main-default`}>
      <Header />
      {ingredientsFailed ? (
        <h1>{errorMessage}</h1>
      ) : (
        <main className={`${styles.main}`}>
          <DndProvider backend={HTML5Backend}>
            <BurgerIngredients />
            <BurgerConstructor />
          </DndProvider>
        </main>
      )}
    </div>
  );
}

export default App;
