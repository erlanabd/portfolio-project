import { clsx } from "clsx";
import React from "react";
import styles from "./styles.module.scss";

const Input = (props) => {
  const { value, onChange, type = "text", placeholder, theme } = props;
  const inputClasses = clsx(styles["input"], {
    [styles["input-dark"]]: theme === "dark",
  });
  return (
    <div className={styles["input-wrap"]}>
      <input
        className={inputClasses}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default Input;
