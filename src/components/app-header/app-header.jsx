import styles from "./app-header.module.css";
import {
  BurgerIcon,
  ListIcon,
  Logo,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

function Header() {
  const pathname = window.location.pathname;

  const splitLocation = pathname.split("/");
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.nav_box}>
          <a
            className={`${styles.nav_link} ${
              splitLocation[1] === "" ? styles.nav_link_active : ""
            }`}
            href="/"
          >
            <BurgerIcon />
            <p>Конструктор</p>
          </a>
          <a
            className={`${styles.nav_link} ${
              splitLocation[1] === "history" ? styles.nav_link_active : ""
            }`}
            href="/history"
          >
            <ListIcon type="primary" />
            <p>Лента заказов</p>
          </a>
        </div>
        <div className={`${styles.nav_box} ${styles.nav_box_logo}`}>
          <a href="/">
            <Logo />
          </a>
        </div>
        <div className={styles.nav_box}>
          <a
            className={`${styles.nav_link} ${
              splitLocation[1] === "profile" ? styles.nav_link_active : ""
            }`}
            href="/profile"
          >
            <ProfileIcon type="primary" />
            <p>Личный кабинет</p>
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
