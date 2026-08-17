import { FC } from "react";
import NavLink from "../navLink/NavLink";
import styles from "./Header.module.css";

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>TENNIS STORE</h1>
      <nav className={styles.nav}>
        <NavLink href="/">Главная</NavLink>
        <NavLink href="/rackets">Ракетки</NavLink>
      </nav>
    </header>
  );
};

export default Header;
