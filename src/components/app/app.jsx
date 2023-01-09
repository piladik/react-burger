import React, { useState, useEffect } from "react";
import "./app.css";

import Header from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
// import ingredients from "../../utils/data";

function App() {
  const [ingredients, setIngredients] = useState({
    success: false,
    data: [],
  });
  const [error, setError] = useState({
    hasError: null,
    message: null,
    errorName: null,
    errorMessage: null,
  });

  const url = "https://norma.nomoreparties.space/api/ingredients";
  useEffect(() => {
    const getIngredients = () => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setIngredients({
            ...ingredients,
            success: data.success,
            data: data.data,
          });
        })
        .catch((e) => {
          setIngredients({ ...ingredients, success: false });
          setError({
            ...error,
            hasError: true,
            message: "Could not get data",
            errorName: e.name,
            errorMessage: e.message,
          });
        });
    };
    getIngredients();
    // eslint-disable-next-line
  }, []);

  const { success, data } = ingredients;
  const { hasError, message, errorName, errorMessage } = error;
  return (
    <div className="App text text_type_main-default">
      <Header />
      {!success && hasError && (
        <>
          <h1>{message}</h1>
          <h2>{`${errorName}: ${errorMessage}`}</h2>
        </>
      )}
      <main className="main">
        {success && (
          <>
            <BurgerIngredients ingredients={data} />
            <BurgerConstructor ingredients={data} />
          </>
        )}
      </main>
    </div>
  );
}

export default App;
