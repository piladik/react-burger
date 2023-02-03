const BURGER_BASE_API = "https://norma.nomoreparties.space/api";

async function request(url, options) {
  return fetch(url, options).then(checkResponse);
}

const checkResponse = (res) => {
  if (!res.ok) {
    const message = `Something went wrong. Status code: ${res.status}`;
    throw new Error(message);
  }

  return res.json();
};

export const getIngredientsRequest = async () => {
  return await request(`${BURGER_BASE_API}/ingredients`);
};

export const postOrderRequest = async (ingredientsId) => {
  return await request(`${BURGER_BASE_API}/orders`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ingredients: ingredientsId }),
  });
};
