import { nanoid } from "nanoid";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ingredients: {
    bun: {},
    fillings: [],
  },
};

const constructorSlice = createSlice({
  name: "constructor",
  initialState,
  reducers: {
    addBun(state, action) {
      state.ingredients.bun = action.payload;
    },
    addFilling(state, action) {
      state.ingredients.fillings.push({ ...action.payload, nanoid: nanoid() });
    },
    deleteFilling(state, action) {
      state.ingredients.fillings = state.ingredients.fillings.filter(
        (el) => el.nanoid !== action.payload
      );
    },
    moveFilling(state, action) {
      const item = state.ingredients.fillings.splice(action.payload.from, 1)[0];
      state.ingredients.fillings.splice(action.payload.to, 0, item);
    },
  },
});

export const { addBun, addFilling, deleteFilling, moveFilling } =
  constructorSlice.actions;
export default constructorSlice.reducer;
