import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  registerRequest,
  loginRequest,
  logoutRequest,
  getUserRequest,
  updateUserRequest,
} from "../../utils/burger-api";
import { setCookie } from "../../utils/cookie";
import { deleteCookie } from "../../utils/cookie";

const initialState = {
  registerStatus: "uninitialized",
  loginStatus: "uninitialized",
  logoutStatus: "uninitialized",
  getUserStatus: "uninitialized",
  updateUserStatus: "uninitialized",
  user: null,
  isLoggedIn: false,
  authChecked: false,
  error: null,
};

export const register = createAsyncThunk("auth/register", async (form) => {
  const res = await registerRequest(form);
  if (res.success) {
    setCookie(res.accessToken);
    window.localStorage.setItem("refreshToken", res.refreshToken);
  }
  return res;
});

export const login = createAsyncThunk("auth/login", async (form) => {
  const res = await loginRequest(form);
  if (res.success) {
    setCookie(res.accessToken);
    window.localStorage.setItem("refreshToken", res.refreshToken);
  }
  return res;
});

export const logout = createAsyncThunk("auth/logout", async (token) => {
  const res = await logoutRequest(token);
  if (res.success) {
    deleteCookie();
    window.localStorage.clear();
  }
  return res;
});

export const getUser = createAsyncThunk("auth/getUser", async () => {
  return await getUserRequest();
});

export const updateUser = createAsyncThunk("auth/updateUser", async (form) => {
  return await updateUserRequest(form);
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  // Можно добавить экшн authCheck
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.registerStatus = "loading";
      })
      .addCase(register.fulfilled, (state, action) => {
        const { name, email } = action.payload.user;
        state.registerStatus = "succeeded";
        state.isLoggedIn = true;
        state.user = {
          username: name,
          email: email,
        };
      })
      .addCase(register.rejected, (state, action) => {
        state.registerStatus = "failed";
        state.error = action.error;
        state.isLoggedIn = false;
      })
      .addCase(login.pending, (state) => {
        state.loginStatus = "loading";
      })
      .addCase(login.fulfilled, (state, action) => {
        const { name, email } = action.payload.user;
        state.loginStatus = "succeeded";
        state.isLoggedIn = true;
        state.user = {
          username: name,
          email: email,
        };
      })
      .addCase(login.rejected, (state, action) => {
        state.loginStatus = "failed";
        state.error = action.error;
        state.isLoggedIn = false;
      })
      .addCase(logout.pending, (state) => {
        state.logoutStatus = "loading";
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.logoutStatus = "succeeded";
        state.isLoggedIn = false;
        state.user = null;
      })
      .addCase(logout.rejected, (state, action) => {
        state.logoutStatus = "failed";
        state.error = action.error;
        state.isLoggedIn = false;
      })
      .addCase(getUser.pending, (state) => {
        state.getUserStatus = "loading";
      })
      .addCase(getUser.fulfilled, (state, action) => {
        const { name, email } = action.payload.user;
        state.getUserStatus = "succeeded";
        state.isLoggedIn = true;
        state.user = {
          username: name,
          email: email,
        };
        state.authChecked = true;
      })
      .addCase(getUser.rejected, (state, action) => {
        state.getUserStatus = "failed";
        state.error = action.error;
        state.isLoggedIn = false;
        state.authChecked = true;
      })
      .addCase(updateUser.pending, (state) => {
        state.updateUserStatus = "loading";
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        const { name, email } = action.payload.user;
        state.updateUserStatus = "succeeded";
        state.user = {
          username: name,
          email: email,
        };
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.updateUserStatus = "failed";
        state.error = action.error;
      });
  },
});

export default authSlice.reducer;
