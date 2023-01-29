import { nanoid } from "nanoid";

import {
  ADD_BUN,
  ADD_FILLING,
  DELETE_FILLING,
  COUNT_TOTAL,
  MOVE_FILLING,
} from "../actions/constructor";

const initialState = {
  ingredients: {
    bun: {},
    fillings: [],
  },
  total: 0,
};

export const constructorReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BUN: {
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          bun: action.ingredient,
        },
      };
    }
    case ADD_FILLING: {
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          fillings: [...state.ingredients.fillings].concat([
            { ...action.ingredient, nanoid: nanoid() },
          ]),
        },
      };
    }
    case DELETE_FILLING: {
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          fillings: [...state.ingredients.fillings].filter(
            (el) => el.nanoid !== action.nanoid
          ),
        },
      };
    }
    case MOVE_FILLING: {
      const item = state.ingredients.fillings.splice(action.from, 1)[0];
      state.ingredients.fillings.splice(action.to, 0, item);
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          fillings: state.ingredients.fillings,
        },
      };
    }
    case COUNT_TOTAL: {
      return { ...state, total: action.total };
    }
    default: {
      return state;
    }
  }
};
