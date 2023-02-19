import { useState } from "react";

// Components
import { LoginForm } from "../components/login-form/login-form";

export function LoginPage() {
  const [form, setForm] = useState({ email: "", password: "" });

  return (
    <main className={"auth_main"}>
      <LoginForm form={form} setForm={setForm} />
    </main>
  );
}
