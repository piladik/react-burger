import { getCookie } from "./cookie";

export const BURGER_BASE_API = "https://norma.nomoreparties.space/api";

async function request(url, options) {
  return fetch(url, options).then(checkResponse);
}

const checkResponse = (res) => {
  let message = null;
  let isError = false;
  if (!res.ok && res.status === 401) {
    message = `Missing refreshToken. Status code: ${res.status}. Need to login via login page`;
    isError = true;
  } else if (!res.ok) {
    message = `Something went wrong. Status code: ${res.status}`;
    isError = true;
  }

  if (isError) throw new Error(message);

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

export const registerRequest = async (form) => {
  const { email, password, name } = form;
  return await request(`${BURGER_BASE_API}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: email, password: password, name: name }),
  });
};

export const loginRequest = async (form) => {
  const { email, password } = form;
  return await request(`${BURGER_BASE_API}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: getCookie("accessToken"),
    },
    body: JSON.stringify({ email: email, password: password }),
  });
};

export const logoutRequest = async (token) => {
  return await request(`${BURGER_BASE_API}/auth/logout`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ token }),
  });
};

export const getUserRequest = async () => {
  return await request(`${BURGER_BASE_API}/auth/user`, {
    method: "GET",
    headers: {
      Authorization: getCookie("accessToken"),
    },
  });
};

export const updateTokenRequest = async (refreshToken) => {
  return await request(`${BURGER_BASE_API}/auth/token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ token: refreshToken }),
  });
};

export const updateUserRequest = async () => {
  return await request(`${BURGER_BASE_API}/auth/user`, {
    method: "PATCH",
    headers: {
      Authorization: getCookie("accessToken"),
    },
  });
};
