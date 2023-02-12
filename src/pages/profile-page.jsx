import {
  EmailInput,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import styles from "./profile-page.module.css";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";

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
  const dispatch = useDispatch();
  // const user = useSelector((store) => store.user.user);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "********",
  });

  // useEffect(() => {
  //   setForm({ ...form, name: user.username, email: user.email });
  // }, [user, setForm]);

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    // dispatch(updateUser(form));
  };

  return (
    <form className={styles.profile_info} onSubmit={submitForm}>
      <div>
        <EmailInput
          value={form.name}
          name={"name"}
          placeholder="Имя"
          isIcon={true}
          error={false}
          onChange={onChange}
        />
      </div>
      <div className="mt-6">
        <EmailInput
          value={form.email}
          name={"email"}
          placeholder="Логин"
          isIcon={true}
          onChange={onChange}
        />
      </div>
      <div className="mt-6 mb-6">
        <PasswordInput
          value={form.password}
          name={"password"}
          icon="EditIcon"
          onChange={onChange}
        />
      </div>
      <div>
        <Button htmlType="button" type="secondary" size="medium">
          Отмена
        </Button>
        <Button
          htmlType="button"
          type="primary"
          size="medium"
          onSubmit={submitForm}
        >
          Сохранить
        </Button>
      </div>
    </form>
  );
}
