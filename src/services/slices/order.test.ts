import reducer, { setOrderId } from "./order";
import { IOrderSlice } from "./order";
import { BURGER_BASE_API } from "../../utils/url";

const initialState: IOrderSlice = {
  status: "uninitialized",
  orderId: undefined,
  error: null,
};

test("should return the initial state", () => {
  expect(reducer(initialState, { type: undefined })).toEqual({
    status: "uninitialized",
    orderId: undefined,
    error: null,
  });
});

test("should handle sending a POST request to get order id from the server", () => {
  expect(reducer(initialState, { type: setOrderId.pending.type })).toEqual({
    status: "loading",
    orderId: undefined,
    error: null,
  });
});

test("should handle getting orderId from the server and setting state.orderId", () => {
  expect(
    reducer(initialState, {
      type: setOrderId.fulfilled.type,
      payload: { order: { number: 4040 } },
    })
  ).toEqual({
    status: "succeeded",
    orderId: 4040,
    error: null,
  });
});

test(`should handle failed POST request to server ${BURGER_BASE_API}/orders`, () => {
  expect(
    reducer(initialState, {
      type: setOrderId.rejected.type,
      error: "Failed to get Order id",
    })
  ).toEqual({
    status: "failed",
    error: "Failed to get Order id",
  });
});
