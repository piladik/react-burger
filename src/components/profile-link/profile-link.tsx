import { useAppDispatch } from "../../services/hooks/hooks";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

// Styles
import styles from "./profile-link.module.css";

// ACTIONS_REDUCERS
import { logout } from "../../services/slices/auth";

export function ProfileLink({ name }: { name: string }): JSX.Element | null {
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };

  const active = `${styles.profile_link} ${styles.active}`;
  const inactive = `${styles.profile_link}`;
  switch (name) {
    case "Профиль":
      return (
        <li className={styles.list_item}>
          <NavLink
            className={({ isActive }) => (isActive ? active : inactive)}
            to={"/profile"}
            end
          >
            {name}
          </NavLink>
        </li>
      );
    case "История заказов":
      return (
        <li className={styles.list_item}>
          <NavLink
            className={({ isActive }) => (isActive ? active : inactive)}
            to={"orders"}
          >
            {name}
          </NavLink>
        </li>
      );
    case "Выход":
      return (
        <li className={styles.list_item} onClick={handleLogout}>
          <NavLink
            className={({ isActive }) => (isActive ? active : inactive)}
            to={"/"}
          >
            {name}
          </NavLink>
        </li>
      );
    default:
      return null;
  }
}

ProfileLink.propTypes = {
  name: PropTypes.string.isRequired,
};
