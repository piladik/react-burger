import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getIngredientsRequest } from "../../utils/burger-api";

const initialState = {
  status: "uninitialized",
  ingredients: [],
  error: null,
};

export const fetchIngredients = createAsyncThunk(
  "ingredients/fetchIngredients",
  async () => {
    const res = await getIngredientsRequest();
    return res.data;
  }
);

export const ingredientsSlice = createSlice({
  name: "ingredients",
  initialState,
  reducers: {
    counterIncrease(state, action) {
      state.ingredients = state.ingredients.map((el) =>
        el._id === action.payload ? { ...el, qty: el.qty + 1 } : el
      );
    },
    counterDecrease(state, action) {
      state.ingredients = state.ingredients.map((el) =>
        el._id === action.payload ? { ...el, qty: el.qty - 1 } : el
      );
    },
    changeBun(state) {
      state.ingredients = state.ingredients.map((el) =>
        el.type === "bun" ? { ...el, qty: 0 } : el
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchIngredients.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchIngredients.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.ingredients = action.payload.map((el) => {
          el["qty"] = 0;
          return el;
        });
      })
      .addCase(fetchIngredients.rejected, (state, action) => {
        state.status = "failed";
        state.ingredients = [];
        state.error = action.error;
      });
  },
});

export const { counterIncrease, counterDecrease, changeBun } =
  ingredientsSlice.actions;
export default ingredientsSlice.reducer;
