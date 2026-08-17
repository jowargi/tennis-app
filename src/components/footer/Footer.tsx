import { FC } from "react";
import styles from "./Footer.module.css";

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.copyright}>Copyright © 2026 Tennis Store</p>
      <address className={styles.address}>Moscow, Russia</address>
    </footer>
  );
};

export default Footer;
