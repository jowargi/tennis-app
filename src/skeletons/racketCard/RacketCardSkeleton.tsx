import { FC } from "react";
import styles from "./RacketCardSkeleton.module.css";

const RacketCardSkeleton: FC = function () {
  return (
    <div className={styles.container}>
      <div className={styles.img} />
      <p className={styles.text} />
    </div>
  );
};

export default RacketCardSkeleton;
