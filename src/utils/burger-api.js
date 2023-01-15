import BURGER_API_URL from "../api/api-url";

const checkResponse = (res) => {
  if (!res.ok) {
    const message = `Something went wrong. Status code: ${res.status}`;
    throw new Error(message);
  }

  return 0;
};

const getIngredients = async () => {
  const res = await fetch(`${BURGER_API_URL}/ingredients`);

  checkResponse(res);

  const ingredients = await res.json();
  return ingredients;
};

export default getIngredients;
