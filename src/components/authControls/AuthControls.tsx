"use client";

import { FC } from "react";
import NavLink from "../navLink/NavLink";
import styles from "./AuthControls.module.css";
import LogoutButton from "../logoutButton/LogoutButton";
import { AuthorizedComponentProps, withAuth } from "@/hocs/withAuth";

const AuthorizedComponent: FC<AuthorizedComponentProps> = ({
  authorizedUser,
}) => {
  return (
    <div className={styles.container}>
      <p className={styles.login}>{authorizedUser.login}</p>
      <LogoutButton />
    </div>
  );
};

const UnauthorizedComponent: FC = () => {
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <NavLink href="/login">Вход</NavLink>
        <NavLink href="/register">Регистрация</NavLink>
      </nav>
    </div>
  );
};

const AuthControls = withAuth({
  AuthorizedComponent,
  UnauthorizedComponent,
});

export default AuthControls;
