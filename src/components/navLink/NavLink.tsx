"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { FC } from "react";
import styles from "./NavLink.module.css";
import classNames from "classnames";

interface NavLinkProps {
  children: React.ReactNode;
  href: string;
  prefetch?: boolean | "auto" | null;
  borderRadius?: "square" | "rounded";
  fontSize?: "xs" | "s" | "m" | "l" | "xl";
}

const NavLink: FC<NavLinkProps> = ({
  children,
  href,
  prefetch = false,
  borderRadius = "square",
  fontSize = "m",
}) => {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      prefetch={prefetch}
      className={classNames(
        styles.link,
        styles[`link--${href === pathname ? "active" : "disabled"}`],
        styles[`link--border-radius-${borderRadius}`],
        styles[`link--font-size-${fontSize}`],
      )}
    >
      {children}
    </Link>
  );
};

export default NavLink;
