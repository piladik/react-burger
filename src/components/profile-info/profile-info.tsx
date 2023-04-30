import React, { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "../../services/actions/auth";
import { RootState } from "../../services/reducers";

// Styles
import styles from "./profile-info.module.css";

// Components
import {
  Input,
  EmailInput,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";

// Utils
import useForm from "../../hooks/useForm";

export function ProfileInfo(): JSX.Element {
  const { user } = useSelector((store: RootState) => store.auth);
  const dispatch = useDispatch();
  const [showButtons, setShowButtons] = useState(false);
  const [passwordChanged, setPasswordChanged] = useState(false);
  const { form, handleChange, setForm } = useForm({
    name: user.username,
    email: user.email,
    password: "12345678",
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "password") {
      setPasswordChanged(true);
    }
    handleChange(e);
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!passwordChanged) {
      //@ts-ignore хранилище не типизировано
      dispatch(updateUser({ name: form.name, email: form.email }));
    } else {
      //@ts-ignore хранилище не типизировано
      dispatch(updateUser(form));
    }
    setShowButtons(false);
    setPasswordChanged(false);
  };

  const [inputIsActive, setInputIsActive] = useState(false);

  const inputRef = useRef<HTMLInputElement | null>(null);
  const onIconClick = () => {
    setTimeout(() => inputRef.current!.focus(), 0);
    setInputIsActive(true);
  };

  return (
    <form className={styles.profile_info} onSubmit={handleSubmit}>
      <div>
        <Input
          value={form.name}
          name={"name"}
          placeholder="Имя"
          icon="EditIcon"
          error={false}
          onChange={onChange}
          onIconClick={onIconClick}
          onBlur={() => setInputIsActive(false)}
          disabled={inputIsActive ? false : true}
          ref={inputRef}
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
          <Button htmlType="submit" type="primary" size="medium">
            Сохранить
          </Button>
        </div>
      )}
    </form>
  );
}
