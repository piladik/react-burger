import { Logo } from '@ya.praktikum/react-developer-burger-ui-components';
import HeaderConstructor from "./header-constructor"
import HeaderAccount from "./header-account";
import HeaderOrderlist from "./header-order-list";
import navStyles from "./header.module.css";

function Header() {
    return (
        <header className={navStyles.header}>
            <nav className={navStyles.nav}>
                <div className={navStyles.nav_box}>
                    <HeaderConstructor text="Конструктор"/>
                    <HeaderOrderlist text="Лента заказов"/>     
                </div>
                <div className={`${navStyles.nav_box} ${navStyles.nav_box_logo}`}>
                    <Logo />
                </div>
                <div className={navStyles.nav_box}>
                    <HeaderAccount text="Личный кабинет"/>
                </div>
            </nav>
        </header>
    )
}

export default Header