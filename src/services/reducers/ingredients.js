import {
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_FAILED,
  INGREDIENTS_COUNTER_DECREASE,
  INGREDIENTS_COUNTER_INCREASE,
  CHANGE_BUN,
} from "../actions/ingredients";
import { getIngredientsRequest } from "../../utils/burger-api";

const initialState = {
  ingredients: [],
  ingredientsRequest: false,
  ingredientsFailed: false,
  errorMessage: "",
};

export const ingredientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_INGREDIENTS_REQUEST: {
      return { ...state, ingredientsRequest: true };
    }
    case GET_INGREDIENTS_SUCCESS: {
      return {
        ...state,
        ingredients: action.ingredients.map((el) => {
          el["qty"] = 0;
          return el;
        }),
        ingredientsRequest: false,
        ingredientsFailed: false,
      };
    }
    case GET_INGREDIENTS_FAILED: {
      return {
        ...state,
        ingredientsRequest: false,
        ingredientsFailed: true,
        errorMessage: action.errorMessage,
      };
    }
    case INGREDIENTS_COUNTER_INCREASE: {
      return {
        ...state,
        ingredients: [...state.ingredients].map((el) =>
          el._id === action.id ? { ...el, qty: ++el.qty } : el
        ),
      };
    }
    case INGREDIENTS_COUNTER_DECREASE: {
      return {
        ...state,
        ingredients: [...state.ingredients].map((el) =>
          el._id === action.id ? { ...el, qty: --el.qty } : el
        ),
      };
    }
    case CHANGE_BUN: {
      return {
        ...state,
        ingredients: [...state.ingredients].map((el) =>
          el.type === "bun" ? { ...el, qty: 0 } : el
        ),
      };
    }
    default: {
      return state;
    }
  }
};

export function getIngredients() {
  return function (dispatch) {
    dispatch({
      type: GET_INGREDIENTS_REQUEST,
    });
    getIngredientsRequest()
      .then((data) => {
        dispatch({
          type: GET_INGREDIENTS_SUCCESS,
          ingredients: data.data,
        });
      })
      .catch((e) => {
        dispatch({
          type: GET_INGREDIENTS_FAILED,
          errorMessage: e.message,
        });
      });
  };
}
