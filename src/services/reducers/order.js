import { postOrderRequest } from "../../utils/burger-api";
import {
  GET_ORDER_ID_REQUEST,
  GET_ORDER_ID_SUCCESS,
  GET_ORDER_ID_FAILED,
  // SET_INGREDIENTS_ID,
} from "../actions/order";

const initialState = {
  orderId: null,
  orderIdRequest: false,
  orderIdFailed: false,

  ingredientsId: [],
};

export const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ORDER_ID_REQUEST: {
      return { ...state, orderIdRequest: true };
    }
    case GET_ORDER_ID_SUCCESS: {
      return {
        ...state,
        orderIdRequest: false,
        orderIdFailed: false,
        orderId: action.orderId,
      };
    }
    case GET_ORDER_ID_FAILED: {
      return { ...state, orderIdRequest: false, orderIdFailed: true };
    }
    // case SET_INGREDIENTS_ID: {
    //   return { ...state, ingredientsId: action.ingredientsId };
    // }
    default: {
      return state;
    }
  }
};

export function setOrderId(ingredientsId) {
  return function (dispatch) {
    dispatch({
      type: GET_ORDER_ID_REQUEST,
    });
    postOrderRequest(ingredientsId).then((data) => {
      if (data && data.success) {
        dispatch({
          type: GET_ORDER_ID_SUCCESS,
          orderId: data.order.number,
        });
      } else {
        dispatch({ type: GET_ORDER_ID_FAILED });
      }
    });
  };
}
