"use client";

import React, { createContext, FC, useCallback, useState } from "react";

export interface SidebarContextValue {
  isSidebarVisible: boolean;
  showSidebar: () => void;
  hideSidebar: () => void;
}

export const SidebarContext = createContext<SidebarContextValue>({
  isSidebarVisible: false,
  showSidebar: (): void => {},
  hideSidebar: (): void => {},
});

const SidebarContextProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isSidebarVisible, setIsSidebarVisible] = useState<boolean>(false);

  const showSidebar = useCallback((): void => setIsSidebarVisible(true), []);
  const hideSidebar = useCallback((): void => setIsSidebarVisible(false), []);

  return (
    <SidebarContext.Provider
      value={{ isSidebarVisible, showSidebar, hideSidebar }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarContextProvider;
