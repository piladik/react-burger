import { BurgerIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import navStyles from "./header.module.css";

function HeaderConstructor(props) {
    return (
        <div className={navStyles.nav_item}>
            <BurgerIcon />
            <a className={navStyles.nav_link} href="#">{props.text}</a>
        </div>
    )
}

export default HeaderConstructor