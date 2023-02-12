import { combineReducers } from "redux";
import { ingredientsReducer } from "./ingredients";
import { constructorReducer } from "./constructor";
import { ingredientReducer } from "./currentIngredient";
import { orderReducer } from "./order";
import { authReducer } from "./auth";
import { userReducer } from "./user";

export const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  constructorBurger: constructorReducer,
  ingredient: ingredientReducer,
  order: orderReducer,
  auth: authReducer,
  user: userReducer,
});
