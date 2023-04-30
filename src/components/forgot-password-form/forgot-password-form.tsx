import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";

// Components
import {
  Button,
  EmailInput,
} from "@ya.praktikum/react-developer-burger-ui-components";

// Utils
import { resetPasswordRequest } from "../../utils/burger-api";

export function ForgotPasswordForm() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await resetPasswordRequest<{ success: boolean }>(email)
      .then((res) => {
        if (res.success)
          return navigate("/reset-password", { state: { hasAccess: true } });
        if (!res.success) return Promise.reject(res);
      })
      .catch((err) => Promise.reject(err));
  };
  return (
    <form onSubmit={onSubmit}>
      <h1 className="text text_type_main-medium">Восстановление пароля</h1>
      <div className="mt-6">
        <EmailInput
          onChange={onChange}
          placeholder={"Укажите e-mail"}
          value={email}
          name={"email"}
          isIcon={false}
        />
      </div>
      <div className="mt-6">
        <Button htmlType="submit" type="primary" size="large">
          Восстановить
        </Button>
      </div>
      <p className="mt-20 text text_type_main-default text_color_inactive">
        Вспомнили пароль?{" "}
        <Link className={"auth_link"} to={"/login"}>
          Войти
        </Link>
      </p>
    </form>
  );
}
