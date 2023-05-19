import { useEffect } from "react";
import { useAppSelector } from "../services/hooks/hooks";
import { useNavigate } from "react-router-dom";

// Components
import { RegisterForm } from "../components/register-form/register-form";

export function RegisterPage(): JSX.Element {
  const { isLoggedIn } = useAppSelector((store) => store.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) return navigate("/");
  }, [navigate, isLoggedIn]);

  return (
    <main className={"auth_main"}>
      <RegisterForm />
    </main>
  );
}
