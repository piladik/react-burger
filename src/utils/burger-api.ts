import { getCookie, setCookie } from "./cookie";

import {
  IResponse,
  ILoginForm,
  IRegisterForm,
  IResetPasswordForm,
  IUpdateUserForm,
  IRequestOptions,
  IAuthResponse,
  IRequestWithRefreshOptions,
  IGetIngredientsResponse,
  IOrderResponse,
} from "./types/api-types";

import { BURGER_BASE_API } from "./url";

async function request<T>(url: string, options?: IRequestOptions): Promise<T> {
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
  options: IRequestWithRefreshOptions
): Promise<T> => {
  try {
    return await request(url, options);
  } catch (err) {
    if (err.message === "jwt expired" || "You should be authorised") {
      const refreshData: IAuthResponse = await updateTokenRequest();
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

export const getIngredientsRequest =
  async (): Promise<IGetIngredientsResponse> => {
    return await request(`${BURGER_BASE_API}/ingredients`);
  };

export const postOrderRequest = async (
  ingredientsId: Array<string>
): Promise<IOrderResponse> => {
  return await request(`${BURGER_BASE_API}/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: getCookie("accessToken"),
    },
    body: JSON.stringify({ ingredients: ingredientsId }),
  });
};

export const registerRequest = async (
  form: IRegisterForm
): Promise<IAuthResponse> => {
  const { email, password, name } = form;
  return await request(`${BURGER_BASE_API}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: email, password: password, name: name }),
  });
};

export const loginRequest = async (
  form: ILoginForm
): Promise<IAuthResponse> => {
  const { email, password } = form;
  return await request(`${BURGER_BASE_API}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: email, password: password }),
  });
};

export const logoutRequest = async (): Promise<IAuthResponse> => {
  return await request(`${BURGER_BASE_API}/auth/logout`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ token: localStorage.getItem("refreshToken") }),
  });
};

export const updateTokenRequest = async (): Promise<IAuthResponse> => {
  return await request(`${BURGER_BASE_API}/auth/token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ token: localStorage.getItem("refreshToken") }),
  });
};

export const getUserRequest = async (): Promise<IAuthResponse> => {
  return await requestWithRefresh(`${BURGER_BASE_API}/auth/user`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: getCookie("accessToken"),
    },
  });
};

export const updateUserRequest = async (
  form: IUpdateUserForm
): Promise<IAuthResponse> => {
  const inputs: IUpdateUserForm = { ...form };
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

export const resetPasswordConfirm = async (form: IResetPasswordForm) => {
  const { password, token } = form;
  return await request(`${BURGER_BASE_API}/password-reset/reset`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ password, token }),
  });
};

export const getOrderInfoByNumber = async (orderNumber: number) => {
  return request(`${BURGER_BASE_API}/orders/${orderNumber}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
};
