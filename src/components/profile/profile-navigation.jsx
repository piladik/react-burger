import styles from "./profile.module.css";
import { useState } from "react";
import { ProfileLink } from "./profile-link";

export function ProfileNavigation() {
  // Тут нужно доделать, чтобы активная кнопка подсвечивалась
  const [active, setActive] = useState("Профиль");
  return (
    <section className={styles.profile_navigation}>
      <ul className="mr-15 text text_type_main-medium">
        <ProfileLink name={"Профиль"} active={active} />
        <ProfileLink name={"История заказов"} active={active} />
        <ProfileLink name={"Выход"} active={active} />
      </ul>
      <p className="mt-20 text text_type_main-default text_color_inactive">
        В этом разделе вы можете изменить свои персональные данные
      </p>
    </section>
  );
}
