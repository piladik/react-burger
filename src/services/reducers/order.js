import {
  GET_ORDER_ID_REQUEST,
  GET_ORDER_ID_SUCCESS,
  GET_ORDER_ID_FAILED,
} from "../actions/order";

const initialState = {
  orderId: null,
  orderIdRequest: false,
  orderIdFailed: false,
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
      return {
        ...state,
        orderId: null,
        orderIdRequest: false,
        orderIdFailed: true,
      };
    }
    default: {
      return state;
    }
  }
};
