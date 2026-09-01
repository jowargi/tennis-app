"use client";

import { FC, HTMLInputTypeAttribute } from "react";
import styles from "./InputField.module.css";

interface InputFieldProps {
  type?: HTMLInputTypeAttribute;
  id?: string;
  name?: string;
  required?: boolean;
  labelText: string;
}

const InputField: FC<InputFieldProps> = ({
  type,
  id,
  name,
  required,
  labelText,
}) => {
  return (
    <div className={styles.field}>
      <label htmlFor={id} className={styles.label}>
        {labelText}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        required={required}
        className={styles.input}
      />
    </div>
  );
};

export default InputField;
