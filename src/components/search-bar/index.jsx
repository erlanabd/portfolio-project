import React from "react";
import Input from "../input";
import styles from "./styles.module.scss";

const SearchBar = (props) => {
  const { placeholder = "Search...", value, onChange, type, title } = props;
  return (
    <div className={styles["search-bar"]}>
      <h2 className={styles["title"]}>{title}</h2>
      <Input
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        type={type}
      />
    </div>
  );
};

export default SearchBar;
