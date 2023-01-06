import { ListIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import navStyles from "./header.module.css";

function HeaderOrderList(props) {
    return (
        <div className={navStyles.nav_item}>
            <ListIcon type="primary" />
            <a className={navStyles.nav_link} href="#">{props.text}</a>
        </div>
    )
}

export default HeaderOrderList