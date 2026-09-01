"use client";

import { FC, useActionState, useEffect } from "react";
import { loginAction, LoginActionState } from "./login-action";
import styles from "./page.module.css";
import AuthForm from "@/components/authForm/AuthForm";

const LoginPage: FC<PageProps<"/login">> = () => {
  const [state, formAction, isPending] = useActionState<
    LoginActionState,
    FormData
  >(loginAction, {});

  const { error, redirectTo } = state;

  useEffect((): void => {
    if (redirectTo) {
      window.location.assign(redirectTo);
    }
  }, [redirectTo]);

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Вход</h3>
      <AuthForm action={formAction} disabled={isPending} />
      {error && <p className={styles.error}>Неверный логин или пароль</p>}
    </div>
  );
};

export default LoginPage;
