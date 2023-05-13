import {
  TIngredientsConstructor,
  TIngredientWithUniqueId,
  TIngredient,
} from "./types/ingredients-types";

export function countTotal(state: TIngredientsConstructor) {
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

export function isEmptyConstuctor(ingredients: TIngredientsConstructor) {
  if (!ingredients.bun.name && ingredients.fillings.length === 0) {
    return true;
  } else {
    return false;
  }
}

export function checkBun(ingredients: TIngredientsConstructor) {
  if (!ingredients.bun.name) return true;
  return false;
}

export function checkFillings(ingredients: TIngredientsConstructor) {
  if (ingredients.fillings.length === 0) return true;
  return false;
}

export function getImgUrlList(
  ingredientsIdArray: Array<string>,
  ingredients: Array<TIngredient>
) {
  const imgList = ingredientsIdArray.map((id) => {
    const ingredientImgUrl = ingredients.find(
      (ingredient) => ingredient._id === id
    )?.image_mobile;
    return ingredientImgUrl;
  });
  const notDisplayedImgsQty = imgList.length - 5;
  const urlObj = { imgList: imgList.slice(0, 6), notDisplayedImgsQty };
  return urlObj;
}

export function countTotalById(
  ingredientsIdArray: Array<string>,
  ingredients: Array<TIngredient>
) {
  let total: number = 0;
  ingredientsIdArray.forEach((id) => {
    total += ingredients.find((ingredient) => ingredient._id === id)!.price;
  });
  return total;
}
