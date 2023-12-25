import React from "react";
import styles from "./styles.module.scss";

const Input = (props) => {
  const { value, onChange, type = "text", placeholder } = props;
  return (
    <div className={styles["input-wrap"]}>
      <input
        className={styles["input"]}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default Input;
