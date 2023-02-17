import {
  Button,
  EmailInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, useNavigate } from "react-router-dom";
import { resetPasswordRequest } from "../../utils/burger-api";

export function ForgotPasswordForm({ email, setEmail }) {
  const navigate = useNavigate();
  const onChange = (e) => {
    setEmail(e.target.value);
  };

  const handleReset = async () => {
    await resetPasswordRequest(email)
      .then((res) => {
        if (res.success) return navigate("/reset-password");
        if (!res.success) return Promise.reject(res);
      })
      .catch((err) => Promise.reject(err));
  };
  return (
    <form>
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
        <Button
          htmlType="button"
          type="primary"
          size="large"
          onClick={handleReset}
        >
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
