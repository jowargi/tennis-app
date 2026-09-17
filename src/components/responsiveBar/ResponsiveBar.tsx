"use client";

import { withResponsiveVisibility } from "@/hocs/withResponsiveVisibility";
import Topbar from "../topbar/Topbar";
import SidebarToggle from "../sidebarToggle/SidebarToggle";

const ResponsiveBar = withResponsiveVisibility({
  DesktopComponent: Topbar,
  MobileComponent: SidebarToggle,
  breakpointWidth: 970,
});

export default ResponsiveBar;
