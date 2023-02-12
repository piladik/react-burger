import { ProfileNavigation } from "../components/profile/profile-navigation";
import { ProfileInfo } from "../components/profile/profile-info";
import styles from "./profile-page.module.css";

export function ProfilePage() {
  return (
    <main className="mt-30">
      <ProfileNavigation />
      <ProfileInfo />
    </main>
  );
}
