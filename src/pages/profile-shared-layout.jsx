import { ProfileNavigation } from "../components/profile-navigation/profile-navigation";
import { Outlet } from "react-router-dom";
import "./profile-shared-layout.module.css";

export function ProfileSharedLayout() {
  return (
    <main className="mt-30">
      <ProfileNavigation />
      <Outlet />
    </main>
  );
}
