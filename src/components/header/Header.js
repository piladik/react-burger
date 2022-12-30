import React from "react";

import { Logo } from '@ya.praktikum/react-developer-burger-ui-components';
import HeaderConstructor from "./Header-constructor.js";
import HeaderAccount from "./Header-account.js";
import HeaderOrderlist from "./Header-order-list.js";
import navStyles from "./Header.module.css";

function Header() {
    return (
        <header>
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