import { getIngredientsRequest } from "../../utils/burger-api";

export const GET_INGREDIENTS_REQUEST = "GET_INGREDIENTS_INGREDIENTS";
export const GET_INGREDIENTS_SUCCESS = "GET_INGREDIENTS_SUCCESS";
export const GET_INGREDIENTS_FAILED = "GET_INGREDIENTS_FAILED";
export const INGREDIENTS_COUNTER_INCREASE = "INGREDIENTS_COUNTER_INCREASE";
export const INGREDIENTS_COUNTER_DECREASE = "INGREDIENTS_COUNTER_DECREASE";
export const CHANGE_BUN = "CHANGE_BUN";

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
