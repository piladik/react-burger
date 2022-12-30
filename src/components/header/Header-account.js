import { ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import navStyles from "./Header.module.css";

function HeaderAccount(props) {
    return (
        <div className={navStyles.nav_item}>
            <ProfileIcon type="primary" />
            <a className={navStyles.nav_link} href="#">{props.text}</a>
        </div>
    )
}

export default HeaderAccount