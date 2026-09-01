import { Metadata } from "next";
import { FC } from "react";
import styles from "./layout.module.css";
import { getUser } from "@/services/getUser";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Аутентификация",
  description: "Вход в личный кабинет или регистрация нового аккаунта.",
};

const AuthLayout: FC<LayoutProps<"/">> = async ({ children }) => {
  const { data: user } = await getUser();

  if (user) redirect("/");

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Учетная запись</h2>
      {children}
    </section>
  );
};

export default AuthLayout;
