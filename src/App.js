import React from 'react';
import logo from './logo.svg';
import './App.css';

import Header from "./components/header/Header.js";
import BurgerIngredients from "./components/main/burger-ingredients/BurgerIngredients.js";
import BurgerConstructor from "./components/main/burger-constructor/BurgerConstructor.js";

function App() {
  return (
    <div className="App text text_type_main-default">
      <Header test="This prop has been passed successfully"/>
      <main className="main">
        <BurgerIngredients />
        <BurgerConstructor />
      </main>
    </div>
  );
}

export default App;