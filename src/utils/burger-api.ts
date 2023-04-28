import { getCookie, setCookie } from "./cookie";

import {
  IResponse,
  ILogin,
  IRegister,
  IResetPassword,
  IUpdateuser,
  IRefreshData,
  IOptions,
  IRefreshOptions,
} from "./types/api-types";

const BURGER_BASE_API = "https://norma.nomoreparties.space/api";

async function request<T>(url: string, options?: IOptions): Promise<T> {
  return await fetch(url, options).then(checkResponse);
}

const checkResponse = <T>(res: IResponse<T>): Promise<T> => {
  if (!res.ok) {
    return res.json().then((err) => Promise.reject(err));
  } else {
    return res.json();
  }
};

export const requestWithRefresh = async <T>(
  url: string,
  options: IRefreshOptions
): Promise<T> => {
  try {
    return await request(url, options);
  } catch (err) {
    if (err.message === "jwt expired" || "You should be authorised") {
      const refreshData: IRefreshData = await updateTokenRequest();
      if (!refreshData.success) {
        return Promise.reject(refreshData);
      }
      localStorage.setItem("refreshToken", refreshData.refreshToken as string);
      setCookie(refreshData.accessToken as string);
      options.headers["Authorization"] = refreshData.accessToken as string;
      return await request(url, options);
    } else if (err.message === "Token is invalid") {
      return Promise.reject(err);
    } else {
      return Promise.reject(err);
    }
  }
};

export const getIngredientsRequest = async () => {
  return await request(`${BURGER_BASE_API}/ingredients`);
};

export const postOrderRequest = async (ingredientsId: Array<string>) => {
  return await request(`${BURGER_BASE_API}/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: getCookie("accessToken"),
    },
    body: JSON.stringify({ ingredients: ingredientsId }),
  });
};

export const registerRequest = async (form: IRegister) => {
  const { email, password, name } = form;
  return await request(`${BURGER_BASE_API}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: email, password: password, name: name }),
  });
};

export const loginRequest = async (form: ILogin) => {
  const { email, password } = form;
  return await request(`${BURGER_BASE_API}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: email, password: password }),
  });
};

export const logoutRequest = async () => {
  return await request(`${BURGER_BASE_API}/auth/logout`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ token: localStorage.getItem("refreshToken") }),
  });
};

export const updateTokenRequest = async (): Promise<IRefreshData> => {
  return await request(`${BURGER_BASE_API}/auth/token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ token: localStorage.getItem("refreshToken") }),
  });
};

export const getUserRequest = async () => {
  return await requestWithRefresh(`${BURGER_BASE_API}/auth/user`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: getCookie("accessToken"),
    },
  });
};

export const updateUserRequest = async (form: IUpdateuser) => {
  const inputs: IUpdateuser = { ...form };
  if (!inputs.password) {
    delete inputs.password;
  }
  return await requestWithRefresh(`${BURGER_BASE_API}/auth/user`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: getCookie("accessToken"),
    },
    body: JSON.stringify({ ...inputs }),
  });
};

export const resetPasswordRequest = async <T>(email: string): Promise<T> => {
  return await request(`${BURGER_BASE_API}/password-reset`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  });
};

export const resetPasswordConfirm = async (form: IResetPassword) => {
  const { password, token } = form;
  return await request(`${BURGER_BASE_API}/password-reset/reset`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ password, token }),
  });
};
