"use client";

import { useAuthorizedUserContext } from "@/hooks/useAuthorizedUserContext";
import { FC } from "react";
import styles from "./page.module.css";

const AdminPage: FC<PageProps<"/admin">> = () => {
  const user = useAuthorizedUserContext();

  if (!user?.isAdmin) return null;

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Панель управления</h2>
      <p className={styles.text}>С возвращением, {user.login}!</p>
    </section>
  );
};

export default AdminPage;
