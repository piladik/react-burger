//Styles
import styles from "./profile-navigation.module.css";

// Components
import { ProfileLink } from "../profile-link/profile-link";

export function ProfileNavigation(): JSX.Element {
  return (
    <nav className={`mr-15 ${styles.profile_navigation}`}>
      <ul className="text text_type_main-medium">
        <ProfileLink name={"Профиль"} />
        <ProfileLink name={"История заказов"} />
        <ProfileLink name={"Выход"} />
      </ul>
      <p className="mt-20 text text_type_main-default text_color_inactive">
        В этом разделе вы можете изменить свои персональные данные
      </p>
    </nav>
  );
}
