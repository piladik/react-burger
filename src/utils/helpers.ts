import {
  TIngredientsWithUniqueId,
  TIngredientWithUniqueId,
  TIngredient,
} from "./types/ingredients-types";

export function countTotal(state: TIngredientsWithUniqueId) {
  const isEmpty = isEmptyConstuctor(state);
  const { fillings }: { fillings: TIngredientWithUniqueId[] } = state;
  if (isEmpty) return 0;
  let bunTotal = 0;
  let fillingTotal = 0;
  if (state.bun.price) {
    bunTotal = state.bun.price * 2;
  }
  if (state.fillings.length >= 1) {
    fillingTotal = fillings.reduce(
      (accumulator: number, currentObj: TIngredient) =>
        accumulator + currentObj.price,
      0
    );
  }
  return bunTotal + fillingTotal;
}

export function getIngredientsId(
  bun: TIngredient,
  fillings: TIngredientWithUniqueId[]
) {
  const ingredientsId = [];
  ingredientsId.push(bun._id);
  if (Array.isArray(fillings)) {
    fillings.forEach((el) => {
      ingredientsId.push(el._id);
    });
  }
  ingredientsId.push(bun._id);
  return ingredientsId;
}

export function isEmptyConstuctor(ingredients: TIngredientsWithUniqueId) {
  if (!ingredients.bun.name && ingredients.fillings.length === 0) {
    return true;
  } else {
    return false;
  }
}

export function checkBun(ingredients: TIngredientsWithUniqueId) {
  if (!ingredients.bun.name) return true;
  return false;
}

export function checkFillings(ingredients: TIngredientsWithUniqueId) {
  if (ingredients.fillings.length === 0) return true;
  return false;
}
