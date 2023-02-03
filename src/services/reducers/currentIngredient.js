import { POPULATE_MODAL, CLEAR_MODAL } from "../actions/currentIngredient";

const initialState = {
  ingredient: {},
  isOpen: false,
};

export const ingredientReducer = (state = initialState, action) => {
  switch (action.type) {
    case POPULATE_MODAL: {
      return {
        ...state,
        ingredient: action.ingredient,
        isOpen: true,
      };
    }
    case CLEAR_MODAL: {
      return {
        ...state,
        ingredient: {},
        isOpen: false,
      };
    }
    default: {
      return state;
    }
  }
};
