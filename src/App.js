import './App.css';

import Header from "./components/header/header";
import BurgerIngredients from "./components/burger-ingredients/burger-ingredients";
import BurgerConstructor from "./components/burger-constructor/burger-constructor";
import ingredients from "./utils/data.js";

function App() {
    return (
        <div className="App text text_type_main-default">
        <Header/>
        <main className="main">
            <BurgerIngredients ingredients={ingredients}/>
            <BurgerConstructor ingredients={ingredients}/>
        </main>
        </div>
    );
}

export default App;