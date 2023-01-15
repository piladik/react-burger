import React, { useState, useEffect } from "react";

// Styles
import "./app.css";

// Components
import Header from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";

// Utils
import getIngredients from "../../utils/burger-api";

function App() {
  const [ingredients, setIngredients] = useState({
    success: false,
    data: [],
  });
  const [error, setError] = useState({
    hasError: null,
    message: null,
  });

  useEffect(() => {
    getIngredients()
      .then((data) => {
        setIngredients((currentState) => {
          const newState = {
            ...currentState,
            success: data.success,
            data: data.data,
          };
          return newState;
        });
      })
      .catch((e) => {
        setIngredients((currentState) => {
          const newState = {
            ...currentState,
            success: false,
          };
          return newState;
        });
        setError((currentState) => {
          const newState = {
            ...currentState,
            hasError: true,
            message: e.message,
          };
          return newState;
        });
      });
  }, []);

  const { success, data } = ingredients;
  const { hasError, message } = error;
  return (
    <div className="App text text_type_main-default">
      <Header />
      {success && (
        <main className="main">
          <BurgerIngredients ingredients={data} />
          <BurgerConstructor ingredients={data} />
        </main>
      )}
      {!success && hasError && (
        <>
          <h1>{message}</h1>
        </>
      )}
    </div>
  );
}

export default App;
