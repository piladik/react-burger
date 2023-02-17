import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { ProfileNavigation } from "../components/profile/profile-navigation";
import { ProfileInfo } from "../components/profile/profile-info";
import "./profile-page.module.css";

export function ProfilePage() {
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
      <ProfileInfo />
    </main>
  );
}
