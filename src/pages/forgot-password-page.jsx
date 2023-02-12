import { useState } from "react";
import { ForgotPasswordForm } from "../components/forgot-password-form/forgot-password-form";

export function ForgotPasswordPage() {
  const [email, setEmail] = useState("");

  return (
    <main className={"auth_main"}>
      <ForgotPasswordForm email={email} setEmail={setEmail} />
    </main>
  );
}
