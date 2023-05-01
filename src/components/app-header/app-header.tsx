import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../services/reducers";

// Styles

import styles from "./app-header.module.css";

// Components
import {
  BurgerIcon,
  ListIcon,
  Logo,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

function Header(): JSX.Element {
  const { user } = useSelector((store: RootState) => store.auth);
  const active = `${styles.nav_link} ${styles.nav_link_active}`;
  const inactive = `${styles.nav_link}`;

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.nav_box}>
          <NavLink
            className={({ isActive }) => (isActive ? active : inactive)}
            to="/"
          >
            <BurgerIcon type="primary" />
            <p>Конструктор</p>
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? active : inactive)}
            to="/history"
          >
            <ListIcon type="primary" />
            <p>Лента заказов</p>
          </NavLink>
        </div>
        <div className={`${styles.nav_box} ${styles.nav_box_logo}`}>
          <NavLink to="/">
            <Logo />
          </NavLink>
        </div>
        <div className={styles.nav_box}>
          <NavLink
            className={({ isActive }) => (isActive ? active : inactive)}
            to="/profile"
          >
            <ProfileIcon type="primary" />
            <p>{user ? user.username : "Личный кабинет"}</p>
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Header;
