import "./App.css";

import Header from "../header/header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import ingredients from "../../utils/data";

function App() {
  return (
    <div className="App text text_type_main-default">
      <Header />
      <main className="main">
        <BurgerIngredients ingredients={ingredients} />
        <BurgerConstructor ingredients={ingredients} />
      </main>
    </div>
  );
}

export default App;
