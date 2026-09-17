"use client";

import { FC, useEffect, useRef, useState } from "react";

export const withResponsiveVisibility = <P extends object>({
  DesktopComponent,
  MobileComponent,
  desktopEffects,
  mobileEffects,
  breakpointWidth,
}: {
  DesktopComponent?: FC<P>;
  MobileComponent?: FC<P>;
  /* eslint-disable @typescript-eslint/no-explicit-any */
  desktopEffects?: (() => any)[];
  mobileEffects?: (() => any)[];
  /* eslint-enable @typescript-eslint/no-explicit-any */
  breakpointWidth: number;
}): FC<P> => {
  return function WithResponsiveVisibility(props: P) {
    const [isDesktopView, setIsDesktopView] = useState<boolean>(true);

    const isDesktopViewRef = useRef<boolean>(null!);

    isDesktopViewRef.current = isDesktopView;

    useEffect((): (() => void) => {
      const onResize = (): void => {
        const windowWidth = document.documentElement.clientWidth;
        const isDesktopView = isDesktopViewRef.current;

        if (windowWidth <= breakpointWidth && isDesktopView) {
          setIsDesktopView(false);

          if (mobileEffects?.length)
            mobileEffects.forEach(
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              (effect: () => any): ReturnType<typeof effect> => effect(),
            );
        } else if (windowWidth > breakpointWidth && !isDesktopView) {
          setIsDesktopView(true);

          if (desktopEffects?.length)
            desktopEffects.forEach(
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              (effect: () => any): ReturnType<typeof effect> => effect(),
            );
        }
      };

      onResize();

      window.addEventListener("resize", onResize);

      return (): void => {
        window.removeEventListener("resize", onResize);
      };
    }, []);

    if (isDesktopView)
      return DesktopComponent ? <DesktopComponent {...props} /> : null;

    return MobileComponent ? <MobileComponent {...props} /> : null;
  };
};
