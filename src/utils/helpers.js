export function countTotal(state) {
  const isEmpty = isEmptyConstuctor(state);
  if (isEmpty) return 0;
  let bunTotal = 0;
  let fillingTotal = 0;
  if (state.bun.price) {
    bunTotal = state.bun.price * 2;
  }
  if (state.fillings.length >= 1) {
    fillingTotal = state.fillings.reduce(
      (accumulator, currentObj) => accumulator + currentObj.price,
      0
    );
  }
  return bunTotal + fillingTotal;
}

export function getIngredientsId(bun, fillings) {
  const ingredientsId = [];
  ingredientsId.push(bun._id);
  fillings.forEach((el) => {
    ingredientsId.push(el._id);
  });
  return ingredientsId;
}

export function isEmptyConstuctor(ingredients) {
  if (!ingredients.bun.name && ingredients.fillings.length === 0) {
    return true;
  } else {
    return false;
  }
}

export function checkBun(ingredients) {
  if (!ingredients.bun.name) return true;
  return false;
}

export function checkFillings(ingredients) {
  if (ingredients.fillings.length === 0) return true;
  return false;
}
