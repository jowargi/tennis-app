import { FC } from "react";
import NavLink from "../navLink/NavLink";
import styles from "./Header.module.css";
import AuthControls from "../authControls/AuthControls";

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>TENNIS STORE</h1>
      <div className={styles.container}>
        <nav className={styles.nav}>
          <NavLink href="/">Главная</NavLink>
          <NavLink href="/rackets">Ракетки</NavLink>
          <NavLink href="/rackets/top">Топ-10 ракеток</NavLink>
        </nav>
        <AuthControls />
      </div>
    </header>
  );
};

export default Header;
