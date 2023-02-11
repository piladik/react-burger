import navStyles from "./app-header.module.css";
import {
  BurgerIcon,
  ListIcon,
  Logo,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useSelector } from "react-redux";

function Header() {
  const pathname = window.location.pathname;
  const user = useSelector((store) => store.auth.user);
  const username = user.username ? user.username : "Личный кабинет";

  const splitLocation = pathname.split("/");
  return (
    <header className={navStyles.header}>
      <nav className={navStyles.nav}>
        <div className={navStyles.nav_box}>
          <a
            className={`${navStyles.nav_link} ${
              splitLocation[1] === "" ? navStyles.nav_link_active : ""
            }`}
            href="/"
          >
            <BurgerIcon />
            <p>Конструктор</p>
          </a>
          <a
            className={`${navStyles.nav_link} ${
              splitLocation[1] === "history" ? navStyles.nav_link_active : ""
            }`}
            href="/history"
          >
            <ListIcon type="primary" />
            <p>Лента заказов</p>
          </a>
        </div>
        <div className={`${navStyles.nav_box} ${navStyles.nav_box_logo}`}>
          <a href="/">
            <Logo />
          </a>
        </div>
        <div className={navStyles.nav_box}>
          <a
            className={`${navStyles.nav_link} ${
              splitLocation[1] === "profile" ? navStyles.nav_link_active : ""
            }`}
            href="/profile"
          >
            <ProfileIcon type="primary" />
            <p>{username}</p>
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
