import styles from "./auth.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Button,
  EmailInput,
} from "@ya.praktikum/react-developer-burger-ui-components";

function ForgotPasswordPage() {
  const [email, setEmail] = useState("");

  return (
    <main className={styles.main}>
      <ForgotPasswordForm emailState={{ email, setEmail }} />
    </main>
  );
}

function ForgotPasswordForm({ emailState }) {
  const { email } = emailState;
  const dispatch = useDispatch();
  const submitForm = (e) => {
    // e.preventDefault();
    // dispatch(register(email));
  };
  return (
    <form method="POST" action="/login">
      <h1 className="text text_type_main-medium">Восстановление пароля</h1>
      <div className="mt-6">
        <InputEmail emailState={emailState} />
      </div>
      <div className="mt-6">
        <Button
          htmlType="button"
          type="primary"
          size="large"
          onClick={submitForm}
        >
          Восстановить
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

function InputEmail({ emailState }) {
  const { email, setEmail } = emailState;
  const onChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <EmailInput
      onChange={onChange}
      placeholder={"Укажите e-mail"}
      value={email}
      name={"email"}
      isIcon={false}
    />
  );
}

export { ForgotPasswordPage };
