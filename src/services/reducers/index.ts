import ingredientsReducer from "./ingredients";
import constructorReducer from "./constructor";
import orderReducer from "./order";
import authReducer from "./auth";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    ingredients: ingredientsReducer,
    constructorBurger: constructorReducer,
    order: orderReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
