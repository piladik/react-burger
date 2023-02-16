import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";

// Styles
import styles from "./app.module.css";

// Components
import Header from "../app-header/app-header";
import IngredientDetails from "../ingredient-details/ingredient-details";

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
import Modal from "../modal/modal";

// COOKIES

function App() {
  const dispatch = useDispatch();
  const location = useLocation();
  const background = location.state && location.state.background;
  const navigate = useNavigate();

  const handleModalClose = () => {
    navigate(-1);
  };

  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch]);

  return (
    <div className={`${styles.App} text text_type_main-default`}>
      <Header />
      <Routes location={background || location}>
        <Route path="/" element={<ConstructorPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/ingredients/:id" element={<IngredientDetails />} />
      </Routes>
      {background && (
        <Routes>
          <Route
            path="/ingredients/:id"
            element={
              <Modal
                handleModalClose={handleModalClose}
                header={"Детали ингредиента"}
              >
                <IngredientDetails />
              </Modal>
            }
          />
        </Routes>
      )}
    </div>
  );
}

export default App;
