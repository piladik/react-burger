import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { ProfileNavigation } from "../components/profile-navigation/profile-navigation";
import { Outlet } from "react-router-dom";
import "./profile-page.module.css";

export function ProfileSharedLayout() {
  const { isLoggedIn } = useSelector((store) => store.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  });
  return (
    <main className="mt-30">
      <ProfileNavigation />
      <Outlet />
    </main>
  );
}
