import { FC } from "react";
import styles from "./layout.module.css";

const RacketsLayout: FC<LayoutProps<"/rackets">> = ({ children }) => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Ракетки</h2>
      {children}
    </section>
  );
};

export default RacketsLayout;
