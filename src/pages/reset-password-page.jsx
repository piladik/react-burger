import { useState } from "react";
import { ResetPasswordForm } from "../components/reset-password-form/reset-password-form";
import { Navigate, useLocation } from "react-router-dom";

export function ResetPasswordPage() {
  const [form, setForm] = useState({ password: "", token: "" });
  const location = useLocation();
  const { state } = location;
  if (!state?.hasAccess) {
    return <Navigate to={"/forgot-password"} />;
  }

  return (
    <main className={"auth_main"}>
      <ResetPasswordForm form={form} setForm={setForm} />
    </main>
  );
}
