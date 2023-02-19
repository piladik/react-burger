import { useSelector } from "react-redux";
import { useLocation, Navigate } from "react-router-dom";

function ProtectedRouteElement({ onlyUnAuth = false, children }) {
  const { isLoggedIn, user } = useSelector((store) => store.auth);
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  if (!isLoggedIn && !onlyUnAuth) {
    return <Navigate to={"/login"} replace state={{ from: location }} />;
  }

  if (onlyUnAuth && user.hasOwnProperty("email")) {
    return <Navigate to={from} />;
  }

  return children;
}

export default ProtectedRouteElement;
