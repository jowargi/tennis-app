import {
  SidebarContext,
  SidebarContextValue,
} from "@/providers/SidebarContextProvider";
import { useContext } from "react";

export const useSidebarContext = (): SidebarContextValue =>
  useContext(SidebarContext);
