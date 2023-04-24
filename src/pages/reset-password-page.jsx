import { Navigate, useLocation } from "react-router-dom";

// Components
import { ResetPasswordForm } from "../components/reset-password-form/reset-password-form";

export function ResetPasswordPage() {
  const location = useLocation();
  const { state } = location;
  if (!state?.hasAccess) {
    return <Navigate to={"/forgot-password"} />;
  }

  return (
    <main className={"auth_main"}>
      <ResetPasswordForm />
    </main>
  );
}
