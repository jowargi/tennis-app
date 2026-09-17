import { FC } from "react";
import NavLink from "../navLink/NavLink";
import styles from "./Topbar.module.css";
import AuthControls from "../authControls/AuthControls";

const Topbar: FC = () => {
  return (
    <div className={styles.container}>
      <AuthControls />
      <nav className={styles.nav}>
        <NavLink href="/">Главная</NavLink>
        <NavLink href="/rackets">Ракетки</NavLink>
        <NavLink href="/rackets/top">Топ-10 ракеток</NavLink>
      </nav>
    </div>
  );
};

export default Topbar;
