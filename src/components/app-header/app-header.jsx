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
          <div className={`${navStyles.nav_item} ${navStyles.nav_item_active}`}>
            <BurgerIcon />
            <a className={`${navStyles.nav_link} ${navStyles.active}`} href="/">
              Конструктор
            </a>
          </div>
          <div className={navStyles.nav_item}>
            <ListIcon type="primary" />
            <a className={navStyles.nav_link} href="/">
              Лента заказов
            </a>
          </div>
        </div>
        <div className={`${navStyles.nav_box} ${navStyles.nav_box_logo}`}>
          <a href="/">
            <Logo />
          </a>
        </div>
        <div className={navStyles.nav_box}>
          <div className={navStyles.nav_item}>
            <ProfileIcon type="primary" />
            <a className={navStyles.nav_link} href="/">
              Личный кабинет
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
