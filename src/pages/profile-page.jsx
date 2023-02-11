import {
  Input,
  EmailInput,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import styles from "./profile.module.css";

function ProfilePage() {
  return (
    <main className="mt-30">
      <ProfileNavigation />
      <ProfileInfo />
    </main>
  );
}

export { ProfilePage };

function ProfileNavigation() {
  const [active, setActive] = useState("Профиль");
  return (
    <section className={styles.profile_navigation}>
      <ul className="mr-15 text text_type_main-medium">
        <ProfileLink name={"Профиль"} active={active} />
        <ProfileLink name={"История заказов"} active={active} />
        <ProfileLink name={"Выход"} active={active} />
      </ul>
      <p className="mt-20 text text_type_main-default text_color_inactive">
        В этом разделе вы можете изменить свои персональные данные
      </p>
    </section>
  );
}

function ProfileLink({ name, active }) {
  const className =
    active === name
      ? `${styles.profile_link} ${styles.active}`
      : `${styles.profile_link}`;
  return <li className={className}>{name}</li>;
}

function ProfileInfo() {
  const { username, email } = useSelector((store) => store.auth.user);

  return (
    <section>
      <div>
        <NameChange username={username} />
      </div>
      <div className="mt-6">
        <EmailChange email={email} />
      </div>
      <div className="mt-6">
        <PasswordChange />
      </div>
    </section>
  );
}

function NameChange({ username }) {
  const [value, setValue] = useState(username);
  const [isChangeable, setIsChangeable] = useState(false);
  const onIconClick = () => {
    setIsChangeable(!isChangeable);
  };

  return (
    <>
      {isChangeable ? (
        <Input
          type={"text"}
          placeholder={"Имя"}
          onChange={(e) => setValue(e.target.value)}
          icon={"EditIcon"}
          value={value}
          name={"name"}
          onIconClick={onIconClick}
          size={"default"}
        />
      ) : (
        <Input
          type={"text"}
          placeholder={"Имя"}
          onChange={(e) => setValue(e.target.value)}
          icon={"EditIcon"}
          value={value}
          name={"name"}
          onIconClick={onIconClick}
          size={"default"}
          disabled
        />
      )}
    </>
  );
}

function EmailChange({ email }) {
  const [value, setValue] = useState(email);
  const [isChangeable, setIsChangeable] = useState(false);
  const onIconClick = () => {
    setIsChangeable(!isChangeable);
  };

  return (
    <>
      {isChangeable ? (
        <EmailInput
          onChange={(e) => setValue(e.target.value)}
          value={value}
          name={"email"}
          isIcon={false}
          onIconClick={onIconClick}
        />
      ) : (
        <EmailInput
          value={value}
          name={"email"}
          placeholder="Логин"
          isIcon={true}
          onIconClick={onIconClick}
        />
      )}
    </>
  );
}

function PasswordChange() {
  const [value, setValue] = useState("asdsdasadsad");
  const [isChangeable, setIsChangeable] = useState(false);
  const onIconClick = () => {
    setIsChangeable(!isChangeable);
  };

  return (
    <>
      {isChangeable ? (
        <PasswordInput
          onChange={(e) => setValue(e.target.value)}
          value={value}
          name={"password"}
          extraClass="mb-2"
          onIconClick={onIconClick}
        />
      ) : (
        <PasswordInput
          value={value}
          name={"password"}
          icon="EditIcon"
          onIconClick={onIconClick}
        />
      )}
    </>
  );
}
