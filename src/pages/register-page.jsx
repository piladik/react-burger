import { useState } from "react";

import styles from "./auth.module.css";

import { RegisterForm } from "../components/register-form/register-form";

export function RegisterPage() {
  const [form, setForm] = useState({ email: "", password: "", name: "" });

  return (
    <main className={"auth_main"}>
      <RegisterForm form={form} setForm={setForm} />
    </main>
  );
}