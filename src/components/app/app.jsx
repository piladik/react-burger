import "./app.css";

import Header from "../app-header/app-header";
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
