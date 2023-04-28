import { useDispatch } from "react-redux";

// Components
import {
  Button,
  PasswordInput,
  EmailInput,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";

// ACTIONS-REDUCERS
import { register } from "../../services/actions/auth";

// Utils
import useForm from "../../hooks/useForm";
import React from "react";

export function RegisterForm(): JSX.Element {
  const [form, handleChange] = useForm({ email: "", password: "", name: "" });
  const dispatch = useDispatch();
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleChange(e);
  };

  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    //@ts-ignore хранилище не типизировано
    dispatch(register(form));
  };
  return (
    <form onSubmit={onSubmit}>
      <h1 className="text text_type_main-medium">Регистрация</h1>
      <div className="mt-6">
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
      </div>
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
        <Button
          htmlType="submit"
          type="primary"
          size="large"
          onClick={onSubmit}
        >
          Зарегистрироваться
        </Button>
      </div>
      <p className="mt-20 text text_type_main-default text_color_inactive">
        Уже зарегистрированы?{" "}
        <a className={"auth_link"} href="/login">
          Войти
        </a>
      </p>
    </form>
  );
}
