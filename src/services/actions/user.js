import {
  updateTokenRequest,
  getUserRequest,
  updateUserRequest,
} from "../../utils/burger-api";
import { setCookie } from "../../utils/cookie";

export const USER_SET_USER_REQUEST = "USER/SET_USER_REQUEST";
export const USER_SET_USER_SUCCESS = "USER/SET_USER_SUCCESS";
export const USER_SET_USER_FAILED = "USER/SET_USER_FAILED";

export const USER_UPDATE_USER_REQUEST = "USER/UPDATE_USER_REQUEST";
export const USER_UPDATE_USER_SUCCESS = "USER/UPDATE_USER_SUCCESS";
export const USER_UPDATE_USER_FAILED = "USER/UPDATE_USER_FAILED";

export function setUser(accessToken, refreshToken) {
  return async function (dispatch) {
    dispatch({
      type: USER_SET_USER_REQUEST,
    });
    if (!accessToken) {
      await updateTokenRequest(refreshToken).then((res) => {
        setCookie(res.accessToken);
        window.localStorage.setItem("refreshToken", res.refreshToken);
      });
    }
    if (accessToken || refreshToken) {
      await getUserRequest()
        .then((res) => {
          dispatch({
            type: USER_SET_USER_SUCCESS,
            ...res,
          });
        })
        .catch(() => {
          dispatch({
            type: USER_SET_USER_FAILED,
          });
        });
    }
  };
}

export function updateUser(form) {
  return function (dispatch) {
    console.log(form);
    dispatch({
      type: USER_UPDATE_USER_REQUEST,
    });
    updateUserRequest(form)
      .then((res) => {
        console.log(res);
        dispatch({ type: USER_UPDATE_USER_SUCCESS, ...res });
      })
      .catch(() => {
        dispatch({ type: USER_UPDATE_USER_FAILED });
      });
  };
}
