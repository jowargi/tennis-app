import { FC } from "react";
import styles from "./not-found.module.css";

const NotFound: FC = () => {
  return (
    <div className={styles.container}>
      <p className={styles.status}>404</p>
      <p className={styles["status-text"]}>This page could not be found</p>
    </div>
  );
};

export default NotFound;
