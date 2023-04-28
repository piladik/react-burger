import { Outlet } from "react-router-dom";

// Styles
import "./profile-shared-layout.module.css";

// Components
import { ProfileNavigation } from "../components/profile-navigation/profile-navigation";

export function ProfileSharedLayout(): JSX.Element {
  return (
    <main className="mt-30">
      <ProfileNavigation />
      <Outlet />
    </main>
  );
}
