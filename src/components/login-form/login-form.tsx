import { useAppDispatch } from "../../services/hooks/hooks";

// Components
import {
  Button,
  PasswordInput,
  EmailInput,
} from "@ya.praktikum/react-developer-burger-ui-components";

// Utils
import { login } from "../../services/slices/auth";
import useForm from "../../hooks/useForm";
import React from "react";

export function LoginForm() {
  const { form, handleChange } = useForm({ email: "", password: "" });
  const dispatch = useAppDispatch();
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleChange(e);
  };
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(login(form));
  };
  return (
    <form onSubmit={onSubmit}>
      <h1 className="text text_type_main-medium">Вход</h1>
      <div className="mt-6">
        <EmailInput
          onChange={onChange}
          value={form.email}
          name={"email"}
          isIcon={false}
        />
      </div>
      <div className="mt-6">
        <PasswordInput
          onChange={onChange}
          value={form.password}
          name={"password"}
        />
      </div>
      <div className="mt-6">
        <Button htmlType="submit" type="primary" size="large">
          Войти
        </Button>
      </div>
      <p className="mt-20 text text_type_main-default text_color_inactive">
        Вы новый пользователь?{" "}
        <a className={"auth_link"} href="/register">
          Зарегистрироваться
        </a>
      </p>
      <p className="mt-4 text text_type_main-default text_color_inactive">
        Забыли пароль?{" "}
        <a className={"auth_link"} href="/forgot-password">
          Восстановите пароль
        </a>
      </p>
    </form>
  );
}
