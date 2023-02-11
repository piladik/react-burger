import {
  Input,
  Button,
  PasswordInput,
  EmailInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useState } from "react";
import { useDispatch } from "react-redux";

import styles from "./auth.module.css";

import { register } from "../services/actions/auth";

function RegisterPage() {
  const [form, setForm] = useState({ email: "", password: "", name: "" });

  return (
    <main className={styles.main}>
      <RegisterForm formObject={{ form, setForm }} />
    </main>
  );
}

export { RegisterPage };

function RegisterForm({ formObject }) {
  const { form } = formObject;
  const dispatch = useDispatch();
  const submitForm = (e) => {
    e.preventDefault();
    dispatch(register(form));
  };
  return (
    <form method="POST" action="/login">
      <h1 className="text text_type_main-medium">Регистрация</h1>
      <div className="mt-6">
        <InputName formObject={formObject} />
      </div>
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
        Уже зарегистрированы?{" "}
        <a className={styles.link} href="/login">
          Войти
        </a>
      </p>
    </form>
  );
}

function InputName({ formObject }) {
  const { form, setForm } = formObject;
  const onChange = (e) => {
    setForm((currentState) => {
      const newState = {
        ...currentState,
        name: e.target.value,
      };
      return newState;
    });
  };

  return (
    <Input
      type={"text"}
      placeholder={"Имя"}
      onChange={onChange}
      value={form.name}
      name={"name"}
      error={false}
      errorText={"Ошибка"}
      size={"default"}
    />
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
