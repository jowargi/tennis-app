"use client";

import { useSidebarContext } from "@/hooks/useSidebarContext";
import { FC } from "react";
import Button from "../button/Button";

const SidebarToggle: FC = () => {
  const { isSidebarVisible, showSidebar, hideSidebar } = useSidebarContext();

  const toggleSidebar = (): void =>
    isSidebarVisible ? hideSidebar() : showSidebar();

  return (
    <Button onClick={toggleSidebar}>
      {isSidebarVisible ? <span>&#10006;</span> : <span>&#9776;</span>}
    </Button>
  );
};

export default SidebarToggle;
