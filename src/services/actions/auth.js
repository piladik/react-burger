import {
  registerRequest,
  loginRequest,
  logoutRequest,
} from "../../utils/burger-api";
import { setCookie, deleteCookie } from "../../utils/cookie";

export const AUTH_REGISTER_REQUEST = "AUTH/REGISTER_REQUEST";
export const AUTH_REGISTER_SUCCESS = "AUTH/REGISTER_SUCCESS";
export const AUTH_REGISTER_FAILED = "AUTH/REGISTER_FAILED";

export const AUTH_LOGIN_REQUEST = "AUTH/LOGIN_REQUEST";
export const AUTH_LOGIN_SUCCESS = "AUTH/LOGIN_SUCCESS";
export const AUTH_LOGIN_FAILED = "AUTH/LOGIN_FAILED";

export const AUTH_LOGOUT_REQUEST = "AUTH/LOGOUT_REQUEST";
export const AUTH_LOGOUT_SUCCESS = "AUTH/LOGOUT_SUCCESS";
export const AUTH_LOGOUT_FAILED = "AUTH/LOGOUT_FAILED";

export function register(form) {
  return function (dispatch) {
    dispatch({
      type: AUTH_REGISTER_REQUEST,
    });
    registerRequest(form)
      .then((data) => {
        dispatch({
          type: AUTH_REGISTER_SUCCESS,
        });
      })
      .catch(() => {
        dispatch({
          type: AUTH_REGISTER_FAILED,
        });
      });
  };
}

export function login(form) {
  return function (dispatch) {
    dispatch({
      type: AUTH_LOGIN_REQUEST,
    });
    loginRequest(form)
      .then((data) => {
        dispatch({
          type: AUTH_LOGIN_SUCCESS,
          ...data,
        });
        return data;
      })
      .then((data) => {
        setCookie(data.accessToken);
        window.localStorage.setItem("refreshToken", data.refreshToken);
      })
      .catch(() => {
        dispatch({
          type: AUTH_LOGIN_FAILED,
        });
      });
  };
}

export function logout(token) {
  return function (dispatch) {
    dispatch({
      type: AUTH_LOGOUT_REQUEST,
    });
    logoutRequest(token)
      .then(() => {
        dispatch({
          type: AUTH_LOGOUT_SUCCESS,
        });
      })
      .then(() => {
        deleteCookie("accessToken");
        window.localStorage.clear();
      })
      .catch(() => {
        dispatch({
          type: AUTH_LOGOUT_FAILED,
        });
      });
  };
}
