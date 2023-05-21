import reducer, {
  addBun,
  addFilling,
  //   deleteFilling,
  //   moveFilling,
} from "./constructor";
import {
  mockedBun,
  mockedIngredientsDataWithQty,
  mockedFilling,
} from "../../utils/mockedData";
import { IConstructorSlice } from "./constructor";
// import { TIngredientWithUniqueId } from "../../utils/types/ingredients-types";

const initialState: IConstructorSlice = {
  ingredients: {
    bun: {},
    fillings: [],
  },
};

test("should return the initial state", () => {
  expect(reducer(initialState, { type: undefined })).toEqual({
    ingredients: { bun: {}, fillings: [] },
  });
});

test("should handle adding bun to ingredints: bun", () => {
  const initialState = { ingredients: { bun: {}, fillings: [] } };
  expect(reducer(initialState, addBun(mockedBun))).toEqual({
    ingredients: {
      bun: { ...mockedBun },
      fillings: [],
    },
  });
});

test("should handle adding fillings to empty ingredints: fillings", () => {
  const initialState = { ingredients: { bun: {}, fillings: [] } };
  const addedFilling = mockedIngredientsDataWithQty.find(
    (el) => el._id === "643d69a5c3f7b9001cfa093e"
  );
  const expectedFilling = { ...mockedFilling };
  expect(
    reducer(
      initialState,
      addFilling({ ingredient: addedFilling, nanoid: "1mjhDAF9C2nhBmo5kzDVW" })
    )
  ).toEqual({
    ingredients: {
      bun: {},
      fillings: [{ ...expectedFilling }],
    },
  });
});

test("should handle adding fillings to not empty ingredients: fillings", () => {
  const initialState = {
    ingredients: { bun: {}, fillings: [{ ...mockedFilling }] },
  };
  const addedFilling = mockedIngredientsDataWithQty.find(
    (el) => el._id === "643d69a5c3f7b9001cfa093e"
  );
  const expectedFilling = { ...mockedFilling };
  expect(
    reducer(
      initialState,
      addFilling({ ingredient: addedFilling, nanoid: "1mjhDAF9C2nhBmo5kzDVW" })
    )
  ).toEqual({
    ingredients: {
      bun: {},
      fillings: [...initialState.ingredients.fillings, { ...expectedFilling }],
    },
  });
});
