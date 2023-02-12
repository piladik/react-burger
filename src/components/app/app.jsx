import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Styles
import styles from "./app.module.css";

// Components
import Header from "../app-header/app-header";

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

// COOKIES

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch]);

  return (
    <div className={`${styles.App} text text_type_main-default`}>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ConstructorPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/reset-password" element={<ResetPasswordPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
