import { useState } from "react";
import { ResetPasswordForm } from "../components/reset-password-form/reset-password-form";

export function ResetPasswordPage() {
  const [form, setForm] = useState({ password: "", code: "" });

  return (
    <main className={"auth_main"}>
      <ResetPasswordForm form={form} setForm={setForm} />
    </main>
  );
}
