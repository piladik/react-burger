import { combineReducers } from "redux";
import { ingredientsReducer } from "./ingredients";
import { constructorReducer } from "./constructor";
import { ingredientReducer } from "./currentIngredient";
import { orderReducer } from "./order";
import { authReducer } from "./auth";

export const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  constructorBurger: constructorReducer,
  ingredient: ingredientReducer,
  order: orderReducer,
  auth: authReducer,
});
