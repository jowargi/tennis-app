"use client";

import classNames from "classnames";
import React, { FC, MouseEventHandler } from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  children: React.ReactNode;
  type?: "submit" | "reset" | "button";
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  borderRadius?: "square" | "rounded";
  fontSize?: "xs" | "s" | "m" | "l" | "xl";
}

const Button: FC<ButtonProps> = ({
  children,
  type = "button",
  disabled,
  onClick,
  borderRadius = "square",
  fontSize = "m",
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={classNames(
        styles.button,
        styles[`button--${disabled ? "disabled" : "active"}`],
        styles[`button--border-radius-${borderRadius}`],
        styles[`button--font-size-${fontSize}`],
      )}
    >
      {children}
    </button>
  );
};

export default Button;
