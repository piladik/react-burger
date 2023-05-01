import ingredientsReducer from "./ingredients";
import { constructorReducer } from "./constructor";
import { ingredientReducer } from "./currentIngredient";
import { orderReducer } from "./order";
import { authReducer } from "./auth";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    ingredients: ingredientsReducer,
    constructorBurger: constructorReducer,
    ingredient: ingredientReducer,
    order: orderReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
