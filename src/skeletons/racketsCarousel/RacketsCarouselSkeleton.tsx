import { FC } from "react";
import styles from "./RacketsCarouselSkeleton.module.css";

const RacketsCarouselSkeleton: FC = function () {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h3 className={styles.title} />
        <nav className={styles.nav} />
      </div>
      <ul className={styles.list} />
    </div>
  );
};

export default RacketsCarouselSkeleton;
