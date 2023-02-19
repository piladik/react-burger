import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

// Components
import {
  Button,
  PasswordInput,
  EmailInput,
} from "@ya.praktikum/react-developer-burger-ui-components";

// Utils
import { login } from "../../services/actions/auth";

export function LoginForm({ form, setForm }) {
  const dispatch = useDispatch();
  const onChange = (e) => {
    setForm((currentState) => {
      const newState = {
        ...currentState,
        [e.target.name]: e.target.value,
      };
      return newState;
    });
  };
  const onSubmit = () => {
    console.log(form);
    dispatch(login(form));
  };
  return (
    <form>
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
        <Button
          htmlType="button"
          type="primary"
          size="large"
          onClick={onSubmit}
        >
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

LoginForm.propTypes = {
  form: PropTypes.shape({
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
  }),
  setForm: PropTypes.func.isRequired,
};
