import { Navigate } from "react-router-dom";
import { getCookie } from "../utils/cookie";

export function ProtectedRouteElement({ element }) {
  const accessToken = getCookie("accessToken");
  if (accessToken) {
    return element;
  } else {
    return <Navigate to="/login" />;
  }
}
