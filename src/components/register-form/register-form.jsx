import {
  Button,
  PasswordInput,
  EmailInput,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch } from "react-redux";
import { register } from "../../services/actions/auth";

export function RegisterForm({ form, setForm }) {
  const dispatch = useDispatch();
  const onChange = (e) => {
    setForm((currentState) => {
      const newState = {
        ...currentState,
        [e.target.name]: e.target.value,
      };
      return newState;
    });
    console.log(form);
  };

  const onSubmit = () => {
    dispatch(register(form));
  };
  return (
    <form>
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
          htmlType="button"
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
