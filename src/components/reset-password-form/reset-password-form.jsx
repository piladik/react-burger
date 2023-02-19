import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";

// Components
import {
  Button,
  PasswordInput,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";

// Utils
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

  const onSubmit = async (e) => {
    e.preventDefault();
    resetPasswordConfirm(form)
      .then((res) => {
        if (res.success) return navigate("/login");
        if (!res.success) return Promise.reject(res);
      })
      .catch((err) => Promise.reject(err));
  };
  return (
    <form onSubmit={onSubmit}>
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
        <Button htmlType="submit" type="primary" size="large">
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

ResetPasswordForm.propTypes = {
  form: PropTypes.shape({
    password: PropTypes.string.isRequired,
    token: PropTypes.string.isRequired,
  }),
};
