const BURGER_BASE_API = "https://norma.nomoreparties.space/api";

async function request(url, options) {
  return fetch(url, options).then(checkResponse);
}

const checkResponse = (res) => {
  if (!res.ok) {
    const message = `Something went wrong. Status code: ${res.status}`;
    throw new Error(message);
  }

  return res;
};

export const getIngredients = async () => {
  const res = await request(`${BURGER_BASE_API}/ingredients`);

  const ingredients = await res.json();
  return ingredients;
};

export const postOrder = async (ingredientsId) => {
  const res = await request(`${BURGER_BASE_API}/orders`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ingredients: ingredientsId }),
  });

  const order = await res.json();
  return order;
};
