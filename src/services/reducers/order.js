import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { postOrderRequest } from "../../utils/burger-api";

const initialState = {
  status: "uninitialized",
  orderId: null,
  error: null,
};

export const setOrderId = createAsyncThunk(
  "order/setOrderId",
  async (ingredientsId) => {
    return await postOrderRequest(ingredientsId);
  }
);

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(setOrderId.pending, (state) => {
        state.status = "loading";
      })
      .addCase(setOrderId.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.orderId = action.payload.order.number;
      })
      .addCase(setOrderId.rejected, (state, action) => {
        state.status = "succeeded";
        state.error = action.error;
      });
  },
});

export default orderSlice.reducer;
