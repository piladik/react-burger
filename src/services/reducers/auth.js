import {
  AUTH_REGISTER_REQUEST,
  AUTH_REGISTER_SUCCESS,
  AUTH_REGISTER_FAILED,
  AUTH_LOGIN_REQUEST,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGIN_FAILED,
  AUTH_LOGOUT_REQUEST,
  AUTH_LOGOUT_SUCCESS,
  AUTH_LOGOUT_FAILED,
  AUTH_SET_USER_REQUEST,
  AUTH_SET_USER_SUCCESS,
  AUTH_SET_USER_FAILED,
} from "../actions/auth";

const initialState = {
  user: { username: "", email: "" },
  isLoggedIn: false,

  registerRequest: false,
  registerFailed: false,

  loginRequest: false,
  loginFailed: false,

  logoutRequest: false,
  logoutFailed: false,

  setUserRequest: false,
  setUserFailed: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_REGISTER_REQUEST: {
      return {
        ...state,
        registerRequest: true,
      };
    }
    case AUTH_REGISTER_SUCCESS: {
      return {
        ...state,
        registerRequest: false,
        registerFailed: false,
      };
    }
    case AUTH_REGISTER_FAILED: {
      return {
        ...state,
        registerRequest: false,
        registerFailed: true,
        isLoggedIn: false,
      };
    }
    case AUTH_LOGIN_REQUEST: {
      return {
        ...state,
        loginRequest: true,
      };
    }
    case AUTH_LOGIN_SUCCESS: {
      const { user } = action;
      return {
        ...state,
        loginRequest: false,
        loginFailed: false,
        isLoggedIn: true,
        user: { ...state.user, username: user.name, email: user.email },
      };
    }
    case AUTH_LOGIN_FAILED: {
      return {
        ...state,
        loginRequest: false,
        loginFailed: true,
        isLoggedIn: false,
      };
    }
    case AUTH_LOGOUT_REQUEST: {
      return {
        ...state,
        logoutRequest: true,
      };
    }
    case AUTH_LOGOUT_SUCCESS: {
      return {
        ...state,
        logoutRequest: false,
        logoutFailed: false,
        isLoggedIn: false,
      };
    }
    case AUTH_LOGOUT_FAILED: {
      return {
        ...state,
        logoutRequest: false,
        logoutFailed: true,
        isLoggedIn: true,
      };
    }
    case AUTH_SET_USER_REQUEST: {
      return {
        ...state,
        setUserRequest: true,
      };
    }
    case AUTH_SET_USER_SUCCESS: {
      const { user } = action;
      return {
        ...state,
        setUserRequest: false,
        setUserFailed: false,
        isLoggedIn: true,
        user: { ...state.user, username: user.name, email: user.email },
      };
    }
    case AUTH_SET_USER_FAILED: {
      return {
        ...state,
        setUserRequest: false,
        setUserFailed: true,
        isLoggedIn: false,
      };
    }
    default: {
      return state;
    }
  }
};
