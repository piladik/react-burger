import React from 'react';
import './App.css';

import Header from "./components/header/header.js";
import BurgerIngredients from "./components/burger-ingredients/burger-ingredients.js";
import BurgerConstructor from "./components/burger-constructor/burger-constructor.js";
import data from "./utils/data.js";

function App() {
    const ingredients = data;
    return (
        <div className="App text text_type_main-default">
        <Header test="This prop has been passed successfully"/>
        <main className="main">
            <BurgerIngredients ingredients={ingredients}/>
            <BurgerConstructor ingredients={ingredients}/>
        </main>
        </div>
    );
}

export default App;