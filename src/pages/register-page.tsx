import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../services/reducers";

// Components
import { RegisterForm } from "../components/register-form/register-form";

export function RegisterPage(): JSX.Element {
  const { isLoggedIn } = useSelector((store: RootState) => store.auth);
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
