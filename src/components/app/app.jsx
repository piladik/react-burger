import { useEffect, useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Styles
import styles from "./app.module.css";

// Components
import Header from "../app-header/app-header";
import { ProtectedRouteElement } from "../protected-route";

// Pages
import {
  LoginPage,
  RegisterPage,
  ForgotPasswordPage,
  ConstructorPage,
  ResetPasswordPage,
  ProfilePage,
} from "../../pages";

// ACTIONS-REDUCERS
import { getIngredients } from "../../services/actions/ingredients";
import { setUser } from "../../services/actions/user";

// COOKIES
import { getCookie } from "../../utils/cookie";

function App() {
  const dispatch = useDispatch();

  const accessToken = getCookie("accessToken");
  const refreshToken = window.localStorage.getItem("refreshToken");

  if (accessToken || (!accessToken && refreshToken)) {
    dispatch(setUser(accessToken, refreshToken));
  }

  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch]);

  return (
    <div className={`${styles.App} text text_type_main-default`}>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<ProtectedRouteElement element={<ConstructorPage />} />}
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route
            path="/forgot-password"
            element={<ProtectedRouteElement element={<ForgotPasswordPage />} />}
          />
          <Route
            path="/reset-password"
            element={<ProtectedRouteElement element={<ResetPasswordPage />} />}
          />
          <Route
            path="/profile"
            element={<ProtectedRouteElement element={<ProfilePage />} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
