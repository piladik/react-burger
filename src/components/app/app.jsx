import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";

// Styles
import styles from "./app.module.css";

// Components
import Header from "../app-header/app-header";
import IngredientDetails from "../ingredient-details/ingredient-details";
import ProtectedRouteElement from "../protected-route-element";
import Preloader from "../preloader/preloader";

// Pages
import {
  LoginPage,
  RegisterPage,
  ForgotPasswordPage,
  ConstructorPage,
  ResetPasswordPage,
  ProfileSharedLayout,
} from "../../pages";

// ACTIONS-REDUCERS
import { getIngredients } from "../../services/actions/ingredients";
import Modal from "../modal/modal";
import { getUser } from "../../services/actions/auth";
import { ProfileInfo } from "../profile-info/profile-info";
import { ProfileOrders } from "../profile-orders/profile-orders";

// COOKIES

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const location = useLocation();
  const background = location.state && location.state.background;
  const navigate = useNavigate();

  const handleModalClose = () => {
    navigate(-1);
  };

  // Сюда нужно добавить preloader
  useEffect(() => {
    dispatch(getIngredients());
    dispatch(getUser());
    setLoading(false);
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <div className={`${styles.App} text text_type_main-default`}>
          <Header />
          <Routes location={background || location}>
            <Route path="/" element={<ConstructorPage />} />
            <Route
              path="/login"
              element={
                <ProtectedRouteElement onlyUnAuth={true}>
                  <LoginPage />
                </ProtectedRouteElement>
              }
            />
            <Route
              path="/register"
              element={
                <ProtectedRouteElement onlyUnAuth={true}>
                  <RegisterPage />
                </ProtectedRouteElement>
              }
            />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
            <Route path="/reset-password" element={<ResetPasswordPage />} />
            <Route path="/profile" element={<ProfileSharedLayout />}>
              <Route
                index
                element={
                  <ProtectedRouteElement onlyUnAuth={false}>
                    <ProfileInfo />
                  </ProtectedRouteElement>
                }
              />
              <Route
                path="orders"
                element={
                  <ProtectedRouteElement onlyUnAuth={false}>
                    <ProfileOrders />
                  </ProtectedRouteElement>
                }
              />
            </Route>
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
      )}
    </>
  );
}

export default App;
