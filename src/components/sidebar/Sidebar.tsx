"use client";

import { FC, useEffect } from "react";
import NavLink from "../navLink/NavLink";
import styles from "./Sidebar.module.css";
import { useSidebarContext } from "@/hooks/useSidebarContext";
import AuthControls from "../authControls/AuthControls";

const Sidebar: FC = () => {
  const { isSidebarVisible, hideSidebar } = useSidebarContext();

  useEffect((): (() => void) => {
    const onResize = (): void => {
      const windowWidth = document.documentElement.clientWidth;

      if (windowWidth > 970) hideSidebar();
    };

    onResize();

    window.addEventListener("resize", onResize);

    return (): void => {
      window.removeEventListener("resize", onResize);
    };
  }, [hideSidebar]);

  return isSidebarVisible ? (
    <aside className={styles.aside}>
      <AuthControls />
      <nav className={styles.nav}>
        <NavLink href="/">Главная</NavLink>
        <NavLink href="/rackets">Ракетки</NavLink>
        <NavLink href="/rackets/top">Топ-10 ракеток</NavLink>
      </nav>
    </aside>
  ) : null;
};

export default Sidebar;
