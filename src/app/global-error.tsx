"use client";

import "./reset.css";
import "./globals.css";
import "./main.css";
import { Open_Sans } from "next/font/google";
import { FC } from "react";
import styles from "./global-error.module.css";
import Button from "@/components/button/Button";

interface GlobalErrorProps {
  error: Error & { digest?: string };
  retry: () => void;
}

const openSans = Open_Sans({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-open-sans",
});

const GlobalError: FC<GlobalErrorProps> = ({ error, retry }) => {
  return (
    <html lang="en" className={openSans.className}>
      <body>
        <div className={styles.container}>
          <p className={styles.name}>{error.name}</p>
          <p className={styles.message}>{error.message}</p>
          <Button onClick={() => retry()}>Retry</Button>
        </div>
      </body>
    </html>
  );
};

export default GlobalError;
