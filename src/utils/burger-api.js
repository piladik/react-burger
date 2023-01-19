const BURGER_API_URL = "https://norma.nomoreparties.space/api";
const ORDER_API_URL = "https://norma.nomoreparties.space/api/orders";

const checkResponse = (res) => {
  if (!res.ok) {
    const message = `Something went wrong. Status code: ${res.status}`;
    throw new Error(message);
  }

  return 0;
};

export const getIngredients = async () => {
  const res = await fetch(`${BURGER_API_URL}/ingredients`);

  checkResponse(res);

  const ingredients = await res.json();
  return ingredients;
};

export const postOrder = async (ingredientsId) => {
  const res = await fetch(ORDER_API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ingredients: ingredientsId }),
  });

  checkResponse(res);

  const orderId = await res.json();
  return orderId;
};
