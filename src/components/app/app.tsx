import { useEffect, useState } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../services/hooks/hooks";

// Styles
import styles from "./app.module.css";

// Components
import Header from "../app-header/app-header";
import IngredientDetails from "../ingredient-details/ingredient-details";
import ProtectedRouteElement from "../protected-route-element";
import Preloader from "../preloader/preloader";
import Modal from "../modal/modal";

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
import { fetchIngredients } from "../../services/slices/ingredients";
import { getUser } from "../../services/slices/auth";
import { ProfileInfo } from "../profile-info/profile-info";
import { ProfileOrders } from "../profile-orders/profile-orders";
import { FeedPage } from "../../pages/feed-page";
import { FeedShowOrderPage } from "../../pages/feed-show-order-page";
import { FeedShowOrder } from "../feed-show-order/feed-show-order";
import {
  connect as connectWsFeed,
  disconnect as disconnectWsFeed,
} from "../../services/actions/ws-feed";
import {
  connect as connectWsProfile,
  disconnect as disconnectWsProfile,
} from "../../services/actions/ws-profile";

// UTILS
import { WS_ORDERS_API, WS_PROFILE_ORDERS_API } from "../../utils/url";
import { getCookie } from "../../utils/cookie";

function App(): JSX.Element {
  const [loading, setLoading] = useState(true);
  const dispatch = useAppDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const { authChecked } = useAppSelector((store) => store.auth);
  const { ingredientsLoaded } = useAppSelector((store) => store.ingredients);
  const accessToken = getCookie("accessToken")?.slice(7);

  const background = location.state && location.state.background;

  useEffect(() => {
    dispatch(fetchIngredients());
    dispatch(getUser());
    setLoading(false);
  }, [dispatch]);

  useEffect(() => {
    if (location.pathname.includes("/feed")) {
      dispatch(connectWsFeed(WS_ORDERS_API));
    } else {
      dispatch(disconnectWsFeed());
    }
  }, [location.pathname, dispatch]);

  useEffect(() => {
    if (location.pathname.includes("/profile/orders")) {
      dispatch(
        connectWsProfile(`${WS_PROFILE_ORDERS_API}?token=${accessToken}`)
      );
    } else {
      dispatch(disconnectWsProfile());
    }
  }, [location.pathname, dispatch, accessToken]);

  const handleModalClose = () => {
    navigate(-1);
  };

  return (
    <>
      {loading && !ingredientsLoaded && !authChecked ? (
        <Preloader />
      ) : (
        <div className={`${styles.App} text text_type_main-default`}>
          <Header />
          <Routes location={background || location}>
            <Route path="/" element={<ConstructorPage />} />
            <Route path="/feed">
              <Route index element={<FeedPage />} />
              <Route
                path=":id"
                element={<FeedShowOrderPage isProfileOrder={false} />}
              />
            </Route>
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
            <Route
              path="/profile/orders/:id"
              element={
                <ProtectedRouteElement onlyUnAuth={false}>
                  <FeedShowOrderPage isProfileOrder={true} />
                </ProtectedRouteElement>
              }
            />
            <Route path="/ingredients/:id" element={<IngredientDetails />} />
          </Routes>
          {background && (
            <Routes>
              <Route
                path="/ingredients/:id"
                element={
                  <Modal
                    handleModalClose={handleModalClose}
                    showId={false}
                    isProfileOrder={false}
                    header={"Детали ингредиента"}
                  >
                    <IngredientDetails />
                  </Modal>
                }
              />
              <Route
                path="/feed/:id"
                element={
                  <Modal
                    handleModalClose={handleModalClose}
                    showId={true}
                    isProfileOrder={false}
                  >
                    <FeedShowOrder isModal={true} isProfileOrder={false} />
                  </Modal>
                }
              />
              <Route
                path="/profile/orders/:id"
                element={
                  <Modal
                    handleModalClose={handleModalClose}
                    showId={true}
                    isProfileOrder={true}
                  >
                    <ProtectedRouteElement onlyUnAuth={false}>
                      <FeedShowOrder isModal={true} isProfileOrder={true} />
                    </ProtectedRouteElement>
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
