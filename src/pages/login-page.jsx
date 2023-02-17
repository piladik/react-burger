import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { LoginForm } from "../components/login-form/login-form";

export function LoginPage() {
  const { isLoggedIn } = useSelector((store) => store.auth);
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });

  useEffect(() => {
    if (isLoggedIn) return navigate("/");
  }, [navigate, isLoggedIn]);

  return (
    <main className={"auth_main"}>
      <LoginForm form={form} setForm={setForm} />
    </main>
  );
}
