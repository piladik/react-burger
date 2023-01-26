export function countTotal(state) {
  let bunTotal = 0;
  let fillingTotal = 0;
  if (state.bun.price) {
    bunTotal = state.bun.price * 2;
  }
  if (state.fillings.length > 1) {
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
