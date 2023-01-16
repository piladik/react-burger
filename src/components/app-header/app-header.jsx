import navStyles from "./app-header.module.css";
import {
  BurgerIcon,
  ListIcon,
  Logo,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

function Header() {
  return (
    <header className={navStyles.header}>
      <nav className={navStyles.nav}>
        <div className={navStyles.nav_box}>
          <a
            className={`${navStyles.nav_link} ${navStyles.nav_link_active}`}
            href="/"
          >
            <BurgerIcon />
            <p>Конструктор</p>
          </a>
          <a className={navStyles.nav_link} href="/">
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
          <a className={navStyles.nav_link} href="/">
            <ProfileIcon type="primary" />
            <p>Личный кабинет</p>
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
