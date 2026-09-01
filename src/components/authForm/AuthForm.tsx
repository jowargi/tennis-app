"use client";

import { FC } from "react";
import Button from "../button/Button";
import InputField from "../inputField/InputField";
import styles from "./AuthForm.module.css";

interface AuthFormProps {
  action?: string | ((formData: FormData) => void | Promise<void>);
  disabled?: boolean | undefined;
}

const AuthForm: FC<AuthFormProps> = ({ action, disabled }) => {
  return (
    <form action={action} className={styles.form}>
      <InputField
        type="text"
        id="log"
        name="login"
        required={true}
        labelText="Логин"
      />
      <InputField
        type="password"
        id="pswd"
        name="password"
        required={true}
        labelText="Пароль"
      />
      <div className={styles.controls}>
        <Button type="submit" disabled={disabled}>
          Отправить
        </Button>
        <Button type="reset" disabled={disabled}>
          Сбросить
        </Button>
      </div>
    </form>
  );
};

export default AuthForm;
