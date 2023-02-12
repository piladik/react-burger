import {
  EmailInput,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./profile.module.css";
import { useState } from "react";

export function ProfileInfo() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "********",
  });

  const onChange = (e) => {
    setForm((currentState) => {
      const newState = {
        ...currentState,
        [e.target.name]: e.target.value,
      };
      return newState;
    });
    console.log(form);
  };

  return (
    <form className={styles.profile_info}>
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
        <Button htmlType="button" type="primary" size="medium">
          Сохранить
        </Button>
      </div>
    </form>
  );
}
