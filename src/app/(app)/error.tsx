"use client";

import { FC } from "react";
import styles from "./error.module.css";
import Button from "@/components/button/Button";

interface AppErrorProps {
  error: Error & { digest?: string };
  retry: () => void;
}

const AppError: FC<AppErrorProps> = ({ error, retry }) => {
  return (
    <div className={styles.container}>
      <p className={styles.name}>{error.name}</p>
      <p className={styles.message}>{error.message}</p>
      <Button onClick={() => retry()}>Retry</Button>
    </div>
  );
};

export default AppError;
