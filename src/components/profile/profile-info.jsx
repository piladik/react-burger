import {
  EmailInput,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./profile.module.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "../../services/actions/auth";

export function ProfileInfo() {
  const { user } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const [showButtons, setShowButtons] = useState(false);
  const [passwordChanged, setPasswordChanged] = useState(false);
  const [form, setForm] = useState({
    name: user.username,
    email: user.email,
    password: "12345678",
  });

  const onChange = (e) => {
    if (e.target.name === "password") {
      setPasswordChanged(true);
    }
    setForm((currentState) => {
      const newState = {
        ...currentState,
        [e.target.name]: e.target.value,
      };
      return newState;
    });
    setShowButtons(true);
  };

  const handleCancel = () => {
    setForm({
      name: user.username,
      email: user.email,
      password: "********",
    });
    setShowButtons(false);
    setPasswordChanged(false);
  };

  const handleSubmit = () => {
    if (!passwordChanged) {
      dispatch(updateUser({ name: form.name, email: form.email }));
    } else {
      dispatch(updateUser(form));
    }
    setShowButtons(false);
    setPasswordChanged(false);
  };

  return (
    <form className={styles.profile_info}>
      <div>
        <EmailInput
          value={form.name}
          name={"name"}
          placeholder="Имя"
          isIcon={true}
          error={false}
          onChange={onChange}
        />
      </div>
      <div className="mt-6">
        <EmailInput
          value={form.email}
          name={"email"}
          placeholder="Логин"
          isIcon={true}
          onChange={onChange}
        />
      </div>
      <div className="mt-6 mb-6">
        <PasswordInput
          value={form.password}
          name={"password"}
          icon="EditIcon"
          onChange={onChange}
        />
      </div>
      {showButtons && (
        <div>
          <Button
            htmlType="button"
            type="secondary"
            size="medium"
            onClick={handleCancel}
          >
            Отмена
          </Button>
          <Button
            htmlType="button"
            type="primary"
            size="medium"
            onClick={handleSubmit}
          >
            Сохранить
          </Button>
        </div>
      )}
    </form>
  );
}
