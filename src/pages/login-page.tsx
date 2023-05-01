// Components
import { LoginForm } from "../components/login-form/login-form";

export function LoginPage(): JSX.Element {
  return (
    <main className={"auth_main"}>
      <LoginForm />
    </main>
  );
}
