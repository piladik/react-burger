import styles from "./profile.module.css";

export function ProfileLink({ name, active }) {
  const className =
    active === name
      ? `${styles.profile_link} ${styles.active}`
      : `${styles.profile_link}`;
  return <li className={className}>{name}</li>;
}
