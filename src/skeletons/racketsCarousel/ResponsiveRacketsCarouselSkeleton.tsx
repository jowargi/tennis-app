"use client";

import { withResponsiveVisibility } from "@/hocs/withResponsiveVisibility";
import RacketsCarouselSkeleton from "./RacketsCarouselSkeleton";

const ResponsiveRacketsCarouselSkeleton = withResponsiveVisibility({
  DesktopComponent: RacketsCarouselSkeleton,
  breakpointWidth: 480,
});

export default ResponsiveRacketsCarouselSkeleton;
