import { FC } from "react";
import styles from "./not-found.module.css";

const RacketNotFound: FC = () => {
  return (
    <div className={styles.container}>
      <p className={styles.status}>404</p>
      <p className={styles["status-text"]}>Racket Not Found</p>
    </div>
  );
};

export default RacketNotFound;
