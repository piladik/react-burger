import {
  USER_SET_USER_REQUEST,
  USER_SET_USER_SUCCESS,
  USER_SET_USER_FAILED,
  USER_UPDATE_USER_REQUEST,
  USER_UPDATE_USER_SUCCESS,
  USER_UPDATE_USER_FAILED,
} from "../actions/user";

const initialState = {
  user: { username: "", email: "" },
  isLoggedIn: false,

  setUserRequest: false,
  setUserFailed: false,

  updateUserRequest: false,
  updateUserFailed: false,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_SET_USER_REQUEST: {
      return {
        ...state,
        setUserRequest: true,
      };
    }
    case USER_SET_USER_SUCCESS: {
      const { user } = action;
      return {
        ...state,
        setUserRequest: false,
        setUserFailed: false,
        isLoggedIn: true,
        user: { ...state.user, username: user.name, email: user.email },
      };
    }
    case USER_SET_USER_FAILED: {
      return {
        ...state,
        setUserRequest: false,
        setUserFailed: true,
        isLoggedIn: false,
      };
    }
    case USER_UPDATE_USER_REQUEST: {
      return {
        ...state,
        updateUserRequest: true,
      };
    }
    case USER_UPDATE_USER_SUCCESS: {
      const { user } = action;
      return {
        ...state,
        updateUserRequest: false,
        updateUserFailed: false,
        user: { ...state.user, username: user.name, email: user.email },
      };
    }
    case USER_UPDATE_USER_FAILED: {
      return {
        ...state,
        updateUserRequest: false,
        updateUserFailed: true,
      };
    }
    default: {
      return state;
    }
  }
};
