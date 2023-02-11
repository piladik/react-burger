import styles from "./auth.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Button,
  PasswordInput,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";

function ResetPasswordPage() {
  const [form, setForm] = useState({ password: "", code: "" });

  return (
    <main className={styles.main}>
      <ResetPasswordForm formObject={{ form, setForm }} />
    </main>
  );
}

function ResetPasswordForm({ formObject }) {
  const { form } = formObject;
  const dispatch = useDispatch();
  const submitForm = (e) => {
    // e.preventDefault();
    // dispatch(register(form));
  };
  return (
    <form method="POST" action="/login">
      <h1 className="text text_type_main-medium">Восстановление пароля</h1>
      <div className="mt-6">
        <InputPassword formObject={formObject} />
      </div>
      <div className="mt-6">
        <InputCode formObject={formObject} />
      </div>
      <div className="mt-6">
        <Button
          htmlType="button"
          type="primary"
          size="large"
          onClick={submitForm}
        >
          Сохранить
        </Button>
      </div>
      <p className="mt-20 text text_type_main-default text_color_inactive">
        Вспомнили пароль?{" "}
        <a className={styles.link} href="/login">
          Войти
        </a>
      </p>
    </form>
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
      placeholder={"Введите новый пароль"}
    />
  );
}

function InputCode({ formObject }) {
  const { form, setForm } = formObject;
  const onChange = (e) => {
    setForm((currentState) => {
      const newState = {
        ...currentState,
        code: e.target.value,
      };
      return newState;
    });
  };

  return (
    <Input
      type={"text"}
      placeholder={"Введите код из письма"}
      onChange={onChange}
      value={form.code}
      name={"code"}
      error={false}
      errorText={"Ошибка"}
      size={"default"}
    />
  );
}

export { ResetPasswordPage };
