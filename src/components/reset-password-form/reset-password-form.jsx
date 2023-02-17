import {
  Button,
  PasswordInput,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, useNavigate } from "react-router-dom";
import { resetPasswordConfirm } from "../../utils/burger-api";

export function ResetPasswordForm({ form, setForm }) {
  const navigate = useNavigate();
  const onChange = (e) => {
    setForm((currentState) => {
      const newState = {
        ...currentState,
        [e.target.name]: e.target.value,
      };
      return newState;
    });
  };

  const handleSave = async () => {
    resetPasswordConfirm(form)
      .then((res) => {
        if (res.success) return navigate("/login");
        if (!res.success) return Promise.reject(res);
      })
      .catch((err) => Promise.reject(err));
  };
  return (
    <form method="POST" action="/login">
      <h1 className="text text_type_main-medium">Восстановление пароля</h1>
      <div className="mt-6">
        <PasswordInput
          onChange={onChange}
          value={form.password}
          name={"password"}
          placeholder={"Введите новый пароль"}
        />
      </div>
      <div className="mt-6">
        <Input
          type={"text"}
          placeholder={"Введите код из письма"}
          onChange={onChange}
          value={form.code}
          name={"token"}
          error={false}
          errorText={"Ошибка"}
          size={"default"}
        />
      </div>
      <div className="mt-6">
        <Button
          htmlType="button"
          type="primary"
          size="large"
          onClick={handleSave}
        >
          Сохранить
        </Button>
      </div>
      <p className="mt-20 text text_type_main-default text_color_inactive">
        Вспомнили пароль?{" "}
        <Link className={"auth_link"} to="/login">
          Войти
        </Link>
      </p>
    </form>
  );
}
