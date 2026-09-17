import { FC } from "react";
import ResponsiveBar from "../responsiveBar/ResponsiveBar";
import styles from "./Header.module.css";

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>TENNIS STORE</h1>
      <ResponsiveBar />
    </header>
  );
};

export default Header;
