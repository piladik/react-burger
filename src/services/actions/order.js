import { postOrderRequest } from "../../utils/burger-api";

export const GET_ORDER_ID_REQUEST = "GET_ORDER_ID_REQUEST";
export const GET_ORDER_ID_SUCCESS = "GET_ORDER_ID_SUCCESS";
export const GET_ORDER_ID_FAILED = "GET_ORDER_ID_FAILED";

export function setOrderId(ingredientsId) {
  return function (dispatch) {
    dispatch({
      type: GET_ORDER_ID_REQUEST,
    });
    postOrderRequest(ingredientsId)
      .then((data) => {
        dispatch({
          type: GET_ORDER_ID_SUCCESS,
          orderId: data.order.number,
        });
      })
      .catch((e) => {
        dispatch({ type: GET_ORDER_ID_FAILED, message: e.message });
      });
  };
}
