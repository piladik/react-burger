import { useAppSelector } from "../services/hooks/hooks";
import { useLocation, Navigate } from "react-router-dom";
import { ReactElement } from "react";

function ProtectedRouteElement({
  onlyUnAuth = false,
  children,
}: {
  onlyUnAuth: boolean;
  children: ReactElement;
}): JSX.Element {
  const { isLoggedIn, user } = useAppSelector((store) => store.auth);
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  if (!isLoggedIn && !onlyUnAuth) {
    return <Navigate to={"/login"} replace state={{ from: location }} />;
  }

  if (onlyUnAuth && user) {
    return <Navigate to={from} />;
  }

  return children;
}

export default ProtectedRouteElement;
