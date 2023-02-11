import {
  Button,
  PasswordInput,
  EmailInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { login } from "../services/actions/auth";

import styles from "./auth.module.css";

function LoginPage() {
  const { isLoggedIn } = useSelector((store) => store.auth);
  const [form, setForm] = useState({ email: "", password: "" });

  if (isLoggedIn) {
    return <Navigate to={"/"} />;
  }

  return (
    <main className={styles.main}>
      <LoginForm formObject={{ form, setForm }} />
    </main>
  );
}

export { LoginPage };

function LoginForm({ formObject }) {
  const { form } = formObject;
  const dispatch = useDispatch();
  const submitForm = (e) => {
    e.preventDefault();
    dispatch(login(form));
  };
  return (
    <form method="POST" action="/">
      <h1 className="text text_type_main-medium">Вход</h1>
      <div className="mt-6">
        <InputEmail formObject={formObject} />
      </div>
      <div className="mt-6">
        <InputPassword formObject={formObject} />
      </div>
      <div className="mt-6">
        <Button
          htmlType="button"
          type="primary"
          size="large"
          onClick={submitForm}
        >
          Нажми на меня
        </Button>
      </div>
      <p className="mt-20 text text_type_main-default text_color_inactive">
        Вы новый пользователь?{" "}
        <a className={styles.link} href="/register">
          Зарегистрироваться
        </a>
      </p>
      <p className="mt-4 text text_type_main-default text_color_inactive">
        Забыли пароль?{" "}
        <a className={styles.link} href="/forgot-password">
          Восстановите пароль
        </a>
      </p>
    </form>
  );
}

function InputEmail({ formObject }) {
  const { form, setForm } = formObject;
  const onChange = (e) => {
    setForm((currentState) => {
      const newState = {
        ...currentState,
        email: e.target.value,
      };
      return newState;
    });
  };

  return (
    <EmailInput
      onChange={onChange}
      value={form.email}
      name={"email"}
      isIcon={false}
    />
  );
}

function InputPassword({ formObject }) {
  const { form, setForm } = formObject;
  const onChange = (e) => {
    setForm((currentState) => {
      const newState = {
        ...currentState,
        password: e.target.value,
      };
      return newState;
    });
  };

  return (
    <PasswordInput
      onChange={onChange}
      value={form.password}
      name={"password"}
    />
  );
}
