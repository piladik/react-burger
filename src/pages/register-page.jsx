import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { RegisterForm } from "../components/register-form/register-form";

export function RegisterPage() {
  const { isLoggedIn } = useSelector((store) => store.auth);
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "", name: "" });

  useEffect(() => {
    if (isLoggedIn) return navigate("/");
  }, [navigate, isLoggedIn]);

  return (
    <main className={"auth_main"}>
      <RegisterForm form={form} setForm={setForm} />
    </main>
  );
}
